'use strict';

const config = require('config').db;
const debug = require('debug-logger')('youtube-video:backend:models');
const fs = require('fs');
const path = require('path');
const retry = require('retry-as-promised');

const Sequelize = require('sequelize');

const Promise = require('bluebird');

const modelsPath = path.join(__dirname, '..', 'datamodels');

const sequelize = new Sequelize(
  config.name,
  config.username,
  config.password,
  config.options
);

const models = {
  connect,
  sequelize,
  Sequelize,
};

(function init() {
  debug('Loading models on ', modelsPath);
  readFolders().forEach(loadModel);
  associate();
  debug('Models loaded');
})();

function readFolders(root = modelsPath) {
  return fs
    .readdirSync(root)
    .map(dir => path.join(root, dir))
    .filter(dir => fs.statSync(dir).isDirectory());
}

function loadModel(dir) {
  searchFiles(dir, '.model.js').forEach(file => {
    debug(`Reading model from ${file}`);
    const model = sequelize.import(file);
    models[model.name] = model;
  });
}

function searchFiles(dir, pattern) {
  return fs
    .readdirSync(dir)
    .filter(file => file.indexOf(pattern) !== -1)
    .map(file => path.join(dir, file));
}

function associate() {
  Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models);
    }
  });
}

async function connect() {
  await retry(async (opts = {}) => {
    debug(
      `Trying to connect to [${config.options.dialect}/${config.name}] database at [${config.options.host}]... [${opts.current}]`
    );
    debug.log(
      `host:${config.options.host}; dialect:${config.options.dialect}; username:${config.username}; password:${config.password}; name:${config.name}`
    );
    try {
      debug.log('Will authenticate');
      await models.sequelize.authenticate();
      debug.log('Authenticated successfully');
      await models.sequelize.sync({ force: false, alter: true });
      debug('Sequelize sync');
    } catch (error) {
      debug.log('Error on sequelize database connection:', error);
      throw error;
    }
  }, config.retry.max);
  debug('Connection has been established successfully');
}

const create = async dataSet => {
  await models.sequelize.sync({ force: false });
  await Promise.each(dataSet, async item => {
    await Promise.each(item.data, data => {
      models[item.model].create(data);
    });
  });
};

const drop = async (dataSet = []) => {
  dataSet.length > 0
    ? await Promise.each(dataSet, item => {
        models[item.model].drop();
      })
    : await models.sequelize.drop();
};

const modules = {
  create,
  drop,
  models,
};

module.exports = modules;

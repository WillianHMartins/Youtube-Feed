'use strict';

const { eachDayOfInterval, format, parseISO } = require('date-fns');

const DATE_FORMAT = 'dd/MM/yyyy';
const DATE_HOUR_FORMAT = `${DATE_FORMAT} HH:mm`;
const EMPTY_DATE_FORMAT = '--/--/----';
const EMPTY_DATE_HOUR_FORMAT = `${EMPTY_DATE_FORMAT} --:--`;

const doFormat = (date, dateFormat, dateHour = true) => {
  if (!date) {
    return dateHour ? EMPTY_DATE_HOUR_FORMAT : EMPTY_DATE_FORMAT;
  }
  if (date && typeof date === 'string') {
    return format(parseISO(date), dateFormat);
  }
  return format(date, dateFormat);
};

const formatDateHour = date => {
  return doFormat(date, DATE_HOUR_FORMAT);
};

const formatDate = date => {
  return doFormat(date, DATE_FORMAT, false);
};

const getDaysInPeriod = period => {
  const { startDate, endDate } = period;
  console.log(startDate);
  console.log(endDate);
  if (!(startDate && endDate)) {
    return [];
  }

  const datesInPeriod = eachDayOfInterval({
    start:
      startDate && typeof startDate === 'string'
        ? new Date(startDate)
        : startDate,
    end: endDate && typeof endDate === 'string' ? new Date(endDate) : endDate,
  });

  return datesInPeriod.map(periodDate => doFormat(periodDate, 'dd/MM/yyyy'));
};

const datetime = {
  formatDate,
  formatDateHour,
  getDaysInPeriod,
};

module.exports = datetime;

const { formatDate, formatDateHour } = require('.');

describe('formatDate', () => {
  it('should return formatted date for input string', () => {
    const date = '2019-06-28T08:30:51.000Z';
    const formattedDate = formatDate(date);

    expect(formattedDate).toStrictEqual('28/06/2019');
  });

  it('should return formatted date for input date', () => {
    const date = new Date(96, 8, 13);
    const formattedDate = formatDate(date);

    expect(formattedDate).toStrictEqual('13/09/1996');
  });

  it('should return --/--/---- in case of empty', () => {
    const date = '';
    const formattedDate = formatDate(date);

    expect(formattedDate).toStrictEqual('--/--/----');
  });

  it('should return --/--/---- in case of null', () => {
    const date = null;
    const formattedDate = formatDate(date);

    expect(formattedDate).toStrictEqual('--/--/----');
  });

  it('should return --/--/---- in case of undefined', () => {
    const date = undefined;
    const formattedDate = formatDate(date);

    expect(formattedDate).toStrictEqual('--/--/----');
  });

  it('should return formatted date for input string', () => {
    const date = '2019-06-28T08:30:51.000Z';
    const formattedDate = formatDateHour(date);

    expect(formattedDate).toStrictEqual('28/06/2019 05:30');
  });

  it('should return formatted date and hour for the given Date', () => {
    const date = new Date(96, 8, 13, 12, 34, 37);
    const formattedDate = formatDateHour(date);

    expect(formattedDate).toStrictEqual('13/09/1996 12:34');
  });

  it('should return --/--/---- --:--  in case of empty', () => {
    const date = '';
    const formattedDate = formatDateHour(date);

    expect(formattedDate).toStrictEqual('--/--/---- --:--');
  });

  it('should return --/--/---- --:--  in case of null', () => {
    const date = null;
    const formattedDate = formatDateHour(date);

    expect(formattedDate).toStrictEqual('--/--/---- --:--');
  });

  it('should return --/--/---- --:-- in case of undefined', () => {
    const date = undefined;
    const formattedDate = formatDateHour(date);

    expect(formattedDate).toStrictEqual('--/--/---- --:--');
  });
});

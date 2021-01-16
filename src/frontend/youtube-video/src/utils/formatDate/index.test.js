import formatDate, { formatDateHour, getDaysInPeriod } from '.';

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

  it('should return list of days given a period', () => {
    const period = {
      startDate: '2020-01-13T08:30:51.000Z',
      endDate: '2020-02-28T12:14:37.000Z',
    };

    const daysInPeriod = getDaysInPeriod(period);
    expect(daysInPeriod.length).toStrictEqual(47);
    expect(daysInPeriod).toStrictEqual([
      '13/01/2020',
      '14/01/2020',
      '15/01/2020',
      '16/01/2020',
      '17/01/2020',
      '18/01/2020',
      '19/01/2020',
      '20/01/2020',
      '21/01/2020',
      '22/01/2020',
      '23/01/2020',
      '24/01/2020',
      '25/01/2020',
      '26/01/2020',
      '27/01/2020',
      '28/01/2020',
      '29/01/2020',
      '30/01/2020',
      '31/01/2020',
      '01/02/2020',
      '02/02/2020',
      '03/02/2020',
      '04/02/2020',
      '05/02/2020',
      '06/02/2020',
      '07/02/2020',
      '08/02/2020',
      '09/02/2020',
      '10/02/2020',
      '11/02/2020',
      '12/02/2020',
      '13/02/2020',
      '14/02/2020',
      '15/02/2020',
      '16/02/2020',
      '17/02/2020',
      '18/02/2020',
      '19/02/2020',
      '20/02/2020',
      '21/02/2020',
      '22/02/2020',
      '23/02/2020',
      '24/02/2020',
      '25/02/2020',
      '26/02/2020',
      '27/02/2020',
      '28/02/2020',
    ]);
  });
});

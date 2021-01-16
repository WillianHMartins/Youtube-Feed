import { eachDayOfInterval, format, parseISO } from 'date-fns';

const DATE_FORMAT = 'dd/MM/yyyy';
const DATE_HOUR_FORMAT = `${DATE_FORMAT} HH:mm`;
const EMPTY_DATE_FORMAT = '--/--/----';
const EMPTY_DATE_HOUR_FORMAT = `${EMPTY_DATE_FORMAT} --:--`;

export const doFormat = (date, dateFormat, dateHour = true) => {
  if (!date) {
    return dateHour ? EMPTY_DATE_HOUR_FORMAT : EMPTY_DATE_FORMAT;
  }
  if (date && typeof date === 'string') {
    return format(parseISO(date), dateFormat);
  }
  return format(date, dateFormat);
};

export const formatDateHour = date => {
  return doFormat(date, DATE_HOUR_FORMAT);
};

export default date => {
  return doFormat(date, DATE_FORMAT, false);
};

export const getDaysInPeriod = period => {
  const { startDate, endDate } = period;
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

  return datesInPeriod.map(periodDate => doFormat(periodDate, DATE_FORMAT));
};

export const createDateHoursFromString = (date, hours) => {
  const [hour = '00', minute = '00'] = hours.split(':');
  const newDate = new Date(date);
  newDate.setHours(hour, minute);
  return newDate;
};

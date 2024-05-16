import moment from 'moment';

const generateDatabaseDateTime = (date: string) => {
  const localDateTime = moment.utc(date).local().format('YYYY-MM-DD HH:mm:ss');
  return localDateTime;
};

export default generateDatabaseDateTime;

export const generateDateTimeToDay = (date: string) => {
  const localDateTime = moment(date).format('YYYY-MM-DD');
  return localDateTime;
};

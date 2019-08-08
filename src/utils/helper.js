import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

export const getDaysForMonth = month => {
  const monthObj = moment(month, 'YYYY-MM');
  const range = moment().range(
    moment(monthObj).startOf('month'),
    moment(monthObj).endOf('month')
  );
  const days = range.by('days');

  return {
    days: [...days].map(date => date.format('D')),
    startDayIndex: [...days][0].format('d'),
  };
};

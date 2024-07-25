
import { formatDistanceToNow } from 'date-fns';

const timeFormat = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export default timeFormat;

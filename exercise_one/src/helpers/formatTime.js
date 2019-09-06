import moment from 'moment';

const formatTime = (raw) => (
  moment(new Date(raw)).format('dddd, MMMM d, YYYY')
);

export default formatTime;

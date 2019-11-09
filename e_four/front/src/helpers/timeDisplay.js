import moment from 'moment';

const timeDisplay = (time) => (moment(time).format('h:mm a MMM-d YYYY'));

export default timeDisplay;

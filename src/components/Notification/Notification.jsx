import { Message } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

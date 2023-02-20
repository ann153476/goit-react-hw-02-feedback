import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <section>
      <h4>{message}</h4>
    </section>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

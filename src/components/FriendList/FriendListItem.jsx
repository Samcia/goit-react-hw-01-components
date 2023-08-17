import PropTypes from 'prop-types';
import './FriendListItem.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className="friend-list__item" key={id}>
      <span
        className="friend-list__status"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img
        className="friend-list__avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend-list__name">{name}</p>
    </li>
  );
};

FriendListItem.protoTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

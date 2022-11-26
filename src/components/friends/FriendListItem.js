export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={isOnline ? 'status online' : 'status offline'}>
        {isOnline ? 'on' : 'off'}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

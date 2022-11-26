export default function FriendListItem({ avatar, name, isOnline, key }) {
  return (
    <li className="item" key={key}>
      <span className={isOnline ? 'status online' : 'status offline'}>
        {isOnline ? 'on' : 'off'}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

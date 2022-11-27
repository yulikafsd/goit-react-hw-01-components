import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friends/friends.json'
import transactions from './transactions/transactions.json'

import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friends/FriendList';
import TransactionHistory from './transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

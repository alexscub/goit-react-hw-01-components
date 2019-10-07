import React from 'react';
import Profile from './components/Profile/Profile';
import Stats from './components/Stats/Stats';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import styles from './index.module.css';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
];

function App() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Profile component</h2>
      <Profile user={user} />
      <h2 className={styles.title}>Stats component</h2>
      <Stats title="Upload stats" stats={stats} />
      <h2 className={styles.title}>Friendlist component</h2>
      <FriendList friends={friends} />
      <h2 className={styles.title}>Transaction history component</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;

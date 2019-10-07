import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './../FriendListItem/FriendListItem';
import styles from './FriendList.module.css'

const FriendList = ( {friends} ) => (
    <ul className={styles.friendList}>
    {friends.map(el=>(<FriendListItem  key={el.id} {...el}/>))}
    </ul>
)

FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default FriendList
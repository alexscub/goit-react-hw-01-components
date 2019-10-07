import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css'
//import classNames from 'classnames';

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
      {stats.map(stat => (
        <li style={{ backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16) }} key={stat.id} className={styles.item}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
)

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired
};
export default Stats

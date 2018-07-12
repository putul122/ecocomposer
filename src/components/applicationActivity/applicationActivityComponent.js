import React from 'react'
import styles from './applicationActivityComponent.scss'
import PropTypes from 'prop-types'

export default function ApplicationActivity (props) {
  console.log('activity message', props.activityMessages)
  let activityMessages = JSON.stringify(props.activityMessages)
  return (
    <div className={styles.activityline}>
      <h2>Activity Feed </h2>
      <ul>
        <div className={styles.groupspace}>
          <li><i className={styles.iconcenter + ' fa fa-share'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
          <li><i className={styles.iconcenter + ' fa fa-user'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
          <li><i className={styles.iconcenter + ' fa fa-user'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
        </div>
        <div className={styles.groupspace}>
          <li><i className={styles.iconcenter + ' fa fa-share'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
          <li><i className={styles.iconcenter + ' fa fa-user'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
          <li><i className={styles.iconcenter + ' fa fa-user'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
        </div>
        <div className={styles.groupspace}>
          <li><i className={styles.iconcenter + ' fa fa-share'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
          <li><i className={styles.iconcenter + ' fa fa-user'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
          <li><i className={styles.iconcenter + ' fa fa-user'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
        </div>
      </ul>
      <div className={styles.groupspace} >{ activityMessages }</div>
    </div>
  )
}
ApplicationActivity.propTypes = {
  activityMessages: PropTypes.any
}

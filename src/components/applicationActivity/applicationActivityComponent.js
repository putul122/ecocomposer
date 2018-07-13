import React from 'react'
import styles from './applicationActivityComponent.scss'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default function ApplicationActivity (props) {
  let activityMessages = props.activityMessages
  var grouped = _.mapValues(_.groupBy(activityMessages, 'context'), messageList => messageList.map(message => message))
  console.log('grouped', grouped)
  let activityMessagesList
  if (activityMessages !== '') {
    activityMessagesList = activityMessages.map(function (activityMessage, index) {
      let mentionNames = activityMessage.resource.mentions.map(function (mention) {
        return ' @' + mention
      })
      let referenceNames = activityMessage.resource.references.map(function (reference) {
        return ' @' + reference
      })
      let userIconlink = activityMessage._links.find(function (link) { return link.rel === 'user_icon_id' })
      // return (
      //   <li><img src={userIconlink.href} alt={activityMessage.resource.user} /><a href=''>{mentionNames.toString()}</a>{activityMessage.resource.name}<a href=''>{referenceNames.toString()}</a></li>
      // )
      return (
        <li>
          <div >
            <ul className={styles.groupspace}>
              <img src={activityMessage ? activityMessage._links[1].href : ''} alt={activityMessage ? activityMessage.resource.context : ''} /><a href=''>{activityMessage ? activityMessage.resource.context : ''}</a>::<a href=''>{activityMessage ? activityMessage.resource.discussion : ''}</a>
              <li><img src={userIconlink.href} alt={activityMessage.resource.user} /><a href=''>{mentionNames.toString()}</a>{activityMessage.resource.name}<a href=''>{referenceNames.toString()}</a></li>
            </ul>
          </div>
        </li>
      )
    })
  }

  return (
    <div className={styles.activityline}>
      <h2>Activity Feed </h2>
      <ul>
        {activityMessagesList}
        {/* <li>
          <div >
            <ul className={styles.groupspace}>
              <img src={activityMessages ? activityMessages[0]._links[1].href : ''} alt={activityMessages ? activityMessages[0].resource.context : ''} /><a href=''>{activityMessages ? activityMessages[0].resource.context : ''}</a>::<a href=''>{activityMessages ? activityMessages[0].resource.discussion : ''}</a>
              <li><img src={userIconlink.href} alt={activityMessage.resource.user} /><a href=''>{mentionNames.toString()}</a>{activityMessage.resource.name}<a href=''>{referenceNames.toString()}</a></li>
            </ul>
          </div>
        </li> */}
        {/* <li>
          <div className={styles.groupspace}>
            <ul>
              <li><i className={styles.iconcenter + ' fa fa-share'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
              <li><i className={styles.iconcenter + ' fa fa-user'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
              <li><i className={styles.iconcenter + ' fa fa-user'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div className={styles.groupspace}>
            <ul>
              <li><i className={styles.iconcenter + ' fa fa-share'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
              <li><i className={styles.iconcenter + ' fa fa-user'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
              <li><i className={styles.iconcenter + ' fa fa-user'} /><a href=''>OutBound Call Centre Solution Remedy</a></li>
            </ul>
          </div>
        </li> */}
      </ul>
    </div>
  )
}
ApplicationActivity.propTypes = {
  activityMessages: PropTypes.any
}

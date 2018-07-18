import React from 'react'
import styles from './applicationActivityComponent.scss'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ReactHtmlParser from 'react-html-parser'

export default function ApplicationActivity (props) {
  let activityMessages = props.activityMessages
  console.log('activityMessages -----', activityMessages)
  var grouped = _.mapValues(_.groupBy(activityMessages, 'context'), messageList => messageList.map(message => message))
  console.log('grouped', grouped)
  let activityMessagesList
  if (activityMessages !== '') {
    activityMessagesList = activityMessages.map(function (activityMessage, index) {
      let userIconlink = activityMessage._links.find(function (link) { return link.rel === 'user_icon_id' })
      let contextIconlink = activityMessage._links.find(function (link) { return link.rel === 'context_icon_id' })
      console.log(contextIconlink)
      let message = activityMessage.resource.name.replace(/reference/g, 'a').replace(/mention/g, 'a').replace(/ix=0/g, 'href=\'\'').replace(/ix=1/g, 'href=\'\'')
      return (
        <li>
          <div >
            <ul className={styles.groupspace}>
              <img src={activityMessage ? contextIconlink.href : ''} alt={activityMessage ? activityMessage.resource.context : ''} /><div className={styles.tooltip}><a href=''>{activityMessage.resource.context}</a><span className={styles.tooltiptext}>{activityMessage.resource.description}</span></div>::<a href=''>{activityMessage ? activityMessage.resource.discussion : ''}</a>
              <li><img src={userIconlink.href} alt={activityMessage.resource.user} />{ReactHtmlParser(message)}</li>
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

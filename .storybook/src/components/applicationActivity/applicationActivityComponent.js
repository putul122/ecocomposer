import React from 'react'
import styles from './applicationActivityComponent.scss'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ReactHtmlParser from 'react-html-parser'

export default function ApplicationActivity (props) {
  let activityMessages = props.activityMessages
  var grouped = _.mapValues(_.groupBy(activityMessages, 'context'), messageList => messageList.map(message => message))
  console.log('grouped', grouped)
  // let prevArtefact = ''
  // let prevDiscussion = ''
  let activityMessagesList = ''
  if (activityMessages !== '') {
    let result = []
    let temp = []
    let equal
    for (var i = 0; i < activityMessages.length; i += 1) {
        if (equal !== ((activityMessages[i] && activityMessages[i + 1] && activityMessages[i].resource.context === activityMessages[i + 1].resource.context) && (activityMessages[i] && activityMessages[i + 1] && activityMessages[i].resource.discussion === activityMessages[i + 1].resource.discussion))) {
          if (activityMessages[i + 1]) {
            if (equal !== undefined && !equal) {
                result.push(temp)
                temp = []
            }
            if (i + 1 < activityMessages.length) {
              equal = (activityMessages[i].resource.context === activityMessages[i + 1].resource.context && activityMessages[i].resource.discussion === activityMessages[i + 1].resource.discussion)
            }
          } else {}
        }
        if (i + 1 < activityMessages.length) {
          temp.push(activityMessages[i])
      } else {
        if (equal) {
          temp.push(activityMessages[i])
        } else {
          result.push(temp)
          temp = []
          result.push(activityMessages[i])
        }
      }

      if (i + 1 === activityMessages.length) {
        if (temp.length) {
            result.push(temp)
        }
        console.log('_________Result', result)
        if (result.length > 0) {
          activityMessagesList = result.map(function (messageGroup, index) {
            let contextIconlink = messageGroup[0]._links.find(function (link) { return link.rel === 'context_icon_id' })
            let context = messageGroup[0].resource.context
            let discussion = messageGroup[0].resource.discussion
            let messageList = messageGroup.map(function (message, i) {
              let userIconlink = message._links.find(function (link) { return link.rel === 'user_icon_id' })
              let messageContent = message.resource.name.replace(/reference/g, 'a').replace(/mention/g, 'a').replace(/ix=0/g, 'href=\'\'').replace(/ix=1/g, 'href=\'\'')
              return (<li><img src={userIconlink.href} alt={message.resource.user} />{ReactHtmlParser(messageContent)}</li>)
            })
            return (
              <li key={index} >
                <div className={styles.groupspace}>
                  <img src={contextIconlink ? contextIconlink.href : ''} alt={context} /><div className={styles.tooltip}><a href=''>{context}</a><span className={styles.tooltiptext}>{discussion}</span></div>::<a href='javascript:void(0);'>{discussion}</a>
                  <ul>
                    {messageList}
                  </ul>
                </div>
              </li>
            )
          })
        }
      }
    }
  }

  return (
    <div className={styles.activityline}>
      <h2>Activity Feed </h2>
      <ul>
        {activityMessagesList}
      </ul>
    </div>
  )
}
ApplicationActivity.propTypes = {
  activityMessages: PropTypes.any
}

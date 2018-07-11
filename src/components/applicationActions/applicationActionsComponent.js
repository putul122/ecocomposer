import React from 'react'
import styles from './applicationActionsComponent.scss'

class ApplicationActions extends React.Component {
    render () {
      return (
        <div className={styles.actionlist}>
          <h2>Actions</h2>
          <div className={styles.linkcontainer}>
            <div className={styles.actionlinks}>
              <a href='home.html'>Create New Application</a>
              <ul><h5>Worked with application sheet</h5>
                <li><a href='home.html'>+Applications(All properties)</a></li>
                <li><a href='home.html'>+Applications(All Applications-HostingDetails)</a></li>
                <li><a href='home.html'>+Applications(All Applications-Capabilities Processes)</a></li>
              </ul>
              <ul><h5>View Abacus Application Catalogues</h5>
                <li><a href='home.html'>+ Applications(All-simple)</a></li>
                <li><a href='home.html'>+ Applications(All-detailed)</a></li>
                <li><a href='home.html'>+ Applications(Retirees)</a></li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
}
export default ApplicationActions

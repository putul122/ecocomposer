import React from 'react'
import ApplicationDetail from '../../containers/applicationDetail/applicationDetailContainer'
import ApplicationActions from '../../components/applicationActions/applicationActionsComponent'
// import ApplicationActivity from '../../components/applicationActivity/applicationActivityComponent'
import Header from '../../containers/header/headerContainer'
import FooterComponent from '../../components/footer/footerComponent'
import LeftNavigation from '../../components/leftNavigation/leftNavComponent'

class applicationDetailPageRoute extends React.Component {
	render () {
		return (
  <div>
    <Header {...this.props} />
    <div className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>
      <LeftNavigation />
      <div className='m-grid__item m-grid__item--fluid m-wrapper'>
        <div className='m-content'>
          <div className='row'>
            <div className='col-sm-10'>
              <ApplicationDetail {...this.props} />
            </div>
            <div className='col-sm-2'>
              <ApplicationActions />
              {/* <ApplicationActivity /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
		)
	}
	props: {}
}
export default applicationDetailPageRoute

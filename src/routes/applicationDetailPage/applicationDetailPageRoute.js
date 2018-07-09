import React from 'react'
import ApplicationDetail from '../../components/applicationDetailed/applicationDetailedComponent'
// import ApplicationActivity from '../../components/applicationActions/applicationActionsComponent'
import ApplicationActions from '../../components/applicationActivity/applicationActivityComponent'
import Header from '../../components/header/headerComponent'
import FooterComponent from '../../components/footer/footerComponent'
import LeftNavigation from '../../components/leftNavigation/leftNavComponent'

class applicationDetailPageRoute extends React.Component {
	render () {
		return (
  <div>
    <Header />
    <div className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>
      <LeftNavigation />
      <div className='m-grid__item m-grid__item--fluid m-wrapper'>
        <div className='m-content'>
          <div className='row'>
            <div className='col-md-8'>
              <ApplicationDetail />
            </div>
            <div className='col-md-4'>
              {/* <ApplicationActivity /> */}
              <ApplicationActions />
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

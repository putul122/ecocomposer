import React from 'react'
import ActivityFeed from '../../components/activityFeed/activityfeedComponent'
import RecentPlaces from '../../components/recentPlaces/recentPlacesComponent'
import LeftNavigation from '../../components/leftNavigation/leftNavComponent'
import Header from '../../components/header/headerComponent'
import FooterComponent from '../../components/footer/footerComponent'
// import Breadcrumb from '../../components/breadcrumb/breadcrumbComponent'

class ActivityPageRoute extends React.Component {
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
              <RecentPlaces />
            </div>
            <div className='col-md-4'>
              <ActivityFeed />
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
export default ActivityPageRoute

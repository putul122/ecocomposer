import React from 'react'
import Components from '../../components/components/componentsComponent'
import LeftNavigation from '../../components/leftNavigation/leftNavComponent'
import FooterComponent from '../../components/footer/footerComponent'
// import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

class ComponentsPageRoute extends React.Component {
	render () {
		return (
  <div>
    <div className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>
      <LeftNavigation />
      <div className='m-grid__item m-grid__item--fluid m-wrapper'>
        <div className='m-content'>
          <div className='row'>
            <div className='col-md-8'>
              <Components />
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
export default ComponentsPageRoute

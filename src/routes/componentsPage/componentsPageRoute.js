import React from 'react'
// import Components from '../../components/components/componentsComponent'
import Header from '../../containers/header/headerContainer'
import ComponentType from '../../containers/componentType/componentTypeContainer'
import LeftNavigation from '../../components/leftNavigation/leftNavComponent'
import FooterComponent from '../../components/footer/footerComponent'
// import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

class ComponentsPageRoute extends React.Component {
  render () {
      console.log('comp 111', this)
		return (
  <div>
    <Header {...this.props} />
    <div className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>
      <LeftNavigation />
      <div className='m-grid__item m-grid__item--fluid m-wrapper'>
        <div className='m-content'>
          <div className='row'>
            <div className='col-md-8'>
              <ComponentType {...this.props} />
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

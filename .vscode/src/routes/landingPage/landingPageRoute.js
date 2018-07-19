import React from 'react'
import Register from '../../containers/register/registerContainer'
import ProductDescription from '../../components/productDescription/productDescriptionComponent'
import Header from '../../containers/header/headerContainer'
import FooterComponent from '../../components/footer/footerComponent'
// import LeftNavigation from '../../components/leftNavigation/leftNavComponent'

class LandingPageRoute extends React.Component {
	render () {
    localStorage.removeItem('isLoggedin')
		return (
  <div>
    <Header {...this.props} />
    <div className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>
      {/* <LeftNavigation /> */}
      <div className='m-grid__item m-grid__item--fluid m-wrapper'>
        <div className='m-content  m-demo m-demo__preview'>
          <div className='row'>
            <ProductDescription />
            <Register {...this.props} />
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
export default LandingPageRoute

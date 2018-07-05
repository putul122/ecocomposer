import React from 'react'
import Register from '../../components/register/registerComponent'
import ProductDescription from '../../components/productDescription/productDescriptionComponent'
import Header from '../../components/header/headerComponent'
import FooterComponent from '../../components/footer/footerComponent'
// import LeftNavigation from '../../components/leftNavigation/leftNavComponent'

class LandingPageRoute extends React.Component {
	render () {
		return (
  <div>
    <Header />
    <div className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>
      {/* <LeftNavigation /> */}
      <div className='m-grid__item m-grid__item--fluid m-wrapper'>
        <div className='m-content  m-demo m-demo__preview'>
          <h1 className='display-2'>Composer Bla Bla ...............</h1>
          <div className='row'>
            <ProductDescription />
            <Register />
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

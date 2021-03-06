import React from 'react'
// import { Link } from 'react-router-dom'
// import styles from './leftNavComponent.scss'

class LeftNavigation extends React.Component {
	render () {
		return (
  <div>
    {/* <!-- BEGIN: Left Aside --> */}
    <button className='m-aside-left-close  m-aside-left-close--skin-light' id='m_aside_left_close_btn'><i className='la la-close' /></button>
    <div id='m_aside_left' className='m-grid__item	m-aside-left  m-aside-left--skin-light '>
      {/* <!-- BEGIN: Brand --> */}
      <div className='m-brand  m-brand--skin-light '>
        <a href='/' className='m-brand__logo'>
          <img alt='' src='assets/demo/demo7/media/img/logo/logo.png' />
        </a>
      </div>
      {/* <!-- END: Brand --> */}
      {/* <!-- BEGIN: Aside Menu --> */}
      <div id='m_ver_menu'className='m-aside-menu  m-aside-menu--skin-light m-aside-menu--submenu-skin-light '>
        <ul className='m-menu__nav  m-menu__nav--dropdown-submenu-arrow '>
          <li className='m-menu__item  m-menu__item--submenu m-menu__item--submenu-fullheight' ><a href='/home' className='m-menu__link'><i className='m-menu__link-icon flaticon-menu' /></a></li>
          <li className='m-menu__item  m-menu__item--submenu m-menu__item--submenu-fullheight' ><a href='/components' className='m-menu__link'><i className='m-menu__link-icon fa fa-th' /></a></li>
          <li className='m-menu__item  m-menu__item--submenu m-menu__item--submenu-fullheight' ><a href='javascript:;' className='m-menu__link'><i className='m-menu__link-icon fa fa-table' /></a></li>
          <li className='m-menu__item  m-menu__item--submenu m-menu__item--submenu-fullheight' ><a href='javascript:;' className='m-menu__link'><i className='m-menu__link-icon fa fa-compress' /></a></li>
          <li className='m-menu__item  m-menu__item--submenu m-menu__item--submenu-fullheight' ><a href='javascript:;' className='m-menu__link'><i className='m-menu__link-icon flaticon-settings' /></a></li>
        </ul>
      </div>
      {/* <!-- END: Aside Menu --> */}
    </div>
  </div>
		)
	}

	props: {
    children: any
  }
}

export default LeftNavigation

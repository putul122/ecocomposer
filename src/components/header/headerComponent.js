import React from 'react'
// import { Navbar, Nav, NavItem } from 'react-bootstrap'
// import styles from './headerComponent.scss'
// import FontAwesome from 'react-fontawesome'

class HeaderComponent extends React.Component {
  render () {
    return (
      <header id='m_header' className='m-grid__item    m-header ' m-minimize-offset='200' m-minimize-mobile-offset='200' >
        <div className='m-container m-container--fluid m-container--full-height'>
          <div className='m-stack m-stack--ver m-stack--desktop'>
            {/* <!-- BEGIN: Brand --> */}
            <div className='m-stack__item m-brand '>
              <div className='m-stack m-stack--ver m-stack--general'>
                <div className='m-stack__item m-stack__item--middle m-brand__logo'>
                  <a href='index.html' className='m-brand__logo-wrapper'>
                    <img alt='' src='assets/demo/demo7/media/img/logo/logo.png' />
                  </a>
                </div>
                <div className='m-stack__item m-stack__item--middle m-brand__tools'>

                  {/* <!-- BEGIN: Responsive Aside Left Menu Toggler --> */}
                  <a href='javascript:;' id='m_aside_left_offcanvas_toggle' className='m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block'>
                    <span />
                  </a>
                  {/* <!-- END --> */}

                  {/* <!-- BEGIN: Responsive Header Menu Toggler --> */}
                  <a id='m_aside_header_menu_mobile_toggle' href='javascript:;' className='m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block'>
                    <span />
                  </a>
                  {/* <!-- END --> */}

                  {/* <!-- BEGIN: Topbar Toggler --> */}
                  <a id='m_aside_header_topbar_mobile_toggle' href='javascript:;' className='m-brand__icon m--visible-tablet-and-mobile-inline-block'>
                    <i className='flaticon-more' />
                  </a>
                  {/* <!-- BEGIN: Topbar Toggler --> */}
                </div>
              </div>
            </div>
            {/* <!-- END: Brand --> */}
            <div className='m-stack__item m-stack__item--fluid m-header-head' id='m_header_nav'>
              {/* <!-- BEGIN: Topbar --> */}
              <div id='m_header_topbar' className='m-topbar  m-stack m-stack--ver m-stack--general'>
                <div className='m-stack__item m-topbar__nav-wrapper'>
                  <ul className='m-topbar__nav m-nav m-nav--inline'>
                    <li className='m-nav__item m-topbar__user-profile  m-dropdown m-dropdown--medium m-dropdown--arrow  m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light' m-dropdown-toggle='click'>
                      <a href='' className='m-nav__link m-dropdown__toggle'>
                        <span className='m-topbar__userpic m--hide'>
                          <img src='assets/app/media/img/users/user4.jpg' className='m--img-rounded m--marginless m--img-centered' alt='' />
                        </span>
                        <span className='m-nav__link-icon m-topbar__usericon'>
                          <span className='m-nav__link-icon-wrapper'><i className='flaticon-user-ok' /></span>
                        </span>
                        <span className='m-topbar__username m--hide'>Nick</span>
                      </a>
                      <div className='m-dropdown__wrapper'>
                        <span className='m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust' />
                        <div className='m-dropdown__inner'>
                          <div className='m-dropdown__header m--align-center'>
                            <div className='m-card-user m-card-user--skin-light'>
                              <div className='m-card-user__pic'>
                                <img src='assets/app/media/img/users/user4.jpg' className='m--img-rounded m--marginless' alt='' />
                              </div>
                              <div className='m-card-user__details'>
                                <span className='m-card-user__name m--font-weight-500'>Mark Andre</span>
                                <a href='' className='m-card-user__email m--font-weight-300 m-link'>mark.andre@gmail.com</a>
                              </div>
                            </div>
                          </div>
                          <div className='m-dropdown__body'>
                            <div className='m-dropdown__content'>
                              <ul className='m-nav m-nav--skin-light'>
                                <li className='m-nav__section m--hide'>
                                  <span className='m-nav__section-text'>Section</span>
                                </li>
                                <li className='m-nav__item'>
                                  <a href='profile.html' className='m-nav__link'>
                                    <i className='m-nav__link-icon flaticon-profile-1' />
                                    <span className='m-nav__link-title'>
                                      <span className='m-nav__link-wrap'>
                                        <span className='m-nav__link-text'>My Profile</span>
                                        <span className='m-nav__link-badge'><span className='m-badge m-badge--success'>2</span></span>
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li className='m-nav__item'>
                                  <a href='profile.html' className='m-nav__link'>
                                    <i className='m-nav__link-icon flaticon-share' />
                                    <span className='m-nav__link-text'>Activity</span>
                                  </a>
                                </li>
                                <li className='m-nav__item'>
                                  <a href='profile.html' className='m-nav__link'>
                                    <i className='m-nav__link-icon flaticon-chat-1' />
                                    <span className='m-nav__link-text'>Messages</span>
                                  </a>
                                </li>
                                <li className='m-nav__separator m-nav__separator--fit' />
                                <li className='m-nav__item'>
                                  <a href='profile.html' className='m-nav__link'>
                                    <i className='m-nav__link-icon flaticon-info' />
                                    <span className='m-nav__link-text'>FAQ</span>
                                  </a>
                                </li>
                                <li className='m-nav__item'>
                                  <a href='profile.html' className='m-nav__link'>
                                    <i className='m-nav__link-icon flaticon-lifebuoy' />
                                    <span className='m-nav__link-text'>Support</span>
                                  </a>
                                </li>
                                <li className='m-nav__separator m-nav__separator--fit' />
                                <li className='m-nav__item'>
                                  <a href='snippets/pages/user/login-1.html' className='btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder'>Logout</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END: Topbar --> */}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default HeaderComponent

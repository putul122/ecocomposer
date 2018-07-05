import React from 'react'

class FooterComponent extends React.Component {
    render () {
      return (
        <footer className='m-grid__item  m-footer '>
          <div className='m-container m-container--fluid m-container--full-height m-page__container'>
            <div className='m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop'>
              <div className='m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last'>
                <span className='m-footer__copyright'>
                2018 &copy; EcoComposer
                </span>
              </div>
            </div>
          </div>
        </footer>
      )
    }
}
export default FooterComponent
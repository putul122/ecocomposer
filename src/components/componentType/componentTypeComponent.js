import React from 'react'
import styles from './componentTypeComponent.scss'
import PropTypes from 'prop-types'

export default function ComponentType (props) {
  console.log('-com-', props)

    let componentTypes = props.componentTypes
    let componentTypesList

    if (componentTypes !== '') {
      componentTypesList = componentTypes.map(function (componentType) {
        let iconlink = componentType._links.find(function (link) { return link.rel === 'icon_id' })
        return (
          <li><img src={iconlink.href} alt={componentType.resource.name} /><br />
            <a href=''>{componentType.resource.name}</a>
          </li>
        )
      })
    }

  return (
    <div className={styles.compborder}>
      <div className='row'>
        <div className='col-md-4'>
          <h2> Components</h2>
        </div>
        <div className='col-md-8'>
          <input type='text' placeholder='Search..' name='search' className=' space' />
          <button type='submit'><i className='fa fa-search' /></button><br />
        </div>
      </div>
      <ul>
        {componentTypesList}
        {/* <li> <i className='fa fa-minus-square compoicon' /><br />
          <a href=''>Icon Name</a>
        </li>
        <li> <i className='fa fa-minus-square compoicon' /><br />
          <a href=''>Icon Name</a>
        </li>
        <li> <i className='fa fa-minus-square compoicon' /><br />
          <a href=''>Icon Name</a>
        </li>
        <li> <i className='fa fa-minus-square compoicon' /><br />
          <a href=''>Icon Name</a>
        </li>
        <li> <i className='fa fa-minus-square compoicon' /><br />
          <a href=''>Icon Name</a>
        </li>
        <li> <i className='fa fa-minus-square compoicon' /><br />
          <a href=''>Icon Name</a>
        </li>
        <li> <i className='fa fa-minus-square compoicon' /><br />
          <a href=''>Icon Name</a>
        </li> */}
      </ul>

      <ul className='pagination  justify-content-center'>
        <li className='active'><a href=''>1</a></li>
        <li><a href=''>2</a></li>
        <li><a href=''>3</a></li>
        <li><a href=''>4</a></li>
        <li><a href=''>5</a></li>
      </ul>

    </div>
  )
}

ComponentType.propTypes = {
  componentTypes: PropTypes.any
  // accountCreation: PropTypes.func,
  // abacusFileProvisioned: PropTypes.func,
  // composerModelConnected: PropTypes.func
}

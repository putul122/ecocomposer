import React from 'react'
import styles from './componentTypeComponent.scss'
import PropTypes from 'prop-types'

export default function ComponentType (props) {
  console.log('-com-', props)
    let searchTextBox
    let componentTypes = props.componentTypes
    let componentTypesList

    if (componentTypes !== '') {
      componentTypesList = componentTypes.map(function (componentType) {
        let iconlink = componentType._links.find(function (link) { return link.rel === 'icon_id' })
        return (
          <li><img src={iconlink.href} alt={componentType.resource.name} /><br />
            <a href='/applicationdetail'>{componentType.resource.name}</a>
          </li>
        )
      })
    }

    let handleInputChange = function (event) {
      // console.log('handle input change')
      // console.log(event.target.value)
      // console.log(searchTextBox.value)
      props.setSearchComponentType(searchTextBox.value)
      console.log('state', props.searchComponentType)
      let payload = {
        'search': searchTextBox.value
      }
      if (searchTextBox.value && searchTextBox.value.length > 1) {
        if (searchTextBox.value.length % 2 === 0) {
          props.searchComponent(payload)
          props.setComponentTypeLoading(true)
        }
      }
    }

  return (
    <div className={styles.compborder}>
      <div className='row'>
        <div className='col-md-4'>
          <h2> Components</h2>
        </div>
        <div className='col-md-8'>
          <input type='search' placeholder='Search..' ref={input => (searchTextBox = input)} onChange={handleInputChange} />
          <button type='submit' onClick={handleInputChange} ><i className='fa fa-search' /></button><br />
        </div>
      </div>
      {props.isComponentTypeLoading && (
      <div className='vertical-align:middle; text-align: left;'>
        <div className='m-loader m-loader--brand' />
        <div className='m-loader m-loader--primary' />
        <div className='m-loader m-loader--success' />
        <div className='m-loader m-loader--info' />
        <div className='m-loader m-loader--warning' />
        <div className='m-loader m-loader--info' />
      </div>
       ) }

      {!props.isComponentTypeLoading && (
      <div>
        <ul>{componentTypesList}</ul>
        <ul className='pagination  justify-content-center'>
          <li className='active'><a href=''>1</a></li>
        </ul>
      </div>
      )}
    </div>
  )
}

ComponentType.propTypes = {
  componentTypes: PropTypes.any,
  searchComponentType: PropTypes.any,
  searchComponent: PropTypes.func,
  setSearchComponentType: PropTypes.func,
  setComponentTypeLoading: PropTypes.func,
  isComponentTypeLoading: PropTypes.any
}

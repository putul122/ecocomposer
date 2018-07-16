import React from 'react'
import styles from './componentTypeComponent.scss'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function ComponentType (props) {
  console.log('-com-', props)
    let searchTextBox
    let componentTypes = props.componentTypes.data
    let componentTypesList
    let totalNoPages
    let perPage = 10
    let currentPage = props.currentPage
    let nextClass = ''
    let previousClass = ''
    let totalComponentType
    console.log('--------props----------', props)

    // console.log('com types', componentTypes)
    if (typeof componentTypes !== 'undefined') {
      componentTypesList = componentTypes.map(function (componentType, index) {
        let iconlink = componentType._links.find(function (link) { return link.rel === 'icon_id' })
        return (
          <li key={index} ><img src={iconlink.href} alt={componentType.resource.name} /><br />
            <a href={'/' + componentType.resource.id}>{componentType.resource.name}</a>
          </li>
        )
      })

      totalComponentType = props.componentTypes.total_record_count
      totalNoPages = Math.ceil(totalComponentType / perPage)

      if (currentPage === 1) {
        previousClass = styles.disabled
      }

      if (currentPage === totalNoPages) {
        nextClass = styles.disabled
      }
    }

    let handleInputChange = function (event) {
      // props.setSearchComponentType(searchTextBox.value)
      let payload = {
        'search': searchTextBox.value ? searchTextBox.value : '',
        'page_size': 10,
        'page': currentPage
      }
      if (searchTextBox.value.length >= 0) {
        props.searchComponent(payload)
        // props.setComponentTypeLoading(true)
      }
    }

    let handlePrevious = function (event) {
      event.preventDefault()
      if (currentPage === 1) {
        previousClass = styles.disabled
      } else {
        let payload = {
          'search': searchTextBox.value ? searchTextBox.value : '',
          'page_size': 10,
          'page': currentPage - 1
        }
        props.fetchComponent(payload)
        props.setCurrentPage(currentPage - 1)
      }
    }

    let handleNext = function (event) {
      event.preventDefault()
      if (currentPage === totalNoPages) {
        nextClass = styles.disabled
      } else {
        console.log('ccccppppppp', currentPage)
        let payload = {
          'search': searchTextBox.value ? searchTextBox.value : '',
          'page_size': 10,
          'page': currentPage + 1
        }
        props.fetchComponent(payload)
        props.setCurrentPage(currentPage + 1)
      }
    }

  return (
    <div className={styles.compborder}>
      <div className='row'>
        <div className='col-md-4'>
          <h2> Components</h2>
        </div>
        <div className={styles.searchdetail + ' col-md-8'}>
          <div className={styles.containersearch}>
            <span className={styles.icon}><i className='fa fa-search' /></span>
            <input type='search' id='search' placeholder='Search...' className={styles.round} ref={input => (searchTextBox = input)} onChange={handleInputChange} />
          </div>
          {/* <input type='search' placeholder='Search..' ref={input => (searchTextBox = input)} onChange={handleInputChange} /> */}
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
        <div>
          <ul>{componentTypesList}</ul>
        </div>
        <div className='text-center justify-content-center'>
          <a href='' className={previousClass} onClick={handlePrevious}>Previous</a> Page {currentPage} of {totalNoPages} <a href='' className={nextClass} onClick={handleNext}>Next</a>
        </div>
      </div>
      )}
    </div>
  )
}

ComponentType.propTypes = {
  componentTypes: PropTypes.any,
  // searchComponent: PropTypes.func,
  // setComponentTypeLoading: PropTypes.func,
  isComponentTypeLoading: PropTypes.any,
  currentPage: PropTypes.any,
  setCurrentPage: PropTypes.func,
  fetchComponent: PropTypes.func
}

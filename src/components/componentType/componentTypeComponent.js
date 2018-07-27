import React from 'react'
import styles from './componentTypeComponent.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import applicationDetailPageRoute from '../../routes/applicationDetailPage/applicationDetailPageRoute'

export default function ComponentType (props) {
  console.log('-com-', props)
    const { match } = props
    console.log('match', match)
    let searchTextBox
    let componentTypes = props.componentTypes.data
    let componentTypesList
    let totalNoPages
    let perPage = 10
    let currentPage = props.currentPage
    let nextClass = ''
    let previousClass = ''
    let totalComponentType

    if (typeof componentTypes !== 'undefined') {
      componentTypesList = componentTypes.map(function (componentType, index) {
        let iconlink = componentType._links.find(function (link) { return link.rel === 'icon_id' })
        return (
          <li key={index} ><img src={iconlink.href} alt={componentType.resource.name} /><br />
            <Link to={'/components/' + componentType.resource.id}>{componentType.resource.name}</Link>
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
        'page': currentPage,
        'recommended': searchTextBox.value === ''
      }
      // if (searchTextBox.value.length >= 0) {
        props.searchComponent(payload)
        // props.setComponentTypeLoading(true)
      // }
    }

    let handlePrevious = function (event) {
      event.preventDefault()
      if (currentPage === 1) {
        previousClass = styles.disabled
      } else {
        let payload = {
          'search': searchTextBox.value ? searchTextBox.value : '',
          'page_size': 10,
          'page': currentPage - 1,
          'recommended': searchTextBox.value === ''
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
          'page': currentPage + 1,
          'recommended': searchTextBox.value === ''
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
        <div className={' col-md-6'}>
          <div className='m-input-icon m-input-icon--left'>
            <input type='text' className='form-control m-input' placeholder='Search...' id='generalSearch' ref={input => (searchTextBox = input)} onChange={handleInputChange} />
            <span className='m-input-icon__icon m-input-icon__icon--left'>
              <span>
                <i className='la la-search' />
              </span>
            </span>
          </div>
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
        {/* <Route path={`/components/:componentTypeId`} component={applicationDetailPageRoute} /> */}
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
  fetchComponent: PropTypes.func,
  match: PropTypes.any
}

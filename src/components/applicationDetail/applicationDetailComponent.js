import React from 'react'
import styles from './applicationDetailComponent.scss'
import PropTypes from 'prop-types'
// import ApplicationModelComponent for graph Model Visualization
import ApplicationModelComponent from '../applicationModel/applicationModelComponent'

var divStyle = {
  width: '95%',
  height: '30%',
  'overflow-y': 'scroll',
  'overflow-x': 'scroll'
}

export default function ApplicationDetail (props) {
  let ComponentName = ''
  let ComponentDescription = ''
  let searchTextBox
  let componentComponents = props.componentComponents.data
  let componentComponentsList
  let totalNoPages
  let perPage = 10
  let currentPage = props.currentPage
  let nextClass = ''
  let previousClass = ''
  let totalComponentTypeComponent

  if (props.componentDetail !== '') {
    ComponentName = props.componentDetail.resource.name
    ComponentDescription = props.componentDetail.resource.description
  }
  if (typeof componentComponents !== 'undefined') {
    componentComponentsList = componentComponents.map(function (componentComponent, index) {
      return (
        <tr role='row' className='odd' key={index} >
          <td className='sorting_1' >
            <div className='m-card-user m-card-user--sm'>
              <div className='m-card-user__details'>
                <span className='m-card-user__name'>{ componentComponent.resource.name }</span>
              </div>
            </div>
          </td>
          <td><p>{ componentComponent.resource.description }</p></td>
        </tr>
      )
    })

    totalComponentTypeComponent = props.componentComponents.total_record_count
    totalNoPages = Math.ceil(totalComponentTypeComponent / perPage)

    if (currentPage === 1) {
      previousClass = styles.disabled
    }

    if (currentPage === totalNoPages) {
      nextClass = styles.disabled
    }
  }

  let handlePrevious = function (event) {
    event.preventDefault()
    if (currentPage === 1) {
      previousClass = styles.disabled
    } else {
      let payload = {
        'id': props.componentDetail.resource.id,
        'ComponentTypeComponent': {
          'search': searchTextBox.value ? searchTextBox.value : '',
          'page_size': 10,
          'page': currentPage - 1
        }
      }
      props.fetchComponentComponent(payload)
      props.setCurrentPage(currentPage - 1)
    }
  }

  let handleNext = function (event) {
    event.preventDefault()
    if (currentPage === totalNoPages) {
      nextClass = styles.disabled
    } else {
      let payload = {
      'id': props.componentDetail.resource.id,
      'ComponentTypeComponent': {
        'search': searchTextBox.value ? searchTextBox.value : '',
        'page_size': 10,
        'page': currentPage + 1
      }
    }
    props.fetchComponentComponent(payload)
      props.setCurrentPage(currentPage + 1)
    }
  }

  let handleInputChange = function (event) {
    let payload = {
      'id': props.componentDetail.resource.id,
      'ComponentTypeComponent': {
        'search': searchTextBox.value ? searchTextBox.value : '',
        'page_size': 10,
        'page': currentPage,
        'recommended': false
      }
    }
    if (searchTextBox.value.length > 0) {
      // if (searchTextBox.value.length % 2 === 0) {
        props.searchComponentComponent(payload)
        // props.setComponentTypeLoading(true)
      // }
    }
  }
  return (
    <div className={styles.borderline}>
      <div className={'row' + styles.description}>
        <i className={styles.iconcenter + ' fa fa-share'} />
        <div>
          <h2>{ ComponentName }</h2>
          <p>{ ComponentDescription }</p>
        </div>
      </div>
      <div className='row clearfix'>
        <div className='col-sm-12 col-md-3'>
          <div className='row'>
            <div className='col-sm-6 col-md-4'>
              <h6>{ ComponentName }</h6>
            </div>
            <div className='col-sm-6 col-md-8 m--align-right'>
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
          {/* <div className={styles.containersearch}>
            <span className={styles.icon}><i className='fa fa-search' /></span>
            <input type='search' id='search' placeholder='Search...' className={styles.round} ref={input => (searchTextBox = input)} onChange={handleInputChange} />
          </div> */}
          <div className='row col-sm-12 col-md-12'>
            <table className='datatable' >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                { componentComponentsList }
              </tbody>
            </table>
          </div>
          <div className='row col-sm-12 col-md-12'>
            <div className=''>
              <div className=''>
                <a href='' className={previousClass} onClick={handlePrevious}>Previous</a> Page {currentPage} of {totalNoPages} <a href='' className={nextClass} onClick={handleNext}>Next</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-9 col-md-9'>
          <h4>{ ComponentName } Model Usage Summary</h4>
          {/* <div id='m_table_1_filter' className='dataTables_filter'><label>Search:<input type='search' className='form-control form-control-sm' placeholder='' aria-controls='m_table_1'></label></div> */}
          <div className='row'>
            <div id='divPaperWrapper' style={divStyle}>
              <ApplicationModelComponent {...props} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='m-portlet__body'>
        <div id='m_table_1_wrapper' className='dataTables_wrapper container-fluid dt-bootstrap4 no-footer'>
        </div>
      </div> */}
    </div>
  )
}

ApplicationDetail.propTypes = {
  componentDetail: PropTypes.any,
  componentComponents: PropTypes.any,
  searchComponentComponent: PropTypes.func,
  currentPage: PropTypes.any
  // setCurrentPage: PropTypes.func,
  // fetchComponentComponent: PropTypes.func
}

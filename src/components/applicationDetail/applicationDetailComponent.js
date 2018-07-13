import React from 'react'
import styles from './applicationDetailComponent.scss'
import PropTypes from 'prop-types'
// import ApplicationModelComponent for graph Model Visualization
import ApplicationModelComponent from '../applicationModel/applicationModelComponent'

var divStyle = {
  width: '95%',
  height: '400px',
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
      props.setCurrentPage(currentPage - 1)
    }
    // call api
    let payload = {
      'id': props.componentDetail.resource.id,
      'ComponentTypeComponent': {
        'search': searchTextBox.value ? searchTextBox.value : '',
        'page_size': 10,
        'page': currentPage
      }
    }
    props.fetchComponentComponent(payload)
  }

  let handleNext = function (event) {
    event.preventDefault()
    if (currentPage === totalNoPages) {
      nextClass = styles.disabled
    } else {
      props.setCurrentPage(currentPage + 1)
    }
    let payload = {
      'id': props.componentDetail.resource.id,
      'ComponentTypeComponent': {
        'search': searchTextBox.value ? searchTextBox.value : '',
        'page_size': 10,
        'page': currentPage
      }
    }
    props.fetchComponentComponent(payload)
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
      <div className={styles.description}>
        <i className={styles.iconcenter + ' fa fa-share'} />
        <div>
          <h2>{ ComponentName }</h2>
          <p>{ ComponentDescription }</p>
        </div>
      </div>
      <div className='m-portlet__body'>
        <div id='m_table_1_wrapper' className='dataTables_wrapper container-fluid dt-bootstrap4 no-footer'>
          <div className='row clearfix'>
            <div className='col-sm-6 col-md-6'>
              <div className={styles.searchdetail}>
                <h4>{ ComponentName }</h4>
                <div className={styles.containersearch}>
                  <span className={styles.icon}><i className='fa fa-search' /></span>
                  <input type='search' id='search' placeholder='Search...' className={styles.round} ref={input => (searchTextBox = input)} onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-6'>
              <h4>{ ComponentName } Model Usage Summary</h4>
              {/* <div id='m_table_1_filter' className='dataTables_filter'><label>Search:<input type='search' className='form-control form-control-sm' placeholder='' aria-controls='m_table_1'></label></div> */}
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <table className='table table-striped- table-bordered table-hover table-checkable dataTable no-footer dtr-inline' id='m_table_1' role='grid' aria-describedby='m_table_1_info' >
                <thead>
                  <tr role='row'>
                    <th className='sorting_asc' tabIndex='0' aria-controls='m_table_1' rowSpan='1' colSpan='1' aria-sort='ascending' aria-label='Agent: activate to sort column descending'>Name</th>
                    <th className='sorting' tabIndex='0' aria-controls='m_table_1' rowSpan='1' colSpan='1' aria-label='CompanyEmail: activate to sort column ascending'>Description</th>
                  </tr>
                </thead>
                <tbody>
                  { componentComponentsList }
                </tbody>
              </table>
            </div>
            <div className='col-sm-6'>
              <div id='divPaperWrapper' style={divStyle}>
                <ApplicationModelComponent {...props} />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-md-5'>
              <div className='text-center justify-content-center'>
                <a href='' className={previousClass} onClick={handlePrevious}>Previous</a> Page {currentPage} of {totalNoPages} <a href='' className={nextClass} onClick={handleNext}>Next</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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

import React from 'react'
import styles from './applicationDetailComponent.scss'
import PropTypes from 'prop-types'
import ApplicationModelComponent from '../applicationModel/applicationModelComponent'

var divStyle = {
  width: '400px',
  height: '590px',
  'overflow-x': 'scroll',
  'overflow-y': 'scroll'
}

export default function ApplicationDetail (props) {
  console.log('app comp', props)
  let ComponentName = ''
  let ComponentDescription = ''
  let searchTextBox
  let componentComponents = props.componentComponents
  let componentComponentsList

  if (props.componentDetail !== '') {
    ComponentName = props.componentDetail.resource.name
    ComponentDescription = props.componentDetail.resource.description
  }
  if (componentComponents !== '') {
    componentComponentsList = componentComponents.map(function (componentComponent) {
      return (
        <tr role='row' className='odd'>
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
  }

  let handleInputChange = function (event) {
    let payload = {
      'id': props.componentDetail.resource.id,
      'searchComponent': {
        'search': searchTextBox.value ? searchTextBox.value : '',
        'page_size': 5,
        'page': 1,
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
                  {/* <tr role='row' className='odd'>
                    <td className='sorting_1' >
                      <div className='m-card-user m-card-user--sm'>
                        <div className='m-card-user__details'>
                          <span className='m-card-user__name'>Cherish Peplay</span>
                           <a href='' className='m-card-user__email m-link'>McCullough-Gibson</a>
                        </div>
                      </div>
                    </td>
                    <td><p>The description about app </p></td>
                  </tr> */}
                  { componentComponentsList }
                </tbody>
              </table>
            </div>
            <div className='col-sm-6'>
              <div id='divPaperWrapper' style={divStyle}>
                <ApplicationModelComponent {...props} />
              </div>
              {/* <img alt='bummy' src='/assets/image.png' className='diagram' /> */}
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-md-5'>
              <div className='dataTables_info' id='m_table_1_info' role='status' aria-live='polite'>Showing 1 to 10 of 50 entries</div>
            </div>
            {/* <div className='col-sm-6 col-md-2'>
              <div className='dataTables_paginate paging_simple_numbers' id='m_table_1_paginate'>
                <ul className='pagination'>
                  <li className='paginate_button page-item previous disabled' id='m_table_1_previous'><a href='index.html' aria-controls='m_table_1' data-dt-idx='0' tabIndex='0' className='page-link'><i className='la la-angle-left' /></a></li>
                  <li className='paginate_button page-item active'><a href='extra.html' aria-controls='m_table_1' data-dt-idx='1' tabIndex='0' className='page-link'>1</a></li>
                  <li className='paginate_button page-item '><a href='extra.html' aria-controls='m_table_1' data-dt-idx='2' tabIndex='0' className='page-link'>2</a></li>
                  <li className='paginate_button page-item '><a href='extra.html' aria-controls='m_table_1' data-dt-idx='3' tabIndex='0' className='page-link'>3</a></li>
                  <li className='paginate_button page-item next' id='m_table_1_next'><a href='index.html' aria-controls='m_table_1' data-dt-idx='6' tabIndex='0' className='page-link'><i className='la la-angle-right' /></a></li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

ApplicationDetail.propTypes = {
  componentDetail: PropTypes.any,
  componentComponents: PropTypes.any,
  searchComponentComponent: PropTypes.func
}

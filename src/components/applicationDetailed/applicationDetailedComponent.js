import React from 'react'
import styles from './applicationDetailedComponent.scss'

class ApplicationDetail extends React.Component {
  render () {
    return (
      <div className={styles.borderline}>
        <div className={styles.description}>
          <i className={styles.iconcenter + ' fa fa-share'} />
          <div>
            <h2>Application</h2>
            <p>An application activity trace message is a PCF message.<br /> You configure activity trace using a configuraattribute.</p>
          </div>
        </div>
        <br />
        <div className='m-portlet__body'>
          <div id='m_table_1_wrapper' className='dataTables_wrapper container-fluid dt-bootstrap4 no-footer'>
            {/* <div className='row'> */}
            <div className='row'>
              <div className='col-sm-6 col-md-6'>
                <h4>Applications <input type='search' placeholder='search' className='pull-right' /></h4>
                {/* <div id='m_table_1_filter' className='dataTables_filter'><label>Search:<input type='search' className='form-control form-control-sm' placeholder='' aria-controls='m_table_1'></label></div> */}
              </div>
              <div className='col-sm-6 col-md-6'>
                <h4>Application Model Usage Summary</h4>
                {/* <div id='m_table_1_filter' className='dataTables_filter'><label>Search:<input type='search' className='form-control form-control-sm' placeholder='' aria-controls='m_table_1'></label></div> */}
              </div>
            </div>
            {/* </div> */}
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
                    <tr role='row' className='odd'>
                      <td className='sorting_1' >
                        <div className='m-card-user m-card-user--sm'>
                          <div className='m-card-user__details'>
                            <span className='m-card-user__name'>Cherish Peplay</span>
                            {/* <a href='' className='m-card-user__email m-link'>McCullough-Gibson</a> */}
                          </div>
                        </div>
                      </td>
                      <td><p>The description about app </p></td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1' >
                        <div className='m-card-user m-card-user--sm'>
                          <div className='m-card-user__details'>
                            <span className='m-card-user__name'>Cherish Peplay</span>
                            {/* <a href='' className='m-card-user__email m-link'>McCullough-Gibson</a> */}
                          </div>
                        </div>
                      </td>
                      <td><p>The description about app </p></td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1' >
                        <div className='m-card-user m-card-user--sm'>
                          <div className='m-card-user__details'>
                            <span className='m-card-user__name'>Cherish Peplay</span>
                            {/* <a href='' className='m-card-user__email m-link'>McCullough-Gibson</a> */}
                          </div>
                        </div>
                      </td>
                      <td><p>The description about app </p></td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1' >
                        <div className='m-card-user m-card-user--sm'>
                          <div className='m-card-user__details'>
                            <span className='m-card-user__name'>Cherish Peplay</span>
                            {/* <a href='' className='m-card-user__email m-link'>McCullough-Gibson</a> */}
                          </div>
                        </div>
                      </td>
                      <td><p>The description about app </p></td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1' >
                        <div className='m-card-user m-card-user--sm'>
                          <div className='m-card-user__details'>
                            <span className='m-card-user__name'>Cherish Peplay</span>
                            {/* <a href='' className='m-card-user__email m-link'>McCullough-Gibson</a> */}
                          </div>
                        </div>
                      </td>
                      <td><p>The description about app </p></td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1' >
                        <div className='m-card-user m-card-user--sm'>
                          <div className='m-card-user__details'>
                            <span className='m-card-user__name'>Cherish Peplay</span>
                            {/* <a href='' className='m-card-user__email m-link'>McCullough-Gibson</a> */}
                          </div>
                        </div>
                      </td>
                      <td><p>The description about app </p></td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1' >
                        <div className='m-card-user m-card-user--sm'>
                          <div className='m-card-user__details'>
                            <span className='m-card-user__name'>Cherish Peplay</span>
                            {/* <a href='' className='m-card-user__email m-link'>McCullough-Gibson</a> */}
                          </div>
                        </div>
                      </td>
                      <td><p>The description about app </p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='col-sm-6'>
                <img alt='bummy' src='/assets/image.png' className='diagram' />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6 col-md-5'>
                <div className='dataTables_info' id='m_table_1_info' role='status' aria-live='polite'>Page 1 of 3</div>
              </div>
              <div className='col-sm-6 col-md-2'>
                <div className='dataTables_paginate paging_simple_numbers' id='m_table_1_paginate'>
                  {/* <ul className='pagination'>
                    <li className='paginate_button page-item previous disabled' id='m_table_1_previous'><a href='index.html' aria-controls='m_table_1' data-dt-idx='0' tabIndex='0' className='page-link'><i className='la la-angle-left' /></a></li>
                    <li className='paginate_button page-item active'><a href='index.html' aria-controls='m_table_1' data-dt-idx='1' tabIndex='0' className='page-link'>1</a></li>
                    <li className='paginate_button page-item '><a href='index.html' aria-controls='m_table_1' data-dt-idx='2' tabIndex='0' className='page-link'>2</a></li>
                    <li className='paginate_button page-item '><a href='index.html' aria-controls='m_table_1' data-dt-idx='3' tabIndex='0' className='page-link'>3</a></li>
                    <li className='paginate_button page-item '><a href='index.html' aria-controls='m_table_1' data-dt-idx='4' tabIndex='0' className='page-link'>4</a></li>
                    <li className='paginate_button page-item '><a href='index.html' aria-controls='m_table_1' data-dt-idx='5' tabIndex='0' className='page-link'>5</a></li>
                    <li className='paginate_button page-item next' id='m_table_1_next'><a href='index.html' aria-controls='m_table_1' data-dt-idx='6' tabIndex='0' className='page-link'><i className='la la-angle-right' /></a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  props: {
    children: any
  }
}

export default ApplicationDetail

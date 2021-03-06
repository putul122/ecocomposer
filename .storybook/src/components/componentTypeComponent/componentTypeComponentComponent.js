import React from 'react'
import styles from './componentTypeComponentComponent.scss'
import PropTypes from 'prop-types'

export default function ComponentTypeComponent (props) {
  console.log('com tye com ------', props)
    console.log('--relation', props.componentTypeComponentRelationships)
    let componentTypeComponentName
    let componentTypeComponentDescription
    let componentTypeComponentProperties = props.componentTypeComponentProperties.data
    let componentTypeComponentPropertiesList
    let componentTypeComponentRelName
    let componentTypeComponentChildName
    let componentTypeComponentRelationshipsList
    let componentTypeComponentRelationships = props.componentTypeComponentRelationships.data
    console.log('name', componentTypeComponentRelName)
    console.log('name', componentTypeComponentChildName)
    console.log('name', componentTypeComponentRelationshipsList)

    if (props.componentTypeComponentData !== '') {
      componentTypeComponentName = props.componentTypeComponentData.data.resource.name
      componentTypeComponentDescription = props.componentTypeComponentData.data.resource.description
    }

    if (typeof componentTypeComponentProperties !== 'undefined') {
      componentTypeComponentPropertiesList = componentTypeComponentProperties.map(function (properties, index) {
        console.log('--', properties)
        return (
          <li key={index}>
            <div><p className={styles.labelbold}>Name</p></div>
            <div><p>{properties.resource.name}</p></div>
          </li>
        )
      })
    }
    if (props.componentTypeComponentData !== '') {
      componentTypeComponentRelName = props.componentTypeComponentData.data.resource.component_type_name
      componentTypeComponentChildName = props.componentTypeComponentData.data.resource.name
    }

    if (typeof componentTypeComponentRelationships !== 'undefined') {
      componentTypeComponentRelationshipsList = componentTypeComponentRelationships.map(function (relations, index) {
        console.log('--Relatin data', relations)
        return (
          // <div>
          //   <p>{relations.resource.target_component_type_name}</p>
          //   {/* <a>{relations.resource.name}</a> */}
          // </div>
          <div className='m-accordion__item'>
            <div className='m-accordion__item-head collapsed' role='tab' id='m_accordion_2_item_1_head' data-toggle='collapse' href={'#m_accordion_2_item_1_body' + index} aria-expanded='false'>
              <span className='m-accordion__item-title'>{relations.resource.component_type_name} {relations.resource.constraint_type} {relations.resource.target_component_type_name}</span>
              <span className='m-accordion__item-mode' />
            </div>
            <div className='m-accordion__item-body collapse' id={'m_accordion_2_item_1_body' + index} role='tabpanel' aria-labelledby='m_accordion_2_item_1_head' data-parent='#m_accordion_2' style={{}}>
              <div className='m-accordion__item-content'>
                {/* <a>{relations.resource.name}</a> */}
                <a href=''>Windows Platform</a><br />
                <a href=''>Apache tomcat Web server</a><br />
                <a href=''>Microsoft Access</a><br />
              </div>
            </div>
          </div>
          )
      })
    }

    return (
      <div className={styles.borderline}>
        <div className={'row' + styles.description}>
          <i className={styles.iconcenter + ' fa fa-share'} />
          <div>
            <h2>{componentTypeComponentName}</h2>
            <p>{componentTypeComponentDescription}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6 col-md-6' >
            <div className={styles.tabsprops}>
              <ul className='nav nav-tabs nav-fill' role='tablist'>
                <li className='nav-item'>
                  <a className='nav-link active show' data-toggle='tab' href='#m_tabs_3_1'>Properties</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' data-toggle='tab' href='#m_tabs_3_2'>RelationShips</a>
                </li>
              </ul>
              <div className={styles.tabcontentborder}>
                <div className='tab-content'>
                  <div className='tab-pane active' id='m_tabs_3_1' role='tabpanel'>
                    <ul>
                      {componentTypeComponentPropertiesList}
                      {/* <li>
                        <div><p className={styles.labelbold}>URL</p></div>
                        <div><p><a href=''>http://ivr.com</a></p></div>
                      </li>
                      <li>
                        <div><p className={styles.labelbold}>Type</p></div>
                        <div><p>Business</p></div>
                      </li>
                      <li>
                        <div><p className={styles.labelbold}>Technical-Fit</p></div>
                        <div><p>0.83</p></div>
                      </li>
                      <li>
                        <div><p className={styles.labelbold}>Support Hours</p></div>
                        <div><p>24 hours</p></div>
                      </li>
                      <li>
                        <div><p className={styles.labelbold}>Criticality</p></div>
                        <div><p>Bussiness</p></div>
                      </li>
                      <li>
                        <div><p className={styles.labelbold}>URL</p></div>
                        <div><p><a href=''>http://ivr.com</a></p></div>
                      </li>
                      <li>
                        <div><p className={styles.labelbold}>URL</p></div>
                        <div><p><a href=''>http://ivr.com</a></p></div>
                      </li> */}
                    </ul>
                  </div>
                  <div className='tab-pane' id='m_tabs_3_2' role='tabpanel'>
                    <div className='m-accordion m-accordion--bordered' id='m_accordion_2' role='tablist'>
                      {/* <div className='m-accordion__item'>
                        <div className='m-accordion__item-head collapsed' role='tab' id='m_accordion_2_item_1_head' data-toggle='collapse' href='#m_accordion_2_item_1_body' aria-expanded='false'>
                          <span className='m-accordion__item-title'>IVR</span>
                          <span className='m-accordion__item-mode' />
                        </div>
                        <div className='m-accordion__item-body collapse' id='m_accordion_2_item_1_body' role='tabpanel' aria-labelledby='m_accordion_2_item_1_head' data-parent='#m_accordion_2' style={{}}>
                          <div className='m-accordion__item-content'>
                            {componentTypeComponentRelationshipsList}
                          </div>
                        </div>
                      </div> */}
                      {/* <div className='m-accordion__item'>
                        <div className='m-accordion__item-head collapsed' role='tab' id='m_accordion_2_item_2_head' data-toggle='collapse' href='#m_accordion_2_item_2_body' aria-expanded='false'>
                          <span className='m-accordion__item-title'>IVR target Application</span>
                          <span className='m-accordion__item-mode' />
                        </div>
                        <div className='m-accordion__item-body collapse' id='m_accordion_2_item_2_body' role='tabpanel' aria-labelledby='m_accordion_2_item_2_head' data-parent='#m_accordion_2' style={{}}>
                          <div className='m-accordion__item-content'>
                            <a href=''>Windows Platform</a><br />
                            <a href=''>Apache tomcat Web server</a><br />
                            <a href=''>Microsoft Access</a><br />
                          </div>
                        </div>
                      </div> */}
                      {componentTypeComponentRelationshipsList}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6'>
            <div className={styles.modelsection}>
              <h2>{componentTypeComponentName} Model Diagram</h2><br />
              <img alt='model' src='https://via.placeholder.com/450x250?text=Model%20Visualization' />
            </div>
          </div>
        </div>
      </div>
    )
}

ComponentTypeComponent.propTypes = {
  componentTypeComponentData: PropTypes.any,
  componentTypeComponentProperties: PropTypes.any,
  componentTypeComponentRelationships: PropTypes.any
}

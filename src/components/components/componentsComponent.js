import React from 'react'
import styles from './componentsComponent.scss'

class Components extends React.Component {
  render () {
    return (
      <div className={styles.compborder}>
        <div className='row'>
          <div className='col-md-4'>
            <h2> Components</h2>
          </div>
          <div className='col-md-8'>
            <input type='text' placeholder='Search..' name='search' className= ' space' />
            <button type='submit'><i className='fa fa-search' /></button><br />
          </div>
        </div>
        <ul>
          <li> <i className='fa fa-minus-square compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-file compoicon' /><br />
            <a href=''>FileIcon</a>
          </li>
          <li> <i className='fa fa-arrow-circle-left compoicon' /><br />
            <a href=''>Circle Icon</a>
          </li>
          <li> <i className='fa fa-area-chart compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-line-chart compoicon' /><br />
            <a href=''>Line Chart</a>
          </li>
          <li> <i className=' fa fa-cog compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-automobile compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-th compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-fighter-jet compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-arrows-alt compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-pause-circle-o compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className=' fa fa-stop compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-minus-square compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-address-card compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-minus-square compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-bank compoicon' /><br />
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
          <li> <i className='fa fa-beer compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>

          <li> <i className='fa fa-minus-square compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-binoculars compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
          <li> <i className='fa fa-minus-square compoicon' /><br />
            <a href=''>Icon Name</a>
          </li>
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

  props: {
  children: any
  }
}

export default Components

import React from 'react'
import styles from './registerComponent.scss'
import { withRouter } from 'react-router-dom'

const Button = withRouter(({ history }) => (
  <button
    type='button' id='m_blockui_1_4'
    onClick={() => { history.push('/registering') }}
    className={styles.buttonbg + 'btn btn-primary btn-lg btn-block pb_btn-pill '}>
    Test Drive
  </button>
))

class Register extends React.Component {
  render () {
    return (
      <div className={styles.sidebar + ' col-sm-3 clearfix'}>
        <div className='container '>
          <h5 className='mb-4 mt-0 text-center'>Experience it free for 90 days</h5>
          <p>New free template by lorem ipsum. For more templates visit the Lorem ipsum dolor sit amet, consectetur adipisicing elit. is simply dummy text of the printing and typesetting industry.</p>
          <div className='form-group'>
            <input type='text' className='form-control pb_height-50 reverse' placeholder='Full name' />
          </div>

          <div className='form-group'>
            <input type='text' className='form-control pb_height-50 reverse' placeholder='Email' />
          </div>
          <div className='form-group' />
          <div className='form-group'>
            <Button />
          </div>
        </div>
      </div>
    )
  }

  props: {
    children: any
  }
}

export default Register

import React from 'react'
import PropTypes from 'prop-types'
import styles from './registerComponent.scss'
// import { withRouter } from 'react-router-dom'
// const Button = withRouter(({ history }) => (
//   <button
//     type='button' id='m_blockui_1_4'
//     onClick={() => { history.push('/registering') }}
//     className={styles.buttonbg + 'btn btn-primary btn-lg btn-block pb_btn-pill '}>
//     Test Drive
//   </button>
// ))

export default function Register (props) {
  let FullNameBox
  let EmailBox
  let PasswordBox
  let handleInput = function (event) {
    if (typeof (FullNameBox) !== 'undefined' && typeof (EmailBox) !== 'undefined' && typeof (PasswordBox) !== 'undefined') {
      console.log(FullNameBox.value)
      let payload = {
        'email': EmailBox.value,
        'password': PasswordBox.value
      }
      props.createUser(payload)
    }
  }
  console.log('is logged in ', props.isLoggedin)
  return (
    <div className={styles.sidebar + ' col-sm-3 clearfix'}>
      <div className='container '>
        <h5 className='mb-4 mt-0 text-center'>Experience it free for 90 days</h5>
        <p>New free template by lorem ipsum. For more templates visit the Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <div className='form-group'>
          <input type='text' ref={input => (FullNameBox = input)} className='form-control pb_height-50 reverse' placeholder='Full name' />
        </div>

        <div className='form-group'>
          <input type='text' ref={input => (EmailBox = input)} className='form-control pb_height-50 reverse' placeholder='Email' />
        </div>

        <div className='form-group'>
          <input type='password' ref={input => (PasswordBox = input)} className='form-control pb_height-50 reverse' placeholder='password' />
        </div>
        <div className='form-group' />
        <div className='form-group'>
          <button
            type='button' id='m_blockui_1_4'
            onClick={handleInput}
            className={styles.buttonbg + 'btn btn-primary btn-lg btn-block pb_btn-pill '}>
            Test Drive
          </button>
        </div>
      </div>
    </div>
  )
}

Register.propTypes = {
  isLoggedin: PropTypes.any,
  createUser: PropTypes.func
}

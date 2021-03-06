import React from 'react'
import PropTypes from 'prop-types'
import styles from './loginComponent.scss'

export default function Login (props) {
  // let FullNameBox
  let EmailBox
  let PasswordBox
  let handleInput = function (event) {
    console.log('HIII')
    if (typeof (EmailBox) !== 'undefined' && typeof (PasswordBox) !== 'undefined') {
      // let name = FullNameBox.value
      // name.split(' ', 2)[0] + Math.random()
      // To set unique user id in your system when it is available
      window.fcWidget.setExternalId(EmailBox.value)
      // To set user name
      // window.fcWidget.user.setFirstName(name)
      // To set user email
      window.fcWidget.user.setEmail(PasswordBox.value)
      // To set user properties
      window.fcWidget.user.setProperties({
        plan: 'Estate',                 // meta property 1
        status: 'Active'                // meta property 2
      })
      let payload = {
        'email': EmailBox.value,
        'password': PasswordBox.value
      }

      props.loginUser(payload)
    }
  }
  console.log('is logged in ', props.isLoggedin)
  return (
    // <div className='m-login__wrapper-2 m-portlet-full-height'>
    //   <div className='m-login__contanier'>
    //     <div className='m-login__head'>
    //       <h3 className='m-login__title'>Login To Your Account</h3>
    //     </div>
    //     <div className='form-group'>
    //       <input type='text' ref={input => (FullNameBox = input)} className='form-control pb_height-50 reverse' placeholder='Full name' />
    //     </div>

    //     <div className='form-group'>
    //       <input type='text' ref={input => (EmailBox = input)} className='form-control pb_height-50 reverse' placeholder='Email' />
    //     </div>

    //     <div className='form-group'>
    //       <input type='password' ref={input => (PasswordBox = input)} className='form-control pb_height-50 reverse' placeholder='password' />
    //     </div>
    //     <div className='form-group' />
    //     <div className='form-group'>
    //       <button
    //         type='button' id='m_blockui_1_4'
    //         onClick={handleInput}
    //         className={styles.buttonbg + 'btn btn-primary btn-lg btn-block pb_btn-pill '}>
    //         Test Drive
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className='m-login__wrapper-2 m-portlet-full-height'>
      <div className='m-login__contanier'>
        <div className='m-login__head'>
          <h3 className='m-login__title'>Login To Your Account</h3>
        </div>
        <div className='m-login__form m-form'>
          {/* <div className='form-group'>
            <input type='text' ref={input => (FullNameBox = input)} className='form-control m-input' placeholder='Full name' />
          </div> */}
          <div className='form-group m-form__group'>
            <input className='form-control' type='text' ref={input => (EmailBox = input)} placeholder='Email' />
          </div>
          <div className='form-group m-form__group'>
            <input className='form-control m-login__form-input--last' type='Password' ref={input => (PasswordBox = input)} placeholder='Password' />
          </div>
          <div className='row m-login__form-sub'>
            <div className='col m--align-left'>
              {/* <label className='m-checkbox m-checkbox--focus'>
                    <input type='checkbox' name='remember' /> Remember me
                    <span />
              </label> */}
            </div>
            <div className='col m--align-right'>
              <a href='' id='m_login_forget_password' className='m-link'>Forget Password ?</a>
            </div>
          </div>
          <div className='m-login__form-action'>
            <button onClick={handleInput} className={styles.buttonbg}>Sign In</button>
          </div>
        </div>
        {/* <div className='m-login__signup'>
          <div className='m-login__head'>
            <h3 className='m-login__title'>Sign Up</h3>
            <div className='m-login__desc'>Enter your details to create your account:</div>
          </div>
          <form className='m-login__form m-form' action>
          <div className='form-group m-form__group'>
            <input className='form-control m-input' type='text' placeholder='Fullname' name='fullname' />
          </div>
          <div className='form-group m-form__group'>
            <input className='form-control m-input' type='text' placeholder='Email' name='email' autoComplete='off' />
          </div>
          <div className='form-group m-form__group'>
            <input className='form-control m-input' type='password' placeholder='Password' name='password' />
          </div>
          <div className='form-group m-form__group'>
            <input className='form-control m-input m-login__form-input--last' type='password' placeholder='Confirm Password' name='rpassword' />
          </div>
          <div className='m-login__form-sub'>
            <label className='m-checkbox m-checkbox--focus'>
                <input type='checkbox' name='agree' /> I Agree the <a href='' className='m-link m-link--focus'>terms and conditions</a>.
                <span />
            </label>
            <span className='m-form__help' />
          </div>
          <div className='m-login__form-action'>
            <button id='m_login_signup_submit' className={styles.buttonbg}>Sign Up</button>
            <button id='m_login_signup_cancel' className='btn btn-outline-focus m-btn m-btn--pill m-btn--custom'>Cancel</button>
          </div>
          </div>
        </div>
        <div className='m-login__forget-password'>
          <div className='m-login__head'>
            <h3 className='m-login__title'>Forgotten Password ?</h3>
            <div className='m-login__desc'>Enter your email to reset your password:</div>
          </div>
          <form className='m-login__form m-form' action>
            <div className='form-group m-form__group'>
              <input className='form-control m-input' type='text' placeholder='Email' name='email' id='m_email' autoComplete='off' />
            </div>
            <div className='m-login__form-action'>
              <button id='m_login_forget_password_submit' className='btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air'>Request</button>
              <button id='m_login_forget_password_cancel' className='btn btn-outline-focus m-btn m-btn--pill m-btn--custom '>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  )
}

Login.propTypes = {
  isLoggedin: PropTypes.any,
  loginUser: PropTypes.func
}

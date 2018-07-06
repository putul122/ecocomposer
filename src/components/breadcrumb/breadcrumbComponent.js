import React from 'react'
// import PropTypes from 'prop-types'

class Breadcrumb extends React.Component {
  render () {
    return (
      <div>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item active'>Home</li>
        </ol>
      </div>
    )
  }

  props: {
    children: any
    }
}

export default Breadcrumb

// we will be using the code below when we use cointainer and state.
// export default function Breadcrumb (props) {
//   return (
//     <div>
//       <ol className='breadcrumb'>
//         <li className='breadcrumb-item active'>Home</li>
//       </ol>
//     </div>
//   )
// }

// Breadcrumb.propTypes = {
// }

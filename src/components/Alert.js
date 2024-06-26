import React from 'react'

function alert(props) {
  return (
   props.alert && 
   <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.typ}</strong> :{props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}

export default alert
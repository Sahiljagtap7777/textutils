import React from 'react'

function Alerts(props) {
  return (
    
   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     {props.alert.msg}:{props.alert.type}
 
</div>
    
  )
}

export default Alerts

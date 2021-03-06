import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
       <ul className="right">
           <li><NavLink to='/'>หน้าหลัก</NavLink></li>
           <li><NavLink to='/book'>หนังสือ</NavLink></li>
           <li><NavLink to='/create'>จดบันทึก</NavLink></li>
           <li><NavLink to='/calender'>ปฏิทิน</NavLink></li>
           <li><a onClick={props.signOut}>Log Out</a></li>

       </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)

/* <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
           {props.profile.initials}
           </NavLink></li> */
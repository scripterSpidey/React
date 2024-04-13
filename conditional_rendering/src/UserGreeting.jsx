import PropTypes from 'prop-types'

const UserGreeting = (props)=>{
    if(props.isLoggedIn){
        return (
            <h1>Welcome {props.userName}</h1>
        )
    }else{
        return (
            <h1>Please login to continue {props.userName}</h1>
        )
    }
}



UserGreeting.prototype ={
    isLoggedIn : PropTypes.bool,
    userName: PropTypes.string
}

UserGreeting.defaultProps  ={
    isLoggedIn : false,
    userName : 'Guest '
}
export default UserGreeting;
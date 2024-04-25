# useReducer is a state management hook
# used to manage more complex state logics

const [count,dispatch] = useReducer(reducer,initialState)

initially count will be set to initialState and the count is treated as state
reducer = (state,action)=>{
    <!-- we return the newState depending on the action parameter received in dispatch function -->
    return newState;
}

# here state is the currentState which is the count and action is the parameter received in dispatch method.

# reducer function specifies how the state gets updated

# if many event handlers are modifying the state in similar way, we can use useReducer over useState

# action and state can be passed as objects
# action as object: several actions can be disapatched to same reducer function and change the state of a component dependig upon the action
# state as object: more than one state can be managed by a single function by passing appropriate functions
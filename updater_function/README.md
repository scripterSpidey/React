[Updater Functions]

# We write general functions  to change the state of a component. But if we write more than one set functions to change the state of a variable, react wont reflect this change. 
# We update functions based on theire previous state , not the current state while using updater functions.
# The over all result will be equal to only one change that has been written at last.

# example:
        const [count,setCount] = useState(0);
        const increment = () =>{
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        setCount(count+2);
        }
    
    This will not work as expected.React batches together these updates and performs a single operation. React takes the last state of the component and perform the operation. We used the name of the component as last state to increment the value. So react allways increment the value to the count state. 
    so it will be :

     setCount(0+1)
     setCount(0+1)
     setCount(0+1)
     setCount(0+2)
    
    and the final result will be 2.So we need different names for the updating componets and we should do it with an  updater function inside the setCount function.

#  we need to create a new function inside the set function and the variable name should be different from the declared state name. we takes the pending state to calculate the next state. In previous method we were using current state over and over again.  Reacts puts these updater functions in a que.

    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)

 Its a better practice to write the set methods always as updater functions even when there is only one step of updation.
     
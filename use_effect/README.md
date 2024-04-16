# USE EFFECT

# Its a side code. Whenever a component rerenders this code gets executed.

# useEffect(<function>,<[dependencies]>)

useEffect(()=>{})  Runs after evert rerender + when component is mounted
useEffect(()=>{},[]) Runs only on mounting
useEffect(()=>{},[value]) Runs when mounts + when the value is changed

# The callback function inside the useEffect get exicuted whenver the state of the values inside the dependency array changes.

useEffect(()=>{
        document.title = count+' '+color;
    },[count])

# In the above example the title of document changes even without the useEffect hook, But with useEffect we will have more control over the function execution, also we can perform many cleanup functions after a rendering has occured.
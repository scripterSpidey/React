- To prevent re-renders if a components state has not changed, we can use React.memo.
- But refference datatypes like fuctions and objects will still act as new fucntions when the parent component renders.
- So even if  these datatypes dependencies are in the components dependency list, component will still treat it as a new  state. 
- Then non changed state components will rerenders even when uses React.memo.
- useCallback will memoize this functions or objects and let the react knows that it is the same function that they are encountering.

# used for performance optimisation
# memoize the functions or  


useCallback(<function that need to be memoized>,<[dependencies]>)

# stores the memoised version of callback function. It will be only rerendered when its dependency is changed
# useMemo

# used to store repeating fucntionalities or values


useMemo(function,[dependencies])

# the function gets executed whenver the value in dependency changes 

# if there are slow functions which gets executed every time rendering happens, we can store it as memo, so that it get executed only when its value changes.

# in case refference type datatypes(objects/arrays), whenever rendering happens a new object/array gets created which is not same as previous one. Even if we use useEffect to render only when values is changed, since the refferences are different, the component will get rendered again. To prevent that we can store objects as memos so that it refferences to the old memory location again.


# it stores the result of a computation, so that the the computation will be only done when  the result has changed

# memoise  the values
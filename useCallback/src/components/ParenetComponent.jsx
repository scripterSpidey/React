import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParenetComponent = () => {

    const[age,setAge]= useState(25);
    const [salary,setSalary] = useState(50000);
    const incrementAge =  useCallback(()=>{
        setAge(age+1);
    },[age])
    
    const incrementSalary = useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    
  return (
    <div>
      <Title/>
      <Count text='age' count={age}></Count>
      <Button handleClick={incrementAge}>age++</Button>
      <Count text='salary' count={salary}></Count>
      <Button handleClick={incrementSalary}>salary++</Button>
    </div>
  )
}

export default ParenetComponent

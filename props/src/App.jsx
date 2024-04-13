
import './App.css'
import Cars from './Cars';


function App() {
  return(
    <>
      <Cars name = 'BMW' model = 'Sports'
       id = 'car' className = 'cars' divClass = 'parent'/>
       <Cars name = 'Ferrari' />
    </>
    
  )
}

export default App

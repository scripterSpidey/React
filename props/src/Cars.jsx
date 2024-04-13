import './App.css'
import propTypes from'prop-types' //?import from noedmudules
const Cars = (props) =>{

    const id = props.id;
    const className = props.className;
    const name = props.name;
    const model = props.model;
    const divClass = props.divClass;
    return (
        <>
        <div className= {divClass}>
            <p  id = {id}>Name: {name}</p>
            <p > Model: {model}</p>
        </div>
        </>
    )
}
//?specify the expected datatypes for values recieved from parent.. 
//?if wrong datatype received error will be seen in console but it wont prevent it from working
Cars.propTypes={
    name:propTypes.string,
    model: propTypes.string
  }
//?assigns default values for attributes who doesnt have value
Cars.defaultProps = {
    name: 'Cars',
    model: 'Cars',
    divClass : 'parent'
}


export default Cars;    
import propTypes from 'prop-types'

const List = (props) =>{
    const fruits = props.items;
    const listItems = fruits.map((fruit)=>{
       return <li key = {fruit.name}>name: {fruit.name}, count: {fruit.count}</li>
       //the key attribute is given bcoz react needs unique keys in each list items
    })
    const lowStock  = fruits.filter((fruit=>{
        return fruit.count<=30
    }))

    const lowStockFruits = lowStock.map(fruit=>{
        return <li key = {fruit.name}>Name: {fruit.name}, Count: {fruit.count}</li>
    })
    console.log(lowStockFruits)
    return (
        <>
            <h1 className="category">{props.category}</h1>
            <ol className="items">
                {listItems}
             </ol>
             <h1>Low stock items:</h1>
             <ol className="items">
                {lowStockFruits}
             </ol>
        </>
    );
}

List.propTypes ={
    category : propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string,
        count : propTypes.number
    }))
}
List.defaultProps = {
    category : 'category',
    items :[]
}

export default List;
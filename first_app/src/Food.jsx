const Food = ()=>{
    const food1 = 'Apple';
    const food2 = 'Banana';
    const food3 = 'Water melon'
    return (
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3.toLocaleLowerCase()}</li>
        </ul>
    )
}

export default Food;
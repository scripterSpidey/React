import List from "./List"
import SearchCountry from "./searchFromList";

function App() {
  //for reusability we can pass datas from here itself  
  const fruits = [
    {'name':'Apple',count:40},
    {'name':'Banana',count:30},
    {'name':'Grapes',count:20},
    {'name':'Water melon',count:50}
  ];

  const vegetables = [
    {'name':'Tomato',count:25},
    {'name':'Ginger',count:31},
    {'name':'Chilly',count:11},
    {'name':'Potato',count:62}
    ];

  const electronics = []
  return(
    <>
      {fruits.length &&  <List items = {fruits} category = 'Fruits'></List>}
      {vegetables.length && <List items = {vegetables} category = 'Vegetables'></List>}
      {electronics.length && <List items = {electronics} category = 'electronics'></List>}
      <SearchCountry></SearchCountry>
    </>
    
  );
}

export default App

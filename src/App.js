import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak','Jashim','Sakib','Salman','Rubel','dj khaled']
  const products = [
    {name:'Photoshop', price:'$99.9'},
    {name:'Illustrator', price: '$55.8'},
    {name:'Pdf Reader', price: '$54.8'},
  ]
  //const productNames = products.map(product => product.name)
  const nayokNames = nayoks.map(nayok =>nayok)
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
          nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>   
      </header>
    </div>
  );
}
function Counter(){
  const [count, setcount] = useState(10);
  const handleIncrease = () => setcount(count + 1);
  const handleDecrease = () => setcount(count - 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {
        console.log(users)
        }
        {
          users.map (user => <li>{user.phone}{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
const productStyle={
  border: '1px solid gold',
  borderRadius: '5px',
  backgroundColor: 'lightgray',
  height: '200px',
  width: '200px',
  float: 'left',
  margin:'10px'
}
  return (
    <div style = {productStyle}>
      <h3>{props.product.name} </h3>
      <h5>{props.product.price} </h5>
      <button>Buy Now</button>
      </div>
  
  )
}

export default App;

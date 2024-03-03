import './App.css';
import { useState } from 'react';

// задания


// 1
function App(){
  const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
  const [editLetter, setEditLetter] = useState(null);
  const [value, setValue] = useState('');

  const result = notes.map((note, index) => {
    return <p key={index} onClick={() => setEditLetter(index)}>
      {note}
    </p>;
  });

  function changeItem(event) {
    setNotes([...notes.slice(0, editLetter), event.target.value, ...notes.slice(editLetter + 1)]);
  }
  function stopEdit(event){
    setEditLetter(null);
  }
  function changeValue(event){
    setValue(event.target.value);
  }
  function addItem(event){
    setNotes([...notes, value]);
    setValue('');
  }
  

  return <div>
    {result}
    {editLetter !== null ? 
      <input
        value={notes[editLetter]}
        onChange={changeItem}
        onBlur={stopEdit}
      />
      :
      <input
        value={value}
        onChange={changeValue}
        onBlur={addItem}
      />
    }
  </div>
}

export default App;






//2
// function App(){
//   const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
//   const [editLetter, setEditLetter] = useState(null);
//   const [value, setValue] = useState('');

//   const result = notes.map((note, index) => {
//     return <p key={index} onClick={() => setEditLetter(index)}>
//       {note}
//     </p>;
//   });

//   function changeItem(event) {
//     setNotes([...notes.slice(0, editLetter), event.target.value, ...notes.slice(editLetter + 1)]);
//   }
//   function stopEdit(event){
//     setEditLetter(null);
//   }
//   function changeValue(event){
//     setValue(event.target.value);
//   }
//   function addItem(event){
//     setNotes([...notes, value]);
//     setValue('');
//   }
  

//   return <div>
//     {result}
//     {editLetter !== null ? 
//       <input
//         value={notes[editLetter]}
//         onChange={changeItem}
//         onBlur={stopEdit}
//       />
//       :
//       <input
//         value={value}
//         onChange={changeValue}
//         onBlur={addItem}
//       />
//     }
//   </div>
// }

// export default App;












// function App(){
//   const [products, setProducts] = useState([
//     {id:1, title:'product1', description:'Description1', price:100},
//     {id:2, title:'product2', description:'Description2', price:100},
//     {id:3, title:'product3', description:'Description3', price:100},
//     {id:4, title:'product4', description:'Description4', price:100},
//     {id:5, title:'product5', description:'Description5', price:100},
//     {id:6, title:'product6', description:'Description6', price:100},
//   ])




//   function delProduct(id){
//     // setProducts(products.filter(product => {
//     //   if(product.id !== id){
//     //     return product
//     //   }
//     // }))

//     setProducts(products.filter(prod => prod.id !== id))
//   }


// function addProd(){
//   let newProd = {
//     id: products.length+1,
//     title:'product new',
//     description: 'Description new',
//     price: 100,
//   };
//   setProducts([...products, newProd])
// }

// const [edit, setEdit] = useState(null)

// const printProd = products.map(product => {
//   return(
//     <div className="product__card" key={product.id}>
//       <h4 className="product__title">{product.title}</h4>
//       <p className="product__desc">{product.description}</p>
//       <p className="product__price">{product.price}</p>
//       <button onClick={() => delProduct(product.id)}>Delete</button>
//       <button onClick={() => changeProd(product.id)}>Change Product</button>
//       <button onClick={() => changeProdItem(product.id)}>Change Product item</button>
//       <button onClick={() => setEdit(product.id)}>Edit elem</button>
//     </div>
//   )
// })


// function changeProd(id){
//   let newProd = {
//     id: id,
//     title:'product change',
//     description: 'Description change',
//     price: 100,
//   };
//   // setProducts(products.map(product => {
//   //   if (product.id === id){
//   //     return newProd
//   //   } else {
//   //     return product
//   //   }
//   // }))
//   setProducts(products.map(product => (product.id === id) ? newProd : product)) // Сначала условие после вопроса что будет если верно после двоиточия если не верно
// }


// function changeProdItem(id){
//   setProducts(products.map(product => (product.id === id) ? {...product, price: "со скидкой 80"} : product))
// }

// const [superProduct, setSuperProduct] = useState({
//   id: '',
//   title: "",
//   description:'',
//   price: 0,
// })

// function addItem(event){
//   event.preventDefault()
//   if(superProduct.title && superProduct.description){
//     setProducts([...products, {...superProduct, id: products.length+1}])
//   }
// }



// function getValue(prop){
//   return products.reduce((res, prod) => {
//     if (prod.id === edit){
//       return prod[prop]
//     } else {
//       return res
//     }
//   })
// }




// function changeItem(prop, event){
//   setProducts(products.map(product => {
//     if (product.id === edit){
//       return {...product, [prop]: event.target.value}
//     }else {
//       return product 
//     }
//   }))
// }



//   return(
//     <div>
//       {printProd}
//       <button onClick={addProd}>Add ro cart</button>
//       <hr />
//       <form action="">
//         <input type='text' value={superProduct.title} onChange={(event) => setSuperProduct({...superProduct, title: event.target.value})} />
//         <input type='text' value={superProduct.description} onChange={(event) => setSuperProduct({...superProduct, description: event.target.value})} />
//         <input type='text' value={superProduct.price} onChange={(event) => setSuperProduct({...superProduct, price: event.target.value})} />
//         <button onClick={addItem}>Add product from form</button>
//       </form>
//       <hr />




//       <h2>Форма редактирования</h2>
//     <form action="">
//       <input type='text' value={getValue('title')} onChange={(event) => changeItem('title', event)} />
//       <input type='text' value={getValue('description')} onChange={(event) => changeItem('description', event)} />
//       <input type='text' value={getValue('price')} onChange={(event) => changeItem('price', event)} />
//       <button onClick={addItem}>Edit product from form</button>

//     </form>
//     </div>
//   ) 
// }

// export default App;









// function App(){
//   const [obj,  setObj] =useState({
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3',
//   })

//   const [value, setValue] =useState('')



// function changeObj(){
//   if (value){
//     setObj({...obj, ...{prop1: value}})
//   }
// }


// function changeHandler(prop, event){
//   setObj({...obj, ...{[prop]: event.target.value}})
// }

// return (
//   <>
//   <p>{obj.prop1}</p>
//   <p>{obj.prop2}</p>
//   <p>{obj.prop3}</p>
//   <input type="text" value={value} onChange={(event) => setValue(event.target.value)}/>  
//   <button onClick={changeObj}>change</button>
//   <input type="text" value={obj.prop2} onChange={(event) => changeHandler("prop2", event)}/> 
//   <button onClick={changeObj}>change</button>
//   </>
// )
// }

// export default App;





// function App(){
//   const [todos, setTodos] = useState(['Wake up', 'Learn React', 'Work'])
//   const [editNum, setEditNum] = useState(null),
//   [value, setValue] = useState('');


// const printTodos = todos.map((todo, index) => {
//   return(
//     <div key={index} className='todo__block'>
//     <p className="todo__item" onClick={() => setEditNum(index)}>{todo}</p>
//     <div className="knopks_container">
//     <button className="knopkaDelete"onClick={() => delTodo(index)}>Delete</button>
//     </div>

//     </div>
//   )
// })


// function delTodo(index){
//   setTodos([...todos.slice(0, index), ...todos.slice(index+1)])
// }


// function changeItem(event){
//   setTodos([...todos.slice(0, editNum), event.target.value, ...todos.slice(editNum+1)])
// }

// function stopEdit(){
//   setEditNum(null);
// }

// function changeValue(event){
//   setValue(event.target.value)
// }


// function addTodo(){
//   setTodos([...todos, value])
// }
// let input;
// if (editNum || editNum === 0){
//   input = <input value={todos[editNum]} onChange={changeItem} onBlur={stopEdit}/>
// } else {
//   input = <input value={value} onChange={changeValue} onBlur={addTodo}/>
// }



//   return(
//     <>
//     {printTodos}
//     <div className="todo__block">
//       {input}
//     </div>
//     </>
//   )

// }


// export default App;












// function App(){
//   const [todos, setTodos] = useState(['Wake up', 'Learn React', 'Work'])
//   const [editNum, setEditNum] = useState(null)


//   const printTodos = todos.map((todo, index) => {
//     return (
//       <div key={index} className='todo__block'>
//         <p className="todo__item" onClick={() => setEditNum(index)}>{todo}</p>
//       </div>
//     )
//   })

//   function changeItem(event){
//     setTodos([...todos.slice(0, editNum), event.target.value, ...todos.slice(editNum+1)])
//   }

//   return(
//     <>
//     {printTodos}
//     <input type="text" value={todos[editNum]} onChange={changeItem}/>
//     </>
//   )
// }


// export default App;






















// function App(){
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7])

//   const result = notes.map((note, index) => {
//     return(
//       <div key={index}>
//         <p>{note}</p>
//         <button onClick={() => delItem(index)}>Delete</button>  
//         <button onClick={() => changeItem(index)}>Change</button>

//       </div>
//     )
//   })

//   function changeItem(index){
//     // let copy = Object.assign([], notes)
//     // copy[index] =124134;
//     // setNotes(copy)
//     // Или так
//     setNotes([...notes.slice(0, index), 12341324, ...notes.slice(index+1)])
//   }

//   function addItem(){
//     // let copy = Object.assign([], notes)
//     // copy.push(15)
//     // setNotes(copy)
//     // Или так
//     setNotes([...notes, value])
//   }

// function delItem(index){
//   // let copy = Object.assign([], notes);
//   // copy.splice(2, 1);
//   // setNotes(copy);
//   // Или так
//   // setNotes([...notes.slice(2 + 1)])// удалять по 3 элемента
//   // setNotes([...notes.slice(0, 2)])// удалять по 2 первых элемента
//   setNotes([...notes.slice(0, index), ...notes.slice(index + 1)])
// }


// function sortNotes(){
//   // let copy = Object.assign([], notes);
//   // или так 
//   let copy = [...notes]
//   copy.sort();
//   setNotes(copy);
// }

// let [value, setValue] = useState('')

//   return (
//     <>
//     {result}
//     <input type='text' value={value} onChange={(event) => setValue(event.target.value)}/>

//     <button onClick={addItem}>Add</button>  
//     <button onClick={() => delItem(2)}>Delete</button>  
//     <button onClick={sortNotes}>ыortNotes</button>
//     </>
//   )
// }

//export default App;

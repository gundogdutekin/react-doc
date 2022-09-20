import './style.scss'

function App() {

  const todos = ['Learn React', 'Learn Redux', 'Learn React-Redux'];
  const name = 'John Doe';
  const style={marginRight: '10px', color: 'red', fontSize: '20px',fontWeight: 'bold'}
  const btnClass = 'btn btn-primary';
  const btnClick = () => {  alert('Button Clicked')  };
  
  return (
   
    <main>
        <h1 tabIndex="1">{name}</h1>
        <label tabIndex="2" htmlFor="todo" style={style}>Add Todo:</label>
        <input tabIndex="3" type="text" id="todo" name="todo" />
        <button className={btnClass} onClick={btnClick}>Kaydet</button>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
    
  )
}

export default App;

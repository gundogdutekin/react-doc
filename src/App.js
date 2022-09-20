import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_API_URL}</h1>
     <img src="./logo192.png" alt="" />
     <img src={logo} alt="" />
    </div>
  );
}

export default App;

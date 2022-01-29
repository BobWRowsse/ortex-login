import { Home, NavBar } from "./components";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <h2>Hello World</h2>
      <div className='auth-wrapper'>
        <Home />
      </div>
    </div>
  );
}

export default App;

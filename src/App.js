import { Route, Routes } from "react-router-dom";
import { Home, Layout, Login, SignUp } from "./components";

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

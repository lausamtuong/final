import "./App.css";
import HomePage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes,Navigate   } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { Suspense } from "react";
import Main from "./Components/Main/Main";

function App() {
  return (
    <Suspense fallback={(<div>Loading</div>)}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage    />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;

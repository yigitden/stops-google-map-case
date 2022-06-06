import Login from "./pages/Login";
import Stops from "./pages/Stops";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Loading from "./components/Progress/Loading";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLogged ? (
              <Stops setIsLogged={setIsLogged} />
            ) : (
              <Login setIsLogged={setIsLogged} />
            )
          }
        />
        <Route
          path="stops"
          element={
            isLogged ? (
              <Stops setIsLogged={setIsLogged} />
            ) : (
              <Login setIsLogged={setIsLogged} />
            )
          }
        />
        <Route path="load" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

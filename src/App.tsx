import "./App.css";
import HomePage from "./HomePage/HomePage";
import FiltersBar from "./FiltersBar/FiltersBar";
import OrderPage from "./OrderPage/OrderPage";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FiltersBar />
                <HomePage />
              </>
            }
          />
          <Route
            path="/OrderPage"
            element={<OrderPage />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

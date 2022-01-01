import "./App.css";
import { useState } from "react";
import PayPal from "./components/PayPal";

function App() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="App">
      {checkout ? (
        <PayPal></PayPal>
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default App;

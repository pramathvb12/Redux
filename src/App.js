import "./App.css";
import Navbar from "./component/Navbar";
import Shop from "./component/Shop";
function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <h3 className="my-3">This is SBP</h3>
      <Shop />
    </div>
    </>
  );
}

export default App;

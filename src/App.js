import { Home } from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Home />
      <ToastContainer autoClose={1500}/>
    </>
  );
}

export default App;

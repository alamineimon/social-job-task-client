import { RouterProvider } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "./App.css";
import router from "./routes/Routes/Routes";


function App() {
  return (
    <div className="bg-white">
      <RouterProvider router={router}></RouterProvider>
      {/* <ToastContainer/> */}
    </div>
  );
}

export default App;

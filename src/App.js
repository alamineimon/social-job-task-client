import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes/Routes";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
          {/* <div className="blur" style={{top: '-18%', right: '0'}}></div>
    <div className="blur" style={{top: '42%', left: '-8rem'}}></div> */}
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;

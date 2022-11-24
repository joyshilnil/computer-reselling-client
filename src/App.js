import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Route";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;

import "./sass/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>App</h1>
        <button className="btn btn--animated">Add</button>
      </div>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

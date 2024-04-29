import './App.css'
import { Home } from './pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App


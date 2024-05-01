import './App.css'
import { Home } from './pages/Home.tsx'
import { Methods } from './pages/Methods.tsx'
import { NonlinearMethod } from './pages/NonlinearMethod.tsx'
import { Plot } from './pages/Plot.tsx'
import Error from './pages/Error.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "methods/",
    element: <Methods />,
  },
  {
    path: "methods/nonlinear/:method",
    element: <NonlinearMethod />,
  },
  {
    path: "methods/plot/plot_function",
    element: <Plot />,
  }
]);


function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App


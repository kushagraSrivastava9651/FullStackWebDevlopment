
import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import CommuneXHero from './components/CommuneXHero';

const router=createBrowserRouter(
  [
    {path:"/",
      element:
      <div>
          <Home/>
        <Navbar></Navbar>

      </div>
    
    },
     {path:"/about",
      element: <div>
          <About/>
        <Navbar></Navbar>

      </div>
    },
     {path:"/dashboard",
      element: <div>
          <Dashboard/>
        <Navbar></Navbar>

      </div>
    },
  ]
)
function App() {

  return (
   <div>
{/* <RouterProvider router={router}></RouterProvider> */}
<CommuneXHero></CommuneXHero>
   </div>
  )
}

export default App

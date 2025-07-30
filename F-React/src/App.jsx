import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Portfolio from './Components/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Notfound from './Components/Notfound/Notfound'
import Startframework from './Components/Startframework/Startframework'

// let x = createBrowserRouter([
//   {path:'', element:<Layout/>,children:[
//   {index:true, element:<Startframework/>},
//   {path:'About', element:<About/>},
//   {path:'Portfolio', element:<Portfolio/>},
//   {path:'Contact', element:<Contact/>},
//   {path:'*', element:<Notfound/>},
//   {path: 'Startframework' , element:<Startframework/>}
//   ]},
  
// ])

let x = createBrowserRouter([
  {
    path: '/Startframework',
    element: <Layout />,
    children: [
      { index: true, element: <Startframework /> },              
      { path: 'About', element: <About /> },                     
      { path: 'Portfolio', element: <Portfolio /> },            
      { path: 'Contact', element: <Contact /> },                 
      { path: '*', element: <Notfound /> }
    ]
  }
]);



function App() {


  return <RouterProvider router={x}></RouterProvider>
}

export default App

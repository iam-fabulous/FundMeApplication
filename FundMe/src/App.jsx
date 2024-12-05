import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Routes, useRoutes } from 'react-router-dom'
import { Router } from "../../FundMe/src/route/router.jsx"

// const routes = createBrowserRouter([...Route])

function App() {
 
  return (
    useRoutes(Router)
  )
}

export default App

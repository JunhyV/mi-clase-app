import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const root = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    }
])

export default root
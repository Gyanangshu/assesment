import React from 'react'

import { Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home/Home"
import Login from '../pages/Registration/Login';
import Signup from '../pages/Registration/Signup';
import Message from "../pages/Message/Message"
import ProtectedRoute from "./ProtectedRoute"

const Routers = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Navigate to='home' />} />
        <Route path='home' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>
        <Route
            path='message'
            element={
                <ProtectedRoute>
                    <Message />
                </ProtectedRoute>
            }
        />
      </Routes>
    </div>
  )
}

export default Routers

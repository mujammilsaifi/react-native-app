import React from 'react'
import { AuthProvider } from './context/authContext'
import ScreenMenus from './components/Menus/ScreenMenus'
import { PostProvider } from './context/postContext'

const RootNavigation = () => {
  return (
   <AuthProvider>
    <PostProvider>
    <ScreenMenus/>
    </PostProvider>
   </AuthProvider>
  )
}

export default RootNavigation
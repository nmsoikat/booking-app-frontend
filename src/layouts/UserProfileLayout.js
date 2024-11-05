import React from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import UserProfile from '../pages/UserProfile'

export default function UserProfileLayout() {
    return (
        <>
            <Navbar />
            <UserProfile />
            <Footer />
        </>
    )
}

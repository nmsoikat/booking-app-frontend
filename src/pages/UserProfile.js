import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
    const [user, setUser] = useState({});
    const profile_img = `${process.env.REACT_APP_PUBLIC_URL}/default-profile.jpeg`

    useEffect(() => {
        getUserProfile();
    }, [])

    const getUserProfile = async () => {
        const { data } = await axios.get('/customer/profile')
        setUser(data)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {/* Profile Picture */}
                <div className="flex justify-center mb-6">
                    <img
                        className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                        src={user?.profile_img || profile_img}
                        alt="Profile"
                    />
                </div>

                {/* User Info */}
                <div className="text-center mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {user?.first_name} {user?.last_name}
                    </h2>
                    <p className="text-gray-500">{user?.email}</p>
                </div>

                {/* Profile Details */}
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">First Name:</span>
                        <span className="text-gray-600">{user?.first_name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Last Name:</span>
                        <span className="text-gray-600">{user?.last_name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Email:</span>
                        <span className="text-gray-600">{user?.email}</span>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default UserProfile;

import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Event Management</h2>

      {/* Add navigation links */}
      <ul>
        <li className="mb-2">
          <Link to="/admin-dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin-dashboard/events" className="text-gray-300 hover:text-white">
            Events
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/" className="text-gray-300 hover:text-white">
            Go to Website
          </Link>
        </li>
      </ul>
    </div>
  )
}

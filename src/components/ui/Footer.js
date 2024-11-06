import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-orange-300 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear}  All rights reserved.
        </p>
      </div>
    </footer>
  )
}

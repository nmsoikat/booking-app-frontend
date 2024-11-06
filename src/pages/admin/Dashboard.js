import React from 'react'

export default function Dashboard() {
    return (
        <div className="flex-1 p-4">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Total sale</h3>
                    <p className="text-3xl font-bold text-blue-500">$0.00</p>
                </div>
            </div>

        </div>
    )
}

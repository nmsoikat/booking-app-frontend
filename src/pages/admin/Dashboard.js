import React from 'react'

export default function Dashboard() {
    return (
        <div className="flex-1 p-4">
            <h2 className="text-2xl font-semibold mb-4">Sales Overview</h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
                    <p className="text-3xl font-bold text-blue-500">$120,000</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Orders</h3>
                    <p className="text-3xl font-bold text-green-500">500</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Customers</h3>
                    <p className="text-3xl font-bold text-yellow-500">1,200</p>
                </div>
            </div>

        </div>
    )
}

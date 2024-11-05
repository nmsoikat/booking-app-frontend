import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EventPopupForm from './EventPopupForm';
import toast from 'react-hot-toast';

export default function AdminEventList() {
    const [eventList, setEventList] = useState([]);
    const [eventDetails, setEventDetails] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    useEffect(() => { getEventList() }, [])


    const getEventList = async () => {
        const { data } = await axios.get('/events')
        setEventList(data.rows)
    }

    const handleEdit = async (id) => {
        try {
            const { data } = await axios.get(`/admin/events/${id}`)
            setEventDetails(data)
            openModal()
            console.log("🚀 ~ data:", data);
        } catch (error) { }
    };

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`/admin/events/${id}`)
            toast.success("Event deleted successfully!")
        } catch (error) { }
    };

    return (
        <div className="container mx-auto my-8">
            <EventPopupForm isOpen={isModalOpen} onClose={closeModal} eventDetails={eventDetails} />

            <div className="flex justify-between items-start">
                <h1 className="text-4xl font-bold mb-8">
                    Events
                </h1>
                <button
                    onClick={openModal}
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                >
                    Create New Event
                </button>
            </div>
            <div className='bg-slate-50 py-3 px-3'>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left">No.</th>
                                <th className="px-6 py-3 text-left">Title</th>
                                <th className="px-6 py-3 text-left">Total Seat</th>
                                <th className="px-6 py-3 text-left">Sold Seat</th>
                                <th className="px-6 py-3 text-left">Start Time</th>
                                <th className="px-6 py-3 text-left">End Time</th>
                                <th className="px-6 py-3 text-left">Location</th>
                                <th className="px-6 py-3 text-left">Description</th>
                                <th className="px-6 py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventList.map((event, i) => (
                                <tr key={event.id} className="border-b border-gray-300 hover:bg-gray-100">
                                    <td className="px-6 py-4">{i + 1}</td>
                                    <td className="px-6 py-4">{event.title}</td>
                                    <td className="px-6 py-4">{event.total_seat}</td>
                                    <td className="px-6 py-4">{event.sold_out_seat}</td>
                                    <td className="px-6 py-4">{event.start_time}</td>
                                    <td className="px-6 py-4">{event.end_time}</td>
                                    <td className="px-6 py-4">{event.location}</td>
                                    <td className="px-6 py-4">{event.description}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => handleEdit(event.id)}
                                            className="mr-3 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(event.id)}
                                            className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

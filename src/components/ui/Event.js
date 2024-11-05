import React, { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Event({ event }) {
    const [thumbnail, setThumbnail] = useState('')

    useEffect(() => {
        const thumbnail = event.thumbnail ?
            `${process.env.REACT_APP_PUBLIC_EVENT_IMAGE}/${event.thumbnail}` :
            `${process.env.REACT_APP_PUBLIC_URL}/default-event-img.jpeg`;

        setThumbnail(thumbnail)
    }, [])

    const bookSeat = async () => {
        // alert('Do you want to by ticket!')
        try {
            const { data } = await axios.put(`/customer/events/reserve-seat/${event.id}`)
            toast.success('Event seat has booked successfully!')
        } catch (error) {

        }
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={thumbnail} alt={event.title} className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{event.title}</div>
                <div className="flex justify-between">
                    <p className="text-gray-700 text-base">
                        <span className='font-bold'>Total Seats: </span>
                        {event.total_seat}
                    </p>
                    <p className="text-gray-700 text-base">
                        <span className='font-bold'>Available Seats: </span>
                        {event.total_seat - event.sold_out_seat}
                    </p>
                </div>

                <div className="flex justify-between">
                    <p className="text-gray-700 text-base">
                        <span className='font-bold'>Start: </span>
                        {moment(event.start_time).format('MMMM Do YYYY')}
                    </p>
                    <p className="text-gray-700 text-base">
                        <span className='font-bold'>End: </span>
                        {moment(event.end_time).format('MMMM Do YYYY')}
                    </p>
                </div>

                <p className="text-gray-700 text-base">
                    <span className='font-bold'>Location: </span>
                    {event.location}
                </p>
                {/* <p className="text-gray-700 text-base">{event.description}</p> */}
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mb-3" onClick={bookSeat}>
                    Book A Seat
                </button>
            </div>
        </div>
    )
}

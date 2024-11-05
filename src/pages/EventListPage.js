import axios from 'axios';
import Event from '../components/ui/Event'
import React, { useEffect, useState } from 'react'

export default function EventListPage() {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        getEventList();
    }, [])

    const getEventList = async () => {
        const { data } = await axios.get('/events')
        setEventList(data.rows)
    }

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-4xl font-bold mb-8">Events</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventList.map((event) => (
                    <Event key={event.id} event={event} />
                ))}
            </div>
        </div>
    )
}

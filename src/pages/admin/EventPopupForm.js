import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const EventPopupForm = ({ isOpen, onClose, eventDetails }) => {
    // Form state
    const [formData, setFormData] = useState({
        title: '',
        total_seat: '',
        location: '',
        start_time: '',
        end_time: '',
        description: '',
        thumbnail: '',
    });

    useEffect(() => {
        setFormData({
            title: eventDetails.title || '',
            total_seat: eventDetails.total_seat || '',
            location: eventDetails.location || '',
            start_time: eventDetails.start_time || '',
            end_time: eventDetails.end_time || '',
            description: eventDetails.description || '',
            thumbnail: eventDetails.thumbnail || '',
        })
    }, [eventDetails])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle the submit logic here (e.g., send data to an API or update state)
        console.log('Form submitted:', formData);
        const newFormData = new FormData();
        newFormData.append("title", formData.title);
        newFormData.append("total_seat", formData.total_seat);
        newFormData.append("location", formData.location);
        newFormData.append("start_time", formData.start_time);
        newFormData.append("end_time", formData.end_time);
        newFormData.append("description", formData.description);
        newFormData.append("thumbnail", formData.thumbnail);

        try {
            const { data } = await axios.post('/admin/events', newFormData)
            console.log("🚀 ~ data:", data);
            toast.success('Event created successfully!')
            onClose(); // Close the form after submission
        } catch (error) { }

    };

    const handleCancel = () => {
        setFormData({
            title: '',
            total_seat: '',
            location: '',
            start_time: '',
            end_time: '',
            description: '',
            thumbnail: '',
        })
        onClose(); // Close the form without submitting
    };

    // Handle file input change (thumbnail upload)
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first file selected
        if (file) {
            setFormData((prevState) => ({
                ...prevState,
                thumbnail: file,
            }));
        }
    };

    // Image preview for the thumbnail
    // const thumbnailPreview = formData.thumbnail ? URL.createObjectURL(formData.thumbnail) : null;


    return (
        <>
            {/* Modal Background */}
            {isOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg w-full max-w-lg">
                        <h2 className="text-2xl font-semibold mb-6">Create New Event</h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                                    placeholder="Enter event title"
                                    required
                                />
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700">Total Seat</label>
                                    <input
                                        type="number"
                                        name="total_seat"
                                        min="1"
                                        value={formData.total_seat}
                                        onChange={handleChange}
                                        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="Enter Seats"
                                        required
                                    />
                                </div>

                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="Enter event location"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                    <input
                                        type="datetime-local"
                                        name="start_time"
                                        value={formData.start_date}
                                        onChange={handleChange}
                                        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                                    <input
                                        type="datetime-local"
                                        name="end_time"
                                        value={formData.end_date}
                                        onChange={handleChange}
                                        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                                    placeholder="Enter event description"
                                    rows="4"
                                    required
                                />
                            </div>

                            {/* Thumbnail File Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
                                <input
                                    type="file"
                                    name="thumbnail"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                                {/* Display image preview if thumbnail is selected */}
                                {/* {thumbnailPreview && (
                                    <div className="mt-3">
                                        <img
                                            src={thumbnailPreview}
                                            alt="Thumbnail Preview"
                                            className="w-32 h-32 object-cover rounded-lg"
                                        />
                                    </div>
                                )} */}
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EventPopupForm;

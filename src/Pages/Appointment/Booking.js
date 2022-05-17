import React from 'react';

const Booking = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p >10 space available</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Booking;
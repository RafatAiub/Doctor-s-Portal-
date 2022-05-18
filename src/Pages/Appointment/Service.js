import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl text-center">
                <div class="card-body">
                    <h2 class="font-bold text-center text-secondary">{name}</h2>
                    <p>{
                        slots.length
                            ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500 font-mono'>try another day</span>
                    }</p>
                    <p>{slots.length} {slots.length === 1 ? 'space' : 'spaces'} available</p>
                    <div class="card-actions justify-center">
                        <label
                            for="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            class="btn modal-button btn-secondary text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
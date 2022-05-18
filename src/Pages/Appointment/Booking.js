import { format } from 'date-fns';
import React from 'react';

const Booking = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setTreatment(null);
        console.log(_id, slot, name);
    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary pb-4">Booking For {name} on {format(date, 'PP')}</h3>

                    <form onSubmit={handleBooking} className='grid gap-3 grid-cols-1 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-accent w-full max-w-xs">
                            <option disabled selected>Please Pick a Session</option>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Patient Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="cell phone" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="SUBMIT" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn">okk</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Booking;
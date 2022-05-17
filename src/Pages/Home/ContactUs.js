import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section className='text-center pt-8 mb-10'
            style={{
                background: `url(${appointment})`
            }}>
            <h3 className='text-secondary font-bold'>Contact Us</h3>
            <p className='text-2xl text-white'>Stay Connected with US</p>

            <div className='py-6'>
                <input type="text" placeholder="Email Address" class="input input-bordered input-success w-full max-w-xs" />
                <br />
                <br />
                <input type="text" placeholder="Subject" class="input input-bordered input-success w-full max-w-xs" />
                <br />
                <br />
                <input type="text-area" placeholder="Your Message" class="input input-bordered input-success h-24 w-full max-w-xs" />
                <br />
                <br />

                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;
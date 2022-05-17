import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center mt-24 mb-24'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-6 w-80'>
                <h3 className='text-xl text-primary text-white font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white mt-4'>Make An Appointment Today</h2>
                <p className='text-white lg:w-96 py-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sit sunt dolorum! Quod ipsum illo molestias animi neque earum, nihil debitis similique culpa eligendi atque repellat nesciunt quae velit recusandae!</p>
                <PrimaryButton> GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
import React from 'react';
import PatientSays from './PatientSays';
import patient from '../../assets/images/people1.png'
import quote from '../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <>
            <div className='flex justify-between'>
                <div><h3 className='text-secondary font-bold text-lg'>Testimonial</h3>
                    <p className='text-3xl'>What Our Patient Says</p></div>
                <div><img className='w-24 lg:w-48' src={quote} alt="" /></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <PatientSays img={patient} name="Abdul Karim" place="Dhaka"></PatientSays>
                <PatientSays img={patient} name="Abdul Karim" place="Dhaka"></PatientSays>
                <PatientSays img={patient} name="Abdul Karim" place="Dhaka"></PatientSays>
            </div>
        </>
    );
};

export default Testimonial;
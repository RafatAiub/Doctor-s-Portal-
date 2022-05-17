import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import Service from './Service';

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, [])
    return (
        <div>
            <h2 className='text-2xl text-center text-secondary'> Available Appointments on {format(date, 'PP')}</h2>
            <div>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default AvailableAppoinments;
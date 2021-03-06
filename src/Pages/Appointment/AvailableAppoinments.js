import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import Service from './Service';

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <Booking
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></Booking>}

        </div>
    );
};

export default AvailableAppoinments;
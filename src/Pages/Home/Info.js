import React from 'react';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';
import InfoCard from './InfoCard';
const Info = () => {

    return (
        <div className=' grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 '>

            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cartTitle="Opening Hours" img={clock}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cartTitle="Our Locations" img={marker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cartTitle="Contact Us" img={phone}></InfoCard>

        </div>
    );
};

export default Info;
import React from 'react';
import ServiceCart from './ServiceCart';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import teeth from '../../assets/images/whitening.png'
const Service = () => {
    const services = [
        {
            _id: 101,
            name: "Fluoride Treatment",
            description: "",
            img: fluoride
        },
        {
            _id: 102,
            name: "Cavity Filling",
            description: "",
            img: cavity
        },
        {
            _id: 103,
            name: "Teeth Whitening",
            description: "",
            img: teeth
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
                <p className='text-primary font-mono font-extrabold text-xl'>OUR SERVICE</p>
                <h2 className=' text-2xl'>Services We Provide </h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <ServiceCart title="Fluoride Treatment" img={cavity}></ServiceCart>
                <ServiceCart title="Cavity Filling" img={fluoride}></ServiceCart>
                <ServiceCart title="Teeth Whitening" img={teeth}></ServiceCart>
            </div>
        </div>
    );
};

export default Service;
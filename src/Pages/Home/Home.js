import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Exception from './Exception';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Service from './Service';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Exception></Exception>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home; 
import React from 'react';

const ServiceCart = ({ img, title }) => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl p-4">
            <figure><img width={116} height={115} src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default ServiceCart;
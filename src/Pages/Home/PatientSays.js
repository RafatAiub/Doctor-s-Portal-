import React from 'react';

const PatientSays = ({ img, name, place }) => {
    return (
        <>
            <div class="card lg:max-w-lg  bg-base-100 shadow-xl gap-4 my-4">
                <div class="card-body">
                    <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio odit cumque facilis ab libero ipsam eos temporibus saepe praesentium corporis modi ratione voluptates placeat deleniti doloremque, id voluptatum quos fuga.</p>
                    <div class="card-actions justify-start ">
                        <img width={55} className="border-4 rounded-full border-secondary" src={img} alt="" />
                        <div className='py-1 font-mono '>
                            <h3 className='font-bold'>{name}</h3>
                            <p>{place}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PatientSays;
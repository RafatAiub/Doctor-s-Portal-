import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Exception = () => {
    return (
        <div className=' grid md:grid-cols-6  justify-items-center '>
            <div className='md:col-start-2 lg:col-start-3 lg:col-end-4  md:col-span-2'>
                <img className='rounded h-96' src={treatment} alt="" />
            </div>
            <div class="card bg-base-100 shadow-xl md:col-start-4 md:col-span-3 lg:col-start-4 lg:col-span-2">
                <div class="card-body">
                    <h2 class="card-title">Exceptional dental Care, On Your Terms</h2>
                    <p>In our cheerful dental practice, we offer high-quality dental care. Spearwood Dentist Dr Alexis Ong and her team provide gentle dentistry to all ages. Exceptional Dental Care is a full-service dental office. Therefore, you won't have to run all over town to get the dental treatments you want and need. Plus, our care is affordable.</p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exception;
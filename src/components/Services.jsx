import React from 'react'
import comp1 from '../assets/comp1.png'
import comp2 from '../assets/comp2.png'
import comp3 from '../assets/comp3.png'
import comp4 from '../assets/comp4.png'
import comp5 from '../assets/comp5.png'
import comp6 from '../assets/comp6.png'
import comp7 from '../assets/comp7.png'

const Services = () => {
    return(
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
            <div className='text-center my-8'>
                <h1 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h1>
                <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>
            </div>

            {/*company logo*/}

            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src={comp1} alt="" className='w-14'/>
                <img src={comp2} alt="" className='w-14'/>
                <img src={comp3} alt="" className='w-14'/>
                <img src={comp4} alt="" className='w-14'/>
                <img src={comp5} alt="" className='w-14'/>
                <img src={comp6} alt="" className='w-14'/>
                <img src={comp7} alt="" className='w-14'/>
            </div>


        </div>
    );
};

export default Services;
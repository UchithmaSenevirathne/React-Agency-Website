import React from 'react'
import comp1 from '../assets/comp1.png'
import comp2 from '../assets/comp2.png'
import comp3 from '../assets/comp3.png'
import comp4 from '../assets/comp4.png'
import comp5 from '../assets/comp5.png'
import comp6 from '../assets/comp6.png'
import comp7 from '../assets/comp7.png'
import members from '../assets/members.png'
import office from '../assets/office.png'
import clubs from '../assets/clubs.png'

const Services = () => {
    const services = [
        {id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments",
        image: members},
        {id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments",
            image: office},
        {id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments",
            image: clubs},
    ]

    return(
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
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

            {/*services card*/}
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h1 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your entire community in a single system</h1>
                <p className='text-neutralGrey'>Who is Nestcent suitable for?</p>
            </div>

            {/*cards*/}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div key={service.id}
                    className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300
                    flex items-center justify-center h-full'>
                        <div>
                            <div className='bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                                <img src={service.image} alt="" className='-ml-5'/>
                            </div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;
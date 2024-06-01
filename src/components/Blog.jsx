import React from 'react'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import { GoArrowRight } from 'react-icons/go'

const Blog = () => {
    const blogs = [
        {id:1, title:"Creating Streamlined Safeguarding Process with OneRen", image: blog1},
        {id:2, title:"What are your safeguarding responsibilities and how can you mange them?", image: blog2},
        {id:3, title:"Revamping the Membership Model with Triathlon Australia", image: blog3},
    ];

    return(
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>
                    Caring is the new marketing
                </h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto'>
                    The Nexcent blog is the best place to read about the latest membership insights,
                    trends and more. See who is joining the community, read about how our community are increasing
                    their membership income and lots more.
                </p>
            </div>

            {/*all blogs*/}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt='' className='rounded-xl hover:scale-95 transition-all duration-300'/>
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4
                        mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                            <div className='flex items-center gap-8 justify-center'>
                                <a href='' className='font-bold text-brandPrimary hover:text-neutral-700'>
                                    Readmore
                                    <GoArrowRight className='inline-block ml-2' />
                                </a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Blog;
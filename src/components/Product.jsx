import React from 'react'
import productImg from '../assets/product.png'
import comp1 from '../assets/comp1.png'
import comp2 from '../assets/comp2.png'
import comp3 from '../assets/comp3.png'
import comp4 from '../assets/comp4.png'
import comp5 from '../assets/comp5.png'
import comp6 from '../assets/comp6.png'
import maecenas from '../assets/maecenas.jpg'
import { GoArrowRight } from 'react-icons/go'

const Product = () => {
    return (
        <div>
            {/*product text*/}
            <div className='px-4 lg:px-24 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={productImg} alt='' className='w-[450px]' />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                            How to design your site footer like we did
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                            hbihvbfi fih fi hfdi bifb ifh iufhbuf hbfiv9rvugruyvbubidbvifybvfiuvbyivbib
                            chbuvbruvbfuvbfvyrbvirvbvbyruvbfuvbfuvbfuvbuvbhbv h hfbvufhbvuvbyuvbruvbvrbvi
                            vhbrvuhbfi f ifbvivubfivbufivb fiuvifubvifvb fivbfivufhvi ibvifbvibdv ifvubieuv
                            ivbivb irubviubvi nviubfivbivbifb ihbivbidfbviuhvoirnwvnwpvn ivbibvvrivuhvb ibvi
                            cjhbcihbvihbv fvhbivbivbivb fvihbivbrivb fjvhbiebvibvibvbie fhbviebrvibvirvb.
                        </p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>


            <div className='px-4 lg:px-24 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img src={maecenas} alt='' className='rounded w-[360px]'/>
                    </div>
                    {/*stats*/}
                    <div className='md:w-2/3 mx-auto'>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>
                                hbihvbfi fih fi hfdi bifb ifh iufhbuf hbfiv9rvugruyvbubidbvifybvfiuvbyivbib
                                chbuvbruvbfuvbfvyrbvirvbvbyruvbfuvbfuvbfuvbuvbhbv h hfbvufhbvuvbyuvbruvbvrbvi
                                vhbrvuhbfi f ifbvivubfivbufivb fiuvifubvifvb fivbfivufhvi ibvifbvibdv ifvubieuv
                                ivbivb irubviubvi nviubfivbivbifb ihbivbidfbviuhvoirnwvnwpvn ivbibvvrivuhvb ibvi
                                cjhbcihbvihbv fvhbivbivbivb fvihbivbrivb fjvhbiebvibvibvbie fhbviebrvibvirvb.
                                hbihvbfi fih fi hfdi bifb ifh iufhbuf hbfiv9rvugruyvbubidbvifybvfiuvbyivbib
                                chbuvbruvbfuvbfvyrbvirvbvbyruvbfuvbfuvbfuvbuvbhbv h hfbvufhbvuvbyuvbruvbvrbvi.
                            </p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                            <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                            <div>
                                <div className='flex items-center gap-8 flex-wrap'>
                                    <img src={comp1} alt="" className="cursor-pointer w-14" />
                                    <img src={comp2} alt="" className="cursor-pointer w-14" />
                                    <img src={comp3} alt="" className="cursor-pointer w-14" />
                                    <img src={comp4} alt="" className="cursor-pointer w-14" />
                                    <img src={comp5} alt="" className="cursor-pointer w-14" />
                                    <img src={comp6} alt="" className="cursor-pointer w-14" />
                                    <div className='flex items-center gap-8'>
                                        <a href='' className='font-bold text-brandPrimary hover:text-neutral-700'>
                                            Meet all customers
                                            <GoArrowRight className='inline-block ml-2'/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
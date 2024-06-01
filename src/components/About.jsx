import React from 'react'
import aboutImg from '../assets/about.png'

const About = () => {
    return(
        <div>
            {/*about text*/}
            <div className='px-4 lg:px-24 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={aboutImg} alt='' className='w-[450px]'/>
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                            hbihvbfi fih fi hfdi bifb ifh iufhbuf hbfiv9rvugruyvbubidbvifybvfiuvbyivbib
                            chbuvbruvbfuvbfvyrbvirvbvbyruvbfuvbfuvbfuvbuvbhbv h  hfbvufhbvuvbyuvbruvbvrbvi
                            vhbrvuhbfi f  ifbvivubfivbufivb fiuvifubvifvb fivbfivufhvi ibvifbvibdv ifvubieuv
                            ivbivb irubviubvi nviubfivbivbifb ihbivbidfbviuhvoirnwvnwpvn ivbibvvrivuhvb ibvi
                            cjhbcihbvihbv fvhbivbivbivb fvihbivbrivb fjvhbiebvibvibvbie fhbviebrvibvirvb.
                        </p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
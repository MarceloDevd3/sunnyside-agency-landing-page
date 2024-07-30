import React from 'react';

import Emily from './images/image-emily.jpg';
import Jennie from './images/image-jennie.jpg';
import Thomas from './images/image-thomas.jpg'

import img1Mobile from './images/mobile/01.jpg';
import img1Desk from './images/desktop/01.jpg';
import img2Mobile from './images/mobile/02.jpg';
import img2Desk from './images/desktop/02.jpg';
import img3Mobile from './images/mobile/03.jpg';
import img3Desk from './images/desktop/03.jpg';
import img4Mobile from './images/mobile/04.jpg';
import img4Desk from './images/desktop/04.jpg';


export default function TestimonialsSection() {
    return (
        <div>
            <section className='testimonials--row'>
            <h4 className='testimonials--title'>Client testimonials</h4>
                <div className='testimonials--container'>
                <article className='Card-test-1'>
                    <div className='circle--profile'>
                        <img src={Emily} alt="testomonials--image" />
                    </div>
                    <p className='sub--info'> We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                        </p>
                        <h5 className='profile--name'>
                        Emily R. <br/>  <br/> 
                            <span className='work--class'>
                            Marketing Director</span>
                        </h5>
                </article>

                <article className='Card-test-2'>
                    <div className='circle--profile'>
                        <img src={Thomas} alt="testomonials--image" />
                    </div>
                    <p className='sub--info'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
</p>
                        <h5 className='profile--name'>
                        Thomas S. <br/>  <br/> 
                            <span className='work--class'>
                            Chief Operating Officer</span>
                        </h5>
                </article>

                <article className='Card-test-3'>
                    <div className='circle--profile'>
                        <img src={Jennie} alt="testomonials--image" />
                    </div>
                    <p className='sub--info'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                        </p>
                        <h5 className='profile--name'>
                        Jennie F. <br/>   <br/> 
                            <span className='work--class'>
                            Business Owner</span>
                        </h5>
                </article>
                </div>
            </section>
            <section className='grid--img--container'>
                 <div className=' grid grid-img--area1'>
                    <img src={img2Mobile}  alt="banner--img" id="mobile"/>
                    <img src={img2Desk}  alt="banner--img" id="Desk"/>
                 </div>
                 <div className='grid grid-img--area2'>
                    <img src={img3Mobile}  alt="banner--img" id="mobile"/>
                    <img src={img3Desk}  alt="banner--img" id="Desk"/>
                 </div>
                 <div className='grid grid-img--area3'>
                    <img src={img1Mobile}  alt="banner--img" id="mobile"/>
                    <img src={img1Desk}  alt="banner--img" id="Desk"/>
                 </div>
                 <div className='grid grid-img--area4'>
                    <img src={img4Mobile}  alt="banner--img" id="mobile"/>
                    <img src={img4Desk}  alt="banner--img" id="Desk"/>
                 </div>
            </section>
        </div>
    )
}
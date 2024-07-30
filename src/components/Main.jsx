import React from 'react';
import ImageYellowMobile from "./images/mobile/image-transform.jpg";
import ImageYellowDesk from "./images/desktop/image-transform.jpg";
import ImagePinkMobile from "./images/mobile/image-stand-out.jpg";
import ImagePinkDesk from "./images/desktop/image-stand-out.jpg";
import ImageGreenMobile from "./images/mobile/image-graphic-design.jpg";
import ImageGreenDesk from "./images/desktop/image-graphic-design.jpg";
import ImageBlueMobile from "./images/mobile/image-photography.jpg";
import ImageBlueDesk from "./images/desktop/image-photography.jpg";


export default function GridContainer() {
  return (
    <>
      <main className='main-grid'>
        <article className='grid--item-1'>
          <div className='img-container'>
            <img src={ImageYellowMobile} alt="image-transform" id="mobile" />
            <img src={ImageYellowDesk} alt="image-transform" id="Desk" />
          </div>

        </article>
        <article className='grid--item-2 hi'>
          <h2 className='sunnySide--Agent-info'>Transform your brand</h2>
          <p className='sunnySide--Agency-info--text'>We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <div className='block-line'>
          <button className='btn-more'>Learn more</button>
          <div className='custom-line yellow'></div>
          </div>
        </article>
        <article className='grid--item-3'>
          <div className='img-container'>
            <img src={ImagePinkMobile} alt="image-transform" id="mobile" />
            <img src={ImagePinkDesk} alt="image-transform" id="Desk" />
          </div>
        </article>
        <article className='grid--item-4 hi'>
          <h2 className='sunnySide--Agent-info'>Stand out to the right audience</h2>
          <p className='sunnySide--Agency-info--text'> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
          </p>
          <div className='block-line'>
          <button className='btn-more'>Learn more</button>
          <div className='custom-line pink'></div>
          </div>
        </article>
          <article className='grid--item-5'>
            <div className='img-container'>
              <img src={ImageGreenMobile} alt="image-transform" id="mobile" />
              <img src={ImageGreenDesk} alt="image-transform" id="Desk" />

              <section className='transform--info info1'>
              <h3 className='transform--info--title'> Graphic design</h3>
              <p className='transform--info-sub-text'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
</p>
            </section>
            </div>

         
          </article>
          <article className='grid--item-6'>
            <div className='img-container'>
              <img src={ImageBlueMobile} alt="image-transform" id="mobile" />
              <img src={ImageBlueDesk} alt="image-transform" id="Desk" />
              <section className='transform--info info2'>
              <h3 className='transform--info--title'>Photography</h3>
              <p className='transform--info-sub-text'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
</p>
            </section>
            </div>

            
          </article>
      
      </main>
    </>
  )
}

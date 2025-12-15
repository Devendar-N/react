import { AboutUsImage } from '@images/index.js';
import "../styles/OurStory.css";
const OurStory = () => {
    return (
        <div className='about-us'>
            <div className="about-us-text">
                <div className="Our-story">Our Story</div>
                <div className="Our-story-content">
                    <div className="story-content">Launced in 2015, Exclusive is South Asia’s premier online shopping
                        makterplace with an active presense in Bangladesh. Supported by wide range of tailored
                        marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3
                        millioons customers across the region. </div>
                    <div className="story-content">Exclusive has more than 1 Million products to offer, growing at a very
                        fast. Exclusive offers a diverse assotment in categories ranging from consumer.</div>
                </div>
            </div>
            <div className="about-image"><img src={AboutUsImage} alt="" /></div>
        </div>
    )
}

export default OurStory
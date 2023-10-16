import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carausel() {
    return (
        <Carousel autoPlay={true} width={'100vw'} showIndicators={false} showThumbs={false} showArrows={true} infiniteLoop={true}>
            <div>
                <img className="custom-image img-fluid" src={"https://images.pexels.com/photos/7319146/pexels-photo-7319146.jpeg?auto=compress&cs=tinysrgb&w=4000"} alt={"image1"}/>
            </div>
            <div>
                <img className="custom-image img-fluid" src={"https://images.pexels.com/photos/3776166/pexels-photo-3776166.jpeg?auto=compress&cs=tinysrgb&w=4000"} alt={"image2"} />
            </div>
            <div>
                <img className="custom-image img-fluid" src={"https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=4000"} alt={'image3'}/>
            </div>
        </Carousel>
    );
}

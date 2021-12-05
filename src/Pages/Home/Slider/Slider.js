import { Container } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '500px' }}
                            src="https://da4dkroembtou.cloudfront.net/wp-content/uploads/2020/09/02_Maserati_MC20.jpg"
                            alt="First slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '500px' }}
                            src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349"
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '500px' }}
                            src="https://imgd.aeplcdn.com/0x0/n/cw/ec/56265/f-pace-exterior-right-front-three-quarter-2.jpeg
                            "
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Slider;
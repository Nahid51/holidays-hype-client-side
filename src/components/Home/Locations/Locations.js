import React from 'react';
import { Card } from 'react-bootstrap';
import './Locations.css'

const Locations = () => {
    return (
        <div>
            <div className='mt-5 text-center'>
                <h3 className='fw-bold spot-h3'>Our Top Rated {" "}<span style={{ color: "#7AB259" }}>Spots</span></h3>
                <Card className='border-setup'>
                    <Card className='border-0 mt-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/kM78sbH/d11-1.jpg" />
                    </Card>
                    <Card className='border-0 mt-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/HNRH8Vs/l4.jpg" />
                    </Card>
                    <Card className='border-0 mt-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/VqTCXRX/d7-1.jpg" />
                    </Card>
                    <Card className='border-0 mt-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/ckLvFqq/b9.jpg" />
                    </Card>
                    <Card className='border-0 mt-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/3rxXDhK/b5.jpg" />
                    </Card>
                    <Card className='border-0 mt-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/qFKR7zB/b3.jpg" />
                    </Card>
                    <Card className='border-0 mt-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/vVJ2SgP/b6.jpg" />
                    </Card>
                    <Card className='border-0 mt-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/Sn7vMVj/d8-1.jpg" />
                    </Card>
                </Card>
            </div>
        </div>
    );
};

export default Locations;
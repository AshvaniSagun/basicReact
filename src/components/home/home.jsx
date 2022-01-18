import React from 'react';
import goAround from '../../assets/goAround.jpg';
import scene from '../../assets/scene.jpg';
import adventure from '../../assets/adventure.jpg';
import '../home/home.scss';
class Home extends React.Component {
   
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }


    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={adventure} className="carrousil-image" alt="image_1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Adventure</h5>
                            <p>Life is an Adventure.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={goAround} className="carrousil-image" alt="image_2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Merry Go Round</h5>
                            <p>This indicates the circle of life.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={scene} className="carrousil-image" alt="image_3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>The Road Not Taken</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export { Home }; 
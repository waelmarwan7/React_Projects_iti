import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

class Slider extends Component {
    constructor() {
        super();
        this.state = null;
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                this.setState(data);
            });
    }

    render() {
        if (this.state == null) {
            return (
                <div style={{ display: 'flex' }}>
                    <h1 style={{ width: '12%', color: "white" }}>Loading....</h1>
                    <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" style={{ color: "#74C0FC", marginTop: '2%' }} />
                </div>
            );
        }

        return (
            <>
                {console.log(this.state)}
                <div className='container w-50' style={{height:'50% !important'}}>
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={'https://image.tmdb.org/t/p/w500/'+this.state.results[0].poster_path} className="d-block w-100 " alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={'https://image.tmdb.org/t/p/w500/'+this.state.results[1].poster_path} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={'https://image.tmdb.org/t/p/w500/'+this.state.results[2].poster_path} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
            </>
        );
    }
}

export default Slider;

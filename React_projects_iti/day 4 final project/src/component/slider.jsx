import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Movie from './movie';


class Slider extends PureComponent {
    constructor() {
        super();
        this.state = {
            movies: [] // Initialize state as an object with movies array
        };
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
                this.setState({ movies: data.results }); // Update state correctly
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    render() {
        const { movies } = this.state;

        if (movies.length === 0) {
            return (
                <div style={{ display: 'flex' }}>
                    <h1 style={{ width: '12%', color: "white" }}>Loading....</h1>
                    <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" style={{ color: "#74C0FC", marginTop: '2%' }} />
                </div>
            );
        }

        // Ensure that the movies array has enough items before accessing them
        return (
            <>
                <div className='container'>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-inner">
                                <div className="carousel-item active d-flex">
                                    {movies.filter((movie) => movie.title.includes('h')).map((u)=><Movie {...u}></Movie>)}
                                </div>
               
                                {/* <div className="carousel-item d-flex" >
                                     {movies.filter((movie) => movie.title.includes('h')).map((u)=><Movie {...u}></Movie>)}
                                </div>
                                <div className="carousel-item d-flex">
                                     {movies.filter((movie) => movie.title.includes('b')).map((u)=><Movie {...u}></Movie>)}
                                </div> */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon btn btn-dark"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon btn btn-dark"></span>
                        </button>
                    </div>
                </div>
            </>
        );
    }

}

export default Slider;

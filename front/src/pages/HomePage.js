import React from "react";
import './../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <div class="HomePage">
            <div class="banners">
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="img/home/banner-1.png" class="d-block w-100" alt="banner-1"/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="img/home/banner-2.png" class="d-block w-100" alt="banner-2"/>
                        </div>
                        <div class="carousel-item">
                            <img src="img/home/banner-3.png" class="d-block w-100" alt="banner-3"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="nosotros">
                <div id="texto">
                    <h1>NOSOTROS</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                </div>
                <img src="img/home/nosotros_img.png" alt="nosotros-img"/>
            </div>
        </div>
    );
}

export default HomePage;
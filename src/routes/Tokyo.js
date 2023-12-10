import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../stylesheets/tokyo.css"

function Tokyo() {
    return (
        <>
            <Navbar />
            <header className="thead-mid">
                <h1 className="thead-text">Tokyo</h1>
                <p className="thead-p">Explore the Beauty of Tokyo</p>
            </header>
            <div className="container mt-4">
                <h2>Welcome to Tokyo!</h2>
                <p>Tokyo, the capital city of Japan, is a vibrant metropolis where modernity and tradition coexist. From futuristic skyscrapers to historic temples, Tokyo offers a unique blend of experiences for every traveler.</p>
                <h2>Explore Tokyo's Landmarks</h2>
                <div className="row">
                    <div className="col-11 col-md col-lg-6 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Shibuya" class="card-img-top img-fluid" alt="Images" />
                            <div className="card-body text-center">
                                <p className="card-text">Visit the iconic Shibuya Crossing, one of the busiest pedestrian crossings in the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md col-lg-6 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Asakusa" class="card-img-top img-fluid" alt="Images" />
                            <div className="card-body text-center">
                                <p className="card-text">Experience the traditional side of Tokyo in Asakusa, home to the historic Senso-ji Temple.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Indulge in Tokyo's Culinary Delights</h2>
                    <p>Explore the diverse and delicious world of Japanese cuisine, from sushi and ramen to street food delights.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tokyo
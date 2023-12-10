import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../stylesheets/italy.css"

function Italy() {
    return (
        <>
            <Navbar />
            <header className="ihead-mid">
                <h1 className="ihead-text">Italy</h1>
                <p className="ihead-p">Explore the Beauty of Italy</p>
            </header>
            <div className="container mt-4">
                <h2>Welcome to Italy!</h2>
                <p>Italy, a country in Southern Europe, is known for its rich history, art, culture, and cuisine. From the ancient ruins of Rome to the beautiful canals of Venice, Italy offers a diverse and enchanting experience for travelers.</p>
                <h2>Discover the Charm of Italian Cities</h2>
                <div className="row">
                    <div className="col-11 col-md col-lg-6 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Rome" class="card-img-top img-fluid" alt="Images" />
                            <div className="card-body text-center">
                                <p className="card-text">Explore the historic streets of Rome and marvel at iconic landmarks like the Colosseum and Vatican City.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md col-lg-6 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Venice" class="card-img-top img-fluid" alt="Images" />
                            <div className="card-body text-center">
                                <p className="card-text">Experience the romantic atmosphere of Venice with its charming canals and historic architecture.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Savor Italian Cuisine</h2>
                    <p>Indulge in the delicious flavors of Italian cuisine, from authentic pasta and pizza to exquisite wines and gelato.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Italy
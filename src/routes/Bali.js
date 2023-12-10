import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../stylesheets/bali.css"

function Bali() {
    return (
        <>
            <Navbar />
            <header className="bhead-mid">
                <h1 className="bhead-text">Bali</h1>
                <p className="bhead-p">Explore the Beauty of Bali</p>
            </header>
            <div className="container mt-4">
                <h2>Welcome to Bali!</h2>
                <p>Bali, an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. Immerse yourself in the vibrant culture, lush landscapes, and spiritual ambiance of Bali.</p>
                <h2>Explore Bali's Natural Wonders</h2>
                <div className="row">
                    <div className="col-11 col-md col-lg-6 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Ubud" class="card-img-top img-fluid" alt="Images" />
                            <div className="card-body text-center">
                                <p className="card-text">Visit the cultural heart of Bali in Ubud, surrounded by lush rice terraces and traditional crafts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md col-lg-6 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Kuta" class="card-img-top img-fluid" alt="Images" />
                            <div className="card-body text-center">
                                <p className="card-text">Experience the vibrant nightlife and famous beaches in Kuta, perfect for surf enthusiasts and sun-seekers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Immerse Yourself in Balinese Culture</h2>
                    <p>Participate in traditional ceremonies, witness captivating dance performances, and savor the unique flavors of Balinese cuisine.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Bali
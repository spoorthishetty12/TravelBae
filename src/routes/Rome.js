import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../stylesheets/rome.css"

function Rome() {
    return (
        <>
            <Navbar />
            <header className="rhead-mid">
                <h1 className="rhead-text">Rome</h1>
                <p className="rhead-p">Explore the Beauty of Rome</p>
            </header>
            <div className="container mt-4">
                <h2>Welcome to Rome!</h2>
                <p>Rome, the capital city of Italy, is a treasure trove of history, art, and culture. From ancient wonders like the Colosseum to the splendor of the Vatican City, Rome is a destination that captivates visitors with its timeless beauty.</p>
                <h2>Explore the Rich History</h2>
                <div className="row">
                    <div className="col-11 col-md col-lg-6 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Colosseum" class="card-img-top img-fluid" alt="Images" />
                            <div className="card-body text-center">
                                <p className="card-text">Step back in time as you visit the iconic Colosseum, a symbol of ancient Roman engineering and entertainment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md col-lg-6 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src="https://placehold.co/600x400/EFEFEF/grey?text=RomanForum" class="card-img-top img-fluid" alt="Images" />
                            <div className="card-body text-center">
                                <p className="card-text">Explore the ruins of the Roman Forum, where political, religious, and commercial activities once thrived.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Experience Vatican City</h2>
                    <p>Discover the artistic and spiritual treasures of Vatican City, including St. Peter's Basilica and the Sistine Chapel</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Rome
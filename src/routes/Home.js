import React from 'react'
import Header from "../components/Header";
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import data from "../components/CardItem"
import Footer from '../components/Footer';
import "../styles.css"

function Home() {
   
    return (
        <>
            <div class="home-container">
                <Navbar />
                <div className="home-text-section">
                    <Header
                        cName="header-mid"
                        title="Welcome to TravelBae"
                        tagline="Explore exciting destinations with us!"
                    />
                </div>
                <h3 className="text-center mt-3">Featured Destinations</h3>
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {data.cardData.map((item, index) => {
                            return (
                                <Card img={item.img} title={item.title} desc={item.desc} key={index} />
                            )
                        })}
                    </div>
                </section>
            </div>
            <div className = "p-5 overflow-hidden h-100 shadow">
                <h1>Discover More</h1>
                <p>Explore our handpicked destinations and create memories that last a lifetime.</p>
                <a href="./Destinations"><button class="btn btn-primary">Veiw All Destinations</button></a>
            </div>
            <Footer />
        </>
    )
}

export default Home;
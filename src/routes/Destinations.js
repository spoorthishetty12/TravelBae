import Header from "../components/Header";
import Navbar from "../components/Navbar"
import destinationData from "../components/destinationCardItem"
import DestCard from "../components/destCard";
import Footer from "../components/Footer";

function Destinations() {
    return (
        <>
            <div class="home-container">
                <Navbar />
                <div className="home-text-section">
                <Header
                cName="header-mid"
                title="Explore Our Destinations"
            />
                </div>
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {destinationData.cardData.map((item, index) => {
                            return (
                                <DestCard img={item.img} title={item.title} desc={item.desc} btn={item.btnName} key={index} />
                            )
                        })}
                    </div>
                </section>
            </div>
            <div>
            <Footer />
            </div>
        </>
    )
}

export default Destinations;
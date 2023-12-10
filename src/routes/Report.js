import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../stylesheets/report.css"

function Report() {
    return (
        <>
            <Navbar />
            <header className="report-head-mid">
                <h1 className="report-head-text">Travel Report</h1>
                <p className="report-head-p">Explore insights and statistics about our travel destinations.</p>
            </header>
            <div className="body">
                <h2 className="pr">Destinations Overview</h2>
                <p className="pr">Here is a summary of key information about our travel destinations:</p>
                <ul className="pr">
                    <li>Total Number of destinations: 4</li>
                    <li>Most popular destination: Bali</li>
                    <li>Total number of visitors: 100</li>
                </ul>
                <div>
                        <h2>Customer Feedback</h2>
                        <p>Read what our customers have to say about their travel experiences:</p>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>"I had an amazing time exploring Rome. The sights were breathtaking, and the people were so welcoming. Definitely a trip to remember!"</p>
                                <footer className="blockquote-footer">
                                    John Doe
                                </footer>
                            </blockquote>
                        </div>
                        <div className="mt-4">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>"The travel arrangements were seamless, and the recommended activities in Bali were spot on. Thank you for a fantastic experience!"</p>
                                    <footer className="blockquote-footer">
                                        Jane Smith
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Report;
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
    const navigate = useNavigate()
    const handleClick = (title) =>{
        if(title === "Italy"){
            navigate("/italy")
        }else if(title === "Tokyo"){
            navigate("/tokyo")
        }else{
            navigate("/bali")
        }
    }
    return (
        <div className = "col-11 col-md col-lg-4 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top img-fluid" alt="Images"/>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-primary" onClick = {()=>{handleClick(props.title)}}>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
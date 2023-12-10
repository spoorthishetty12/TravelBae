import "./HeaderStyle.css"

function Header(props) {
    return (
        <>
                <div className={props.cName}>
                    <h1>{props.title}</h1>
                    <p>{props.tagline}</p>
                </div>
        </>
    )
}

export default Header;
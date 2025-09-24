const Card = (props) => {
    return (
        <div className="card">
                <img className='card-image' src={props.link} />
                <div className="card-content">
                <h2>
                    {props.name}
                </h2>
                <h3>
                    {props.cuisine}
                </h3></div>
        </div>
    )
}
export default Card;
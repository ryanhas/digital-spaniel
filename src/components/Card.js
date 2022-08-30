
const Card = ({testimonial, active}) => {
    return (
        <div className={`card ${active ? 'card-active' : ''}`}>
            <p className="card-comment">{testimonial.comment}</p>          
            <img className="card-photo" src={`/assets/${testimonial.photo}.png`}/>
            <p className="card-author">{testimonial.author}</p>
            <p className="card-role">{testimonial.role}</p>
        </div>
    )
}

export default Card;
import './Card.css'

export default function Card(props) {
    console.log(props)
    return (
        <div className="card-style">
            <img className='poster' src={props.item.portada} alt="" />
            <div className='d-flex'>
                <h2>{props.item.titulo}</h2>
            </div>
        </div> 
    )
}
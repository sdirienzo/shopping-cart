// import './Card.css';

function Card({ id, name, price, imageUri, onClick }) {

    const handleClick = () => {
        onClick(id);
    }

    return (
        <article className={'card'} onClick={handleClick}>
            <figure className='cardFigure'>
                <img className='cardImage' src={imageUri} alt='' />
                <figcaption className='cardCaption'>
                    <p>{name}</p>
                    <p>{price}</p>
                </figcaption>
           </figure>
        </article>
    );
}

export default Card;
import './Button.css';

function Button({ classList, text }) {
    return (
        <button className={`btn ${classList}`}>{text}</button>
    );
}

export default Button;
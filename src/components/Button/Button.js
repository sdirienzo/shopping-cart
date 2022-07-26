import './Button.css';

function Button({ classList, text, onClick }) {
    return (
        <button className={`btn ${classList}`} onClick={onClick}>{text}</button>
    );
}

export default Button;
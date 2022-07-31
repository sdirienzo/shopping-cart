import Button from "../Button/Button";

function SubtractButton({ onClick }) {
    return (
        <Button classList={'btn-subtract'} text={'-'} onClick={onClick} />
    );
}

export default SubtractButton;
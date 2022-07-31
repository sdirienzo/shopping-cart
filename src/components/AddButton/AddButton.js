import Button from "../Button/Button";

function AddButton({ onClick }) {
    return (
        <Button classList={'btn-add'} text={'+'} onClick={onClick} />
    );
}

export default AddButton;
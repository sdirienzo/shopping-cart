import Button from "../Button/Button";

function AddToCartButton({ onAdd }) {
    return (
        <Button classList={'btn-secondary'} text={'ADD TO CART'} onClick={onAdd} />
    );
}

export default AddToCartButton;
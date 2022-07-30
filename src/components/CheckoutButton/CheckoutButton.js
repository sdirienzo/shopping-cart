import Button from "../Button/Button";

function CheckoutButton({ onAdd }) {
    return (
        <Button classList={'btn-secondary'} text={'CHECKOUT'} onClick={onAdd} />
    );
}

export default CheckoutButton;
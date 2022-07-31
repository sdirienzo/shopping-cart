import SubtractButton from '../SubtractButton/SubtractButton';
import AddButton from '../AddButton/AddButton';
import styles from './QuantitySelector.module.css';

function QuantitySelector({ quantity, onAdd, onSubtract }) {
    return (
        <div className={styles.quantitySelector}>
            <SubtractButton onClick={onSubtract} />
            <input readOnly className={styles.quantitySelectorInput} type="number" value={quantity} />
            <AddButton onClick={onAdd} />
        </div>
    );
}

export default QuantitySelector;
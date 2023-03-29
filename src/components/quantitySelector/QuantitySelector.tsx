
import './selector.css';

interface Quantity {
    quantity: number
    setQuantity: (quantity: number) => void;
}

const QuantitySelector = ({ quantity, setQuantity }: Quantity) => {

    const handleCLickPlus = () => {
        if(quantity < 10){
            setQuantity(quantity + 1)
        }
        
    }

    const handleCLickMin = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
        
    }


  return (

    //readOnly => eto dlya udaleniye krayniye knobki

    <div className='selector'> 
        <button className='selector_min btn' onClick={handleCLickMin}>-</button>
        <input className='selector_input' type="number" min={1} max={10} value={quantity} readOnly />
        <button className='selector_plus btn' onClick={handleCLickPlus}>+</button>
    </div>
  )
}

export default QuantitySelector
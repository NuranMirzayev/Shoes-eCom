import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { removeItem } from '../../features/ShoppingCart/CartSlice';


import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import QuantitySelector from '../quantitySelector/QuantitySelector';



const Items = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [selectSize, setSelectSize] = useState<string>('');
    const [quantity, setQuantity] = useState(1)


    const handleRemoveCart = (id: number) => {
        dispatch(removeItem(id));
    };

    return (
        <>
            {
                cartItems.map(item => (
                    <div key={item.id} className="topBox">
                        <div className="topBox_left">
                            <img className="cartImg" src={"./assets/AllProductsImg/" + item.mainImg + ".png"} alt={item.name} />
                        </div>
                        <div className="topBox_right">

                            <div>
                                <h2>{item.name}</h2>
                                <p>Price:{(item.price * quantity).toFixed(2) } </p>
                                <p >Size:{selectSize}</p>
                                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                                {/* <div className='selector'>
                                    <button className='selector_min btn' onClick={handleCLickMin}>-</button>
                                    <input className='selector_input' type="number" min={1} max={10} value={quantity} readOnly />
                                    <button className='selector_plus btn' onClick={handleCLickPlus}>+</button>
                                </div> */}
                            </div>
                            <IconButton
                                sx={{ fontSize: '10px' }}
                                onClick={() => handleRemoveCart(item.id)}
                                className="testSpan"
                                color="inherit"
                            >
                                <ClearIcon />
                            </IconButton>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Items
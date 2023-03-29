
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Items from './Items';
import './side.css';
import { calcTotalPrice } from '../../utils/constants';


interface SideModal {
    cartOpen: boolean;
    setCartOpen: (cartOpen: boolean) => void;
}



const SideModals = ({ setCartOpen, cartOpen }: SideModal) => {

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalPrice = calcTotalPrice(cartItems);

    return (
        <div className={`window_cart ${cartOpen && "active"}`}>
            <Button onClick={() => setCartOpen(false)} className="p_delete" color="inherit">
                <ArrowBackIcon />
            </Button>
            <div className='scroll_box'>
                {cartItems.length === 0 ? (
                    <h2>Your cart is empty.</h2>
                )
                    :
                    <Items />
                }
            </div>

            <div className="bottomBox">

                <div className='amount_box'>
                    <h3 >Total: ₪
                        {totalPrice.toFixed(2)}
                    </h3>
                    <h4>Delivery: Free</h4>
                </div>

            <Button
                disableElevation variant="contained"
                aria-label="Disabled elevation buttons"
                className='textBtn'
                sx={
                    {
                        color: '#CD3333',
                        fontWeight: '600',
                        backgroundColor: '#white',
                        width: '50%',
                        margin: "0 auto",
                        marginBottom: '6px'
                    }
                }
                color='inherit'
            >
                CheckOut
            </Button>
            <Button
                disableElevation variant="contained"
                aria-label="Disabled elevation buttons"
                className='textBtn'
                sx={
                    {
                        color: '#CD3333',
                        fontWeight: '600',
                        backgroundColor: 'white',
                        width: '50%',
                        margin: "0 auto"
                    }
                }
                color='inherit'
            >
                Continue Shopping
            </Button>
        </div>

        </div >
    )
}

export default SideModals
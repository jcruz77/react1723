import cart from './assets/bag.png'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='cart' className='bag'/>
            <a className='cartCount'>0</a>
        </div>
    )
}

export default CartWidget
export default function Product({img, category, order_description, price}) {
    return(
    <div>
        <div className="grid-container">
            <div className="order-card">
                <div className="img-container">
                    <img className="order-img" src={img} alt="some pastry" />
                    <button className="add-to-cart-btn">
                    <i className="fa-solid fa-cart-plus" alt="add-to-cart-btn"> Add to Cart</i>
                    </button>
                </div>

                <div className="order-info">
                    <p className="category">{category}</p>
                    <h3 className="order-description">{order_description}</h3>
                    <p className="price">{price}</p>
                </div>
            </div>
        </div>    
    </div>
    )
}
// {title, date, desc}
// img, title, category, order-description, price
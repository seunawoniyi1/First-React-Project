import CartColumn from "../components/cart-column";
import Product from "../components/product";
import burger_img from "./images/burger.jpg";
import vanilla_img from "./images/vanilla.jpg";
import macaron_img from "./images/macaron.jpg";
import tiramisu_img from "./images/tiramisu.jpg";
import baklava_img from "./images/baklava.jpg";
import pie_img from "./images/pie.jpg";
import cake_img from "./images/cake.jpg";
import brownie_img from "./images/brownie.jpg";
import cotta_img from "./images/cotta.jpg";

export default function App() {
  return(
    <>
      <main className="container">
        <div className="products-section">
          <h1 className="main-title">Desserts</h1>
          <section className="desserts-column">
            <Product img={burger_img} category= {"waffle"} 
            order_description= {"Waffle with Berries"} price={"$6.50"} />
            <Product img={vanilla_img} category= {"Creme Brulee"} 
            order_description= {"Vanilla Bean Creme Brulee"} price={"$7.00"} />
            <Product img={macaron_img} category= {"Macaron"} 
            order_description= {"Macaron Mix of Five"} price={"$8.00"} />
            <Product img={tiramisu_img} category= {"Tiramisu"} 
            order_description= {"Classic Tiramisu"} price={"$5.50"} />
            <Product img={baklava_img} category= {"Baklava"} 
            order_description= {"Pistachio Baklava"} price={"$4.00"} />
            <Product img={pie_img} category= {"Pie"} 
            order_description= {"Lemon Meringue Pie"} price={"$5.00"} />
            <Product img={cake_img} category= {"Cake"} 
            order_description= {"Red Velvet Cake"} price={"$4.50"} />
            <Product img={brownie_img} category= {"Brownie"} 
            order_description= {"Salted Caramel Brownie"} price={"$5.50"} />
            <Product img={cotta_img} category= {"Panna Cotta"} 
            order_description= {"Vanilla Panna Cotta"} price={"$6.50"} />
          </section>
        </div>
    
        <div className="cart-column">
          <CartColumn />
        </div>
      </main>
    </>
  )
}
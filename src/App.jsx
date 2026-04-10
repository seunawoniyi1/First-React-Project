import CartColumn from "../components/cart-column";
import Product from "../components/product";
import burgerimg from "./images/burger.jpg";

export default function App() {
  return(
    <>
      <main className="container">
        <h1 className="main-title">Desserts</h1>
        <section className="desserts-column">
          <Product img={burgerimg} category= {"waffle"} 
          order_description= {"Waffle with Berries"} price={"$6.50"} />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </section>
    
        <aside className="cart-column">
          <CartColumn />
        </aside>
      </main>
    </>
  )
}
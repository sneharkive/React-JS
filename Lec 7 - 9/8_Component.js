import {createRoot} from "react-dom/client"
import './8_Component.css'


function Card(props) { //here order don't matter 
  const {key, title, img, brand, price} = props //destructing
  return (
  <div className="card" key={key}>
    <img src={image} alt="" />
    <div className="card-content">
      <h4> {title} </h4>
      <p>{brand}</p>
      <p><b>${price}</b></p>
    </div>
  </div>
  )
}


const root = createRoot(document.querySelector('#root'))


fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
            />
          )
        })}
      </div>
    )

  })



// root.render({
//   $$typeof: Symbol.for('react.element'),
//   type: Card,
//   ref: null,
//   props: {
//     title: 'iPhone 13',
//     image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     brand: 'Apple',
//     price: 899,
//     key: 12
//   }
// })
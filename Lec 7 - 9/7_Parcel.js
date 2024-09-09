import {createRoot} from "react-dom/client"
import './7_Parcel.css'


function Card(key, img, productName, brandName, price) {  //here order matters
  return (
  <div className="card" key={key}>
    <img src={img} alt="" />
    <div className="card-content">
      <h4> {productName} </h4>
      <p>{brandName}</p>
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
    // console.log(container2);
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return Card(
            product.id, 
            product.thumbnail, 
            product.title, 
            product.brand, 
            product.price
          )
        })}
      </div>
    )

  })





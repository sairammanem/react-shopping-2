import { useState } from "react";
import "./App.css";
import Card from "./card";

function App() {
  let products = [
    {
      id: 1,
      name: "Product 1",
      price: 24,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3,
    },
    {
      id: 2,
      name: "Product 2",
      price: 600,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3,
    },
    {
      id: 3,
      name: "Product 3",
      price: 98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3,
    },
    {
      id: 4,
      name: "Product 4",
      price: 1450,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3,
    },
    {
      id: 5,
      name: "Product 5",
      price: 984,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3,
    },
    {
      id: 6,
      name: "Product 6",
      price: 145,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3,
    },
  ];
  const [cart,setcart]= useState([])
  const [total,settotal]= useState(0)

  let addtocart = (Product) => {
    setcart([...cart,Product])
    settotal(total + Product.price)
  }
let removecart =(item) => {
 setcart(cart.filter(obj => obj.id !== item.id ))
 settotal(total - item.price)
}
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
              {
                cart.map((item)=>{
                  return   <div className="list-group-item">{item.name} - {item.price}
                  <span className="btn btn-sx btn-danger" onClick={()=>{
                    removecart(item)
                  }}>X</span>
                  </div>
                })
              }
              
            </div>
            <h3>Total-{total}</h3>
          </div>
          <div className="col-lg-9">
            <div className="row">
             {
               products.map((Product) => {
                 return <Card productdata = {Product}  handelcart={addtocart}></Card>
               })
             }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

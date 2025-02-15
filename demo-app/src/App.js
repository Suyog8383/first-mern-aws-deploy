import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BASE_URL } from "./service";

function App() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({
    name: "",
    brand: "",
    price: "",
  });

  const handleAddProduct = async () => {
    let value = JSON.stringify({
      name: data.name,
      brand: data.brand,
      price: parseFloat(data.price),
    });

    console.log("value", value);

    try {
      const response = await fetch(`${BASE_URL}/products/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: value,
      });
      console.log("response", response);
      const result = await response.json();
      console.log("result", result);
      if (result) {
        setData({
          name: "",
          brand: "",
          price: "",
        });
      }
      alert("Product added!");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    handleAddProduct();
    e.preventDefault();
  };

  const getAllProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/get`);
      const result = await response.json();
      console.log(result.data);
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2>Products Store</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          padding: 10,
        }}
      >
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label htmlFor="">Brand</label>
        <input
          type="text"
          placeholder="Enter brand"
          value={data.brand}
          onChange={(e) => setData({ ...data, brand: e.target.value })}
        />
        <label htmlFor="">Price</label>
        <input
          type="text"
          placeholder="Enter price"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={getAllProducts}>All Products</button>
      <div>
        <ul>
          {products.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BasketItemContext } from "../../context/BasketItemContext";
const Sec3 = () => {
  const { addBasket } = useContext(BasketItemContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = async () => {
      const response = await axios.get("http://localhost:3001/api/fas");
      setProducts(response.data);
    };
    data();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {products?.map((item, idx) => (
            <div className="col-xl-4 col-12" key={idx}>
              <div className="images">
                <img src={item.img}></img>
              </div>
              <div className="text">
                <Link to={`/Details/${item._id}`}>{item.name}</Link>
                <span>{item.price}</span>
              </div>
              <button
                onClick={() => {
                  addBasket(item);
                }}
              >
                Card
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sec3;

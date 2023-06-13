import React, { useEffect, useState } from "react";
import "../assets/style.css";
import { getAllProducts, getOneProduct } from "./Apidata";
import { Link, useParams } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPage = () => {
  const { pid } = useParams();
  const [data, setData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  // For carousel
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getOneProduct(pid);
      setData(product);
    };

    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    };

    fetchProduct();
    fetchAllProducts();
  }, [pid]);

  if (data.length === 0) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div>
      <section className="container">
        <div className="breadcrumb">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>{data.title}</li>
          </ul>
        </div>

        <div className="product-box">
          <div className="product-image">
            <img src={data.image} width="40%" alt={data.title} />
          </div>
          <div className="product-details">
            <h3>{data.title}</h3>
            <h4>{data.description}</h4>
            <div className="starrating">
            <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg> 
                {data.rating.rate}/5.0 ( {data.rating.count} reviews )</h4>
            </div>
            <div className="price">
              <h2>$ {data.price}</h2>
            </div>
            <div className="buttons">
              <button class="button">Buy Now</button>
              <button class="button add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="carousel-box">
          
          <div className="product-carousel">
          <h2>More Products</h2>
            <Slider {...settings}>
              {allProducts.map((items) => (
                <div key={items.id}>
                  <img
                    src={items.image}
                    alt={items.description}
                    width="100px"
                    height="100px"
                  />
                  <Link to={`/products/${items.id}`}>
                    <h5>{items.title}</h5>
                  </Link>
                  <div>
                  <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg> 
                {items.rating.rate}/5.0</h4>
                  </div>
                  <h3>$ {items.price}</h3>
                </div>
              ))}

              {/* Add more slides as needed */}
            </Slider>
          </div>
        </div>

        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default ProductPage;

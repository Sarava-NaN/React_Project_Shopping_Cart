import React from "react";
import Itemcard from "./Itemcard";
import Data from "./Data";

const Home = () => {
  return (
    <div>
      <h1 className="text-center display-4 fw-bolder mt-2 text-xxl text-dark-emphasis">
        List Items
      </h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {Data.ProductData.map((item, index) => {
            return (
              <Itemcard
                title={item.title}
                price={item.price}
                img={item.img}
                desc={item.desc}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;

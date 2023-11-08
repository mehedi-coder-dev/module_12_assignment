import { useEffect, useState } from "react";

const Service = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setData((prev) => setData(json.products)));
  }, []);

  console.log(data);
  return (
    <div className="main_Service">
      {!data
        ? "Loding...."
        : data.map((d, index) => (
            <div key={Math.random()} className="singal_service">
              <div className="service">
                <div className="img_dev">
                  {" "}
                  <img src={d.images[2]} alt="This is img" />
                </div>
                <div className="title">
                  <h4>{d.brand}</h4>
                  <span>{d.category}</span>
                </div>
                <div className="prise">
                  <span>Prise</span>
                  <span>{d.price}</span>
                </div>
                <div className="rating">
                  <span>Rating</span>
                  <span>{d.rating}</span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Service;

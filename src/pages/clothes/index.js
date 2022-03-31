import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card";
import { set_Cloths } from "../../redux/actions/productAction";

const Clothes = () => {
  const selector = useSelector((state) => state.cloth.cloths);
  const dispatch = useDispatch();
  // const [cloths, setCloths] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((cloths) => {
        console.log('sssss====',cloths);
        // setCloths(cloths);
        dispatch(set_Cloths(cloths));
        console.log("selectore=", selector);
      });
  }, []);

  return (
    <div
      className="row row-cols-1 row-cols-md-5 g-4"
      style={{ paddingTop: "10px" }}
    >
      {selector?.map((cloth) => (
        <Card key={cloth.id} cloth={cloth} />
      ))}
    </div>
  );
};

export default Clothes;

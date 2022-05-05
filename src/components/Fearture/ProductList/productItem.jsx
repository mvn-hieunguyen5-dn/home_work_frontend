import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../store/favSlice";
export default function ProductItem(props) {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.fav.value);

  const handleFav = (e, id) => {
    e.preventDefault();
    dispatch(toggle(id));
    console.log(id);
  };

  const [isDis, setValD] = useState(false);
  return (
    <>
      <li className="usercard">
        <div className="img-container">
          <img src={props.item.image} alt="" className="avatar child" />
          <i
            className={(favs.includes(props.item.id) ? "fa-solid" : "fa-regular") + (favs.includes(props.item.id) && isDis ? " fa-heart-crack":" fa-heart") + " heart"}
            onClick={(event) => handleFav(event, props.item.id)}
            onMouseOver={()=>setValD(!isDis)}
            onMouseLeave={()=>setValD(!isDis)}
          ></i>
        </div>

        <h3>{props.item.title}</h3>
        <span className="email">$ {props.item.price}</span>
        <div className="blank"></div>
        <Link className="toDetail" to={`/product/${props.item.id}`}>
          to Detail
        </Link>
      </li>
    </>
  );
}

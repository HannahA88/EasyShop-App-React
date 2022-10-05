import * as React from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function IconButtons(props) {
  function handlClick(e) {
    document.querySelector('form.Wrap').reset()

    props.setProductList((prevState) => {
      if (prevState.includes(props.product)) {
        return prevState;
      } else {
        const list = [...prevState, props.product];
        localStorage.setItem("productList", JSON.stringify(list));

        return list;
      }
    });
    props.setProduct(() => { 
      return {
      name: "",
      quantity: "",
      type: "",
    } })
  }

  return (
    <IconButton aria-label="" id="demo-customized-plus"  onClick={handlClick} >
      <AddCircleIcon />
    </IconButton>
  );
}
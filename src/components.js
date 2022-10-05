import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CheckboxList(props) {
  const [checked, setChecked] = React.useState([0]);

  const removeItem = (id) => {
    let productList = props.productList;
    let item = productList.filter((el) => el.name === id); // it will retrun an array
    let index = productList.indexOf(item[0]); // just the first one is important
    productList.splice(index, 1);
    props.setProductList([...productList]);
    localStorage.setItem("productList", JSON.stringify(productList));
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List 
      sx={{ width: "100%", maxWidth: 700, bgcolor: "rgba(0, 0, 0, 0.1)" }}
      label="List of products?"
    >
      {props.productList.map((value, index) => {
        const labelId = `checkbox-list-label-${value.name}`;

        return (
          <ListItem id="demo"
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon onClick={() => removeItem(value.name)} 
                style={{ color: "#80bdd2" }}/>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                style={{ color: "silver" }} /> 
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={`${value.name} ${value.quantity} ${value.type}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
  
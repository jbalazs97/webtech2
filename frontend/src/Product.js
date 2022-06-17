import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Product({ _id, name, price, removeProduct }) {
  return (
    <ListItem style={{ height: "64px" }}>
      <>
        <ListItemText>{name}</ListItemText>
        <ListItemText>{price} Ft</ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={() => removeProduct(_id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </>
    </ListItem>
  );
}

export default Product;

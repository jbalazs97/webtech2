import React from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import useTodoState from "./hooks/useProductState";
import Button from "@material-ui/core/Button";
import { logout } from "./services/users";

function StorageApp() {
  const { products, addProduct, removeProduct } = useTodoState([]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography style={{ flex: 1 }} color="inherit">
            STORAGE
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <ProductForm addProduct={addProduct} />
          <ProductList products={products} removeProduct={removeProduct} />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default StorageApp;

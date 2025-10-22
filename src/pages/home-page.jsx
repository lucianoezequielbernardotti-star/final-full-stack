import React from "react";
import Feed from "../components/Feed";
import { GetAllProducts } from "../Api/producs-api";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = (param) => {
    GetAllProducts(param).then((response) => {
      setProducts(response.data);
    });

    return (
      <Container>
        <Grid container spacing={2} justifyContent="center">
          {products.map((product, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
              <Feed product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}
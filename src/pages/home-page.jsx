import Feed from "../components/Feed";
import { GetAllProducts } from "../Api/producs-api";
import { useEffect, useState } from "react";
import { Button, Container, Grid, Divider, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export function HomePage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = (param) => {
    GetAllProducts(param).then((response) => {
      setProducts(response.data);
    }).catch((err) => {
      console.error('Error fetching products', err);
    });
  };

  return (
    <Container>
      <TextField
        placeholder="Buscar Articulo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      >
      </TextField>
      <Button variant="contained" onClick={() => fetchProducts(searchTerm)}>
        Buscar
      </Button>
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
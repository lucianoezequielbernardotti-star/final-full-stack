import AltaProduct from "../components/Alta-Product";
import { GetAllProducts } from "../Api/producs-api";
import { useEffect, useState } from 'react';
import { Table, TableContainer, Container, TableCell, TableHead, TableRow, Avatar, TableBody } from '@mui/material';

function PanelPage() {

    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = (param) => {
        setLoad(true);
        GetAllProducts(param).then((response) => {
            setProducts(response.data);
            setLoad(false);
        }).catch((err) => {
            console.error('Error fetching products', err);
            setLoad(false);
        });
    };


    return (
        <Container>
            <AltaProduct fetchProducts={fetchProducts} />
            <Table aria-label="simple table">
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>Img</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Catalogo</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell><Avatar src={row.image} alt={row.name} /></TableCell>
                                <TableCell sx={{fontWeight: '800'}} component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">${row.price}</TableCell>
                                <TableCell align="right">{row.catalog}</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </Table>
        </Container>
    );
}

export default PanelPage;
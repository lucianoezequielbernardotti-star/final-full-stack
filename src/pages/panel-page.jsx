import AltaProduct from "../components/Alta-Product";
import { GetAllProducts, RemoveProduct} from "../Api/producs-api";
import { useEffect, useState } from 'react';
import { Table, TableContainer, Container, TableCell, TableHead, TableRow, Avatar, TableBody, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function PanelPage() {

    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        image: '',
        catalog: '',
        stock: 0
    })
    //popup control
    const [open, setOpen] = useState(false); 
    const handleClickOpen = () => {
        setProduct({
            name: '',
            description: '',
            price: 0,
            image: '',
            catalog: '',
            stock: 0
        });
        setOpen(true);
    }
    const handleClickClose = () => {
        setOpen(false);
    }
    //popup control fin

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

    const handleRemoveProduct = (_id) => {
        RemoveProduct(_id).then(() => {
            fetchProducts();
        }).catch((err) => {
            console.error('Error removing product', err);
        });
    };

    const preHandleRemoveProduct = (_id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            handleRemoveProduct(_id);
        }
    };

    const handleUpdateProduct = (item) => {
        setOpen(true);
        setProduct(item);
    };

    return (
        <Container>
            <AltaProduct product={product} fetchProducts={fetchProducts} open={open} handleClickOpen={handleClickOpen} handleClickClose={handleClickClose} />
            <Table aria-label="table">
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
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell><Avatar src={row.image} alt={row.name} /></TableCell>
                                <TableCell sx={{fontWeight: '800'}} component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">${row.price}</TableCell>
                                <TableCell align="right">{row.catalog}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => { handleUpdateProduct(row) }}>
                                        <EditIcon sx={{ cursor: 'pointer', marginRight: 2, color: 'blue' }} />
                                    </IconButton>
                                    <IconButton onClick={() => { preHandleRemoveProduct(row._id) }}>
                                        <DeleteIcon sx={{ cursor: 'pointer', color: 'red' }}  />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </Table>
        </Container>
    );
}

export default PanelPage;
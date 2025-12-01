import { Button, Box, Dialog, DialogTitle, Input, FormLabel, Container, DialogActions } from '@mui/material';
import { useState } from 'react';
import { CreateProduct} from '../Api/producs-api'


function AltaProduct(props) {
    const token = localStorage.getItem('token');
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClickClose = () => {
        setOpen(false);
    }
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        image: '',
        catalog: '',
        stock: 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleProductSubmit = (e) => {
        e.preventDefault();
        CreateProduct(product).then((response) => {
            if (response.data && token) {
                alert('Producto creado con éxito');
                setOpen(false);
                props.fetchProducts()
            }
        }).catch((error) => {
            console.error('Error creating product:', error);
            alert('Error al crear el producto');
            setOpen(false);
        })

    }

    return (
        <Box>
            <Button variant="contained" onClick={handleClickOpen}>
                Nuevo Producto
            </Button>
            <Dialog
                open={open}
            >
                <form onSubmit={handleProductSubmit} style={{display: 'flex', flexDirection: 'column', width: '500px', margin: '20px'}}>
                <DialogTitle sx={{alignSelf: 'center'}}>Agregar Nuevo Producto</DialogTitle>
                <Container sx={{width: '650px', display: 'contents'}}>
                        <FormLabel>Nombre:</FormLabel>
                        <Input type="text" name="name" variant="outlined" value={product.name} onChange={handleChange} required sx={{
                            backgroundColor: 'lightgray',
                            padding: '12px',
                            marginBottom: '16px'
                        }} />
                        <br />
                        <FormLabel>Descripción:</FormLabel>
                        <Input type="textarea" name="description" variant="outlined" value={product.description} multiline rows={4} onChange={handleChange} sx={{
                            backgroundColor: 'lightgray',
                            padding: '12px',
                            marginBottom: '16px'
                        }} />
                        <br />
                        <FormLabel>Precio:</FormLabel>
                        <Input type="number" name="price" variant="outlined" value={product.price} onChange={handleChange} required sx={{
                            backgroundColor: 'lightgray',
                            padding: '12px',
                            marginBottom: '16px'
                        }} />
                        <br />
                        <FormLabel>Catálogo:</FormLabel>
                        <Input type="text" name="catalog" variant="outlined" value={product.catalog} required onChange={handleChange} sx={{
                            backgroundColor: 'lightgray',
                            padding: '12px',
                            marginBottom: '16px'
                        }} />
                        <br />
                        <FormLabel>Stock:</FormLabel>
                        <Input type="number" name="stock" variant="outlined" value={product.stock} onChange={handleChange} required sx={{
                            backgroundColor: 'lightgray',
                            padding: '12px',
                            marginBottom: '16px'
                        }} />
                        <br />
                        <FormLabel>Url de imagen:</FormLabel>
                        <Input type="url" name="image" variant="outlined" value={product.image} onChange={handleChange} sx={{
                            backgroundColor: 'lightgray',
                            padding: '12px',
                            marginBottom: '16px'
                        }} />
                </Container >
                <DialogActions>
                    <Button onClick={handleClickClose}>Cerrar</Button>
                    <Button type="submit">Enviar</Button>
                </DialogActions>
                </form>
            </Dialog>
        </Box>
    )
}

export default AltaProduct;
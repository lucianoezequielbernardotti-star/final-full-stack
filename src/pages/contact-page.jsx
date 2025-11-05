import { Container, FormLabel, Input } from "@mui/material";
import { useState, useEffect } from "react";



const ContactPage = () => {

    const [contact, setContact] = useState({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: ''
    });

    function handleSubmit() {
        alert(`Gracias por contactarnos, ${contact.nombre} ${contact.apellido}. Te responderemos pronto al correo: ${contact.email}`);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    return (

        <Container sx={{ mt: 4, mb: 4, justifyContent: 'center', alignItems: 'center' }}>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                <FormLabel>Nombre:</FormLabel>
                <Input type="text" name="nombre" variant="outlined" value={contact.nombre} onChange={handleChange} required sx={{
                    backgroundColor: 'lightgray',
                    padding: '12px',
                    marginBottom: '16px'
                }} />
                <br />
                <FormLabel>Apellido:</FormLabel>
                <Input type="text" name="apellido" variant="outlined" value={contact.apellido} onChange={handleChange} required sx={{
                    backgroundColor: 'lightgray',
                    padding: '12px',
                    marginBottom: '16px'
                }} />
                <br />
                <FormLabel>Email:</FormLabel>
                <Input type="email" name="email" variant="outlined" value={contact.email} onChange={handleChange} required sx={{
                    backgroundColor: 'lightgray',
                    padding: '12px',
                    marginBottom: '16px'
                }} />
                <br />
                <FormLabel>Mensaje:</FormLabel>
                <Input component="textarea" name="mensaje" variant="outlined" value={contact.mensaje} multiline rows={4} onChange={handleChange} sx={{
                    backgroundColor: 'lightgray',
                    padding: '12px',
                    marginBottom: '16px'
                }} />
                <br />
                <button type="submit">Enviar</button>
            </form>
        </Container >
    );
}

export default ContactPage;

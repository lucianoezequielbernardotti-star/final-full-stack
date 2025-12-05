import { Container, FormLabel, Input, Snackbar, Alert} from "@mui/material";
import { useState } from "react";
import emailjs from 'emailjs-com';



const ContactPage = () => {

    const [contact, setContact] = useState({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: ''
    });

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    function handleSubmit(e) {
        //param 1: service ID ('service_yv06b7q')
        //param 2: template ID ('template_dumfby8')
        //param 3: form (e.target)
        //param 4: public key ('xjwm773xkdE6jFpLA')
        emailjs.sendForm('service_yv06b7q', 'template_dumfby8', e.target, 'xjwm773xkdE6jFpLA').then((result) => {
            console.log(result.text);
            if (result.text === 'OK') {
                setOpen(true);
                setContact({
                    nombre: '',
                    apellido: '',
                    email: '',
                    mensaje: ''
                });
            }
        }, (error) => {
            console.log(error.text);
            alert('Error al enviar el mensaje, por favor intenta de nuevo.');
        });
        e.preventDefault();
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
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Mensaje enviado con exito!
                    </Alert>
                </Snackbar>
            </form>
        </Container >
    );
}

export default ContactPage;

import { Accordion, AccordionSummary, Container, Typography, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqPage() {
    return (
        <Container sx={{backgroundColor: 'lightgray', padding: 2, borderRadius: 2, marginTop: 4, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <Accordion sx={{width: '60%', marginBottom: 2, marginTop: 2}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Titulo 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Contenido 1
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{width: '60%', marginBottom: 2, marginTop: 2}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Titulo 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Contenido 2
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{width: '60%', marginBottom: 2, marginTop: 2}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Titulo 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Contenido 3
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}

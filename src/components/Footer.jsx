import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return(
        <Box
            component="footer"
            sx={{
            backgroundColor: '#2e1b11',
            textAlign: 'center',
            py: 2,
            mt: 4,
            }}>
            <Typography variant="body2" color="#d6a639">
                © {new Date().getFullYear()} Lautaro Zárate Rivas • Todos los derechos reservados
            </Typography>
            <Box mt={1}>
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/lautaro-zaraterivas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="warning">
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://github.com/Lautaro-Zarate"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="warning">
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    component="a" href="mailto:lautaro.zrt7@gmail.com"
                    target='blank'
                    color="warning">
                    <EmailIcon/>
                </IconButton>
            </Box>
        </Box>    
    )
}
export default Footer;
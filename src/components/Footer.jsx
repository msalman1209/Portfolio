import { Instagram } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Box, Container, IconButton, Link, Typography } from '@mui/material';
import { Linkedin, } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: GitHub, href: 'https://github.com/msalman1209', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/maliksalmancoffical/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/malik-salman-b53839284', label: 'LinkedIn' },
    { icon: WhatsApp, href: 'https://wa.me/923236637158', label: 'Whatsapp' },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          paddingTop: 6,
          paddingBottom: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 3
          }}
        >
          {socialLinks.map((social) => (
            <IconButton
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  color: 'white'
                }
              }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </IconButton>
          ))}
        </Box>

        <Typography
          variant="body2"
          sx={{
            opacity: 0.7,
            maxWidth: '600px',
            lineHeight: 1.8
          }}
        >
           Lovingly designed in 🎨 <Link sx={{ color: 'inherit', }} href={'https://www.figma.com/design/dECDI0bdow7qki3afIoxqs/Developer-Portfolio-Design-(Community)?node-id=0-3&t=7WiYCfbZJfpQTBYt-0'} target='blank'>Figma</Link> By <Link sx={{ color: 'inherit', }} href={'https://www.figma.com/@ibrahimmemon'} target='blank'>Ibrahim Memon</Link> and coded in Visual Studio Code by yours truly.
        <br />  Built with Vite and MUI, deployed with Netlify.
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Muhammad Salman
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
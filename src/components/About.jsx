import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container id="about">
      <Box
        sx={{
          py: { xs: 8, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3"
          align="center" sx={{ 
            fontWeight: 'bold', 
            letterSpacing: '5px', 
            fontFamily: 'Poppins', 
            fontSize: { xs: '32px', sm: '40px', md: '47.42px' },
            lineHeight: { xs: 1.3, md: 1.2 }
          }}>
          ABOUT ME
        </Typography>
        <Typography gutterBottom align="center" sx={{
          mb: 2, 
          opacity: 0.7,
          background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)',
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.2em',
          fontSize: { xs: '12px', md: '14px' }
        }}>
          EXPLORE NOW
        </Typography>
        <Box sx={{ 
          width: '100%', 
          maxWidth: '600px',
          px: { xs: 2, md: 0 }
        }}>
          <Typography variant="body1" sx={{ 
            mb: 3,
            fontSize: { xs: '0.875rem', md: '1rem' },
            lineHeight: { xs: 1.6, md: 1.5 }
          }}>
            I am a passionate <strong>web developer</strong> with expertise in <strong>React.js, Node.js, Next.js, and various databases</strong> like MySQL, PostgreSQL, and MongoDB. With over a year of industry experience, I have worked on <strong>large-scale Web2 and Web3 projects</strong>, integrating <strong>smart contracts into websites</strong> and leveraging technologies like <strong>Redis, Socket.IO, and viem</strong>.
          </Typography>
          <Typography variant="body1" sx={{
            fontSize: { xs: '0.875rem', md: '1rem' },
            lineHeight: { xs: 1.6, md: 1.5 }
          }}>
            My journey in software development involves crafting seamless user experiences, optimizing backend logic, and ensuring smooth real-time interactions. I specialize in <strong>DeFi applications, non-custodial wallets, and decentralized trading platforms</strong>, always eager to explore new technologies. Whether it&apos;s enhancing frontend performance or building scalable backend architectures, I thrive on solving complex problems with innovative solutions.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
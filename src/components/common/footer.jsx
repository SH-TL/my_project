import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

/**
 * Footer 컴포넌트
 *
 * 페이지 하단 소셜 링크 및 카피라이트 문구
 *
 * Example usage:
 * <Footer />
 */
function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ py: { xs: 4, md: 6 }, alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2026 Your Name. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary' }}
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary' }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:example@email.com"
              sx={{ color: 'text.secondary' }}
              aria-label="Email"
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;

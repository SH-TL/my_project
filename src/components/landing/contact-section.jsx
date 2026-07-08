import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

/**
 * ContactSection 컴포넌트
 *
 * 연락처 섹션 - 이메일 CTA 버튼
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  return (
    <Box id="contact" component="section" sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 }, py: { xs: 8, md: 14 }, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'text.disabled', mb: 3 }}>
          Contact
        </Typography>
        <Typography variant="h2" sx={{ color: 'text.primary', mb: 4 }}>
          함께 이야기 나눠요
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 8, maxWidth: 480, mx: 'auto' }}>
          새로운 프로젝트나 협업 제안은 언제든 환영합니다.
        </Typography>

        <Button
          href="mailto:example@email.com"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<EmailIcon />}
        >
          이메일 보내기
        </Button>
      </Container>
    </Box>
  );
}

export default ContactSection;

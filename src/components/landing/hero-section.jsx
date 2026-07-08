import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * HeroSection 컴포넌트
 *
 * 포트폴리오 커버 섹션 - 대형 워드마크 타이포그래피와 역할 캡션
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <Box
      id="top"
      component="section"
      sx={{
        bgcolor: 'background.default',
        minHeight: { xs: '80vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 }, textAlign: 'center' }}>
        <Typography
          variant="caption"
          component="p"
          sx={{ color: 'text.disabled', letterSpacing: '0.3em', mb: 4 }}
        >
          CREATIVE DEVELOPER
        </Typography>

        <Typography variant="h1" component="h1" sx={{ color: 'text.primary' }}>
          PORTFOLIO
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mt: 6, maxWidth: 480, mx: 'auto' }}
        >
          사용자 경험과 비주얼 디자인을 함께 고민하는 작업물을 소개합니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default HeroSection;

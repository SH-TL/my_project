import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/**
 * HeroSection 컴포넌트
 *
 * 포트폴리오 커버 섹션
 * 상단/하단 메타 정보 라인 + 원형 배지와 겹치는 에디토리얼 스크립트 워드마크로 구성
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'background.default',
        minHeight: { xs: '90vh', md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, md: 3 },
          py: { xs: 3, md: 5 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            2026
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.disabled', display: { xs: 'none', md: 'block' } }}
          >
            시작의 다음 장을 설계합니다
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Developer Portfolio
          </Typography>
        </Stack>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              component="p"
              sx={{
                position: 'relative',
                zIndex: 1,
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: 'clamp(3.5rem, 11vw, 9.5rem)',
                lineHeight: 1,
                color: 'text.primary',
              }}
            >
              Portfolio
            </Typography>

            <Box
              aria-hidden="true"
              sx={{
                position: 'relative',
                zIndex: 0,
                width: { xs: 220, md: 320 },
                height: { xs: 220, md: 320 },
                mt: { xs: '-70px', md: '-110px' },
              }}
            >
              <svg viewBox="0 0 320 320" width="100%" height="100%">
                <defs>
                  <path
                    id="hero-circle-path"
                    d="M160,160 m-130,0 a130,130 0 1,1 260,0 a130,130 0 1,1 -260,0"
                  />
                </defs>
                <circle
                  cx="160"
                  cy="160"
                  r="130"
                  fill="#3A5470"
                  stroke="#6B8CA6"
                  strokeWidth="1"
                />
                <text fontSize="11" letterSpacing="4" fill="#8FA7BC">
                  <textPath href="#hero-circle-path" startOffset="0%">
                    CREATIVE DEVELOPER • PORTFOLIO • CREATIVE DEVELOPER • PORTFOLIO •
                  </textPath>
                </text>
              </svg>
            </Box>
          </Box>
        </Box>

        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            pr: { xs: '68px', sm: 0 },
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: 'text.secondary', letterSpacing: '0.15em' }}
          >
            VISUAL &amp; UI DEVELOPMENT
          </Typography>
          <Typography
            variant="caption"
            component="a"
            href="mailto:example@email.com"
            sx={{ color: 'text.secondary', textDecoration: 'none' }}
          >
            example@email.com
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroSection;

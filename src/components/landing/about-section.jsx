import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

/**
 * AboutSection 컴포넌트
 *
 * 자기소개 섹션 - 프로필 아바타와 소개 문구
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection() {
  return (
    <Box id="about" component="section" sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 }, py: { xs: 8, md: 14 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Avatar sx={{ width: 160, height: 160, bgcolor: 'background.default' }}>
              <PersonIcon sx={{ fontSize: 80, color: 'text.secondary' }} />
            </Avatar>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="body2"
              sx={{ color: 'text.disabled', mb: 3 }}
            >
              About Me
            </Typography>
            <Typography variant="h2" sx={{ color: 'text.primary', mb: 4 }}>
              안녕하세요, 만드는 과정을 즐기는 개발자입니다.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              사용자의 문제를 이해하고 이를 명확한 인터페이스로 풀어내는 작업을 좋아합니다.
              이 영역에 실제 소개 문구, 경력, 관심 분야 등을 채워주세요.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;

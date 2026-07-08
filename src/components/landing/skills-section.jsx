import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TagChip from '../ui/tag-chip.jsx';

const SKILLS = ['React', 'JavaScript', 'MUI', 'Figma', 'UI/UX', 'Git', 'Branding', 'Vite'];

/**
 * SkillsSection 컴포넌트
 *
 * 스킬/툴 태그 칩 나열 섹션
 *
 * Example usage:
 * <SkillsSection />
 */
function SkillsSection() {
  return (
    <Box id="skills" component="section" sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 }, py: { xs: 8, md: 14 }, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'text.disabled', mb: 3 }}>
          Skills &amp; Tools
        </Typography>
        <Typography variant="h2" sx={{ color: 'text.primary', mb: 8 }}>
          함께 사용하는 도구들
        </Typography>

        <Stack
          direction="row"
          gap={2}
          sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {SKILLS.map((skill) => (
            <TagChip key={skill} label={skill} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default SkillsSection;

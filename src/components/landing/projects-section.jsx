import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProjectCard from '../ui/project-card.jsx';

const PROJECTS = [
  {
    number: '01',
    title: 'Project One',
    description: '프로젝트 개요와 담당 역할을 이곳에 작성해주세요.',
    tags: ['React', 'MUI'],
  },
  {
    number: '02',
    title: 'Project Two',
    description: '프로젝트 개요와 담당 역할을 이곳에 작성해주세요.',
    tags: ['Figma', 'UI/UX'],
  },
  {
    number: '03',
    title: 'Project Three',
    description: '프로젝트 개요와 담당 역할을 이곳에 작성해주세요.',
    tags: ['Branding'],
  },
];

/**
 * ProjectsSection 컴포넌트
 *
 * 프로젝트 목록 섹션 - 넘버링 헤드라인과 프로젝트 카드 그리드
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  return (
    <Box id="projects" component="section" sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 }, py: { xs: 8, md: 14 } }}>
        <Typography variant="body2" sx={{ color: 'text.disabled', mb: 3, textAlign: 'center' }}>
          Projects
        </Typography>
        <Typography variant="h2" sx={{ color: 'text.primary', mb: 8, textAlign: 'center' }}>
          작업물 소개
        </Typography>

        <Grid container spacing={{ xs: 6, md: 8 }}>
          {PROJECTS.map((project) => (
            <Grid key={project.number} size={{ xs: 12, md: 6, lg: 4 }}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProjectsSection;

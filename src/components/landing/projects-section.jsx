import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProjectCard from '../ui/project-card.jsx';
import fileUploadThumb from '../../assets/projects/file-upload-site.png';
import communityThumb from '../../assets/projects/community-site.png';

const PROJECTS = [
  {
    number: '01',
    title: '파일 업로드 사이트',
    description: '드래그 앤 드롭으로 문서·이미지·압축파일을 업로드하고 관리하는 파일 스토리지 서비스입니다.',
    tags: ['React', 'MUI', 'File Upload'],
    thumbnail: fileUploadThumb,
    url: 'https://sh-tl.github.io/dashboard/',
  },
  {
    number: '02',
    title: '커뮤니티 사이트',
    description: '수강생들이 질문하고 정보를 나누며 함께 성장하는 AI 교육 커뮤니티 게시판입니다.',
    tags: ['React', 'MUI', 'Community'],
    thumbnail: communityThumb,
    url: 'https://sh-tl.github.io/community/',
  },
];

/**
 * ProjectsSection 컴포넌트
 *
 * 프로젝트 목록 섹션 - 넘버링 헤드라인과 프로젝트 카드 그리드
 * 각 카드는 실제 배포 사이트의 첫 화면을 썸네일로 사용하며 클릭 시 해당 사이트로 연결됨
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
            <Grid key={project.number} size={{ xs: 12, md: 6 }}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProjectsSection;

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import TagChip from './tag-chip.jsx';

/**
 * ProjectCard 컴포넌트
 *
 * Props:
 * @param {string} number - 프로젝트 순번 (예: "01") [Required]
 * @param {string} title - 프로젝트 제목 [Required]
 * @param {string} description - 프로젝트 설명 [Required]
 * @param {string[]} tags - 사용 기술/툴 태그 목록 [Optional, 기본값: []]
 *
 * Example usage:
 * <ProjectCard number="01" title="Project Name" description="설명" tags={['React', 'MUI']} />
 */
function ProjectCard({ number, title, description, tags = [] }) {
  return (
    <Stack sx={{ height: '100%' }}>
      <Box
        sx={{
          width: '100%',
          aspectRatio: '4 / 3',
          borderRadius: 1,
          bgcolor: 'background.default',
          border: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
        }}
      >
        <ImageOutlinedIcon sx={{ fontSize: 40, color: 'divider' }} />
      </Box>

      <Typography variant="h3" sx={{ color: 'text.primary', mb: 2 }}>
        {number}. {title}
      </Typography>

      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
        {description}
      </Typography>

      <Stack direction="row" gap={2} sx={{ flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <TagChip key={tag} label={tag} />
        ))}
      </Stack>
    </Stack>
  );
}

export default ProjectCard;

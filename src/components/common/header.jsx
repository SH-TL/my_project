import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NAV_ITEMS = [
  { label: '소개', href: '#about' },
  { label: '스킬', href: '#skills' },
  { label: '프로젝트', href: '#projects' },
];

/**
 * Header 컴포넌트
 *
 * 페이지 상단 고정 네비게이션 바
 * 로고, 섹션 앵커 링크, 연락처 버튼으로 구성
 *
 * Example usage:
 * <Header />
 */
function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: 'secondary.main',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Stack
          direction="row"
          sx={{ py: { xs: 2, md: 3 }, alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Typography
            variant="body2"
            component="a"
            href="#top"
            sx={{ color: 'text.primary', textDecoration: 'none' }}
          >
            Portfolio
          </Typography>

          <Stack
            direction="row"
            spacing={{ xs: 2, md: 4 }}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            {NAV_ITEMS.map((item) => (
              <Typography
                key={item.href}
                component="a"
                href={item.href}
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { color: 'text.primary' },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>

          <Button
            href="#contact"
            variant="contained"
            color="primary"
            size="small"
          >
            Contact
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;

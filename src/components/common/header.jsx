import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
 * 모바일(xs)에서는 햄버거 버튼 + Drawer로 섹션 링크 제공
 *
 * Example usage:
 * <Header />
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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

          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button
              href="#contact"
              variant="contained"
              color="primary"
              size="small"
            >
              Contact
            </Button>

            <IconButton
              onClick={() => setIsMenuOpen(true)}
              aria-label="메뉴 열기"
              sx={{ color: 'text.primary', display: { xs: 'inline-flex', sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      <Drawer anchor="right" open={isMenuOpen} onClose={closeMenu}>
        <Box
          sx={{
            width: 240,
            height: '100%',
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack
            direction="row"
            sx={{ justifyContent: 'flex-end', p: 2 }}
          >
            <IconButton onClick={closeMenu} aria-label="메뉴 닫기" sx={{ color: 'text.primary' }}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Stack sx={{ px: 4, gap: 4 }}>
            {NAV_ITEMS.map((item) => (
              <Typography
                key={item.href}
                component="a"
                href={item.href}
                onClick={closeMenu}
                variant="h3"
                sx={{ color: 'text.primary', textDecoration: 'none' }}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;

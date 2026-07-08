import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Header from '../components/common/header.jsx';
import Footer from '../components/common/footer.jsx';
import HeroSection from '../components/landing/hero-section.jsx';
import AboutSection from '../components/landing/about-section.jsx';
import SkillsSection from '../components/landing/skills-section.jsx';
import ProjectsSection from '../components/landing/projects-section.jsx';
import ContactSection from '../components/landing/contact-section.jsx';

/**
 * Home 페이지
 *
 * 포트폴리오 싱글페이지 - 섹션을 순서대로 스크롤 조합
 *
 * Example usage:
 * <Home />
 */
function Home() {
  return (
    <Box id="top" sx={{ width: '100%' }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      <Fab
        href="#top"
        color="primary"
        size="medium"
        aria-label="맨 위로"
        sx={{ position: 'fixed', right: { xs: 4, md: 6 }, bottom: { xs: 4, md: 6 }, zIndex: 200 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
}

export default Home;

import { useAppSelector } from '@/redux/hooks';
import { Box, Flex } from '@chakra-ui/react';
import { Navbar } from '@/components/navbar/Navbar';
import { Breadcrumb } from '@/components/hero/Breadcrumb';
import { AdminPanel } from '@/components/admin-panel/AdminPanel';
import { Footer } from '@/components/footer/Footer';
import { SessionCounter } from '@/components/sessionCounter/SessionCounter';
import { LoadingSpinner } from '@components/shared/LoadingSpinner.tsx';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isAdminPanelOpen = useAppSelector(
    (state) => state.adminPanel.isAdminPanelOpen,
  );
  const isSwitchActive = useAppSelector((state) => state.gpt.isSwitchActive);

  const isWaitingForResponse = useAppSelector(
    (state) => state.gpt.isWaitingForResponse,
  );

  return (
    <PageWrapper>
      <Flex direction='column' alignItems='center'>
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>

        <Flex
          position='relative'
          minH={{ base: 'calc(100vh - 160px)' }}
          h={{ base: '100%', md: 'calc(100vh - 160px)' }}
          w='100%'
          maxW='1170px'
          direction={{ base: 'column', md: 'row' }}
          mt='80px'
        >
          <SessionCounter />
          <AdminPanel />
          <MainContentWrapper>
            <Breadcrumb />
            <Box
              mt={isAdminPanelOpen ? 10 : 24}
              overflowY='auto'
              minHeight='80%'
            >
              {isWaitingForResponse && isSwitchActive ? (
                <LoadingSpinner />
              ) : (
                children
              )}
            </Box>
          </MainContentWrapper>
        </Flex>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Flex>
    </PageWrapper>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      maxW='100vw'
      maxH={{ base: '100%', md: '100vh' }}
      bgColor='bg.primary'
      overflow={{ base: 'scroll', md: 'hidden' }}
    >
      {children}
    </Box>
  );
};

const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      w='100%'
      maxW='1170px'
      h='80px'
      alignItems='center'
      justifyContent='center'
      direction='column'
      px={4}
      position='fixed'
      bg='bg.primary'
      zIndex={999}
    >
      {children}
      <Box
        w='100vw'
        sx={{
          background:
            'linear-gradient(90deg, rgba(133, 79, 79, 0)  , rgba(100, 255, 218, 1), rgba(133, 79, 79, 0))',
          height: '2px',
          width: '100vw',
        }}
      />
    </Flex>
  );
};

const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      bg='bg.primary'
      w='100%'
      h='100%'
      p={4}
      overflow='auto'
      sx={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'text.primary',
          borderRadius: '24px',
        },
      }}
    >
      {children}
    </Box>
  );
};

const FooterWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      w='100%'
      h='80px'
      alignItems='center'
      justifyContent='center'
      direction='column'
    >
      <Box
        w='100vw'
        sx={{
          background:
            'linear-gradient(90deg, rgba(133, 79, 79, 0)  , rgba(100, 255, 218, 1), rgba(133, 79, 79, 0))',
          height: '2px',
          width: '100vw',
        }}
      />
      {children}
    </Flex>
  );
};

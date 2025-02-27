import ChakraUIProvider from './context/ChakraUIProvider';
import { AlertDialogContextProvider } from './context/AlertDialogContext';
import AlertDialog from './components/AlertDialog';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactMeSection from './components/ContactMeSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <ChakraUIProvider>
      <AlertDialogContextProvider>
        <Header />
        <main>
          <AboutMeSection />
          <ProjectsSection />
          <ContactMeSection />
        </main>
        <Footer />
        <AlertDialog />
      </AlertDialogContextProvider>
    </ChakraUIProvider>
  );
}

export default App;

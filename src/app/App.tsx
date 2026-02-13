import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Concept } from './components/Concept';
import { EmailCapture } from './components/EmailCapture';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';
import { NoiseTexture } from './components/NoiseTexture';

export default function App() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen bg-[var(--background-primary)] text-[var(--text-primary)]">
      {/* Subtle noise texture for depth */}
      <NoiseTexture />
      
      {/* Subtle background glow effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[var(--deep-accent)] opacity-[0.03] blur-3xl pointer-events-none" />
      <div className="fixed top-1/3 right-1/4 w-96 h-96 bg-[var(--earth-accent)] opacity-[0.02] blur-3xl pointer-events-none" />
      
      <Header />
      
      <main>
        <Hero onJoinWaitlist={scrollToWaitlist} />
        
        <SectionDivider />
        
        <Problem />
        
        <SectionDivider />
        
        <Concept />
        
        <SectionDivider />
        
        <EmailCapture />
      </main>
      
      <Footer />
    </div>
  );
}
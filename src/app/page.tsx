import Hero from '../components/Hero';
import ThemeToggle from '../components/ThemeToggle';
import EnvironmentDisplay from '../components/EnvironmentDisplay';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      <Hero 
        heading="Welcome to My Portfolio"
        content="I'm a passionate developer building amazing web experiences with Next.js and modern web technologies."
      />
      
      {/* Display environment information using server component */}
      <EnvironmentDisplay />
    </main>
  );
}

import Hero from '../components/Hero';
import EnvironmentDisplay from '../components/EnvironmentDisplay';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <main>
      <Navbar />      
      <Hero 
        heading="Welcome to My Portfolio"
        content="I'm a passionate developer building amazing web experiences with Next.js and modern web technologies."
      />
      {/* Display environment information using server component */}
      <EnvironmentDisplay />
    </main>
  );
}

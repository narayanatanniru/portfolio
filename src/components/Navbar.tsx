'use client';

import { useOrchestrator } from '@/context/OrchestratorContext';

const Navbar: React.FC = () => {
  const { orchestrator } = useOrchestrator();
  const Component = orchestrator.getComponent();
  return <Component />;
};
  
export default Navbar;

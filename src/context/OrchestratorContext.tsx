'use client';

import React, { createContext, useContext } from 'react';
import { 
  Orchestrator, 
  SskOrchestrator, 
  NarayanaOrchestrator, 
  IOrchestrator 
} from '@/services/orchestrator';
import { getDeveloperMode } from '@/utils/config';

interface OrchestratorContextType {
  orchestrator: IOrchestrator;
}

const OrchestratorContext = createContext<OrchestratorContextType | undefined>(undefined);

export function OrchestratorProvider({ children }: { children: React.ReactNode }) {
  // Determine which orchestrator to use based on the development mode
  const getOrchestrator = (): IOrchestrator => {
    const mode = getDeveloperMode();
    
    if (mode === 'ssk') {
      return new SskOrchestrator();
    } else if (mode === 'narayana') {
      return new NarayanaOrchestrator();
    } else {
      return new Orchestrator(); // default
    }
  };

  const orchestrator = getOrchestrator();

  return (
    <OrchestratorContext.Provider value={{ orchestrator }}>
      {children}
    </OrchestratorContext.Provider>
  );
}

export function useOrchestrator() {
  const context = useContext(OrchestratorContext);
  if (context === undefined) {
    throw new Error('useOrchestrator must be used within an OrchestratorProvider');
  }
  return context;
}

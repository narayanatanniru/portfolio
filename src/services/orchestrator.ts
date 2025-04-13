import NavbarVar1 from "@/navbars/NavBarVar1";
import NavbarVar2 from "@/navbars/NavBarVar2";

export interface IOrchestrator {
  getComponent(): React.FC;
}

export class Orchestrator implements IOrchestrator {
  getComponent(): React.FC {
    return NavbarVar1;
  }
}

export class SskOrchestrator extends Orchestrator {
  getComponent(): React.FC {
    return NavbarVar2;
  }
}

export class NarayanaOrchestrator extends Orchestrator {
  getComponent(): React.FC {
    return NavbarVar1;
  }
}

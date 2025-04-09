import { getConfig } from "@/utils/config";

// This is a server component that can directly access environment variables
export default function EnvironmentDisplay() {
  // Access environment variables directly
  const { developerMode, apiBaseUrl, theme } = getConfig();

  return (
    <div className="environment-info">
      <h2>Environment Configuration (Server Component)</h2>
      <div>
        <strong>Developer Mode:</strong> {developerMode}
      </div>
      <div>
        <strong>API Base URL:</strong> {apiBaseUrl}
      </div>
      <div>
        <strong>Theme:</strong> {theme}
      </div>
      <p>
        <small>
          Run with <code>npm run ssk-dev</code> or <code>npm run narayana-dev</code> to switch environments
        </small>
      </p>
    </div>
  );
}

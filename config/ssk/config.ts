import { NextConfig } from "next";

// SSK-specific configuration
const sskConfig: Partial<NextConfig> = {
  env: {
    DEVELOPER_MODE: "ssk",
    // Add any SSK-specific environment variables here
    API_BASE_URL: "https://api-ssk.example.com",
    THEME: "light",
    // Add other SSK-specific configuration as needed
  },
  // You can add other Next.js configuration options specific to SSK here
  // Such as redirects, rewrites, headers, etc.
};

export default sskConfig;

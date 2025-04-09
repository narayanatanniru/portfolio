import { NextConfig } from "next";

// Narayana-specific configuration
const narayanaConfig: Partial<NextConfig> = {
  env: {
    DEVELOPER_MODE: "narayana",
    // Add any Narayana-specific environment variables here
    API_BASE_URL: "https://api-narayana.example.com",
    THEME: "dark",
    // Add other Narayana-specific configuration as needed
  },
  // You can add other Next.js configuration options specific to Narayana here
  // Such as redirects, rewrites, headers, etc.
};

export default narayanaConfig;

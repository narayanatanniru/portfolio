import type { NextConfig } from "next";

// Import configuration based on environment variable
const getConfig = (): NextConfig => {
  // Default base configuration
  const baseConfig: NextConfig = {
    /* base config options here */
  };

  // Determine which config to use based on environment variable
  const configMode = process.env.CONFIG_MODE || "default";

  // Define environment variables based on the config mode
  if (configMode === "ssk") {
    return {
      ...baseConfig,
      env: {
        DEVELOPER_MODE: "ssk",
        API_BASE_URL: "https://api-ssk.example.com",
        THEME: "light",
      },
    };
  } else if (configMode === "narayana") {
    return {
      ...baseConfig,
      env: {
        DEVELOPER_MODE: "narayana",
        API_BASE_URL: "https://api-narayana.example.com",
        THEME: "dark",
      },
    };
  }

  return baseConfig;
};

// Get the configuration based on the environment
const configResult = getConfig();

// Apply the configuration
const nextConfig: NextConfig = {
  ...configResult,
};

export default nextConfig;

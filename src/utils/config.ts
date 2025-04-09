// Utility to access environment-specific configuration values

/**
 * Get the current developer mode (ssk or narayana)
 */
export const getDeveloperMode = (): string => {
  return process.env.DEVELOPER_MODE || "default";
};

/**
 * Get the API base URL for the current environment
 */
export const getApiBaseUrl = (): string => {
  return process.env.API_BASE_URL || "https://api-default.example.com";
};

/**
 * Get the theme for the current environment
 */
export const getTheme = (): string => {
  return process.env.THEME || "light";
};

/**
 * Check if the current environment is SSK
 */
export const isSskMode = (): boolean => {
  return getDeveloperMode() === "ssk";
};

/**
 * Check if the current environment is Narayana
 */
export const isNarayanaMode = (): boolean => {
  return getDeveloperMode() === "narayana";
};

/**
 * Get all environment-specific configuration as an object
 */
export const getConfig = () => {
  return {
    developerMode: getDeveloperMode(),
    apiBaseUrl: getApiBaseUrl(),
    theme: getTheme(),
  };
};

export default getConfig;

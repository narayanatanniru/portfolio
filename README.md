# Portfolio Project with Multiple Development Configurations for different developers

This Next.js project demonstrates how to run the application with different configurations based on the developer or environment.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the default development mode.

### `npm run ssk-dev`

Runs the app in SSK development mode, using configuration from the `config/ssk` directory.

### `npm run narayana-dev`

Runs the app in Narayana development mode, using configuration from the `config/narayana` directory.

### `npm run build`

Builds the app for production using the default configuration.

### `npm run ssk-build`

Builds the app for production using the SSK configuration.

### `npm run narayana-build`

Builds the app for production using the Narayana configuration.

## How It Works

The project uses environment variables to determine which configuration to load:

1. When you run `npm run ssk-dev`, it sets `CONFIG_MODE=ssk` and runs Next.js
2. The `next.config.ts` file detects this environment variable and loads the configuration from `config/ssk/config.ts`
3. The configuration values are then available throughout your application via `process.env`

## Using Configuration Values in Your Code

You can access the configuration values in your code using the utility functions in `src/utils/config.ts`:

```typescript
import { getConfig, getDeveloperMode, getApiBaseUrl } from "../utils/config";

// Get the current developer mode
const mode = getDeveloperMode(); // "ssk", "narayana", or "default"

// Get the API base URL for the current environment
const apiUrl = getApiBaseUrl();

// Get all configuration values as an object
const config = getConfig();
```

## Customizing Configurations

To add or modify configuration values:

1. Edit the configuration files in `config/ssk/config.ts` or `config/narayana/config.ts`
2. Add your new values to the configuration object
3. Update the utility functions in `src/utils/config.ts` to access these new values

## Adding More Configurations

To add a new configuration (e.g., for a new developer):

1. Create a new directory in the `config` folder (e.g., `config/new-dev`)
2. Create a `config.ts` file in that directory with your configuration values
3. Update `next.config.ts` to handle the new configuration mode
4. Add a new script to `package.json` (e.g., `"new-dev-dev": "CONFIG_MODE=new-dev next dev"`)

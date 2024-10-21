import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx", // Supports MDX files
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding",
    "@storybook/addon-docs", // Added for MDX support
    "@chromatic-com/storybook", // For Chromatic integration
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag", // Enables auto-documentation via tags
  },
  async viteFinal(config, { configType }) {
    // Customize Vite config if needed
    if (configType === "DEVELOPMENT") {
      config.optimizeDeps = {
        include: [
          "@storybook/addon-links",
          "@storybook/addon-essentials",
          "@storybook/addon-docs" // Ensures docs are pre-bundled
        ],
      };
    }
    return config;
  },
};

export default config;
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding",
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
        include: ["@storybook/addon-links", "@storybook/addon-essentials"],
      };
    }
    return config;
  },
};

export default config;
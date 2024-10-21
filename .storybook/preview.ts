import type { Preview } from "@storybook/react";
import { action } from "@storybook/addon-actions"; // Import the action function
import "../src/index.css"; // Import global styles

const preview: Preview = {
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'], // Example: explicit action handles
    },
    controls: {
      matchers: {
        color: /(background|color)$/i, // Matches color properties
        date: /Date$/i, // Matches Date properties
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1024px",
            height: "768px",
          },
        },
      },
    },
  },
};

export default preview;
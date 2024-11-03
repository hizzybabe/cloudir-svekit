import { sveltekit } from '@sveltejs/kit/vite';

const config = {
  kit: {
    // Specify the adapter for deployment (e.g., static, node, etc.)
    adapter: null, // Change this to your desired adapter
    alias: {
      // You can set up path aliases here if needed
      $components: 'src/components',
      $lib: 'src/lib',
    }
  },
  preprocess: [
    // Add any preprocessors here (e.g., SASS, TypeScript, etc.)
  ]
};

export default config;

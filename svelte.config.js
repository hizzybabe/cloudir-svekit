import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    alias: {
      $components: 'src/components',
      $lib: 'src/lib',
    }
  },
  preprocess: [
    // Add any preprocessors here (e.g., SASS, TypeScript, etc.)
  ]
};

export default config;

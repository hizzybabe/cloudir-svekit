import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

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
    },
    paths: {
      base: dev ? '' : '/my-sveltekit-project'
    }
  },
  preprocess: [
    // Add any preprocessors here (e.g., SASS, TypeScript, etc.)
  ]
};

export default config;

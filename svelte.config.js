import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),
    alias: {
      $components: 'src/components',
      $lib: 'src/lib',
    },
    paths: {
      base: dev ? '' : '/cloudprod-svekit'
    },
    appDir: 'app'
  }
};

export default config;

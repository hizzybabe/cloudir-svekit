import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const base = dev ? '' : '/cloudprod-svekit';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    alias: {
      $components: 'src/components',
      $lib: 'src/lib',
    },
    paths: {
      base: base
    },
    appDir: 'app',
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore missing favicon
        if (path === '/cloudprod-svekit/favicon.png') {
          return;
        }
        // otherwise fail the build
        throw new Error(message);
      },
      entries: ['*']
    }
  }
};

export default config;

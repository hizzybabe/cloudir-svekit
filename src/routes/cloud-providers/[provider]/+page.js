export const prerender = true;

export function load({ params }) {
  return {
    provider: params.provider
  };
} 
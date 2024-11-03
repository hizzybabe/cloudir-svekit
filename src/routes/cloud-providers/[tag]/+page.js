export const prerender = true;

export function load({ params }) {
  return {
    tag: params.tag
  };
}

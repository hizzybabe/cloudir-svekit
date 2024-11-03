<script context="module">
  export async function load({ params }) {
    const tag = params.tag; // This will be "vps" when the URL is /cloud-providers/vps
    const providers = [
      { name: "VPS Provider", tags: ["vps", "web hosting"] },
      { name: "Shared Hosting Provider", tags: ["shared hosting"] },
      { name: "WordPress Hosting", tags: ["wordpress hosting"] },
      // Add more providers as needed
    ];

    // Filter providers based on the tag
    const filteredProviders = providers.filter(provider => provider.tags.includes(tag));

    return { props: { tag, filteredProviders } };
  }
</script>

<script>
  export let tag;
  export let filteredProviders;
</script>

<main>
  <h1>Providers tagged with: {tag}</h1>
  <ul>
    {#if filteredProviders.length > 0}
      {#each filteredProviders as provider}
        <li>{provider.name}</li>
      {/each}
    {:else}
      <li>No providers found for this tag.</li>
    {/if}
  </ul>
</main>

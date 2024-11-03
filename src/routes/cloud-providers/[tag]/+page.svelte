<script>
  import { base } from '$app/paths';
  export let data;
  
  const providers = [
    { name: "VPS Provider", tags: ["vps", "web hosting"] },
    { name: "Shared Hosting Provider", tags: ["shared hosting"] },
    { name: "WordPress Hosting", tags: ["wordpress hosting"] },
  ];
  
  $: filteredProviders = providers.filter(provider => 
    provider.tags.includes(data.tag)
  );
</script>

<main>
  <h1>Providers tagged with: {data.tag}</h1>
  <ul>
    {#if filteredProviders.length > 0}
      {#each filteredProviders as provider}
        <li>
          <a href="{base}/cloud-providers/{provider.tags[0]}">{provider.name}</a>
        </li>
      {/each}
    {:else}
      <li>No providers found for this tag.</li>
    {/if}
  </ul>
  <p><a href="{base}/cloud-providers">Back to Cloud Providers</a></p>
</main>
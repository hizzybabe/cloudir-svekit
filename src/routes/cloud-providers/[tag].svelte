<script>
    import { base } from '$app/paths';
    export let tag;
    export let filteredProviders;
  </script>
  
  <main>
    <h1>Providers tagged with: {tag}</h1>
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
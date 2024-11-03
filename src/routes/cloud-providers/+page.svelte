<script>
  import { base } from '$app/paths';
  export let providers = [
    { name: "VPS Provider", tags: ["vps", "web hosting"] },
    { name: "Shared Hosting Provider", tags: ["shared hosting"] },
    { name: "WordPress Hosting", tags: ["wordpress hosting"] },
    // Add more providers as needed
  ];
</script>

<main>
  <h1>Cloud Provider Directory</h1>
  <ul>
    {#each providers as provider}
      <li>
        <a href="{base}/cloud-providers/{provider.tags[0]}">{provider.name}</a>
        <p>Tags: {provider.tags.join(", ")}</p>
      </li>
    {/each}
  </ul>
</main>

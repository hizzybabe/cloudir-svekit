<script>
  export let tools = [
    { name: "IDE", tags: ["ide"] },
    { name: "AI Tool", tags: ["ai"] },
    { name: "CMS", tags: ["cms"] },
    { name: "Static Site Generator", tags: ["static site generator"] },
    // Add more tools as needed
  ];
</script>

<main>
  <h1>Web Development Tools Directory</h1>
  <ul>
    {#each tools as tool}
      <li>
        <a href={`/webdev-tools/${tool.name}`}>{tool.name}</a>
        <p>Tags: {tool.tags.join(", ")}</p>
      </li>
    {/each}
  </ul>
</main>

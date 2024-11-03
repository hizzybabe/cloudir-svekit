<script>
  export let tools = [
    { name: "IDE", tags: ["ide"] },
    { name: "AI Tool", tags: ["ai"] },
    { name: "CMS", tags: ["cms"] },
    { name: "Static Site Generator", tags: ["static site generator"] },
    // Add more tools as needed
  ];
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  li {
    border-left: 4px solid var(--secondary-color);
  }

  h1 {
    text-align: center;
  }
</style>

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

<script>
  import { base } from '$app/paths';
  export let data;
  
  const providers = [
    { 
      name: "VPS Provider",
      slug: "vps-provider",
      tags: ["vps", "web hosting"],
      description: "High-performance virtual private servers for all your hosting needs",
      features: [
        "99.9% Uptime Guarantee",
        "24/7 Technical Support",
        "Global Data Centers"
      ],
      pricing: [
        {
          plan: "Starter",
          price: "$10/month",
          specs: "2GB RAM, 1 CPU, 20GB SSD"
        },
        {
          plan: "Professional",
          price: "$20/month",
          specs: "4GB RAM, 2 CPU, 40GB SSD"
        }
      ]
    },
    // Copy the other providers from +page.svelte
  ];
  
  $: provider = providers.find(p => p.slug === data.slug);
  $: isTag = !provider && data.slug.includes('-');
  $: filteredProviders = isTag 
    ? providers.filter(p => p.tags.includes(data.slug))
    : [];
</script>

<main>
  {#if provider}
    <div class="provider-details">
      <h1>{provider.name}</h1>
      <p class="description">{provider.description}</p>
      
      {#if provider.features}
        <section>
          <h2>Features</h2>
          <ul>
            {#each provider.features as feature}
              <li>{feature}</li>
            {/each}
          </ul>
        </section>
      {/if}
      
      {#if provider.pricing}
        <section>
          <h2>Pricing Plans</h2>
          <div class="pricing-grid">
            {#each provider.pricing as plan}
              <div class="price-card">
                <h3>{plan.plan}</h3>
                <div class="price">{plan.price}</div>
                <p>{plan.specs}</p>
              </div>
            {/each}
          </div>
        </section>
      {/if}
    </div>
  {:else if isTag}
    <h1>Providers tagged with: {data.slug}</h1>
    <ul>
      {#if filteredProviders.length > 0}
        {#each filteredProviders as provider}
          <li>
            <a href="{base}/cloud-providers/{provider.slug}">{provider.name}</a>
            <p>{provider.description}</p>
          </li>
        {/each}
      {:else}
        <li>No providers found for this tag.</li>
      {/if}
    </ul>
  {:else}
    <p>Provider not found.</p>
  {/if}
  
  <p><a href="{base}/cloud-providers">← Back to Cloud Providers</a></p>
</main>

<style>
  .provider-details {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .description {
    font-size: 1.2rem;
    color: var(--text-color);
    margin-bottom: 2rem;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .price-card {
    background: var(--background-color);
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
  }

  .price {
    font-size: 1.5rem;
    color: var(--primary-color);
    font-weight: bold;
    margin: 1rem 0;
  }
</style> 
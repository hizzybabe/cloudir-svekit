<script>
  import { base } from '$app/paths';
  export let data;

  // Mock data for a cloud provider
  const providerData = {
    name: "VPS Provider",
    description: "High-performance virtual private servers for all your hosting needs",
    features: [
      "99.9% Uptime Guarantee",
      "24/7 Technical Support",
      "Global Data Centers",
      "Instant Deployment"
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
      },
      {
        plan: "Enterprise",
        price: "$40/month",
        specs: "8GB RAM, 4 CPU, 80GB SSD"
      }
    ],
    tags: ["vps", "web hosting"]
  };
</script>

<style>
  .provider-header {
    background-color: var(--primary-color);
    color: white;
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }

  .feature-card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid var(--secondary-color);
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .price-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .price {
    font-size: 1.5rem;
    color: var(--primary-color);
    font-weight: bold;
    margin: 1rem 0;
  }

  .back-link {
    display: inline-block;
    margin-top: 2rem;
  }
</style>

<main>
  <div class="provider-header">
    <h1>{providerData.name}</h1>
    <p>{providerData.description}</p>
    <p>Tags: {providerData.tags.join(", ")}</p>
  </div>

  <section>
    <h2>Features</h2>
    <div class="features-grid">
      {#each providerData.features as feature}
        <div class="feature-card">
          <p>{feature}</p>
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2>Pricing Plans</h2>
    <div class="pricing-grid">
      {#each providerData.pricing as plan}
        <div class="price-card">
          <h3>{plan.plan}</h3>
          <div class="price">{plan.price}</div>
          <p>{plan.specs}</p>
        </div>
      {/each}
    </div>
  </section>

  <a href="{base}/cloud-providers" class="back-link">← Back to Cloud Providers</a>
</main> 
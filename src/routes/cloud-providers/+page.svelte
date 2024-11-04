<script>
  import { base } from '$app/paths';
  export let providers = [
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
    { 
      name: "Shared Hosting Provider",
      slug: "shared-hosting-provider",
      tags: ["shared hosting"],
      description: "Affordable shared hosting solutions",
      features: [
        "Free SSL Certificate",
        "One-Click Installations",
        "Daily Backups"
      ]
    },
    { 
      name: "WordPress Hosting",
      slug: "wordpress-hosting",
      tags: ["wordpress hosting"],
      description: "Optimized WordPress hosting platform",
      features: [
        "WordPress Pre-installed",
        "Automatic Updates",
        "WP-CLI Support"
      ]
    }
  ];
</script>

<main>
  <h1>Cloud Provider Directory</h1>
  <ul>
    {#each providers as provider}
      <li>
        <a href="{base}/cloud-providers/{provider.slug}">{provider.name}</a>
        <p>{provider.description}</p>
        <p>Tags: {provider.tags.join(", ")}</p>
      </li>
    {/each}
  </ul>
</main>

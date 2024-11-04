<script>
  import { base } from '$app/paths';
</script>

<nav class="navbar">
  <div class="nav-content">
    <a href="{base}/" class="logo">DevTools Directory</a>
    <ul class="nav-links">
      <li><a href="{base}/cloud-providers">Cloud Providers</a></li>
      <li><a href="{base}/webdev-tools">Web Development Tools</a></li>
    </ul>
  </div>
</nav>

<style>
  .navbar {
    background-color: var(--primary-color);
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .nav-links a:hover {
    color: var(--background-color);
  }

  @media (max-width: 600px) {
    .nav-content {
      flex-direction: column;
      gap: 1rem;
    }

    .nav-links {
      gap: 1rem;
    }
  }
</style> 
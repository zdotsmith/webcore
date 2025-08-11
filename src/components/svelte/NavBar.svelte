<!-- src/components/svelte/NavBar.svelte -->
<script>
  import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-svelte';
</script>

<Navbar class="border-b bg-white/70 backdrop-blur dark:bg-gray-900/70">
  <NavbarBrand href="/" class="text-xl font-bold">
    <span class="text-brand">3D</span> Studio
  </NavbarBrand>
  <NavbarToggle />
  <NavbarCollapse>
    <NavbarLink href="/#services">Services</NavbarLink>
    <NavbarLink href="/#portfolio">Portfolio</NavbarLink>
    <NavbarLink href="/blog">Blog</NavbarLink>
    <NavbarLink href="/#contact">Contact</NavbarLink>
  </NavbarCollapse>
</Navbar>
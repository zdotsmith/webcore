<!-- src/components/svelte/NavBar.svelte -->
<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
</script>

<Navbar class="border-b bg-white/70 backdrop-blur dark:bg-gray-900/70">
  <NavBrand href="/" class="text-xl font-bold">
    <span class="text-brand">3D</span> Studio
  </NavBrand>

  <NavHamburger />

  <NavUl class="ml-auto">
    <NavLi href="/#services">Services</NavLi>
    <NavLi href="/#portfolio">Portfolio</NavLi>
    <NavLi href="/blog">Blog</NavLi>
    <NavLi href="/#contact">Contact</NavLi>
  </NavUl>
</Navbar>
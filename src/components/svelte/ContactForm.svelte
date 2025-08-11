<!-- src/components/svelte/ContactForm.svelte -->
<script>
  import { Label, Input, Textarea, Button } from 'flowbite-svelte';
  let sending = false;
  let success = '';
  let error = '';

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    sending = true; success = ''; error = '';
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form)
      });
      const data = await res.json();
      if (data.success) {
        success = 'Thanks! I’ll get back to you soon.';
        form.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      error = err.message;
    } finally {
      sending = false;
    }
  }
</script>

<form class="space-y-4 max-w-xl" on:submit={handleSubmit}>
  <input type="hidden" name="access_key" value="REPLACE_WITH_YOUR_WEB3FORMS_KEY" />

  <div>
    <Label for="name" class="mb-2 block">Name</Label>
    <Input id="name" name="name" required placeholder="Your name" />
  </div>

  <div>
    <Label for="email" class="mb-2 block">Email</Label>
    <Input id="email" type="email" name="email" required placeholder="you@example.com" />
  </div>

  <div>
    <Label for="message" class="mb-2 block">Project details</Label>
    <Textarea id="message" name="message" rows="5" placeholder="Tell me about your 3D project" />
  </div>

  <Button class="w-full" type="submit" disabled={sending}>
    {sending ? 'Sending…' : 'Request a quote'}
  </Button>

  {#if success}<p class="text-green-600">{success}</p>{/if}
  {#if error}<p class="text-red-600">{error}</p>{/if}
</form>
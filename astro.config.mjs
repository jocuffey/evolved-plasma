import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
	integrations: [alpine()],
	site: 'https://metriccaloriecounter.netlify.app',
	base: '/evolved-plasma',
});
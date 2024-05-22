import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OpenDevJourney',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			
			sidebar: [
				{
					label: '0. Act 0 - Welcome Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome learner', link: '/guides/example/' },
						{ label: 'How to get Started', link: '/guides/example1/' },
					],
				},
				{
					label: '1. Act 1 - Learn to Code',
					autogenerate: { directory: 'reference' },
					collapsed: true,
					items: [
						{ label: 'Basics of HTML', link: '/guides/example3/' },
						{ label: 'Explore CSS', link: '/guides/example1/' },
						{ label: 'Learn Git', link: '/guides/example1/' },
					],
				},
				{
					label: '2. Act 2 - Design and Build',
					autogenerate: { directory: 'reference' },
					collapsed: true,
					items: [
						{ label: 'Explore More CSS', link: '/guides/example1/' },
					],
				},
				{
					label: '3. Act 3 - Tools and Frameworks',
					autogenerate: { directory: 'reference' },
					collapsed: true,
					items: [
						{ label: 'Friend of Developer (devtool)', link: '/guides/example1/' },
						{ label: 'Tailwind - A CSS Framework', link: '/guides/example1/' },
					],
				},
				{
					label: '4. Act 4 - Learn to Program',
					autogenerate: { directory: 'reference' },
					collapsed: true,
					items: [
						{ label: 'Intro to Javascript', link: '/guides/example1/' },
						{ label: 'Fundamental Concepts', link: '/guides/example1/' },
						{ label: 'Problem Solving', link: '/guides/example1/' },
					],
				},
				{
					label: '5. Act 5 - Javascript in Action',
					autogenerate: { directory: 'reference' },
					collapsed: true,
					items: [
						{ label: 'Web Browsers', link: '/guides/example1/' },
						{ label: 'DOM Manipulation', link: '/guides/example1/' },
						{ label: 'Events', link: '/guides/example1/' },
						{ label: 'APIs', link: '/guides/example1/' },
					],
				},
				{
					label: '6. Act 6 - Advance Javascript',
					autogenerate: { directory: 'reference' },
					collapsed: true,
					items: [
						{ label: 'API', link: '/guides/example1/' },
						{ label: 'JSON', link: '/guides/example1/' },
						{ label: 'Dynamic Website', link: '/guides/example1/' },
					],
				},
		
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});

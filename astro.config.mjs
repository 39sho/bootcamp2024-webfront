import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from "rehype-mermaid";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Zli Boot Camp 2024',
			logo: {
				src: './src/assets/Logo.svg',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Introduction',
					link: '/introduction',
				},
				{
					label: 'Webフロント',
					autogenerate: { directory: 'webfront' },
					collapsed: false,
				},
			],
		}),
	],
	markdown: {
		rehypePlugins: [[rehypeMermaid, { strategy: "inline-svg", dark: true }]],
	},
});

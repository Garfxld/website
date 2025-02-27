/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
			  blink: {
				'0%, 45%': { opacity: 1 },
				'55%, 100%': { opacity: 0 },
			  },
			},
			animation: {
			  blink: 'blink 1s infinite',
			},
		},
	},
	plugins: [],
}

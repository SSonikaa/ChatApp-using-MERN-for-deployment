// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	// eslint-disable-next-line no-undef
// 	plugins: [require("daisyui")],
// };

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				'lg': '0px',
			  },
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui"),
		require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),

	],
};

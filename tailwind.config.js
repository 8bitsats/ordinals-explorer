/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		screens: {
  			'3xl': '1792px',
  			'4xl': '2048px'
  		},
  		colors: {
  			orange: '#FF5500',
  			peach: '#FFC3A6',
  			mint: '#C2EBC4',
  			sky: {
  				'50': '#eff7ff',
  				'100': '#daecff',
  				'200': '#b3d9ff',
  				'300': '#91cbff',
  				'400': '#5eaefc',
  				'500': '#388cf9',
  				'600': '#226dee',
  				'700': '#1a58db',
  				'800': '#1c47b1',
  				'900': '#1c3f8c',
  				'950': '#162755'
  			},
  			pink: '#FF9ECF',
  			gold: '#BC812E',
  			black: '#0D0C0C',
  			neutral: {
  				'0': '#F2F0ED',
  				'50': '#EBE8E5',
  				'100': '#E4E0DC',
  				'200': '#CFC9C2',
  				'300': '#8C877D',
  				'400': '#595650',
  				'500': '#383432',
  				'600': '#2A2726',
  				'700': '#1E1C1B',
  				'800': '#181717',
  				'900': '#141312'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

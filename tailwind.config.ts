import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#f2f7fb',100:'#e7eff7',200:'#cfe0ef',300:'#a9c7e0',
          400:'#6d9fca',500:'#3e7fb8',600:'#1b4f91',700:'#153e73',
          800:'#0f2d56',900:'#0b213f'
        },
        accent: {
          50:'#ecfbf9',100:'#d6f7f3',200:'#b0eee7',300:'#7ee1d6',
          400:'#40cfc2',500:'#14b8a6',600:'#0d9488',700:'#0f766e',
          800:'#115e59',900:'#134e4a'
        },
        neutral: {
          50:'#f9fafb',100:'#f3f4f6',200:'#e5e7eb',300:'#d1d5db',400:'#9ca3af',
          500:'#6b7280',600:'#4b5563',700:'#374151',800:'#1f2937',900:'#0b1220'
        },
        success:{ DEFAULT:'#10b981', ink:'#065f46', bg:'#ecfdf5', border:'#a7f3d0'},
        warning:{ DEFAULT:'#f59e0b', ink:'#92400e', bg:'#fffbeb', border:'#fde68a'},
        danger: { DEFAULT:'#ef4444', ink:'#991b1b', bg:'#fef2f2', border:'#fecaca'},
        info:   { DEFAULT:'#3b82f6', ink:'#075985', bg:'#eff6ff', border:'#bfdbfe'},
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,.06)',
        focus: '0 0 0 3px rgba(29,78,216,.35)'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config

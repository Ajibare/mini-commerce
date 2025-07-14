# Mini-Commerce

A modern e-commerce shop built with Next.js 13+ and TypeScript.

## Features

- Browse products with images, descriptions, and prices
- Add items to cart with quantity support
- View cart contents and manage items
- Complete checkout flow with order confirmation
- Responsive design for all devices
- Dark mode support
- Search and filter functionality
- SEO optimized with meta tags
- TypeScript strict mode
- Jest + React Testing Library tests
- Zustand state management with persistence
- React Query for data fetching

## Tech Stack

- Next.js 13+
- TypeScript with strict mode
- React Query
- Zustand
- Tailwind CSS
- Jest + React Testing Library
- Lucide React icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── data/               # Product data and static assets
├── hooks/              # Custom React hooks
├── store/              # Zustand store
├── types/              # TypeScript types
└── utils/              # Utility functions
```

## Design Decisions

- Mobile-first responsive design
- Clean, modern UI with Tailwind CSS
- Dark mode using Tailwind's dark mode variant
- Optimized images using Next.js Image component
- Semantic HTML for accessibility

## State Management

- Zustand for global cart state
- React Query for product data fetching
- Local storage persistence for cart
- Derived selectors for cart totals

## Error Handling

- Loading states for async operations
- Error boundaries
- User-friendly error messages
- Graceful degradation for failed requests

## Testing

- Jest for unit tests
- React Testing Library for component tests
- End-to-end testing with Playwright

## SEO

- Dynamic meta tags
- Open Graph tags
- Twitter card support
- Sitemap generation
- Image optimization

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT

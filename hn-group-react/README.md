# H&N Group React Website

This is a modern React TypeScript implementation of the H&N Group website, converted from a static HTML template.

## Features

- **Modern React Architecture**: Built with React 18 and TypeScript
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Interactive Components**: 
  - Smooth scroll navigation
  - Image gallery with modal preview
  - Contact form with email subscription
  - Animated hover effects
- **Professional Styling**: Maintains the original design aesthetic
- **Accessibility**: Improved keyboard navigation and screen reader support

## Technologies Used

- React 18 with TypeScript
- Bootstrap 5 & React Bootstrap
- FontAwesome icons
- CSS3 with custom animations
- Responsive grid layout

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Header navigation with scroll effects
│   ├── Hero.tsx         # Hero section with company branding
│   ├── Introduction.tsx # About section with feature highlights
│   ├── Work.tsx         # Portfolio gallery with modal viewer
│   └── Contact.tsx      # Contact information and subscription form
├── App.tsx              # Main application component
├── App.css              # Custom styling and theme
└── index.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd hn-group-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit: `http://localhost:3000` (or the port shown in terminal)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Deployment

The built files can be deployed to any static hosting service such as:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting

## Customization

### Updating Content

1. **Company Information**: Edit the text content in each component file
2. **Images**: Replace images in the `public/img/` directory
3. **Styling**: Modify `src/App.css` for design changes
4. **Colors**: Update the CSS custom properties for theme colors

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Add corresponding navigation links if needed

## Conversion Notes

This React version includes several improvements over the original static template:

- **Component-based architecture** for better maintainability
- **TypeScript support** for type safety and better development experience
- **Modern React hooks** for state management and side effects
- **Improved accessibility** with proper semantic HTML and ARIA attributes
- **Better performance** with optimized React rendering
- **Mobile-first responsive design** using CSS Grid and Flexbox

## Original Template Credits

Based on "The Town" template from TemplateM (templatemo.com/tm-525-the-town)
Converted to React by H&N Group development team.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under the MIT License.

# CountryPeek

A modern React application for exploring countries around the world. Built with Vite, React 19, and React Router, this app allows users to search, filter, and discover detailed information about countries using the REST Countries API.

## Features

- **Search Countries**: Search for countries by name with real-time results
- **Filter by Region**: Filter countries by continent (Africa, Americas, Asia, Europe, Oceania)
- **Sort Options**: Sort countries by name or population
- **Country Details**: View detailed information about a country including population, region, capital, languages, currencies, and bordering countries
- **Favourites**: Save your favorite countries for quick access
- **Dark/Light Theme**: Toggle between light and dark modes
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technologies Used

- **React 19**: Latest version of React with modern hooks and features
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing for navigation
- **REST Countries API**: Free API for country data
- **CSS Modules**: Scoped styling for components
- **ESLint**: Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/country-peek.git
   cd country-peek
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting
- `npm run deploy` - Deploy to GitHub Pages (requires build first)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CountryCard.jsx  # Country card component
│   ├── FilterBar.jsx    # Region filter and sort controls
│   ├── Header.jsx       # App header with navigation
│   ├── Loader.jsx       # Loading spinner
│   └── SearchBar.jsx    # Search input component
├── context/             # React context providers
│   ├── FavouritesContext.jsx  # Favourites state management
│   └── ThemeContext.jsx       # Theme state management
├── hooks/               # Custom React hooks
│   ├── useCountries.js  # Hook for fetching country data
│   ├── useFavourites.js # Hook for favourites functionality
│   └── useTheme.js      # Hook for theme management
├── pages/               # Page components
│   ├── Home.jsx         # Main search and browse page
│   ├── CountryPage.jsx  # Individual country details
│   ├── Favourites.jsx   # Saved countries page
│   └── NotFound.jsx     # 404 error page
├── styles/              # CSS stylesheets
│   ├── App.css          # Main app styles
│   └── index.css        # Global styles
├── App.jsx              # Main app component with routing
└── main.jsx             # App entry point
```

## API Usage

This app uses the [REST Countries API](https://restcountries.com/) to fetch country data. The API provides comprehensive information about countries including flags, population, geography, and more.

## Usage

1. **Search**: Type a country name in the search bar to find countries. Results appear as you type.
2. **Filter**: Use the region dropdown to filter countries by continent.
3. **Sort**: Sort results by country name or population using the sort dropdown.
4. **View Details**: Click on any country card to view detailed information.
5. **Favourites**: Click the heart icon on a country card to save it to your favourites. Access saved countries from the "Favourites" page.
6. **Theme**: Toggle between light and dark modes using the theme button in the header.

## Deployment

This project is configured for deployment to GitHub Pages.

### Deploy to GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

   This will build the app and deploy the `dist` folder to the `gh-pages` branch.

3. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select "Deploy from a branch" and choose `gh-pages` branch with `/ (root)` folder

Your app will be available at `https://your-username.github.io/country-peek/`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

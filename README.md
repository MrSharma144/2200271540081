# URL Shortener Web App

A simple React-based URL shortener application with a custom middleware logger. This project allows users to input multiple URLs, generate short links, and view the results. Built with Vite for fast development and modern tooling.

## Features
- Add up to 5 URLs at once for shortening
- Custom short code and expiry (in minutes) for each URL
- Instant validation and error handling
- View a list of shortened URLs with expiry info
- Simple in-memory data storage (no backend)
- Middleware logger for event tracking

## Project Structure
```
FrontEnd/
  urlshortener/
    src/
      components/
        URLForm.jsx
        URLList.jsx
      data/
        urls.js
      pages/
        ShortenerPage.jsx
        StatsPage.jsx
      App.jsx
      main.jsx
    public/
      index.html
    package.json
    vite.config.js
    ...
middleware/
  logger.js
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd Affordmed/FrontEnd/urlshortener
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage
- Enter a URL, optional validity (in minutes), and an optional custom shortcode.
- Click "Add URL" to add more rows (up to 5).
- Click "Shorten All" to generate short links.
- View the results below the form.

## Middleware Logger
The logger in `middleware/logger.js` tracks events and warnings in the console. It is used for validation and shortening actions.

## Notes
- This project is for demonstration and does not persist data after refresh.
- No backend/API integration; all logic is client-side.

## License
MIT

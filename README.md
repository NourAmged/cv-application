# CV Application

An interactive resume (CV) builder built with React and Vite. Users can enter their general information, education, and professional experience, preview their CV live, and download it as a PDF.

![screenshot](./Screenshot%202025-07-23%20163210.png)

## Features

- Modern, responsive UI
- Enter and edit general, education, and professional information
- Live CV preview updates as you fill out forms
- Download your CV as a PDF

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/NourAmged/cv-application.git
   cd cv-application
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.


## Project Structure

- `src/` — React components, styles, and assets
- `public/` — Static files (e.g., favicon, manifest)
- `index.html` — Main HTML file
- `package.json` — Project metadata and scripts

## Dependencies

- React
- Vite
- jsPDF (for PDF export)
- ESLint (for linting)
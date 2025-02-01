# JakeFlix App Documentation

JakeFlix is a Netflix clone web application developed for learning purposes during the Devlive Bootcamp. The project utilizes React with Vite and TailwindCSS, incorporating hooks, Context API, and external libraries such as TanStack Query for HTTP requests and React Skeleton for loading templates. The configuration employs the latest version of TailwindCSS (v4).

## Folder Structure

The project is organized as follows:

```
JakeFlix-app-
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   │   ├── api
│   │   │   └── auth
│   │   │   │   └── auth.ts
│   │   │   └── movie
│   │   │   │   └── movie.ts
│   ├── modules
│   │   ├── movies
│   │   │   ├── ui
│   │   │   │   ├── icons
│   │   │   │   │   ├── Download.tsx
│   │   │   │   │   ├── Enjoy.tsx
│   │   │   │   │   ├── Popcorn.tsx
│   │   │   │   │   ├── Profiles.tsx
│   │   │   │   │   ├── Tv.tsx
│   │   │   │   ├── pages
│   │   │   │   │   │   ├── Login
│   │   │   │   │   │   │   ├── Login.tsx
│   │   │   │   │   │   ├── ProfileSelector
│   │   │   │   │   │   │   ├── ProfileSelector.tsx
│   │   │   │   │   │   ├── Register
│   │   │   │   │   │   │   ├── Register.tsx
│   │   │   │   ├── components
│   │   │   │   │   ├── Advertisement
│   │   │   │   │   │   ├── Advertisement.tsx
│   │   │   │   │   ├── Footer
│   │   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   ├── animation
│   │   │   │   │   │   ├── LogoAnimation.tsx
│   │   │   │   │   ├── Header
│   │   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── MovieCard
│   │   │   │   │   │   ├── MovieCard.tsx
│   │   │   │   │   ├── Top10MovieCard
│   │   │   │   │   │   ├── Top10MovieCard.tsx
│   │   │   │   │   ├── MovieList
│   │   │   │   │   │   ├── MovieCard.tsx
│   │   │   │   │   └── index.ts
│   ├── shared
│   │   ├── components
│   │   │   ├── atoms
│   │   │   │   ├── Button
│   │   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card
│   │   │   │   │   ├── Card.tsx
│   │   │   │   ├── Input
│   │   │   │   │   ├── Input.tsx
│   │   │   ├── molecules
│   │   │   │   ├── Banner
│   │   │   │   │   ├── Banner.tsx
│   │   │   │   ├── Carousel
│   │   │   │   │   ├── Carousel.tsx
│   │   │   │   ├── Footer
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Form
│   │   │   │   │   ├── Form.tsx
│   │   │   │   ├── Header
│   │   │   │   │   ├── Header.tsx
│   │   │   │   ├── Modal
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Nav
│   │   │   │   │   ├── Nav.tsx
│   │   ├── config
│   │   │   └── axios-client.tsx
│   │   │   └── axios-mdb-client.tsx
│   │   ├── context
│   │   │   └── auth.tsx
│   │   ├── hooks
│   │   │   └── useAuth.tsx
│   │   │   └── useMovie.tsx
│   │   ├── layouts
│   │   │   └── HeaderLayout.tsx
│   │   ├── router
│   │   │   └── router.tsx
│   │   ├── template
│   │   │   └── HomeTemplate.tsx
│   │   │   └── MovieListTemplate.tsx
│   │   ├── types
│   │   │   ├── auth.tsx
│   │   │   ├── cast.tsx
│   │   │   ├── movie.tsx
│   │   │   ├── user.tsx
│   │   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.template
├── .gitignore
├── .prettierrc
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Directory and File Overview

- **public/**: Contains static assets such as icons and logos.
- **src/**: Main source code directory, containing:
  - **assets/**: Static files including images and icons.
  - **api/**: Contains API request logic for authentication and movie-related data.
  - **modules/**: Houses feature-specific modules like `movies`, further divided into:
    - **ui/**: UI components including icons, pages, and reusable components.
    - **components/**: Shared UI components like buttons, cards, and inputs.
  - **shared/**: Shared functionalities across modules such as configurations, hooks, and context management.
  - **config/**: Configurations for axios instances to handle HTTP requests.
  - **router/**: Centralized routing configuration.
  - **template/**: Layout templates for different pages.
- **App.tsx**: Root component.
- **main.tsx**: Entry point of the application.
- **vite.config.ts**: Configuration for Vite.

## Project Initialization

### User Database

The users database is managed using a separate `json-server` project. To run it locally, clone the repository:

```bash
git clone https://github.com/jakefernandez102/Jakeflix-DB.git
cd Jakeflix-DB
json-server -w db.json -p 5001
```

This will start the JSON server on port `5001`, which the application uses for user authentication.

To set up and run the JakeFlix application locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/jakefernandez102/JakeFlix-app-.git
   cd JakeFlix-app-
   ```

2. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   - Rename the `.env.template` file to `.env`:
     ```bash
     mv .env.template .env
     ```
   - Obtain an API key from [The Movie Database (TMDB)](https://www.themoviedb.org/).
   - Open the `.env` file and add your TMDB API key:
     ```
     VITE_TMDB_API_KEY=your_api_key_here
     ```

4. **Start the Development Server**:
   Launch the application using Vite:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173` by default.

By following these steps, you will have the JakeFlix application running locally for development and testing purposes.

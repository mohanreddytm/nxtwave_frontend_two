# Party Menu Application

A React web app for browsing a party menu, viewing dish details, and saving favourite recipes. Built with Vite, React 19, React Router 7, and plain CSS.

## Tech Stack

- **React 19** — UI library
- **React Router DOM 7** — client-side routing
- **Vite 6** — dev server and build tool
- **Plain CSS** — no Tailwind or UI component libraries

## Setup

```bash
npm install
npm run dev
```


## Test Credentials

| Field    | Value              |
| -------- | ------------------ |
| Email    | `admin@example.com` |
| Password | `admin123`         |

Sign-in uses the live API:

`POST nxtwave-frontend-two.vercel.app`

## Routes

| Path              | Access    | Description                          |
| ----------------- | --------- | ------------------------------------ |
| `/signin`         | Public    | Sign-in page (redirects if logged in) |
| `/`               | Protected | Menu page with filters and dish grid |
| `/menu/:id`       | Public    | Food detail page                     |
| `/saved-recipes`  | Public    | Saved recipes list                   |
| `*`               | Public    | 404 Not Found                        |

## Local Storage Keys

| Key                        | Purpose                          |
| -------------------------- | -------------------------------- |
| `party_menu_token`         | JWT auth token                   |
| `party_menu_user`          | Logged-in user object (JSON)     |
| `party_menu_saved_recipes` | Array of saved recipe objects    |

## Project Structure

```
src/
  api/auth.js
  context/AuthContext.jsx
  components/
    ProtectedRoute.jsx
    Header.jsx
    FoodCard.jsx
    SavedRecipeCard.jsx
    FilterBar.jsx
  data/menuData.js
  pages/
    SignIn.jsx
    Menu.jsx
    FoodDetail.jsx
    SavedRecipes.jsx
    NotFound.jsx
  styles/global.css
  App.jsx
  main.jsx
```

## Menu Data

Each dish in `menuItems` includes its own food image URL. When you replace the array with the full dataset from the S3 JSON link below, note that the official dataset reuses a single shared image for every item — update those URLs if you want unique images per dish.

https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/8a9bb128-ed03-4a8a-9f2d-3525aec14e00_rfcd.json

The helper functions `filterMenuItems()` and `getMenuItemById()` will work unchanged with the real data.

## Features

- Live API authentication with error handling
- Client-side category, diet, and name filtering (search applies on button click)
- Save / remove recipes persisted in localStorage
- Responsive card grid layout with dark theme styling
- Protected routes for the main menu page

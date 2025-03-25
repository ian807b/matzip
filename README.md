# Matzip - Food & Place Marking App

Matzip is a mobile application that allows users to mark, rate, and share their favorite restaurants and places. Users can create personalized maps with custom markers, attach photos, write reviews, and search for places they've visited.

## Features

- **Interactive Map**: Mark your favorite places directly on the map with custom colored markers
- **Rating System**: Score places from 1-5 and display happy/neutral/sad face markers based on your rating
- **Photo Management**: Add and manage multiple photos for each location
- **Personalized Feed**: View all your marked places in a chronological feed
- **Favorites**: Mark and filter places as favorites for quick access
- **Search**: Find your marked places by address or title
- **User Authentication**: Secure login with email/password, Apple, or Kakao

## Tech Stack

### Frontend

- **React Native**: Cross-platform mobile framework
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Navigation handling with drawer, stack, and tab navigators
- **React Query**: Data fetching, caching, and state management
- **Zustand**: Lightweight state management
- **React Native Maps**: Google Maps integration
- **Axios**: HTTP client
- **React Native Image Crop Picker**: Photo selection and management
- **React Native Encrypted Storage**: Secure token storage

### Backend

- **Node.js/Express**: RESTful API server
- **Authentication**: JWT-based auth with refresh tokens
- **Image Storage**: Server-side image processing and storage

## Project Structure

```
MatzipApp/
├── front/                  # Frontend React Native application
│   ├── src/
│   │   ├── api/            # API client and endpoints
│   │   ├── assets/         # Static assets like images
│   │   ├── components/     # Reusable UI components
│   │   ├── constants/      # Application constants
│   │   ├── hooks/          # Custom React hooks
│   │   ├── navigations/    # Navigation configuration
│   │   ├── screens/        # Screen components
│   │   ├── store/          # Zustand state stores
│   │   ├── style/          # Style definitions
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
├── server/                 # Backend server (not shown in code samples)
```

## Main Components

- **Map View**: Interactive map with custom markers and location tracking
- **Feed View**: Grid layout of all saved places with image thumbnails
- **Detail View**: Comprehensive place details with photos, ratings, and location
- **Add/Edit Post**: Form for adding or editing place information
- **Search**: Search functionality for finding saved places
- **Favorites**: Collection of favorited places

## Getting Started

### Prerequisites

- Node.js (v14+)
- Yarn or npm
- React Native development environment setup
- Google Maps API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/matzip-app.git
cd matzip-app
```

2. Install dependencies:
```bash
cd front
yarn install
# or
npm install
```

3. Add your Google Maps API key to the `.env` file:
```
GOOGLE_API_KEY=your_google_maps_api_key_here
```

4. Start the development server:
```bash
# For iOS
yarn ios
# or
npm run ios

# For Android
yarn android
# or
npm run android
```

## Acknowledgments

- Icons from Ionicons and Material Icons
- Map styling from Google Maps Platform

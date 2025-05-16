# Sidebar App Routing Guide

This document explains the routing structure of the Sidebar App and how to work with it.

## Overview

The app uses React Router v6 for routing, with a centralized route configuration in `src/routes.tsx`. This approach makes it easy to manage and modify routes in one place.

## Route Structure

The app follows a nested routing structure:

```
/
├── / (index - Dashboard)
├── /dashboard
│   ├── / (index - Dashboard)
│   ├── /analytics
│   └── /reports
├── /settings
│   ├── / (index - Settings)
│   ├── /general
│   ├── /team
│   ├── /billing
│   └── /limits
└── /projects
    ├── /design
    ├── /sales
    └── /travel
```

## Lazy Loading

The app implements lazy loading for all routes to improve initial load performance. This means that page components are only loaded when they are needed, reducing the initial bundle size.

### How Lazy Loading Works

1. Each page component is imported using React's `lazy` function:
```typescript
const DashboardPage = lazy(() => import("./pages/dashboard"))
```

2. The `App` component wraps all routes in a `Suspense` component:
```typescript
<Suspense fallback={<LoadingFallback />}>
  {element}
</Suspense>
```

3. A loading spinner is shown while the component is being loaded.

### Benefits of Lazy Loading

- Reduced initial bundle size
- Faster initial page load
- Better performance for users with slower connections
- Automatic code splitting

### Adding New Lazy-Loaded Routes

When adding new routes, use the lazy loading pattern:

```typescript
// In routes.tsx
const NewPage = lazy(() => import("./pages/new-page"))

// In the routes configuration
{
  path: "new-route",
  element: <NewPage />,
}
```

## How Routes Work

1. **Root Route (`/`)**
   - Serves as the main container for all routes
   - Automatically redirects to `/dashboard` when accessing the root path

2. **Dashboard Routes (`/dashboard/*`)**
   - Main dashboard view at `/dashboard`
   - Analytics section at `/dashboard/analytics`
   - Reports section at `/dashboard/reports`

3. **Settings Routes (`/settings/*`)**
   - Main settings view at `/settings`
   - General settings at `/settings/general`
   - Team settings at `/settings/team`
   - Billing settings at `/settings/billing`
   - Limits settings at `/settings/limits`

4. **Project Routes (`/projects/*`)**
   - Design project at `/projects/design`
   - Sales project at `/projects/sales`
   - Travel project at `/projects/travel`

## Adding New Routes

To add a new route:

1. Open `src/routes.tsx`
2. Add a new route object to the appropriate section:

```typescript
{
  path: "your-path",
  element: <YourComponent />,
}
```

For nested routes, add them under the appropriate parent route's `children` array.

## Route Configuration

Routes are defined using the `RouteObject` type from React Router. Each route can have:
- `path`: The URL path
- `element`: The component to render
- `children`: Nested routes
- `index`: Whether this is an index route

## Implementation Details

- Routes are configured in `src/routes.tsx`
- The main App component (`src/App.tsx`) uses `useRoutes` hook to render the routes
- All routes are wrapped in `ThemeProvider` for consistent theming
- Navigation is handled through the `AppSidebar` component
- All routes are lazy-loaded for better performance

## Best Practices

1. Keep route paths consistent with the sidebar navigation
2. Use nested routes for related features
3. Create new page components in the `src/pages` directory
4. Update the sidebar navigation when adding new routes
5. Use TypeScript for type safety in route definitions
6. Always use lazy loading for new page components
7. Keep the loading fallback component lightweight

## Example: Adding a New Route

```typescript
// In routes.tsx
const NewFeaturePage = lazy(() => import("./pages/new-feature"))

{
  path: "dashboard",
  children: [
    // ... existing routes ...
    {
      path: "new-feature",
      element: <NewFeaturePage />,
    },
  ],
}
```

## Navigation

The app uses the `AppSidebar` component for navigation, which automatically highlights the active route based on the current URL path. The sidebar navigation items are defined in the `navMain` array in `AppSidebar.tsx`.

## Theme Integration

All routes are wrapped in the `ThemeProvider`, which provides:
- Dark/light mode support
- System theme detection
- Theme persistence
- Smooth theme transitions

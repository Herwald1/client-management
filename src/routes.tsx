import type { RouteObject } from "react-router-dom"
import { lazy } from "react"

// Lazy load all page components
const DashboardPage = lazy(() => import("./pages/dashboard"))
const SettingsPage = lazy(() => import("./pages/settings"))
// TODO: Import other pages when they are created
// const AnalyticsPage = lazy(() => import("./pages/analytics"))
// const ReportsPage = lazy(() => import("./pages/reports"))
// const GeneralSettingsPage = lazy(() => import("./pages/settings/general"))
// const TeamSettingsPage = lazy(() => import("./pages/settings/team"))
// const BillingSettingsPage = lazy(() => import("./pages/settings/billing"))
// const LimitsSettingsPage = lazy(() => import("./pages/settings/limits"))
// const ProjectPage = lazy(() => import("./pages/projects/project"))

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "dashboard",
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "analytics",
            element: <DashboardPage />, // TODO: Replace with <AnalyticsPage />
          },
          {
            path: "reports",
            element: <DashboardPage />, // TODO: Replace with <ReportsPage />
          },
        ],
      },
      {
        path: "settings",
        children: [
          {
            index: true,
            element: <SettingsPage />,
          },
          {
            path: "general",
            element: <SettingsPage />, // TODO: Replace with <GeneralSettingsPage />
          },
          {
            path: "team",
            element: <SettingsPage />, // TODO: Replace with <TeamSettingsPage />
          },
          {
            path: "billing",
            element: <SettingsPage />, // TODO: Replace with <BillingSettingsPage />
          },
          {
            path: "limits",
            element: <SettingsPage />, // TODO: Replace with <LimitsSettingsPage />
          },
        ],
      },
      {
        path: "projects",
        children: [
          {
            path: "design",
            element: <DashboardPage />, // TODO: Replace with <ProjectPage />
          },
          {
            path: "sales",
            element: <DashboardPage />, // TODO: Replace with <ProjectPage />
          },
          {
            path: "travel",
            element: <DashboardPage />, // TODO: Replace with <ProjectPage />
          },
        ],
      },
    ],
  },
] 
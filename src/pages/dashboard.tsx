import { AppSidebar } from "@/components/app-sidebar"
import { Card } from "@/components/ui/card"
import { Page } from "@/components/page-template"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <Page
      title="Dashboard"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Dashboard", isCurrentPage: true },
      ]}
    >
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Card className="aspect-video" />
          <Card className="aspect-video" />
          <Card className="aspect-video" />
        </div>
        <Card className="flex-1 p-4">
          <h2 className="text-lg font-semibold mb-4">Main Content Area</h2>
          <p className="text-muted-foreground">Your dashboard content goes here.</p>
        </Card>
      </div>
    </Page>
  )
} 
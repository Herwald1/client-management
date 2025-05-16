import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { Dialog } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function SettingsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Settings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="rounded-xl bg-muted/50 p-6">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <div className="space-y-4">
              {/* <div className="rounded-lg border p-4">
                <h2 className="text-lg font-semibold mb-2">General Settings</h2>
                <p className="text-muted-foreground">Configure your general preferences here.</p>
              </div>
              <div className="rounded-lg border p-4">
                <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
              </div>
              <div className="rounded-lg border p-4">
                <h2 className="text-lg font-semibold mb-2">Notifications</h2>
                <p className="text-muted-foreground">Configure your notification preferences.</p>
              </div> */}
              <Card className="rounded-lg border p-4">
                <h2 className="text-lg font-semibold mb-2">General Settings</h2>
                <p className="text-muted-foreground">Configure your general preferences here.</p>
              </Card>
              <Card className="rounded-lg border p-4">
                <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
              </Card>
              <Card className="rounded-lg border p-4">
                <h2 className="text-lg font-semibold mb-2">Notifications</h2>
                <p className="text-muted-foreground">Configure your notification preferences.</p>
              </Card>
              <Card className="rounded-lg border p-4">
                <h2 className="text-lg font-semibold mb-2">Privacy Settings</h2>
                <p className="text-muted-foreground">Manage your privacy settings and preferences.</p>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 
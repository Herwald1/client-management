import { Card } from "@/components/ui/card"
import { Page } from "@/components/page-template"

export default function SettingsPage() {
  return (
    <Page
      title="Settings"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Settings", isCurrentPage: true },
      ]}
    >
      <div className="space-y-4">
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
    </Page>
  )
} 
# DataTable Component

A flexible and type-safe data table component built with TanStack Table (React Table) and Shadcn UI.

## 🎯 Features

- Type-safe column definitions
- Responsive design
- Customizable cell rendering
- Built-in empty state handling
- Row selection support
- Modern UI with Shadcn styling

## 📦 Usage

```tsx
import { DataTable } from "@/components/ui/dataTable"
import type { ColumnDef } from "@tanstack/react-table"

// Define your data type
type Person = {
  id: string
  name: string
  email: string
}

// Define your columns
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
]

// Your data
const data: Person[] = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
]

// Use the component
function MyTable() {
  return <DataTable columns={columns} data={data} />
}
```

## 🔧 Props

| Prop | Type | Description |
|------|------|-------------|
| `columns` | `ColumnDef<TData, TValue>[]` | Array of column definitions |
| `data` | `TData[]` | Array of data to display |

## 🎨 Customization

### Column Definition

```tsx
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="font-bold">{row.getValue("name")}</div>,
  },
]
```

### Custom Cell Rendering

```tsx
{
  accessorKey: "status",
  header: "Status",
  cell: ({ row }) => (
    <Badge variant={row.getValue("status") === "active" ? "success" : "destructive"}>
      {row.getValue("status")}
    </Badge>
  ),
}
```

## 📝 Notes

- Built on top of TanStack Table for powerful table features
- Uses Shadcn UI for consistent styling
- Fully typed with TypeScript
- Supports all TanStack Table features through column definitions

## 🔜 Planned Features

- [ ] Sorting functionality
- [ ] Pagination
- [ ] Filtering
- [ ] Row actions
- [ ] Bulk selection
- [ ] Column resizing
- [ ] Column reordering 
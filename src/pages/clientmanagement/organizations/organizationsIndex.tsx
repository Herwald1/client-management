import { Card } from "@/components/ui/card"
import { Page } from "@/components/page-template"
import { DataTable } from "@/components/ui/dataTable"
import type { ColumnDef } from "@tanstack/react-table"
import { Forward, MoreHorizontal, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom"


const columns: ColumnDef<any>[] = [
    {
        header: "Id",
        accessorKey: "id"
    },
    {
        header: "Name",
        accessorKey: "name",
    },
    {
        header: "Industry",
        accessorKey: "industry",
        cell: ({ row }) => {
            const item = row.original
            // Capitalize the first letter of the industry
            const capitalizedIndustry = item.industry.charAt(0).toUpperCase() + item.industry.slice(1)
            return capitalizedIndustry
        }
    },
    {
        id: "actions",
        header: "Action",
        enableHiding: false,

        cell: ({ row }) => {
            const item = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(item.name)}
                        >
                            Copy Client Name
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Forward className="mr-2" />View customer</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2" />Delete Customer</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

]

const data: any = [
    {
        id:'1',
        name:'SenS Co.',
        industry:'finance',
    },
    {
        id:'2',
        name:'SenS Tech',
        industry:'technology',
    },
    
]

export default function OrganizationsIndex() {
    const navigate = useNavigate()
    return (
        <Page
            title="Organizations"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Client Management", isCurrentPage: false },
                { label: "Organizations", isCurrentPage: true },
            ]}
        >
            <div className="flex justify-end mb-4">
                <Button onClick={() => navigate("/clientmanagement/organizationForm")}>
                    <Plus className="mr-2" />
                    Add Organization
                </Button>
            </div>
            <DataTable columns={columns} data={data} />
        </Page>
    )
} 
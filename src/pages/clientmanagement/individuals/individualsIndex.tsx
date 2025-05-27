import { Card } from "@/components/ui/card"
import { Page } from "@/components/page-template"
import { DataTable } from "@/components/ui/dataTable"
import type { ColumnDef } from "@tanstack/react-table"
import { Forward, MoreHorizontal, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const columns: ColumnDef<any>[] = [
    {
        header: "Id",
        accessorKey: "id"
    },
    {
        header: "First Name",
        accessorKey: "first_name",
    },
    {
        header: "Last Name",
        accessorKey: "last_name",
    },
    {
        header: "DOB",
        accessorKey: "dob",
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
                            onClick={() => navigator.clipboard.writeText(item.first_name + " " +item.last_name)}
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
        first_name:'Herwald',
        last_name: 'Humes',
        dob:'20/05/2003 ',        
    }

]

export default function IndividualsIndex() {
    return (
        <Page
            title="Individuals"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Client Management", isCurrentPage: false },
                { label: "Individuals", isCurrentPage: true },
            ]}
        >
            <DataTable columns={columns} data={data} />
        </Page>
    )
} 
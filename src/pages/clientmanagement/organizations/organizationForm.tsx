import { Card } from "@/components/ui/card"
import { Page } from "@/components/page-template"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useFormik } from "formik"
import { Input } from "@/components/ui/input"
import { ButtonLoading } from "@/components/ui/loadingBtn"
import { useState } from "react"

export default function IndividualsForm() {
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            industry: '',
            email: '',
        },
        onSubmit: async (values) => {
            setIsLoading(true)
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000))
                console.log(values)
                // Add your API call here
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        },
    })

    return (
        <Page
            title="Create Individual"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Client Management", href: "/clientmanagement", isCurrentPage: false },
                { label: "Individuals", href: "/clientmanagement/individuals", isCurrentPage: false },
                { label: "Individuals Form", isCurrentPage: true },
            ]}
        >
            <div className="space-y-4">
                <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-4 grid-rows-6 gap-4">
                        <div className="col-span-4">
                            <Input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="col-span-2">
                            <Input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="col-span-2">
                            <Input
                                type="text"
                                placeholder="Industry"
                                name="industry"
                                value={formik.values.industry}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="col-span-4">
                            {isLoading ? (
                                <ButtonLoading />
                            ) : (
                                <Button type="submit" className="w-full">
                                    Submit
                                </Button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </Page>
    )
} 
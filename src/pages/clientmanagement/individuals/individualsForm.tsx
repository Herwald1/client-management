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
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            dateOfBirth: new Date(),
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
            title="Individuals"
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
                                placeholder="First Name"
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="col-span-2">
                            <Input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className="col-span-2">
                            <Input
                                type="text"
                                placeholder="Phone"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="col-span-2">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !formik.values.dateOfBirth && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {formik.values.dateOfBirth ? format(formik.values.dateOfBirth, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={formik.values.dateOfBirth}
                                        onSelect={(day) => formik.setFieldValue("dateOfBirth", day)}
                                        initialFocus
                                    />
                                </PopoverContent>   
                            </Popover>
                        </div>
                        <div className="col-span-4">
                            <Input
                                type="text"
                                placeholder="Address"
                                name="address"
                                value={formik.values.address}
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
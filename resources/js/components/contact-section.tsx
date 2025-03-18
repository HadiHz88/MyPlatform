import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-muted-foreground">your.email@example.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-muted-foreground">San Francisco, CA</p>
                            </div>
                        </div>
                        <div className="mt-6 h-[300px] w-full overflow-hidden rounded-lg border border-primary/10">
                            {/* Replace with an actual map or image */}
                            <div className="h-full w-full bg-muted flex items-center justify-center">
                                <p className="text-muted-foreground">Map Placeholder</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border border-primary/10 bg-background p-6 shadow-sm">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="first-name"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        First name
                                    </label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="last-name"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Last name
                                    </label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Email
                                </label>
                                <Input id="email" placeholder="john.doe@example.com" type="email" />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Subject
                                </label>
                                <Input id="subject" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Message
                                </label>
                                <Textarea className="min-h-[150px]" id="message" placeholder="Tell me about your project..." />
                            </div>
                            <Button className="w-full" type="submit">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


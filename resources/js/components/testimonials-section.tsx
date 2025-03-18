import { Quote } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote:
                "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations with their attention to detail and problem-solving skills.",
            author: "Sarah Johnson",
            position: "CEO, TechStart Inc.",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            quote:
                "An exceptional developer who transformed our vision into reality. Their expertise in Laravel and React helped us create a seamless user experience that our customers love.",
            author: "Michael Chen",
            position: "Product Manager, InnovateCorp",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            quote:
                "I've worked with many developers, but few have the combination of technical skill and communication ability that this developer possesses. They're now our go-to for all web development projects.",
            author: "Emily Rodriguez",
            position: "Marketing Director, GrowthLabs",
            avatar: "/placeholder.svg?height=100&width=100",
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What People Say</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Don't just take my word for it - here's what clients and colleagues have to say about working with me.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border border-primary/10 bg-background">
                            <CardContent className="pt-6">
                                <Quote className="h-8 w-8 text-primary opacity-50" />
                                <p className="mt-4 text-muted-foreground">"{testimonial.quote}"</p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center space-x-4">
                                    <div className="h-12 w-12 overflow-hidden rounded-full">
                                        <img
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.author}
                                            className="object-cover"
                                            style={{ height: "100%", width: "100%" }}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{testimonial.author}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}


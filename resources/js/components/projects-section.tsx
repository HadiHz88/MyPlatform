import { ArrowUpRight, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with product management, cart functionality, and payment processing.",
            image: "/placeholder.svg?height=300&width=600",
            tags: ["Laravel", "React", "MySQL", "Stripe"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Task Management App",
            description: "A collaborative task management tool with real-time updates and team collaboration features.",
            image: "/placeholder.svg?height=300&width=600",
            tags: ["Laravel", "Vue.js", "Pusher", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website showcasing projects and skills with a modern design.",
            image: "/placeholder.svg?height=300&width=600",
            tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Learning Management System",
            description: "An educational platform for creating and managing online courses with student progress tracking.",
            image: "/placeholder.svg?height=300&width=600",
            tags: ["Laravel", "React", "MySQL", "AWS S3"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Real Estate Listing",
            description: "A property listing website with advanced search filters and interactive maps.",
            image: "/placeholder.svg?height=300&width=600",
            tags: ["Laravel", "Alpine.js", "Leaflet", "MySQL"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Health & Fitness App",
            description: "A mobile application for tracking workouts, nutrition, and health metrics.",
            image: "/placeholder.svg?height=300&width=600",
            tags: ["React Native", "Node.js", "MongoDB", "Firebase"],
            liveUrl: "#",
            githubUrl: "#",
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Here are some of my recent projects that showcase my skills and expertise.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden border border-primary/10 transition-all hover:shadow-md">
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="object-cover transition-all hover:scale-105"
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline" size="sm" asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </a>
                                </Button>
                                <Button size="sm" asChild>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                        <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button variant="outline" size="lg">
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}


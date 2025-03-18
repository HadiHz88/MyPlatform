import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Instagram, Link, Linkedin, Twitter } from 'lucide-react';


export default function Footer() {
    return (
        <footer className="w-full border-t bg-background py-6">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Your Name</h3>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            A passionate full-stack developer specializing in creating exceptional digital experiences.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                                    Mobile Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                                    UI/UX Design
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                                    Consulting
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                                    Code Review
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Newsletter</h3>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            Subscribe to my newsletter to receive updates on my latest projects and blog posts.
                        </p>
                        <form className="flex space-x-2">
                            <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t pt-6">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}


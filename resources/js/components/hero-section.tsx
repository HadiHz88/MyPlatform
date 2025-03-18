import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Hi, I'm <span className="text-primary">Your Name</span>
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                I'm a full-stack developer specializing in building exceptional digital experiences with Laravel and
                                React.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8">
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input px-8"
                            >
                                Contact Me
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
                            <img
                                src="/images/pic.jpg"
                                alt="Profile"
                                className="object-cover"
                                style={{ position: "absolute", height: "100%", width: "100%", inset: 0 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
        </section>
    )
}


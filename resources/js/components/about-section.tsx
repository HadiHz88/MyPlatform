export default function AboutSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I'm a passionate developer with expertise in building modern web applications. With a strong foundation in
                            both frontend and backend technologies, I create seamless digital experiences that solve real-world
                            problems.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold tracking-tighter">My Journey</h3>
                            <p className="text-muted-foreground">
                                I started my coding journey in 2015, focusing on web development. Over the years, I've worked with
                                various technologies and frameworks, constantly expanding my skill set to stay at the forefront of the
                                industry.
                            </p>
                            <p className="text-muted-foreground">
                                My experience spans from building small business websites to developing complex enterprise applications.
                                I'm particularly passionate about creating intuitive user interfaces and optimizing backend performance.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative h-[400px] w-[400px] overflow-hidden rounded-lg border border-primary/10 bg-muted">
                            {/* Replace with a relevant image */}
                            <img
                                src="/placeholder.svg?height=400&width=400"
                                alt="Working on code"
                                className="object-cover"
                                style={{ position: "absolute", height: "100%", width: "100%", inset: 0 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


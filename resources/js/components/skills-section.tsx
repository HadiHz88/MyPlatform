import { Code2, Database, Globe, Layout, Palette, Server, Smartphone, Sparkles, Workflow } from "lucide-react"

export default function SkillsSection() {
    const skills = [
        {
            icon: <Code2 className="h-10 w-10 text-primary" />,
            name: "Frontend Development",
            description: "React, TypeScript, Vue.js, HTML5, CSS3, Tailwind CSS",
        },
        {
            icon: <Server className="h-10 w-10 text-primary" />,
            name: "Backend Development",
            description: "Laravel, PHP, Node.js, Express, RESTful APIs",
        },
        {
            icon: <Database className="h-10 w-10 text-primary" />,
            name: "Database",
            description: "MySQL, PostgreSQL, MongoDB, Redis",
        },
        {
            icon: <Layout className="h-10 w-10 text-primary" />,
            name: "UI/UX Design",
            description: "Figma, Adobe XD, Responsive Design",
        },
        {
            icon: <Workflow className="h-10 w-10 text-primary" />,
            name: "DevOps",
            description: "Docker, CI/CD, AWS, Digital Ocean, Vercel",
        },
        {
            icon: <Smartphone className="h-10 w-10 text-primary" />,
            name: "Mobile Development",
            description: "React Native, Progressive Web Apps",
        },
        {
            icon: <Globe className="h-10 w-10 text-primary" />,
            name: "CMS",
            description: "WordPress, Strapi, Contentful",
        },
        {
            icon: <Sparkles className="h-10 w-10 text-primary" />,
            name: "Testing",
            description: "PHPUnit, Jest, React Testing Library",
        },
        {
            icon: <Palette className="h-10 w-10 text-primary" />,
            name: "Other Skills",
            description: "Git, Agile Methodology, Problem Solving",
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills & Technologies</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I work with a variety of technologies to create powerful and scalable applications.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center space-y-2 rounded-lg border border-primary/10 bg-background p-6 shadow-sm transition-all hover:shadow-md"
                        >
                            {skill.icon}
                            <h3 className="text-xl font-bold">{skill.name}</h3>
                            <p className="text-center text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


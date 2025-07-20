import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillsData = [
    { name: 'React', level: 90, color: 'bg-sky-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'HTML/CSS', level: 90, color: 'bg-red-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Python', level: 75, color: 'bg-blue-500' },
    { name: 'SQL', level: 85, color: 'bg-indigo-500' },
    { name: 'TypeScript', level: 88, color: 'bg-cyan-500' },
    { name: 'Firebase', level: 82, color: 'bg-amber-500' },
];

export function SkillsSection() {
    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 dark:bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Skills & Expertise
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skillsData.map((skill, index) => (
                        <Card key={index} className="bg-card p-6 shadow-md rounded-lg">
                            <CardContent className="p-0">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                                    <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                                </div>
                                <Progress value={skill.level} indicatorClassName={skill.color} />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

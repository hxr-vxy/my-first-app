export const metadata = {
    title: "Projects | My Site ",
};

const project = [
    {
        id: 1, name: "Damage Assessmet Tool", description: "A tool to assess damage in various scenarios."
    }, 
    {
        id: 2, name: "MDC Queueing System", description: "A system to manage queues in the MDC."
    },
    {
        id: 3, name: "Blood Donor Finder", description: "A system to find blood donors."
    }
]

export default function AboutPage() {
    return(
        <main>
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="mt-2">
                I'd like to explore ajdsfhgajnsd;kgnaklsdmgl/amdsg
            </p>

            <table border={1} className="mt-4 border border-gray-300 border-collapse solid black border-collapse">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {project.map((project) => (
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </main>
    );
}

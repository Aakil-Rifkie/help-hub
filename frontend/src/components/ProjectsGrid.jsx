import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ projects, setProjects }) => (
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Projects</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Choose from our diverse range of volunteer opportunities and start making an impact today.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project._id} project={project} setProjects={setProjects} />
      ))}
    </div>
  </div>
);

export default ProjectsGrid;

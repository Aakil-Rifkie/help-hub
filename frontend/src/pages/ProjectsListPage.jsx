import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import ProjectsGrid from "../components/ProjectsGrid";

const ProjectsListPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axios.get("http://localhost:5000/api/projects", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                setProjects(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <NavBar onBackToDashboard={() => window.history.back()} />
            <Header />
            <ProjectsGrid projects={projects} setProjects={setProjects} loading={loading} />
        </div>
    );
};

export default ProjectsListPage;

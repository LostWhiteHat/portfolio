import { Project } from "@/types/types";

const projectList: Project[] = [
    {
        language: "cpp",
        title: "Tasker",
        description: "This is my first CPP project. I'm going to learn the basics of the language and i'm trying to save, read and delete specific data to or from a file.",
        link: "https://github.com/LostWhiteHat/Tasker",
        key: 1
    },
    {
        language: "csharp",
        title: "Citybuilder",
        description: 'This is a project to learn "How to abstract Factory" in c#',
        link: "https://github.com/LostWhiteHat/citybuilder",
        key: 2
    },
    {
        language: "typescript",
        title: "Portfolio",
        description: "This is my personal open source Portfolio webapp",
        link: "https://github.com/LostWhiteHat/portfolio",
        key: 3
    },
    {
        language: "java",
        title: "Java-Backend API",
        description: "In this project i started learning Java with Gradle and Springboot.",
        link: "https://github.com/LostWhiteHat/tasker-backend",
        key: 4
    },
]

export default projectList;
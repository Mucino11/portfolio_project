// // ./src/app.ts

// import { Hono } from "hono";
// import { cors } from "hono/cors";

// const app = new Hono();

// app.use("/*", cors());

// app.get("/habits", (c) => {
//   return c.json({
//     data: [
//       {
//         id: crypto.randomUUID(),
//         title: "Game",
//         createdAt: new Date("2024-01-01"),
//         categories: ["spill"],
//       },
//       {
//         id: crypto.randomUUID(),
//         title: "Kode",
//         createdAt: new Date("2024-01-04"),
//         categories: ["koding", "programmering"],
//       },
//       {
//         id: crypto.randomUUID(),
//         title: "Trene",
//         createdAt: new Date("2024-01-07"),
//         categories: ["trening", "helse"],
//       },
//       {
//         id: crypto.randomUUID(),
//         title: "Lese",
//         createdAt: new Date("2024-01-02"),
//         categories: ["programmering"],
//       },
//     ],
//   });
// });

// export default app;
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

// Initial projects list from the provided JSON
const projects = [
  {
    name: "Big Lemon Restaurant",
    description: "A restaurant booking system created in React",
    status: "Incomplete",
    image: "images/big_lemon.png",
    githubLink: "#",
  },
  {
    name: "Another Project",
    description: "Another project description.",
    status: "In Progress",
    image: "images/big_lemon.png",
    githubLink: "#",
  },
  {
    name: "Yet Another Project",
    description: "Yet another project description.",
    status: "Complete",
    image: "images/big_lemon.png",
    githubLink: "#",
  },
];

// Additional projects list from the provided JSON
const additionalProjects = [
  {
    name: "Big Lemon Restaurant",
    description: "Lorem ipsum dolor sit amet...",
    status: "Incomplete",
    image: "images/big_lemon.png",
    githubLink: "#",
  },
  {
    name: "Another Project",
    description: "Another project description.",
    status: "In Progress",
    image: "images/big_lemon.png",
    githubLink: "#",
  },
  {
    name: "Another Project",
    description: "Another project description.",
    status: "In Progress",
    image: "images/big_lemon.png",
    githubLink: "#",
  },
];

// Combine both lists for initial state
const allProjects = [...projects, ...additionalProjects];

// GET endpoint to fetch all projects
app.get("/projects", (c) => {
  return c.json(allProjects);
});

// POST endpoint to add a new project
app.post("/projects", async (c) => {
  const newProject = await c.req.json();
  allProjects.push(newProject);
  return c.json(
    { message: "Project added successfully", project: newProject },
    201
  );
});

export default app;

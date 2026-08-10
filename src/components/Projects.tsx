import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Link,
  Chip,
  IconButton,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "Package Tracking App",
    summary: "Featured application",
    description:
      "An active package-tracking application that highlights end-to-end delivery, product ownership, and modern web implementation.",
    tech: ["Package Tracking", "React", "TypeScript", "Product Delivery"],
    github: "",
    demo: "https://trackingapp.tvandoren.dev",
  },
  {
    title: "Inventory Management SaaS",
    summary: "Full-stack business application",
    description:
      "A SaaS application for repair shops with customer management, inventory workflows, and shipping-related operations.",
    tech: ["React", "TypeScript", "Supabase", "Electron", "MUI"],
    github: "https://github.com/tVandoren88/inventoryManagementProject",
    demo: "https://inventoryproject.swiftwebinnov.com/",
  },
  {
    title: "Personal Portfolio",
    summary: "Senior engineer portfolio site",
    description:
      "A portfolio built with React and Vite to showcase experience, technical breadth, and selected engineering projects.",
    tech: ["React", "Vite", "MUI"],
    github: "https://github.com/tVandoren88/portfolioWebsite",
    demo: "https://tvandoren.dev",
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1,
          }}
        >
          <CodeIcon fontSize="large" /> Projects
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 760, mb: 4 }}>
          A few projects that reflect how I approach product delivery, front-end execution, and
          maintainable engineering systems.
        </Typography>

        <Stack spacing={3}>
          {projects.map((project, index) => (
            <Paper
              key={project.title}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                bgcolor: "background.paper",
                border: "1px solid rgba(31,41,51,0.06)",
                boxShadow: index === 0 ? "0 24px 50px rgba(31,41,51,0.10)" : "0 14px 30px rgba(31,41,51,0.06)",
              }}
            >
              <Typography sx={{ color: "primary.main", fontWeight: 800, mb: 0.75 }}>
                {project.summary}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2.5, color: "text.secondary", maxWidth: 760 }}>
                {project.description}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 2.5, flexWrap: "wrap" }}>
                {project.tech.map((t) => (
                  <Chip key={t} label={t} size="small" color="primary" variant="outlined" />
                ))}
              </Stack>

              <Stack direction="row" spacing={2}>
                {project.github ? (
                  <IconButton
                    component={Link}
                    href={project.github}
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                  >
                    <GitHubIcon />
                  </IconButton>
                ) : null}
                <IconButton
                  component={Link}
                  href={project.demo}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                >
                  <LaunchIcon />
                </IconButton>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

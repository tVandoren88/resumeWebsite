import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Grid,
  Stack,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

type Skill = { name: string; strength: number };

const skillCategories: Record<string, Skill[]> = {
  Languages: [
    { name: "Python", strength: 5 },
    { name: "JavaScript", strength: 4 },
    { name: "TypeScript", strength: 4 },
    { name: "C/C++", strength: 4 },
    { name: "Java", strength: 3 },
    { name: "C#", strength: 2 },
    { name: "HTML5", strength: 4 },
    { name: "CSS3", strength: 4 },
    { name: "SQL", strength: 4 },
    { name: "XML", strength: 5 },
    { name: "Bash", strength: 4 },
  ],
  Frameworks: [
    { name: "Django", strength: 5 },
    { name: "Flask", strength: 4 },
    { name: "FastAPI", strength: 3 },
    { name: "React", strength: 4 },
    { name: "Vue.js", strength: 3 },
    { name: "Bootstrap", strength: 3 },
    { name: "Qt Installer Framework", strength: 4 },
    { name: "MUI", strength: 4 },
  ],
  Tools: [
    { name: "Git", strength: 5 },
    { name: "Jira", strength: 4 },
    { name: "Xray", strength: 3 },
    { name: "Postman", strength: 5 },
    { name: "Swagger", strength: 5 },
    { name: "Codebeamer ALM", strength: 5 },
    { name: "Postgres CLI", strength: 3 },
  ],
  DevOps: [
    { name: "AWS", strength: 4 },
    { name: "Docker", strength: 4 },
    { name: "Kubernetes", strength: 3 },
    { name: "Jenkins", strength: 5 },
    { name: "GitHub Actions", strength: 4 },
    { name: "CI/CD pipelines", strength: 5 },
  ],
  Testing: [
    { name: "Selenium", strength: 3 },
    { name: "Sikuli", strength: 3 },
    { name: "Google Test", strength: 3 },
    { name: "Automated Testing", strength: 4 },
  ],
  Concepts: [
    { name: "REST APIs", strength: 5 },
    { name: "SDK Development", strength: 5 },
    { name: "System Architecture", strength: 4 },
    { name: "Build Automation", strength: 5 },
    { name: "Developer Tooling", strength: 5 },
    { name: "Firmware Tooling", strength: 4 },
    { name: "Robotics Applications", strength: 4 },
    { name: "Agile/Scrum", strength: 5 },
  ],
  Databases: [
    { name: "PostgreSQL", strength: 5 },
    { name: "MySQL", strength: 4 },
    { name: "Redis", strength: 2 },
  ],
  "Soft Skills": [
    { name: "Leadership", strength: 5 },
    { name: "Mentorship", strength: 5 },
    { name: "Teamwork", strength: 5 },
    { name: "Problem Solving", strength: 5 },
    { name: "Developer Productivity", strength: 5 },
    { name: "User-Centric Thinking", strength: 4 },
  ],
};

export default function Skills() {
  const [currentTab, setCurrentTab] = useState(0);
  const categories = Object.keys(skillCategories);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: "background.default" }}>
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
            mb: 4,
          }}
        >
          <CodeIcon fontSize="large" /> Skills
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 2,
            borderRadius: 3,
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 3 }}
            textColor="primary"
            indicatorColor="primary"
          >
            {categories.map((category) => (
              <Tab key={category} label={`${category} (${skillCategories[category].length})`} />
            ))}
          </Tabs>

          <Grid container spacing={2}>
            {skillCategories[categories[currentTab]]
              .sort((a, b) => b.strength - a.strength)
              .map((skill) => (
                <Grid item xs={12} sm={6} key={skill.name}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 1.5,
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                        transition: "all 0.2s ease-in-out",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: 500 }}>{skill.name}</Typography>
                    <Box>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{
                            fontSize: 20,
                            color: i < skill.strength ? "primary.main" : "action.disabled",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              Star Rating Key:
            </Typography>
            <Stack spacing={0.5}>
              <Typography variant="body2">5/5 - Expert / Highly Proficient</Typography>
              <Typography variant="body2">4/5 - Strong / Advanced</Typography>
              <Typography variant="body2">3/5 - Intermediate</Typography>
              <Typography variant="body2">2/5 - Beginner</Typography>
              <Typography variant="body2">1/5 - Basic Exposure</Typography>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

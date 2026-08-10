import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";

export default function Experience() {
  const jobs = [
    {
      role: "Build Integration Engineer",
      company: "Lynx/CoreAVI",
      location: "Fort Worth, TX",
      period: "Oct 2024 - Present",
      bullets: [
        "Serve as the primary Subject Matter Expert for PTC Codebeamer, supporting approximately 500 users across multiple development and production environments",
        "Administer and maintain multiple Codebeamer instances, including platform configuration, project setup, workflow management, tracker configuration, permissions, user access, licensing support, and system governance",
        "Led the migration from IBM DOORS to PTC Codebeamer, helping establish requirements management, traceability, change control, and compliance processes across engineering teams",
        "Design and implement custom Codebeamer workflows, trackers, templates, permissions, and field-level security controls to support regulated software development and certification requirements",
        "Develop custom Python libraries and automation solutions leveraging Codebeamer REST APIs to streamline engineering workflows, reporting, and compliance activities",
        "Create and maintain Groovy scripts, listeners, and automation components within Codebeamer to enforce workflow controls, approval processes, and traceability requirements",
        "Design, develop, and support integrations between Codebeamer, GitHub, and Jenkins to automate change management, build validation, release processes, and engineering workflows",
        "Develop automated validation processes that verify change requests, ownership requirements, approval workflows, and compliance controls before code can progress through the development lifecycle",
        "Support audit readiness and regulatory compliance initiatives by maintaining requirements traceability, workflow governance, approval controls, and engineering documentation",
        "Troubleshoot complex Codebeamer platform issues, user access requests, workflow enhancements, integration failures, and system performance concerns",
        "Partner with software engineering, project management, and quality teams to improve engineering efficiency through process automation and ALM platform enhancements",
        "Utilize Python, Jenkins, Groovy, GitHub, REST APIs, and Codebeamer to create scalable automation solutions supporting software certification and regulated development environments",
      ],
      skills: ["Codebeamer", "Python", "Jenkins", "Groovy", "GitHub", "REST APIs", "Compliance", "ALM"],
    },
    {
      role: "Lead Software Engineer",
      company: "Avantax",
      location: "Coppell, TX",
      period: "Jan 2023 - Jul 2024",
      bullets: [
        "Led a team of 3 engineers delivering a Python-based SaaS platform for 1,000+ customers",
        "Architected backend systems with Django, Flask, and PostgreSQL to improve scalability and reliability",
        "Built front-end components in React and Vue.js to improve usability and responsiveness",
        "Automated releases with Jenkins, cutting deployment time by more than 60%",
        "Designed REST APIs and owned the testing strategy with Postman",
      ],
      skills: ["Python", "Django", "Flask", "PostgreSQL", "React", "Vue.js"],
    },
    {
      role: "Application & Firmware Engineer",
      company: "REV Robotics",
      location: "Carrollton, TX",
      period: "Nov 2021 - Dec 2022",
      bullets: [
        "Built a React desktop application for robotics configuration and diagnostics used by thousands of teams",
        "Developed embedded firmware in C alongside tooling in Python, C++, and Java",
        "Authored SDKs and educational APIs for student robotics programming",
        "Created automated hardware-in-the-loop tests using Google Test",
      ],
      skills: ["React", "C", "C++", "Python", "Java", "Google Test"],
    },
    {
      role: "Verification Engineer",
      company: "CoreAVI",
      location: "Remote",
      period: "May 2021 - Nov 2021",
      bullets: [
        "Automated verification pipelines using Python, reducing manual effort and improving traceability",
        "Executed certification test suites and produced detailed reports",
        "Collaborated with firmware and software teams to resolve defects",
      ],
      skills: ["Python", "Automation", "Verification", "Test Reporting"],
    },
    {
      role: "Automation Engineer",
      company: "Beyond Identity",
      location: "Remote",
      period: "Sep 2020 - May 2021",
      bullets: [
        "Automated UI and API tests for desktop and mobile apps across Windows, macOS, and Android",
        "Integrated Java-based automation into CI/CD pipelines",
        "Used Postman, PostgreSQL, Xray, and Jira for regression testing and defect tracking",
      ],
      skills: ["Java", "Sikuli", "Postman", "PostgreSQL", "Xray", "Jira"],
    },
    {
      role: "Application Engineer & Team Lead",
      company: "Maxim Integrated",
      location: "Farmers Branch, TX",
      period: "May 2016 - Sep 2020",
      bullets: [
        "Designed and developed a multi-platform Python SDK used by enterprise semiconductor customers",
        "Automated build and release pipelines with Python and Jenkins, reducing release time by 70%",
        "Maintained Qt Installer Framework builds for Windows, macOS, and Linux",
        "Created an Eclipse IDE plugin to simplify project setup and customer onboarding",
        "Led a 3-engineer team through a major architecture refactor that improved code reusability",
      ],
      skills: ["Python", "Jenkins", "Qt Installer Framework", "SDK Development", "Leadership"],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box id="experience" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "primary.main", mb: 4 }}>
          Experience
        </Typography>
        <Timeline position="alternate">
          {jobs.map((job, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                {index < jobs.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    bgcolor: "background.paper",
                    mb: 2,
                  }}
                >
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      onClick={() => handleToggle(index)}
                      sx={{ cursor: "pointer" }}
                    >
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {job.role} @ {job.company}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {job.location} | {job.period}
                        </Typography>
                      </Box>
                      <IconButton size="small">
                        {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </IconButton>
                    </Box>

                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2, mb: 2 }}>
                      {job.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          variant="outlined"
                          color="secondary"
                          sx={{
                            borderRadius: 2,
                            fontWeight: 500,
                            borderWidth: 2,
                            "&:hover": {
                              bgcolor: "secondary.main",
                              color: "white",
                              borderColor: "secondary.main",
                              transition: "all 0.2s ease-in-out",
                            },
                          }}
                        />
                      ))}
                    </Stack>

                    <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                      <List dense sx={{ mt: 1, mb: 1 }}>
                        {job.bullets.map((bullet, i) => (
                          <ListItem key={i} sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ minWidth: 28, color: "primary.main" }}>-</ListItemIcon>
                            <ListItemText primary={bullet} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}

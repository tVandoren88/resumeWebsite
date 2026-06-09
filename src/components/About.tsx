import { Box, Container, Typography, Paper, Stack } from "@mui/material";

const strengths = [
  "Architects backend systems with Python, Django, and Flask",
  "Builds polished React and Vue interfaces for real users",
  "Improves delivery speed with CI/CD, automation, and tooling",
  "Brings leadership, mentoring, and cross-team execution",
];

export default function About() {
  return (
    <Box id="about" sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 8, md: 10 }, bgcolor: "transparent" }}>
      <Container>
        <Stack spacing={3}>
          <Paper
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              bgcolor: "background.paper",
              boxShadow: "0 22px 50px rgba(31,41,51,0.10)",
              border: "1px solid rgba(31,41,51,0.06)",
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontSize: "0.78rem",
                mb: 1.5,
              }}
            >
              Why Me
            </Typography>
            <Typography variant="h4" sx={{ mb: 2.5, maxWidth: 780 }}>
              An engineer who raises both product quality and team velocity
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 900 }}>
              Senior full-stack and Python engineer with 10+ years of experience building scalable
              platforms, backend systems, developer tooling, and production web apps. My work spans
              SaaS products, robotics systems, and SDKs that support multi-million-dollar product
              lines.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
              I'm strongest when a team needs someone who can move between architecture, hands-on
              implementation, release automation, and mentorship without losing momentum or code
              quality.
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              bgcolor: "#163046",
              color: "#f8f4ee",
              boxShadow: "0 22px 50px rgba(22,48,70,0.22)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.72)",
                mb: 2,
              }}
            >
              Core Strengths
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
                gap: 1.5,
              }}
            >
              {strengths.map((strength) => (
                <Typography key={strength} sx={{ lineHeight: 1.7 }}>
                  {`- ${strength}`}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

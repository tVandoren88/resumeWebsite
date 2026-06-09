import { Box, Container, Typography, Button, Avatar, Stack, Chip, Paper } from "@mui/material";
import { Helmet } from "react-helmet-async";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const metrics = [
  { value: "10+", label: "Years building software" },
  { value: "1000+", label: "Customers supported" },
  { value: "70%", label: "Release time reduced" },
];

export default function Hero() {
  const imageUrl = "/assets/images/trevor.jpg";

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 12 },
        pb: { xs: 5, md: 6 },
        background:
          "radial-gradient(circle at 15% 20%, rgba(201,111,18,0.18), transparent 24%), radial-gradient(circle at 85% 25%, rgba(22,48,70,0.12), transparent 22%), linear-gradient(135deg, #fff8ef 0%, #f4ede3 48%, #efe7dc 100%)",
      }}
    >
      <Helmet>
        <title>Trevor Van Doren | Senior Full-Stack & Python Software Engineer</title>
        <meta
          name="description"
          content="Trevor Van Doren is a senior full-stack and Python software engineer building scalable platforms, developer tooling, and customer-facing applications."
        />
        <meta
          name="keywords"
          content="Trevor Van Doren, Senior Software Engineer, Python, Full-Stack, Django, React, DevOps"
        />
        <meta name="author" content="Trevor Van Doren" />
        <meta property="og:title" content="Trevor Van Doren | Senior Full-Stack & Python Software Engineer" />
        <meta
          property="og:description"
          content="Building scalable platforms, backend systems, and developer tooling across SaaS, robotics, and SDK ecosystems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trevorvandoren.swiftwebinnov.com" />
        <meta property="og:image" content={`https://trevorvandoren.swiftwebinnov.com${imageUrl}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Trevor Van Doren",
            jobTitle: "Senior Full-Stack & Python Software Engineer",
            url: "https://trevorvandoren.swiftwebinnov.com",
            sameAs: [
              "https://www.linkedin.com/in/trevor-van-doren-3685b5ba/",
              "https://github.com/tvandoren88",
            ],
            image: `https://trevorvandoren.swiftwebinnov.com${imageUrl}`,
          })}
        </script>
      </Helmet>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            border: "1px solid rgba(31,41,51,0.08)",
            bgcolor: "rgba(255,250,244,0.76)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 24px 70px rgba(31,41,51,0.12)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "180px minmax(0, 1fr)" },
              gap: { xs: 4, md: 5 },
              alignItems: "start",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", pt: { md: 1 } }}>
              <Box sx={{ position: "relative", width: { xs: 180, md: 160 }, height: { xs: 180, md: 160 } }}>
                <Box
                  sx={{
                    position: "absolute",
                    inset: -10,
                    borderRadius: "34% 66% 58% 42% / 42% 35% 65% 58%",
                    background: "linear-gradient(135deg, rgba(201,111,18,0.22), rgba(22,48,70,0.18))",
                    filter: "blur(2px)",
                  }}
                />
                <Avatar
                  alt="Trevor Van Doren"
                  src={imageUrl}
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    border: "4px solid rgba(255,250,244,0.95)",
                    boxShadow: "0 14px 28px rgba(31,41,51,0.16)",
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Chip
                label="Senior engineer • Python • Full-stack • Dev tooling"
                sx={{
                  mb: 2.5,
                  bgcolor: "rgba(201,111,18,0.14)",
                  color: "secondary.main",
                  fontWeight: 700,
                }}
              />
              <Typography variant="h2" sx={{ fontSize: { xs: "2.8rem", md: "4.4rem" }, mb: 1.5 }}>
                Trevor Van Doren
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 2.5,
                  color: "secondary.main",
                  maxWidth: 760,
                }}
              >
                Senior Full-Stack & Python Software Engineer focused on scalable platforms,
                stronger delivery systems, and clean developer experiences.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 760,
                  mb: 3.5,
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.05rem" },
                }}
              >
                I build products and engineering systems that help teams ship faster: SaaS backends,
                React front ends, CI/CD pipelines, SDKs, and automation used in finance, robotics,
                and developer tooling environments.
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  mb: 3.5,
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(31,41,51,0.07)",
                }}
              >
                <Typography sx={{ color: "primary.main", fontWeight: 800, mb: 0.75 }}>
                  Featured Project
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.75 }}>
                  ParcelScout.io
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
                  A production web project highlighted here as part of my senior-engineer portfolio,
                  showing product thinking, modern front-end execution, and end-to-end delivery.
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  href="https://parcelscout.io"
                  startIcon={<LaunchIcon />}
                >
                  View ParcelScout.io
                </Button>
              </Paper>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://www.linkedin.com/in/trevor-van-doren-3685b5ba/"
                  startIcon={<LinkedInIcon />}
                  sx={{ boxShadow: "0 12px 24px rgba(201,111,18,0.25)" }}
                >
                  View LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  href="https://github.com/tvandoren88"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
                <Button variant="text" color="secondary" size="large" href="mailto:trevor.vandoren@email.com">
                  Email Me
                </Button>
              </Stack>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
                  gap: 2,
                }}
              >
                {metrics.map((metric) => (
                  <Paper
                    key={metric.label}
                    elevation={0}
                    sx={{
                      p: 2.25,
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,0.62)",
                      border: "1px solid rgba(31,41,51,0.07)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.8rem",
                        color: "primary.main",
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {metric.label}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

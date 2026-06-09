import { Box, Container, Typography, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export default function Education() {
  return (
    <Box id="education" sx={{ py: 8, bgcolor: "background.default" }}>
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
          <SchoolIcon fontSize="large" /> Education
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            bgcolor: "background.paper",
            border: "1px solid rgba(31,41,51,0.06)",
            boxShadow: "0 14px 30px rgba(31,41,51,0.06)",
            maxWidth: 760,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            B.S. Computer Engineering
          </Typography>
          <Typography variant="body1" color="text.secondary">
            University of Texas at Arlington
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Aug 2012 - May 2016
          </Typography>
          <Typography variant="body2" color="text.secondary">
            GPA: 3.7 / 4.0
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Header() {
  const sections = ["about", "skills", "experience", "projects", "education", "contact"];
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 78,
        behavior: "smooth",
      });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: isScrolled ? "rgba(255,250,244,0.8)" : "rgba(255,250,244,0.55)",
        color: "text.primary",
        backdropFilter: "blur(16px)",
        boxShadow: isScrolled ? "0 14px 30px rgba(31,41,51,0.08)" : "none",
        borderBottom: "1px solid rgba(31,41,51,0.06)",
        transition: "all 0.25s ease",
        justifyContent: "center",
        zIndex: 1300,
      }}
    >
      <Toolbar
        sx={{
          minHeight: isScrolled ? "64px" : "78px",
          transition: "min-height 0.25s ease",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Trevor Van Doren
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            p: 0.5,
            borderRadius: 999,
            bgcolor: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(31,41,51,0.06)",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {sections.map((item) => (
            <Button
              key={item}
              onClick={() => handleClick(item)}
              sx={{
                color: activeSection === item ? "secondary.main" : "text.secondary",
                bgcolor: activeSection === item ? "rgba(201,111,18,0.14)" : "transparent",
                px: 2,
                minWidth: 0,
                "&:hover": {
                  bgcolor: "rgba(201,111,18,0.12)",
                  color: "secondary.main",
                },
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

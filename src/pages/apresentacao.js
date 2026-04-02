import React from "react";
import { Box, Button, Image, Text } from "@skynexui/components";
import NextLink from "next/link";

export default function ApresentacaoPage() {
  const [language, setLanguage] = React.useState("pt");

  const content = {
    pt: {
      title: "Sobre mim",
      intro:
        "Olá! Sou a Júlia Einsfeld, desenvolvedora Frontend de 30 anos que reside no Rio Grande do Sul, Brasil. Tenho uma paixão por criar interfaces de usuário intuitivas e responsivas, e estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades.",
      description:
        "Minha trajetória é única: sou formada em Administração e hoje curso Engenharia de Software. Essa bagagem administrativa me deu uma visão analítica sobre faturamento e processos, que aplico diretamente na lógica de programação.",
      experienceTitle: "Resumo Profissional",
      experience:
        "Atualmente foco em React e JavaScript. Tenho experiência prática no desenvolvimento de sistemas de gestão (como o Bactolac) e sistemas contábeis (Sispro), unindo design de interface com consultas SQL eficientes.",
      btnLang: "Switch to English",
    },
    en: {
      title: "About Me",
      intro:
        "Hello! I am Júlia Einsfeld, a 30-year-old Frontend developer who lives in Rio Grande do Sul, Brazil. I have a passion for creating intuitive and responsive user interfaces, and I am always looking to learn new technologies and improve my skills.",
      description:
        "My journey is unique: I am graduated in Administration and currently studying Software Engineering. This administrative background has given me an analytical view of billing and processes, which I apply directly in programming logic.",
      experienceTitle: "Professional Summary",
      experience:
        "I currently focus on React and JavaScript. I have practical experience in developing management systems (such as Bactolac) and accounting systems (Sispro), combining interface design with efficient SQL queries.",
      btnLang: "Mudar para Português",
    },
  };

  const t = content[language];

  return (
    <Box>
      <Button
        label={t.btnLang}
        onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
        styleSheet={{
          marginBotton: "24px",
          backgroundColor: "transparent",
          border: "1px solid #f71eae",
          color: "#f71eae",
          focus: {
            backgroundColor: "transparent",
            color: "#f71eae",
          },
          active: {
            backgroundColor: "rgba(247, 30, 174, 0.1)",
            color: "#f71eae",
          },
          hover: {
            backgroundColor: "rgba(247, 30, 174, 0.05)",
            border: "1px solid #f71eae",
            color: "#f71eae",
          },
        }}
      />

      <Text
        variant="heading1"
        tag="h1"
        styleSheet={{
          color: "#f71eae",
          marginBotton: "16px",
        }}
      >
        {t.title}
      </Text>

      <Text
        variant="body1"
        tag="p"
        styleSheet={{
          marginBotton: "16px",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        {t.intro}
      </Text>

      <Text
        variant="body1"
        tag="p"
        styleSheet={{
          marginBottom: "16px",
        }}
      >
        {t.description}
      </Text>

      <Text
        variant="heading3"
        tag="h2"
        styleSheet={{
          color: "#f71eae",
          marginBotton: "8px",
        }}
      >
        {t.experienceTitle}
      </Text>

      <Text variant="body1" tag="p">
        {t.experience}
      </Text>

      <Box
        styleSheet={{
          marginTop: "32px",
          borderTop: "1px solid #f71eae",
          paddingTop: "16px",
        }}
      >
        <NextLink href="/" passHref style={{ textDecoration: "none" }}>
          <Button
            label={language === "pt" ? "Voltar para Home" : "Back to Home"}
            styleSheet={{
              backgroundColor: "transparent",
              border: "1px solid #f71eae",

              color: "#f71eae",
              focus: {
                backgroundColor: "transparent",
                color: "#f71eae",
              },
              active: {
                backgroundColor: "rgba(247, 30, 174, 0.1)",
                color: "#f71eae",
              },
              hover: {
                backgroundColor: "rgba(247, 30, 174, 0.05)",
                border: "1px solid #f71eae",
                color: "#f71eae",
              },
            }}
          />
        </NextLink>
      </Box>
    </Box>
  );
}

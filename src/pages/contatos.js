import React from "react";
import { Box, Button, Text } from "@skynexui/components";
import NextLink from "next/link";

export default function ContatosPage() {
  const [language, setLanguage] = React.useState("pt");

  const content = {
    pt: {
      title: "Informações de contato",
      subtitle:
        "Sinta-se a vontade para entrar em contato comigo para oportunidades, parcerias ou apenas para trocar uma ideia sobre tecnologia!",
      location: "Localização: Canoas, Rio Grande do Sul",
      btnHome: "Voltar para a home",
      btnLang: "Switch to English",
    },
    en: {
      title: "Contact Information",
      subtitle:
        "Feel free to reach out to me for opportunities, partnerships, or just to exchange ideas about technology!",
      location: "Location: Canoas, Rio Grande do Sul",
      btnHome: "Back to Home",
      btnLang: "Mudar para Português",
    },
  };

  const t = content[language];

  const myInfos = {
    email: "ju_einsfeld@hotmail.com",
    phone: "+55 51 99628-2849",
    linkedin: "https://www.linkedin.com/in/julia-einsfeld-b8aa231b6",
    github: "https://github.com/jueinsfeld",
  };

  return (
    <Box
      styleSheet={{
        padding: "32px",
        fontFamily: "sans-serif",
        mazWidth: "800px",
        margin: "0 auto",
      }}
    >
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
        styleSheet={{
          marginBotton: "32px",
        }}
      >
        {t.subtitle}
      </Text>

      {/*Lista de contatos Bruta */}
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        <Text tag="p">
          <strong>Email: </strong>
          {myInfos.email}
        </Text>

        <Text tag="p">
          <strong>WhatsApp: </strong>
          {myInfos.phone}
        </Text>

        <Text tag="p">
          <strong>LinkedIn: </strong>
          <a
            href={myInfos.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#f71eae", marginLeft: "8px" }}
          >
            in/julia-einsfeld
          </a>
        </Text>

        <Text tag="p">
          <strong>GitHub:</strong>
          <a
            href={myInfos.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#f71eae", marginLeft: "8px" }}
          >
            @jueinsfeld
          </a>
        </Text>

        <Text tag="p" styleSheet={{ marginTop: "16px", fontStyle: "italic" }}>
          {t.location}
        </Text>
      </Box>
      <NextLink href="/" passHref style={{ textDecoration: "none" }}>
        <Button
          label={t.btnHome}
          variant="tertiary"
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
      </NextLink>
    </Box>
  );
}

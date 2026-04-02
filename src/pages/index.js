import { Button, Box, Text, Image } from "@skynexui/components";
import NextLink from "next/link";
import { useState } from "react";
import { copy } from "../copy/copy";

export default function HomeScreen() {
  const [language, setLanguage] = useState("pt");
  const content = copy[language];

  const infos = {
    nome: "Júlia Einsfeld",
    githubUser: "jueinsfeld",
  };

  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "800px",
        paddingHorizontal: "16px",
      }}
    >
      {/*Botão troca idioma*/}
      <Button
        label={language === "pt" ? "Switch to English" : "Mudar para Português"}
        onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
        styleSheet={{
          alignSelf: "flex-end",
          marginBottom: "16px",
          color: "#f71eae",
          fontSize: "1.2rem",
          fontWeight: "bold",
          backgroundColor: "transparent",
          border: "1px solid #f71eae",
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
      <Image
        src={`https://github.com/${infos.githubUser}.png`}
        styleSheet={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          margin: "0 auto",
          border: "2px solid #f71eae",
        }}
      />
      <Text
        variant="heading1"
        tag="h1"
        styleSheet={{
          color: "#f71eae",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {infos.nome}
      </Text>

      <Box
        styleSheet={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          marginTop: "16px",
          gridGap: "16px",
        }}
      >
        {content?.cards?.map((card) => (
          <NextLink
            href={card.href || "/"}
            key={card.id}
            passHref
            style={{ textDecoration: "none" }}
          >
            <Box
              tag="a"
              styleSheet={{
                flexDirection: "column",
                border: "1px solid #f71eae",
                padding: "16px",
                borderRadius: "4px",
                hover: {
                  boxShadow: "1px 1px 10px rgba(247, 30, 174, 0.5)",
                  backgroundColor: "rgba(247, 30, 174, 0.05)",
                },
              }}
            >
              <Text variant="heading4" styleSheet={{ color: "#f71eae" }}>
                {card.title}
              </Text>
            </Box>
          </NextLink>
        ))}
      </Box>
    </Box>
  );
}

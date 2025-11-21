import {
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Text,
  Row,
} from "@react-email/components";
import React from "react";
import Fonts from "./_components/font";

export function InternalAlertEmail({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <Html lang="en">
      <Head>
        <Fonts.Inter />
      </Head>

      <Container
        style={{
          padding: "1.5rem",
          backgroundColor: "#fef2f2",
        }}
      >
        <Row>
          <Heading
            as="h1"
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#b91c1c",
              marginBottom: "1rem",
            }}
          >
            ⚠️ Internal System Alert
          </Heading>
        </Row>

        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #fecaca",
          }}
        >
          <Text
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#7f1d1d",
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              fontSize: "0.875rem",
              color: "#450a0a",
              lineHeight: "1.5rem",
            }}
          >
            {message}
          </Text>
        </Container>

        <Hr
          style={{
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
            borderColor: "#fecaca",
          }}
        />

        <Text
          style={{
            fontSize: "0.75rem",
            color: "#7f1d1d",
          }}
        >
          This is an internal automated notification. Please take action if
          needed.
        </Text>
      </Container>
    </Html>
  );
}

InternalAlertEmail.PreviewProps = {
  title: "Refresh Token Expired",
  message:
    "Refresh token expired — the Google OAuth connection must be re-authorized.",
};

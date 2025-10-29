import {
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Row,
  Text,
} from "@react-email/components";
import React from "react";
import Fonts from "./_components/font";

// 🧩 Shared Styles
const styles = {
  container: {
    padding: "1.5rem",
    backgroundColor: "#f9fafb",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
  heading: {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "1rem",
    color: "#0f172a",
  },
  label: {
    fontWeight: 600,
    fontSize: "0.875rem",
    color: "#334155",
    marginTop: "0.5rem",
  },
  value: {
    fontSize: "0.875rem",
    color: "#0f172a",
  },
  text: {
    fontSize: "0.875rem",
    color: "#334155",
    lineHeight: "1.5rem",
  },
  button: {
    backgroundColor: "#0F172A",
    color: "#ffffff",
    textAlign: "center" as const,
    marginTop: "1.5rem",
    display: "inline-block",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    textDecoration: "none",
  },
  hr: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    borderColor: "#e5e7eb",
  },
  footer: {
    fontSize: "0.75rem",
    color: "#94a3b8",
    marginTop: "1rem",
  },
};

// Helper: logo URL builder
// function getLogoUrl(logo?: string) {
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
//   return `${baseUrl}${logo || "/logo.png"}`;
// }

//
// 📩 Company Inquiry Email
//
export function CompanyInquiryEmail({
  name,
  email,
  phone,
  company,
  service,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}): React.ReactNode {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <Html lang="en">
      <Head>
        <Fonts.Inter />
      </Head>
      <Container style={styles.container}>
        <Row>
          <Link href={baseUrl}>
            <h2>Techspire</h2>
            {/*<Img src={logoUrl} width={28} height={28} alt="Company Logo" />*/}
          </Link>
        </Row>

        <Hr style={styles.hr} />

        <Container style={styles.card}>
          <Heading as="h1" style={styles.heading}>
            New {service} Inquiry
          </Heading>

          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{name}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>

          {phone && (
            <>
              <Text style={styles.label}>Phone:</Text>
              <Text style={styles.value}>{phone}</Text>
            </>
          )}

          {company && (
            <>
              <Text style={styles.label}>Company:</Text>
              <Text style={styles.value}>{company}</Text>
            </>
          )}

          <Text style={styles.label}>Service:</Text>
          <Text style={styles.value}>{service}</Text>

          <Text style={styles.label}>Message:</Text>
          <Text style={styles.value}>{message}</Text>
        </Container>

        <Hr style={styles.hr} />
        <Text style={styles.footer}>
          &copy; {new Date().getFullYear()} YourCompany. Internal Notification.
        </Text>
      </Container>
    </Html>
  );
}

CompanyInquiryEmail.PreviewProps = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 555 234 5678",
  company: "Acme Inc.",
  service: "Web Development",
  message: "We’re interested in redesigning our company website.",
};

//
// 📬 User Confirmation Email
//
export function UserConfirmationEmail({
  name,
  service,
  message,
}: {
  name: string;
  service: string;
  message: string;
}): React.ReactNode {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <Html lang="en">
      <Head>
        <Fonts.Inter />
      </Head>
      <Container style={styles.container}>
        <Row>
          <Link href={baseUrl}>
            <h2>Techspire</h2>
            {/*<Img src={logoUrl} width={28} height={28} alt="Company Logo" />*/}
          </Link>
        </Row>

        <Hr style={styles.hr} />

        <Container style={styles.card}>
          <Heading as="h1" style={styles.heading}>
            Thank You for Contacting Us
          </Heading>

          <Text style={styles.text}>
            Hi {name},<br />
            Thank you for reaching out about <strong>{service}</strong>. Our
            team has received your message and will get back to you shortly.
          </Text>

          <Text style={{ ...styles.text, marginTop: "1rem" }}>
            <strong>Your Message:</strong> <br />
            <em>{message}</em>
          </Text>

          <Link href={baseUrl} style={styles.button}>
            Visit Our Website
          </Link>
        </Container>

        <Hr style={styles.hr} />
        <Text style={styles.footer}>
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </Text>
      </Container>
    </Html>
  );
}

UserConfirmationEmail.PreviewProps = {
  name: "John Doe",
  service: "Web Development",
  message:
    "I’d like to discuss redesigning our homepage and improving SEO ranking.",
};

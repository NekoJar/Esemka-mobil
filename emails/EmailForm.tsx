import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import logo from "@/public/logo.png";

interface EmailFormProps {
  message?: string;
  senderEmail: string;
  senderName: string;
  senderAddress: string;
  senderDate: string;
  productName: string;
  colorProduct: string;
}

export default function EmailForm({
  message,
  senderEmail,
  senderName,
  senderAddress,
  senderDate,
  productName,
  colorProduct,
}: EmailFormProps) {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>New Bookings from Esemka Mobil</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={coverSection}>
              <Section style={imageSection} className="bg-zinc-800">
                <Text
                  className="text-white font-extrabold text-6xl"
                  style={Title}
                >
                  ESEMKA
                </Text>
              </Section>
              <Section style={upperSection}>
                <Heading style={h1}>New Bookings from Esemka Mobil</Heading>
                <Text style={h1}>New Bookings from {senderEmail}</Text>
                <Text style={mainText}>Sender Name: {senderName}</Text>
                <Text style={mainText}>Product Name: {productName}</Text>
                <Text style={mainText}>Procduct Color: {colorProduct}</Text>
                <Text style={mainText}>Sender Email: {senderEmail}</Text>
                <Text style={mainText}>Booking Date: {senderDate}</Text>
                <Text style={mainText}>Sender Address: {senderAddress}</Text>
                <Text style={mainText}>Message: {message ? message : "-"}</Text>
              </Section>
            </Section>
            <Text style={footerText}>
              This message was produced and distributed by PT. Solo Manufaktur
              Kreasi Demangan Industial Zone Jl. Raya Demangan Km 3,5 Sambi,
              Boyolali Jawa Tengan ©2019 - 2024 PT Solo Manufaktur Kreasi. All
              Rights Reserved.
              <Link
                href="https://esemka-mobil.vercel.app"
                target="_blank"
                style={link}
              >
                Esemka Mobil
              </Link>
              .
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const Title = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",

  marginBottom: "15px",
};
const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const imageSection = {
  display: "flex",
  padding: "20px 0",
  alignItems: "center",
  justifyContent: "center",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const lowerSection = { padding: "25px 35px" };

const footerText = {
  ...text,
  fontSize: "12px",
  padding: "0 20px",
};

const verifyText = {
  ...text,
  margin: 0,
  fontWeight: "bold",
  textAlign: "center" as const,
};

const codeText = {
  ...text,
  fontWeight: "bold",
  fontSize: "36px",
  margin: "10px 0",
  textAlign: "center" as const,
};

const validityText = {
  ...text,
  margin: "0px",
  textAlign: "center" as const,
};

const verificationSection = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const mainText = { ...text, marginBottom: "14px" };

const cautionText = { ...text, margin: "0px" };

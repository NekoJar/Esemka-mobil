import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailFormProps {
  message: string;
  senderEmail: string;
  senderName: string;
  senderAddress: string;
  senderDate: string;
}

export default function EmailForm({
  message,
  senderEmail,
  senderAddress,
  senderName,
  senderDate,
}: EmailFormProps) {
  return (
    <Html>
      <Head />
      <Preview>New messages from Esemka Mobil Booking Form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from {senderEmail}
              </Heading>
              <Text className="text-bold">New Message!</Text>
              <br></br>
              <Text>{senderName}</Text>
              <Text>{senderAddress}</Text>
              <Text>{senderDate}</Text>
              <Text>{message}</Text>
              <Hr />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

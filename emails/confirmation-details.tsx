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
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  recipient?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ConfirmationDetails = ({
  recipient,
}: VercelInviteUserEmailProps) => {
  const previewText = `Join Nithin Monni`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Join <strong>{"Nithin Monni"}</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {recipient},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <div className="pb-6">
                Thank you for your RSVP. Please save the date:
              </div>
              <div>
                <strong>Friday, June 21st at 6pm</strong>.
              </div>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-black text-[18px] leading-[24px]">
              Here are the program details:
            </Text>
            <ul>
              <li>
                <Text className="text-black text-[14px] leading-[24px]">
                  6:00 pm - 6:30 pm: Meet and Greet
                </Text>
              </li>
              <li>
                <Text className="text-black text-[14px] leading-[24px]">
                  6:30 pm - 7:00 pm: Tea and snacks
                </Text>
              </li>
              <li>
                <Text className="text-black text-[14px] leading-[24px]">
                  7:00 pm - 7:30 pm: Cake cutting
                </Text>
              </li>
              <li>
                <Text className="text-black text-[14px] leading-[24px]">
                  7:30 pm - 9:00 pm: Dinner
                </Text>
              </li>
            </ul>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section>
              <Row>
                <Img
                  src="https://nithinmonnirsvp.vercel.app/Black-And-Grey-Classic-Photo-Graduation-Announcement.png"
                  height="500"
                />
              </Row>
            </Section>

            <Text className="text-black text-[14px] leading-[24px]">
              Open in browser:{" "}
              <Link
                href={
                  "https://www.google.com/maps/place/Shorewood+Community+%26+Event+Center/@44.9007343,-93.5891007,17z/data=!3m1!4b1!4m6!3m5!1s0x87f6032e9f629011:0x3b85af0bfeaccac0!8m2!3d44.9007305!4d-93.5865258!16s%2Fg%2F1vxf_qsm?entry=ttu"
                }
                className="text-blue-600 no-underline"
              >
                {"Google Maps Location"}
              </Link>
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Add to calendar:{" "}
              <Link
                href={
                  "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHQ5YjlpNWY4OWZ1c25mdjJqbGdsbzF1Nmsgbml0aGluLm1vbm5pQG0&tmsrc=nithin.monni%40gmail.com"
                }
                className="text-blue-600 no-underline"
              >
                {"Google Calendar Invite"}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for{" "}
              <span className="text-black">{recipient}</span>. This invite was
              sent from <span className="text-black">{baseUrl}</span> located in{" "}
              <span className="text-black">{"Edina, MN"}</span>. If you were not
              expecting this invitation, you can ignore this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ConfirmationDetails.PreviewProps = {
  recipient: "Jim Joe",
} as VercelInviteUserEmailProps;

export default ConfirmationDetails;

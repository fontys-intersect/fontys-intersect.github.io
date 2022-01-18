import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Image,
  Text,
  Divider,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

export const Wled = () => (
  <Box w={"100%"} alignItems="center" mb={"20px"}>
    <Image
      src={"/fontys-intersect-2021/assets/images/wled_logo.png"}
      alt="test"
      h={"15%"}
      w={"15%"}
      marginLeft={"10%"}
    />
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> WLED </Text>
      <Text fontSize="2xl" fontWeight={"bold"}>
        Intro
      </Text>
      <Text fontSize="l">
        Wled is a program that is widely used among ledstrip users, this
        software is open source and can be used via the app or via the web
        interface. Here we will pentest the certain aspects of this software and
        share our findings.
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Table of Contents{" "}
      </Text>
      <UnorderedList>
        <ListItem>Case Explanation</ListItem>
        <ListItem>Strengths</ListItem>
        <ListItem>Vulnerabilities</ListItem>
        <ListItem>Possible Fixes</ListItem>
        <ListItem>Best practices</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize="l">
        The application was tested according to the cyber kill chain. Testing
        was done on a home network that was only accessible to the testers.
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Tools
      </Text>
      <Text fontSize={"l"}>
        The tools that were used are mostly the same tools
      </Text>
      <Text fontSize={"l"}>
        Among these are:
        <UnorderedList>
          <ListItem>Burp Suite</ListItem>
          <ListItem>LOIC</ListItem>
          <ListItem>WireShark</ListItem>
        </UnorderedList>
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Vulnerabilities
      </Text>
      <Text fontSize={"l"}>
        The vulnerabilities, in this case, are as followed:
      </Text>
      <br />
      <Text>
        <Text fontWeight={"bold"}>Bad error handling:</Text> If there’s an
        error, the error messages display very little to no information. This is
        very inconvenient to both the user and the developer because nobody can
        see what went wrong.
      </Text>
      <br />
      <Text>
        <Text fontWeight={"bold"}>Fix:</Text> Add standard error handling and in
        depth error messages that don’t reveal vital information but also give
        the user and developer enough info to find out what went wrong.
      </Text>

      <br />
      <Text>
        <Text fontWeight={"bold"}>No password needed:</Text> By default, there
        is no password and no password requirements
      </Text>
      <br />
      <Text>
        <Text fontWeight={"bold"}>Fix:</Text> Force the user to create a
        password at application setup, set clear and secure password
        requirements. Including but not limited to the following:
      </Text>
      <br />
      <UnorderedList>
        <ListItem>
          At least 8 characters—the more characters, the better
        </ListItem>
        <ListItem>A mixture of both uppercase and lowercase letters</ListItem>
        <ListItem> A mixture of letters and numbers</ListItem>
        <ListItem>
          {" "}
          Inclusion of at least one special character, e.g., ! @ # ? ]
        </ListItem>
      </UnorderedList>
      <br />
      <Text>
        <Text fontWeight={"bold"}>DOS attack:</Text> It is possible to perform a
        DOS attack, after only 10000 requests the esp will reboot making it
        unable to work via the interface or client.
      </Text>
      <br />
      <Text>
        <Text fontWeight={"bold"}>Fix:</Text> Integrating a form of request
        filtering, making it mostly impossible to perform an attack from a
        single node DDOS may still work but is unrealistic for this device.
      </Text>
      <br />
      <Text>
        <Text fontWeight={"bold"}>External requests:</Text> Using Burp suite it
        was possible to resend old requests or edit these requests, since the
        software does not use any form of headers or sessions it was easy to
        send these requests without any problem.
      </Text>
      <br />
      <Text>
        <Text fontWeight={"bold"}>Fix:</Text> Using a session id according with
        cookies and header it is more difficult to send requests without the
        proper equipment or tokens.
      </Text>
      <br />
      <Text fontSize="2xl" fontWeight={"bold"}>
        Best Practices
      </Text>

      <Text>
        The following best practices were missing in this case:{" "}
        <Link textColor={"blue"}  href="/#/bestpractices/splitdev">
          split development and production environments
        </Link>
        ,{" "}
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/authentication">
          authentication
        </Link>{", "}
        <Link textColor={"blue"}  href="/fontys-intersect-2021/#/bestpractices/authorization">
          authorization
        </Link>
        ,{" "}
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/errorhandling">
          error handling
        </Link>
        ,{" "}
        <Link textColor={"blue"}  href="/fontys-intersect-2021/#/bestpractices/inputvalidation">
          input validation
        </Link>
        ; more about these best practices can be read on their respective pages.
      </Text>
      <Divider m={2} />
      <Text fontSize="3xl"> Bibliography </Text>
      <Text fontSize={"xl"}>
        The bibliography according to this page is <br />
        <UnorderedList>
          <ListItem>
            About. (z.d.). NWO. Geraadpleegd op 10 december 2020, van&nbsp;
            <Link href="https://www.nwo.nl/en/about-nwo">
              About nwo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

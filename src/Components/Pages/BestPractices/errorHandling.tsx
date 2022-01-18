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

export const ErrorHandling = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Error handling </Text>
      <Text fontSize={"l"}>
        This page will go in-depth on the topic of error handling; what it is,
        why it’s important, and how it could be implemented securely.
      </Text>
      <br />
      <Text fontSize={"xl"}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Intro</ListItem>
        <ListItem>Explanation</ListItem>
        <ListItem>Usage and good examples</ListItem>
        <ListItem>Vulnerability</ListItem>
        <ListItem>Bibliography</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={"xl"}>Explanation</Text>
      <Text>
        Error handling often refers to the response and recovery procedures from
        any occurring error state within an application or server. This is the
        process consisting of anticipation, detection and resolution of errors,
        programming mistakes and/or communication errors. This procedure helps
        the application to maintain its normal flow of execution. Depending on
        the place of the occurring error, the error message can differ. As error
        messages returning from an API should give as little information as
        possible to prevent the leakage of information to attacks. Whereas an
        error message in the front-end would need to contain as much information
        as possible, this way the user is able to correct their mistakes.
      </Text>
      <br />
      <Text fontSize={"xl"}>Usage</Text>
      <Text fontSize={"l"}>
        Certificates are used to secure the connection from a server to a
        client, mostly used in web traffic. With this certificate, you can be
        assured that your connection is encrypted. There are also self-signed
        certificates; however, those aren’t as secure. Self-signed certificates
        are signed by you instead of by a certificate authority. This means it’s
        not to be trusted and can be taken over by an attacker.
      </Text>
      <br />
      <Text fontSize={"xl"}>Vulnerabilities</Text>
      <Text fontSize={"l"}>
        Flaws within error handling are often the result of improper
        implementation of error handling, as some messages might be created to
        help the developers to fix issues on their sites. These messages also
        show critical information to attackers that they will be able to use to
        help them break into a system that should be secured. When taking a look
        at errors from SQL, the message can contain information of the database
        structure and give the attacker all the information they would need to
        carry out an SQLI attack. Other flaws can be found within the set-up of
        error messages, as some messages for authentication might contain
        different information for the user when an account exists, compared to
        when an account does not exist.
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
        WLED
      </Text>
      <Text fontSize={"l"}>
        Wled showcases the importance of SSL since the web application that
        communicates with an IoT device can be easily exploited.
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Airquality
      </Text>
      <Text fontSize={"l"}>
        If there’s an error, the error messages display very little to no
        information. This is very inconvenient to both the user and the
        developer because nobody can see what went wrong. For instance, when the
        system could not communicate with the database, it would just reply
        “Wrong username or password”, which can be very frustrating.
      </Text>
      <Divider m={2} />
      <Text fontSize="3xl"> Bibliography </Text>
      <Text fontSize={"xl"}>
        The bibliography according to this page is <br />
        <UnorderedList>
          {/* <ListItem>
            INTERSECT. (z.d.). dcypher. Geraadpleegd op 10 december 2020, van
            https://www.dcypher.nl/en/intersect
          </ListItem> */}
          <ListItem>
            Techopedia. (2017, 1 mei). Error Handling. Techopedia.Com. Retrieved
            December 2, 2021, from &nbsp;
            <Link href="https://www.techopedia.com/definition/16626/error-handling">
              Techopedia <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Veracode. (z.d.). Error Handling Flaws. Retrieved December 2, 2021,
            from &nbsp;
            <Link href="https://www.veracode.com/security/error-handling-flaws-information-and-how-fix-tutorial">
              Veracode <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Iotsecurityfoundation. (z.d.). IoT Security Foundation. from &nbsp;
            <Link href="https://www.iotsecurityfoundation.org/wp-content/uploads/2019/12/Best-Practice-Guides-Release-2_Digitalv3.pdf">
              IoT security foundation <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            J.F.W.J.B. (z.d.). Improper Error Handling. OWASP. from &nbsp;
            <Link href="https://owasp.org/www-community/Improper_Error_Handling">
              OWASP <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

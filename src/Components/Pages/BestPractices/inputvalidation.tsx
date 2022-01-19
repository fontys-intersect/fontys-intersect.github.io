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

export const InputValidation = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Input Validation </Text>
      <Text fontSize={"l"}>
        Every user’s input should be properly validated, to make sure that
        nothing malicous is entered.
      </Text>
      <br />
      <Text fontSize={"xl"}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Explanation</ListItem>
        <ListItem>Usage</ListItem>
        <ListItem>Vulnerability</ListItem>
        <ListItem>Cases</ListItem>
        <ListItem>Bibliography</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={"xl"}>Explanation</Text>
      <Text>
        Input validation is the process of ensuring the formed data that enters
        the flow of a system is proper. This will prevent malformed data from
        continuing in the database and possibly trigger malfunctions of various
        components. The validation of data should happen as early as possible in
        the flow of data. This does mean every bit of data coming in should be
        validated, this does not exclude the data coming from external APIs
        and/or web clients.
      </Text>
      <br />
      <Text fontSize={"xl"}>Usage</Text>
      <Text fontSize={"l"}>
        Input validation can be implemented using any programming language, some
        implementations are available through frameworks or libraries. The
        following validation can be implemented in various ways:
        <UnorderedList>
          <ListItem>
            Validation against JSON and XML schemas in these formats
          </ListItem>
          <ListItem>Apply type conversion with strict error handling</ListItem>
          <ListItem>
            Have a minimum and maximum range check for numeric parameters, dates
            and strings.
          </ListItem>
          <ListItem>Regular expressions</ListItem>
          <ListItem>Array of allowed values for small sets</ListItem>
          <ListItem>File upload validation</ListItem>
        </UnorderedList>
        <Text fontSize={"l"} fontWeight={"bold"}>
          Manual override
        </Text>
        Nist recommends to add manual override capabilities for input
        validation. The access to this override should be restricted to only be
        accessible to organization-defined authorized individuals.{" "}
        <Text as="i">
          “In certain situations, such as during events that are defined in
          contingency plans, a manual override capability for input validation
          may be needed”
        </Text>
        (Nist, 2020) the use of the manual override should be limited.
      </Text>
      <br />
      <Text fontSize={"xl"}>Vulnerabilities</Text>
      <Text fontSize={"l"}>
        The flaws of input validation is the implementation of it. Whenever the
        implementation is done incorrectly by developers, the system will be
        vulnerable to attacks based on improper input and the way the sent data
        will interact with the server. These flaws can be detected using
        multiple methods:
        <UnorderedList>
          <ListItem>Static analysis</ListItem>
          <ListItem>Fuzzing</ListItem>
          <ListItem>Architecture or design review</ListItem>
          <ListItem>Static source code analysis</ListItem>
          <ListItem>
            Binary / Bytecode disassembler and manual analysis
          </ListItem>
        </UnorderedList>
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
        Airquality
      </Text>
      <Text fontSize={"l"}>
        An attacker can omit certain parameters when making new users, sensors
        or locations, making these invalid.
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
            OWASP. (z.d.). Input Validation - OWASP Cheat Sheet Series.
            OWASP.Org. Retrieved December 3, 2021, from &nbsp;
            <Link href="https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html#input-validation-cheat-sheet">
              OWASP <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Mitre. (z.d.). CWE - CWE-20: Improper Input Validation (4.6).
            Retrieved December 3, 2021, from &nbsp;
            <Link href="https://cwe.mitre.org/data/definitions/20.html">
              Mitre <ExternalLinkIcon mx="2px" />
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

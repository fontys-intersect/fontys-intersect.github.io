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

export const SplitDevelopment = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Split development and production environments </Text>
      <Text fontSize={"l"}>
        When developing a system, the developers use tools to make it easier.
        These tools and options should be removed before shipping everything to
        production, since these tools can be abused.
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
        During the development of a product, the approach being taken by most
        companies is to have multiple environments in which the product will be
        developed, tested and produced. The enabled or disabled features and/or
        technological bits will help the product in those environments.
      </Text>
      <br />
      <Text fontSize={"xl"}>Usage</Text>
      <Text fontSize={"l"}>
        The usage of this best practice can be found within a lot of smart
        devices, as these might contain software that can be tested through an
        open port. An example of this is android with their Android Debugging
        Bridge (ADB for short), this allows the developers to test their product
        to various degrees. Besides this, the split within the environments can
        also be found in other software such as back-ends and databases. These
        environments often have their own complete set of components which
        complete the data flow like the production environment, these
        environments contain their own database and API to contain possible
        issues that could occur when testing.
      </Text>
      <br />
      <Text fontSize={"xl"}>Vulnerabilities</Text>
      <Text fontSize={"l"}>
        The flaws of a split environment is often found in the split not being
        completely true, databases and/or back-ends could be used within
        multiple environments such as the production and a staging environment.
        When this occurs, the faulty data that could be injected through testing
        and/or by accident would impact the production environment. Within the
        development of android devices, leaving the ADB exposed will allow
        attackers to access the device through this open port.
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
        Smartscreen
      </Text>
      <Text fontSize={"l"}>
        It was found that one of the Smart Screens had a debugging shell open
        which is meant for a development environment.
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
            Traditional Development/Integration/Staging/Production Practice for
            Software Development. (2018, 15 januari). Disruptive Library
            Technology Jester. from &nbsp;
            <Link href="https://dltj.org/article/software-development-practice/">
              Disruptive Library Technology Jester <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            S.W. (z.d.). Development Sandboxes: An Agile Core Practice.
            Agiledata. from &nbsp;
            <Link href="http://www.agiledata.org/essays/sandboxes.html">
              Agile Data <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            ENISA. (2017, 20 November). Baseline Security Recommendations for
            IoT. from &nbsp;
            <Link href="https://www.enisa.europa.eu/publications/baseline-security-recommendations-for-iot">
              Enisa Europe foundation <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

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
  OrderedList,
} from "@chakra-ui/react";

export const OwaspHome = () => (
  <Box w={"100%"} alignItems="center">
    <Image
      src={"/assets/images/owasp-logo.png"}
      alt="test"
      h={"15%"}
      w={"15%"}
      marginLeft={"10%"}
      marginTop={"1%"}
    />
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> IoT Owasp top 10 </Text>
      <Text fontSize={"l"}>
        The OWASP IoT Top 10 represents the top 10 things to avoid when
        building, deploying or managing IoT systems. The primary theme for the
        OWASP Internet of Things Top 10 is simplicity.
      </Text>
      <Divider m={2} />
      <Text fontSize="3xl"> OWASP Internet of things top 10 </Text>
      <Text fontSize={"l"}>
        <OrderedList>
          <ListItem>
            <Link href="/owasp/top/1">
              Weak, Guessable, or Hardcoded Passwords
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">Insecure Network Services</Link>
          </ListItem>
          <ListItem>
            <Link href="">Insecure Ecosystem Interfaces</Link>
          </ListItem>
          <ListItem>
            <Link href="">Lack of Secure Update Mechanism</Link>
          </ListItem>
          <ListItem>
            <Link href="">Use of Insecure or Outdated Components</Link>
          </ListItem>
          <ListItem>
            <Link href="">Insufficient Privacy Protection</Link>
          </ListItem>
          <ListItem>
            <Link href="">Insecure Data Transfer and Storage</Link>
          </ListItem>
          <ListItem>
            <Link href="">Lack of Device Management</Link>
          </ListItem>
          <ListItem>
            <Link href="">Insecure Default Settings</Link>
          </ListItem>
          <ListItem>
            <Link href="">Lack of Physical Hardening</Link>
          </ListItem>
        </OrderedList>
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
            OWASP Internet Of Things TOP 10 2018. Geraadpleegd op 27 September 2020, van&nbsp;
            <Link href="https://owasp.org/www-pdf-archive/OWASP-IoT-Top-10-2018-final.pdf">
              OWASP <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
  </Box>
);

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

export const Password = () => (
  <Box w={"100%"} alignItems="center">
    <Image
      src={"/fontys-intersect-2021/assets/images/owasp-logo.png"}
      alt="test"
      h={"15%"}
      w={"15%"}
      marginLeft={"10%"}
      marginTop={"1%"}
    />
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Weak, Guessable, or Hardcoded Passwords </Text>
      <Text fontSize={"l"}>
        As more and more devices become accessible through a login, having a
        secure password set-up is mandatory. Most of the IoT botnet malware
        gains access to the devices and network switches through weakly
        protected passwords, the botnets use brute force attacks to gain access
        to the system/device. Some manufacturers put login information in the
        user manual of a product that is available for everyone, this helps
        botnets create their password libraries. Examples of a poorly securely
        set-up authentication system can be found on Zyxel products, in a
        support post made on the 15th of September 2021. In this post the CSO
        explained a vulnerability flaw within the software allowing attackers to
        perform remote code execution via an OS command injection.
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
            About. (z.d.). NWO. Geraadpleegd op 10 december 2020, van&nbsp;
            <Link href="https://www.nwo.nl/en/about-nwo">
              About nwo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
  </Box>
);

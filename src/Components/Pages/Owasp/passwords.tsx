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
      <br />
      <Text fontSize={"l"}>
        Allowing users to create insecure passwords, passwords without any
        requirements as an example, creates an easy way for attackers to either
        attempt brute forcing to gain access to an account. Depending on the
        type of network access the IoT system has, this can cause a lot of
        potential damage to the network without any properly managed firewalls.
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"}>
        This vulnerability has been found in the following cases:
        <UnorderedList>
          <ListItem>
            <Link href="#/case/wled" textColor={"blue"}>
              WLED
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#/case/printer" textColor={"blue"}>
              HP Laserjet
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#/case/airquality" textColor={"blue"}>
              Airquality
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
      <Divider m={2} />
      <Text fontSize="3xl"> Bibliography </Text>
      <Text fontSize={"xl"}>
        The bibliography according to this page is <br />
        <UnorderedList>
          <ListItem>
            KeyFactor. Top 10 IoT Vulnerabilities in your devices. Retrieved
            January 21, 2022, from&nbsp;
            <Link href="https://www.keyfactor.com/blog/top-10-iot-vulnerabilities-in-your-devices/#:~:text=of%20Physical%20Hardening-,Lack%20of%20a%20Secure%20Update%20Mechanism,to%20securely%20update%20the%20device.&text=Some%20devices%20may%20have%20reached,critical%20to%20addressing%20this%20vulnerability.">
              Keyfactor <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Govindraj Basatwar - Global Business Head. (2021, September 17).
            Guide to OWASP IoT Top 10 for proactive security. NWO. Retrieved
            November 11, 2021, from&nbsp;
            <Link href="https://www.appsealing.com/owasp-iot-top-10/">
              Appsealing <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
  </Box>
);

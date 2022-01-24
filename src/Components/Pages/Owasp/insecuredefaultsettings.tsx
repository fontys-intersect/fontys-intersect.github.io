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

export const Settings = () => (
  <Box w={"100%"} h={"100vh"} alignItems="center">
    <Image
      src={"/assets/images/owasp-logo.png"}
      alt="test"
      h={"10%"}
      w={"15%"}
      marginLeft={"10%"}
      marginTop={"1%"}
    />
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl">Insecure Default Settings</Text>
      <Text fontSize={"l"}>
        {" "}
        Default settings for IoT devices such as default password are a very
        significant vulnerability, as a user it’s important to mitigate the
        risks associated with devices or systems shipped with insecure default
        settings or devices that lack the ability to make the system more secure
        by restricting operators from modifying configurations. This is very
        device dependent, consider changing all default settings that have an
        impact on the security of your devices, such as passwords
      </Text>
      <br />
      Enabling a firewall router, disabling WPS, enabling the WPA2 security protocol, and using a strong Wi-Fi password are just some of these practices. It is also now possible to encrypt all traffic through your ISP by installing Virtual Private Networking (VPN) on your router.
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"}>
        This vulnerability has been found within the following cases:
        <UnorderedList>
          <ListItem>
            <Link href="#/case/wled" textColor={"blue"}>
              WLED
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#/case/smartlockbt" textColor={"blue"}>
              Bluetooth Smartlock
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#/case/printer" textColor={"blue"}>
              HP Laserjet
            </Link>
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

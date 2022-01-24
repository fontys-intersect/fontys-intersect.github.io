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

export const Interfaces = () => (
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
      <Text fontSize="3xl"> Insecure Ecosystem Interfaces </Text>
      <Text fontSize={"l"}>
        Within the current IoT devices and networks lots of data gets sent every
        day, this data gets sent through several interfaces. Web interfaces,
        APIs, cloud environments and the mobile interfaces, these are used to
        allow smooth user interaction with the devices and data. However a lack
        of properly set-up authentication, poor encryption and poor data
        filtering can be adversely impacting the security of these devices. A
        strong authentication and authorization mechanism needs to be
        implemented to mitigate the insecure ecosystems. The server has to be
        able to differentiate between a valid endpoint and a faulty endpoint
        being forced to authenticate itself.
        <br />
        IoT systems transmit and receive large amounts of information and secure the data transfer between devices/sensors, gateway devices, and back-end databases through REST-based APIs.
        <br /> <br />
        Another common problem is routers connected to remote web interfaces, a feature known as remote management or remote management. Administrators can test a router’s availability for remote management by checking the open ports 80 (HTTP) and 443 (HTTPS). This allows them to deactivate this feature safely.
        <br />
        Developers need to design more secure IoT applications without assuming the devices themselves are protected. Firewalls, anti-virus, and intrusion detection and prevention systems should provide a secure IoT network.

        IoT devices must authenticate each other to verify the device’s identity to which they intend to connect. If the machine carries out identity validation on multiple devices, a central certificate authority may be beneficial.
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"}>
        This vulnerability has been found in the following cases:
        <UnorderedList>
          <ListItem>
            <Link href="#/case/smartwatch" textColor={"blue"}>
              Smartwatch
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

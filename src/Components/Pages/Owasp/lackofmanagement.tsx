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

export const Management = () => (
  <Box w={"100%"} h={"100vh"} alignItems="center">
    <Image
      src={"/fontys-intersect-2021/assets/images/owasp-logo.png"}
      alt="test"
      h={"10%"}
      w={"15%"}
      marginLeft={"10%"}
      marginTop={"1%"}
    />
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl">Lack of device management</Text>
      <Text fontSize={"l"}>
        {" "}
        Lack of security support on devices deployed in production, including asset management, update management, secure decommissioning, systems monitoring, and response capabilities.
        <br />
        One of IoT’s most significant safety risks and challenges is managing all of our devices and closing the perimeter.

        However, rogue devices or counterfeit malicious IoT devices are installed in secure networks without authorization. A rogue device replaces or integrates the original device as a group member to collect or alter sensitive information. These devices are breaking the perimeter of the network.
        <br /><br />
        Device management is like other IT asset management systems: the primary concerns are the provisioning, operation, and updating of devices. These concerns apply to all devices, including gateways.

        The discovery and identification of IoT devices is a necessary first step in the monitoring and protection of these devices. Large IoT networks, comprising many almost identical devices, are attractive targets for cyber attackers.
        <br />
        <br />
        IoT security solutions enable organizations to discover and identify IoT devices on their networks. Despite the significant growth in the number of IoT assets, most organizations are unaware of device vulnerabilities and do not manage their safety postures or risk profiles.

        Intelligent device scanning and profiling allow IT security teams to have visibility of their networked IoT devices, their risk profiles, and their network behavior when interacting with other devices on the network. Today’s most advanced IoT security solutions use machine learning to identify IoT devices that have never been seen before and to recognize malicious network communication patterns before they cause damage.
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

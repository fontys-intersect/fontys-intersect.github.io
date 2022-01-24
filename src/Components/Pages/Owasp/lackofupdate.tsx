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

export const Update = () => (
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
      <Text fontSize="3xl"> Lack of Secure Update Mechanism </Text>
      <Text fontSize={"l"}>
        Lack of ability to securely update the device. This includes lack of firmware validation on device, lack of secure delivery (un-encrypted in transit), lack of anti-rollback mechanisms, and lack of notifications of security changes due to updates.
        It is necessary to consider how these updates will take place and how to make them more secure. For example, when designing a device like a smartwatch or a sensor, you’ll need to consider building in an update mechanism for timely updates.<br />As attacks get more advanced, the need for secure update mechanisms
        becomes more important. The lack of firmware validation, secure
        delivery, anti-rollback mechanisms and notifications of security changes
        can cause issues within these devices.
      </Text>
      <br />
      <Text fontSize={"xl"}>
        Regular updates minimize the number of attack vectors in operating systems, firmware, and applications.
      </Text>
      <Text fontSize={"l"}>
        If updates are available, some devices may not notify the user that an update is available. Conversely, while other devices might install updates automatically, it may require a hardware reboot before the update takes effect. This reboot leaves systems vulnerable and unavailable while applying the update.
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
        <UnorderedList>
          <ListItem>
            <Link href="#/case/wled" textColor={"blue"}>
              WLED
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#/case/airquality" textColor={"blue"}>
              Airquality
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#/case/smartscreen" textColor={"blue"}>
              Smartscreen
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

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

export const Outdated = () => (
  <Box w={"100%"} h={"100vh"} alignItems="center">
    <Image
      src={"/fontys-intersect-2021/assets/images/owasp-logo.png"}
      alt="test"
      h={"15%"}
      w={"15%"}
      marginLeft={"10%"}
      marginTop={"1%"}
    />
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Use of Insecure or Outdated Components</Text>
      <Text fontSize={"l"}>
        The usage of third-party hardware or software can bring risks and
        threats to the security of the entire system. Whenever vulnerabilities
        are found within these third-party components, attacks can be launched
        and possibly disrupt the functioning of the device. This can be
        prevented by monitoring these components, this way the team will be able
        to quickly identify the issue and prevent big attacks coming from these
        components{" "}
      </Text>
      <br />
      <Text fontSize={"l"}>
        A significant vulnerability that affects millions of IoT smart devices is the use of outdated or unsecured software, including third-party components, libraries, and frameworks used by manufacturers to build IoT devices. This software is difficult to track and is vulnerable to cyber-attacks if it is not correctly known or managed
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"}>
        This vulnerability has been found in the following cases:
        <UnorderedList>
          <ListItem>
            <Link href="#/case/airquality" textColor={"blue"}>
              Airquality
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#/case/wled" textColor={"blue"}>
              WLED
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

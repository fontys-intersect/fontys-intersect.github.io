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

export const Physical = () => (
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
      <Text fontSize="3xl">Lack of Physical Hardening</Text>
      <Text fontSize={"l"}>
        {" "}
        Lack of physical hardening can assist users with malicious intentions to
        get remote control over the system. Ports that were left exposed after
        debugging, or removal of memory cards can expose the system to attacks
        due to lack of physical hardening. One more example that can be added
        here is the case of smart locks. Often these fancy smart locks with
        fingerprint and mobile app-control lack a simple thing. Yes, you guessed
        it right, it lacks physical hardening. In some cases IoT devices can
        contain USB ports, which can be used to perform an attack on the device
        with the use of infected USB drives.
        <br />
        In particular, IoT devices are vulnerable because they lack the necessary built-in security to counter threats. Unlike our phones, laptops, and personal computers, many IoT devices operate unattended, making it easier for criminals to tamper with the devices and go undetected.
        <br />
        Security protocols protect data while transmitted across networks but do not protect data while stored on the device. Massive data breaches resulted from data recovered from stolen or discarded equipment.
        <br />
        <br />
        A significant hardware vulnerability exists in both consumer and industrial control systems with unrestricted access to the universal asynchronous receiver transmitter (UART), allowing them to change the device boot sequences. By modifying the boot sequences, hackers can gain low-level access to the device and extract log-in information.
        <br /> <br />
        One way to achieve strong IoT hardware security is to store keys in Trusted Platform Modules (TPMs) and Trusted Execution Environments (TEE). TPM is essentially a chip installed on an IoT device near the CPU. It’s mainly used for cryptographic operations that create a security key, save it, store data, and other related operations. They can ensure the integrity of the disk encryption and password protection platform.
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"}>
        This vulnerability has been found in the following cases:
        <UnorderedList>
          <ListItem>
            <Link href="#/case/smartlock" textColor={"blue"}>
              Smart Biometric Lock
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
      <br />
      <Divider />
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

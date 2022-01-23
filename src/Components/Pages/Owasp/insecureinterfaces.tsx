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
      </Text>
      <UnorderedList>
        <ListItem>
          <Link href="#/case/smartwatch" textColor={"blue"}>
            Smartwatch
          </Link>
        </ListItem>
      </UnorderedList>
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

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
      src={"/fontys-intersect-2021/assets/images/owasp-logo.png"}
      alt="test"
      h={"15%"}
      w={"15%"}
      marginLeft={"10%"}
      marginTop={"1%"}
    />
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Lack of Secure Update Mechanism </Text>
      <Text fontSize={"l"}>
        As attacks get more advanced, the need for secure update mechanisms
        becomes more important. The lack of firmware validation, secure
        delivery, anti-rollback mechanisms and notifications of security changes
        can cause issues within these devices.
      </Text>
      <UnorderedList>
        <ListItem>
          <Link href="#/case/wled" textColor={"blue"}>
            WLED
          </Link>
          <Link href="#/case/airquality" textColor={"blue"}>
            Airquality
          </Link>
          <Link href="#/case/smartscreen" textColor={"blue"}>
            Smartscreen
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

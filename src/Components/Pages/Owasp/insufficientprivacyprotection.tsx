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

export const Privacy = () => (
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
      <Text fontSize="3xl"> Insufficient Privacy Protection</Text>
      <Text fontSize={"l"}>
        {" "}
        Personal user information stored on devices or within ecosystems being
        used insecurely, improperly or without the user’s permission is a major
        security risk. The privacy of users is often disregarded despite the
        recent rise of attention in the news. Secondly, the impact of ignoring
        privacy rights and regulations is underestimated by companies. However,
        having the proper safety measures in place is a must. Otherwise, hackers
        might be able to get access to critical data. On top of that, not only
        is the information of users at risk, but also the databases of the
        manufacturers could be prone for an attack. There have been several
        instances where information was extracted. To tackle this problem the
        following is advised: limited personal data storage on devices, a solid
        data protection policy and good preparation in the event of a potential
        breach of security in the future, for example an incident response plan.
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

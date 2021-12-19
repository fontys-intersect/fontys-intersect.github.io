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
            <Text fontSize="3xl">Lack of Physical Hardening</Text>
            <Text fontSize={"l"}> Lack of physical hardening can assist users with malicious intentions to get remote control over the system. Ports that were left exposed after debugging, or removal of memory cards can expose the system to attacks due to lack of physical hardening.
                One more example that can be added here is the case of smart locks. Often these fancy smart locks with fingerprint and mobile app-control lack a simple thing. Yes, you guessed it right, it lacks physical hardening. In some cases IoT devices can contain USB ports, which can be used to perform an attack on the device with the use of infected USB drives.
            </Text>
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
                        About. (z.d.). NWO. Geraadpleegd op 10 december 2020, van&nbsp;
                        <Link href="https://www.nwo.nl/en/about-nwo">
                            About nwo <ExternalLinkIcon     mx="2px" />
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Text>
        </Container>
    </Box>
);

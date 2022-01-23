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

export const Storage = () => (
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
            <Text fontSize="3xl">Insecure Data Transfer and Storage</Text>
            <Text fontSize={"l"}> While dealing with sensitive data anywhere in the ecosystem, proper encryption and access control is a necessity. Even when the data is at rest, in transit, or during processing. Lack of encryption is an open invitation for hackers to expose and capture data. To make sure the data is protected at its fullest, manufacturers of IoT devices need to take the following actions into account to get complete security: establish encryption at all available levels, only use secure channels like SSH, sFTP and HTTPS, and consider the use one-time-use keys that are stored remotely.
            </Text>
            <br />
            <Text fontSize={"l"}>
                This vulnerability has been found within the following cases:
                <UnorderedList>
                    <ListItem><Link href="#/case/wled" textColor={"blue"}>WLED</Link></ListItem>
                    <ListItem><Link href="#/case/printer" textColor={"blue"}>HP Laserjet</Link></ListItem>
                </UnorderedList>
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
                        Govindraj Basatwar - Global Business Head. (2021, September 17). Guide to OWASP IoT Top 10 for proactive security. NWO. Retrieved November 11, 2021, from&nbsp;
                        <Link href="https://www.appsealing.com/owasp-iot-top-10/">
                            Appsealing <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Text>
        </Container>
    </Box>
);

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

export const Network = () => (
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
            <Text fontSize="3xl"> Insecure Network Services </Text>
            <Text fontSize={"l"}>
                Insecure network services appropriate to vulnerabilities in a network service can be used to access IoT devices. These open up a door for attackers to gain access to the devices and their data. These can also be exploited to gain unauthorised remote control of a device.
                As IoT devices are getting integrated into the network infrastructure, the risk of having a faulty device will become bigger and bigger, as IoT devices are used to transmit, retrieve and interpret data from other linked devices. The communication techniques/mechanisms can vary but can include protocols ranging from BLE and ZigBee to WiFi, cellular data and ethernet.
                To function correctly, the services require opening specific ports to communicate with both the internal network and the internet. However, leaving ports and services that provide access to devices or machines is a typical security issue.
                By closing the vulnerable ports, this security issue is prevented. However monitoring and managing ports can be time-consuming on larger networks with a constant adding of new devices.

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
                            About nwo <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Text>
        </Container>
    </Box>
);

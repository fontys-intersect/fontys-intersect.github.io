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
            <Text fontSize="3xl"> Use of Insecure or Outdated Components</Text>
            <Text fontSize={"l"}>
                The usage of third-party hardware or software can bring risks and threats to the security of the entire system. Whenever vulnerabilities are found within these third-party components, attacks can be launched and possibly disrupt the functioning of the device. This can be prevented by monitoring these components, this way the team will be able to quickly identify the issue and prevent big attacks coming from these components </Text>
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

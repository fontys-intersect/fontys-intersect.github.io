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

export const ToolingOverview = () => (
    <Box w={"100%"} alignItems="center">
        <Container maxW={["100%", "80%"]} h={"100vh"} p={4}>
            <Text fontSize={"3xl"} >
                Testing and Tooling 2021-2022
            </Text>
            <Text fontSize={"l"}>
                The main research of the project is based on pentests that have been
                performed on IoT devices. Things related to tooling used during the project can be found here.
            </Text>
            <br/>
            <Text fontSize="3xl">Tooling</Text>
            <Text fontSize={"l"}>
                this is a list of the tooling used to get results in our research:
            </Text>
            <UnorderedList>
                <Link color ={"blue"} href="/fontys-intersect-2021/#/tooling/burpsuite"><ListItem>Burpsuite</ListItem></Link>
                <Link color ={"blue"} href="/fontys-intersect-2021/#/tooling/hci"><ListItem>HCI tooling</ListItem></Link>
                <Link color ={"blue"} href="/fontys-intersect-2021/#/tooling/pret"><ListItem>Printer Exploit Tooling
                    (PRET)</ListItem></Link>
                <Link color ={"blue"} href="/fontys-intersect-2021/#/tooling/wireshark"><ListItem>Wireshark</ListItem></Link>
                <Link color ={"blue"} href="/fontys-intersect-2021/#/tooling/zeek"><ListItem>Zeek</ListItem></Link>
            </UnorderedList>
            <br/>
            <Text fontSize="3xl">Testing Setup</Text>
            <Text fontSize={"l"}>
                 The main testing setup that was used during pentests that have been
                    performed on IoT devices can be found here. Due to the publication date of this website, only the
                    results from the most recent 2021-2022 project have been showcased here.

            </Text>
            <br/>
        </Container>
    </Box>

)
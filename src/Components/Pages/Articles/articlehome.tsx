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

export const Article = () => (
    <Box w={"100%"} alignItems="center">
        <Image
            src={"/assets/images/owasp-logo.png"}
            alt="test"
            h={"15%"}
            w={"15%"}
            marginLeft={"10%"}
            marginTop={"1%"}
        />
        <Container maxW={["100%", "80%"]} h={"100vh"} p={4}>
            <Text fontSize="3xl"> Articles </Text>
            <Text fontSize={"l"}>
                Additional Articles related to the research done in the Intersct project can be found here.
                <Text fontSize="l">
                    The Articles are related to research done in the Intersct project
                    , each article will get its own
                    designated page with the found results. The related cases, will be mentioned on the page if the best
                    practice is being
                    applied or is missing.
                </Text>
                <br/>
            </Text>
            <Text fontSize={"l"}>Sept 2021 - Jan 2022</Text>
            <Divider/>

            <UnorderedList>
                <ListItem>

                    <Link href="/#/article/wled" textColor={"blue"}>
                        WLED&nbsp;
                    </Link>
                    (Smart Home)
                </ListItem>
                <ListItem>
                    <Link href="/#/article/network" textColor={"blue"}>
                        Home Network&nbsp;
                    </Link>
                    (Smart Home)
                </ListItem>
        
            </UnorderedList>

            <br/>
            <Text fontSize={"xl"} fontWeight={"bold"}>
                ICT In Practice
            </Text>
            <Text fontSize={"l"}>
                The Articles are related to the Fontys ICT in Practice event.
                The innovations that shape tomorrow are created right now in the Fontys ICT InnovationLab. And during
                ICT In Practice, they are on display! Students, researchers and businesses will present their
                latest projects, innovations and insights during this digital event.
            </Text>
            <br/>
            <UnorderedList>
                <ListItem>
                    WLED - WLED is an open source application created to control addressable LEDs (WS2811,
                    WS2812b, WS2813, etc) from your iOS or Android smartphone, or literally any device which can send a
                    command via http/https over a network! It runs on the ESP32 platform of microcontrollers, which
                    although similar to the Arduino is different but mostly compatible if you understand those
                    differences.
                </ListItem>
                <br/>
                <ListItem>
                    Home Network -This article is about IoT network devices and their security and why you should consider the
                    possibilities of attackers when you add IoT network devices to your own personal network.
                </ListItem>

            </UnorderedList>
        </Container>
        <Container h={"120px"}></Container>
    </Box>
);

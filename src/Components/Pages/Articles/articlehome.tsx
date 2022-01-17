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
    OrderedList,
} from "@chakra-ui/react";

export const Article = () => (
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
            <Text fontSize="3xl"> Articles </Text>
            <Text fontSize={"l"}>
                Additional Articles related to the research done in the Intersct project can be found here.
            </Text>
            <Divider m={2} />
            <Text fontSize="3xl"> Articles</Text>
            <Text fontSize={"l"}>
                <OrderedList>
                    <ListItem>
                        <Link href="/fontys-intersect-2021/#/article/wled">
                            WLED
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/fontys-intersect-2021/#/article/network">Home Network</Link>
                    </ListItem>
                </OrderedList>
            </Text>

        </Container>
    </Box>
);

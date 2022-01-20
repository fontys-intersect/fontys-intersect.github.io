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
      <Text fontSize="3xl">Tooling</Text>
      <Text fontSize={"l"}>
        this is a list of the tooling used to get results in our research:
      </Text>
      <UnorderedList>
        <Link href="/fontys-intersect-2021/#/tooling/burpsuite"><ListItem>Burpsuite</ListItem></Link>
        <Link href="/fontys-intersect-2021/#/tooling/hci"><ListItem>HCI tooling</ListItem></Link>
        <Link href="/fontys-intersect-2021/#/tooling/pret"><ListItem>Printer Exploit Tooling (PRET)</ListItem></Link>
        <Link href="/fontys-intersect-2021/#/tooling/wireshark"><ListItem>Wireshark</ListItem></Link>
        <Link href="/fontys-intersect-2021/#/tooling/zeek"><ListItem>Zeek</ListItem></Link>
      </UnorderedList>
      <br />
    </Container>
  </Box>

  )
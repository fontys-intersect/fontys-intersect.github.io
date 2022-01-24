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

export const BestPractices = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} h={"100vh"} p={4}>
      <Text fontSize="3xl"> Best practices </Text>
      <Text fontSize={"l"}>
        A best practice is a method or technique that has been generally
        accepted as superior to any alternatives because it produces results
        that are better than those achieved by other means or because it has
        become a standard way of doing things, e.g. a standard way of complying
        with legal or ethical requirements. All the best practices are listed
        below:
      </Text>
      <br />
      <UnorderedList>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/authentication"><ListItem>Authentication</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/authorization"><ListItem>Authorization</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/securedata"><ListItem>Secure data transfer</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/certificates"><ListItem>Certificates</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/errorhandling"><ListItem>Error handling</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/inputvalidation"><ListItem>Input validation</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/splitdev"><ListItem>Split development and production environments</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/monitoring"><ListItem>Monitoring and Logging</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/versionupdate"><ListItem>Version update</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/secretmanagement"><ListItem>Secret Management</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/privacy"><ListItem>Privacy by default</ListItem></Link>
        <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/datahandling"><ListItem>Data handling and transparency</ListItem></Link>
      </UnorderedList>
      <br />
    </Container>
  </Box>
);

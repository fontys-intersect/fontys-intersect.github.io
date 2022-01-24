import {
  Box,
  Container,
  Text,
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
        <Link textColor={"blue"} href="/#/bestpractices/authentication"><ListItem>Authentication</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/authorization"><ListItem>Authorization</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/securedata"><ListItem>Secure data transfer</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/certificates"><ListItem>Certificates</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/errorhandling"><ListItem>Error handling</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/inputvalidation"><ListItem>Input validation</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/splitdev"><ListItem>Split development and production environments</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/monitoring"><ListItem>Monitoring and Logging</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/versionupdate"><ListItem>Version update</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/secretmanagement"><ListItem>Secret Management</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/privacy"><ListItem>Privacy by default</ListItem></Link>
        <Link textColor={"blue"} href="/#/bestpractices/datahandling"><ListItem>Data handling and transparency</ListItem></Link>
      </UnorderedList>
      <br />
    </Container>
  </Box>
);

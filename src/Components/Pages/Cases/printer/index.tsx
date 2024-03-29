import {
  Box,
  Container,
  Image,
  Text,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

export const Printer = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> HP Laserjet</Text>
      <br />
      <Text fontSize="xl" fontWeight={"bold"}> Introduction </Text>
      <Text fontSize={"l"}>
        The HP Laserjet 2600 printer is a professional, wide-format business
        Inkjet printer designed for workgroups. For the pentest, a test network
        was created. The pentesters had full network access and control.
        Physical access to the printer was also granted to the pentesters.
        <Image
          src={"/assets/images/HpArchitecture.png"}
          alt="test"
          h={"50%"}
          w={"50%"}
        />
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Strengths</ListItem>
        <ListItem>Vulnerabilities</ListItem>
        <ListItem>Best Practices</ListItem>
        <ListItem>Conclusion</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={"xl"} fontWeight={"Bold"}>Strengths</Text>
      <Text fontSize={"l"}>
        During our research we weren't able to find many useful packets
        regarding the communication from the user's device to the printer. As
        most of the sent packages were keep-alive or encrypted packages, this
        ensured the transfer of data was mostly secure.
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>Vulnerabilities</Text>
      <Text fontSize="l" fontWeight="bold">
        Insecure Communication
      </Text>
      <Text fontSize={"l"}>
        One of the vulnerabilities that we found is that plaintext ASCII codes
        containing document data were being transmitted. When attempting to
        flood the device with large documents, we found plain-text document
        data, containing characters that were in the large document. Within this
        screenshot we can see the communication is performed over HTTP, this is
        the result of analyzing the network packages that were analyzed by a
        zeek instance. Within the second screenshot we can see the device that
        sent the package and some more information regarding the packages.
      </Text>
      <Image
        src={"/assets/images/printer_message_one.png"}
        alt="test"
        h={"150%"}
        w={"150%"}
      />
      <br />
      <Image
        src={"/assets/images/printer_message_two.png"}
        alt="test"
        h={"150%"}
        w={"150%"}
      />
      <br />
      <Text fontSize="l" fontWeight="bold">
        Fix:
      </Text>
      <Text fontSize="l">Use a form of encryption.</Text>
      <br />
      <Text fontSize="l" fontWeight={"Bold"}>
        Insecure Default Settings
      </Text>
      <Text fontSize="l">
        The printer also has poor default settings on "the portal", not making
        use of proper authentication methodologies. (No login screen or anything
        like that)
      </Text>
      <Text fontSize="l" fontWeight="bold">
        Fix:
      </Text>
      <Text fontSize="l">
        Force the user to authenticate properly to ensure the user will not be
        able to change settings without proper authentication.
      </Text>
      <br />
      <Text fontSize="xl" fontWeight={"Bold"}>Best practices</Text>
      <Text fontSize="l">
        For the printer we found that the communication between the printer and
        the user device should be <Link color={"blue"} href={"/#/bestpractices/securedata"}>encrypted</Link>. This will prevent plain text
        transmissions, hereby making the “man in the middle” attack obsolete.
        The printer sends packages containing plain text information about the
        sender, this can be prevented with the usage of{" "}
        <Link
          textColor={"blue"}
          href="/#/bestpractices/securedata"
        >
          secure data transfer and storage
        </Link>
        , as these packages can be caught with the use of MitM attacks.
        Encrypting packages like this will ensure the user's information will
        not be compromised during the call. Beside the lack of secure data
        transfer, the system does not require any{" "}
        <Link
          href="/#/bestpractices/authentication"
          textColor={"blue"}
        >
          authentication
        </Link>{" "}
        to allow the user access to the configuration of the printer itself.
      </Text>
      <br />
      <Text fontSize="xl" fontWeight={"Bold"}>Conclusion</Text>
      <Text fontSize="l">
        During the Printer research assignment signs of <Link  color={"blue"} href={"/#/bestpractices/securedata"}>insecure transmissions</Link> were found. <Link  color={"blue"} href={"/#/bestpractices/authentication"}>Authentication </Link> was also not properly done.
        The printer is therefore quite insecure. By applying concepts of the best practices mentioned. The overall security can be improved.
      </Text>
      <br />
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

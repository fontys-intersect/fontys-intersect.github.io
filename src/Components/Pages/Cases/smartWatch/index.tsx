import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const SmartWatch = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Smartwatch</Text>
      <br />
      <Text fontSize="xl"> Introduction </Text>
      <Text fontSize={'l'}>
          Smartwatches are a common item in the average catalogue of items a person carries around these days. It has your contact information, can make calls to your friends and even keep track of your steps. But these watches are not just like any ordinary watch, they can be hacked and used to spy on people. </Text>
      <br />
      <Text fontSize={'xl'}>Table of Contents</Text>
      <UnorderedList>
          <ListItem>Case Explanation</ListItem>
        <ListItem>Strengths</ListItem>
        <ListItem >Vulnerabilities</ListItem>
        <ListItem>Best Practices</ListItem>
        <ListItem>Conclusion</ListItem>
      </UnorderedList>
        <br/>
        <Text id={"CaseExplanation"} fontSize={'xl'}>Case Explanation</Text>
        <Text fontSize="l" >
            The smartwatch that was tested appeared to be running an outdated version of its firmware, allowing the testers to exploit known vulnerabilities

            The attack we tried was done by first scanning all the available methods we can call without authorization of every interface from the watch. The program used here would call every method with random parameters and log the response get. If the response was “InvalidArgs” instead of “AccesDenied”, that meant we could abuse the interface with the out of date OS version.

            Then the attacker could write malware that would abuse the open methods from those interfaces to hijack Wifi/Bluetooth/Contact info etc.. (depending on the interface)</Text>

      <br/>
      <Text id={"Strengths"} fontSize={'xl'}>Strengths</Text>
        <br/>
        <Text fontSize={'l'}>The SmartWatch was strong in its base security, meaning that the implementation the manufacturer implemented were working correctly. We were unable to decipher the traffic from/to the watch and were not able to directly interact with the base functionalities like Wifi / Bluetooth.

            there were no other open attack vectors for us to exploits except the outdated OS it was running.</Text>
        <br/>
        <Text id={"Vulnerabilities"} fontSize={'xl'}>Vulnerabilities</Text>
        <Text fontSize="l" >
            The vulnerabilities, in this case, are as followed:
        </Text>
        <Text fontSize="l"><UnorderedList>
            <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Outdated OS </Text> The OS was o utdated, this allowed unauthorized access to methods from some interfaces on the watch because of a lack of security implementations regarding the D-Bus structure of the watch.</ListItem>
            <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Unauthorized Access to Interfaces  </Text> Some interfaces on the watch did not need authorized access to be able to call their methods, therefore the attack could write malware that calls these methods to receive and change information like: contact info, screenshots of the current screen, change the Bluetooth of wifi connection and more, depending on the interface..</ListItem>
        </UnorderedList></Text>
        <br/>
        <Text id={"PossibleFixes"} fontSize={'xl'}>Possible Fixes</Text>
        <Text fontSize="l" >
            To prevent outdated software from being used, the user needs to update their smartwatch application on their phone, and update their smartwatch whenever possible.

            This is relatively easy to implement, by simply checking the “automatic update” feature in the smartwatch application and phone settings.</Text>
        <br/>
        <Text id={"Bestpractices"} fontSize={'xl'}>Best practices</Text>
        <Text fontSize="l" >
            The Smartwatch should be updated when given the chance to as referred to in the version update best practice.

            Always set the automatic update option on the phone smartwatch app to “ON”, making sure the user does not have to think about whether he has to update his watch or not. And if the user has one, link the account to the smartwatch app on the phone. This way the user can erase their data, or transfer their data to a new watch safely. </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

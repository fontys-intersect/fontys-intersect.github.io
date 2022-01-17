import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const GooveySmartTemp = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl">Govee h505 thermostat.</Text>
      <br />
      <Text fontSize="xl"> Introduction </Text>
      <Text fontSize={'l'}>
      The Govee h505 thermostat is a small IoT device that can read the room temperature and the humidity that's currently present in the room. The thermostat then communicates with a phone application that receives this data. This data is either sent through bluetooth or through a wifi connection. If the phone is connected through bluetooth then the data will be updated continuously, if the connection goes through wifi then the data is sent every 10 minutes.
      </Text>
      <br />
      <Text fontSize={'xl'}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Strenghts</ListItem>
        <ListItem>Vulnerabilities</ListItem>
        <ListItem>Best practices</ListItem>
        <ListItem>Conclusion</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={'xl'}>Strenghts</Text>
      <Text fontSize={'l'}>
      During our research we weren't able to read any of the data communications from the device to the mobile application, not through bluetooth or wifi. To do this we used a separate network with wireshark listening on this network. For the bluetooth communication we used bluetooth scanning on a kali linux machine. Both of these methods returned no usable results. If this is done on purpose then this would be one of the strengths of the device security.
      </Text>
      <br />
      <Text fontSize={'xl'}>Vulnerabilities</Text>
      <Text fontSize="l">
      One of the possible vulnerabilities is that the device uses low power bluetooth. This means that the device has a bigger bluetooth range. Normally the range of bluetooth devices is very limited and a possible attacker would need to be very close to the device to pick up any bluetooth communication. with low power bluetooth this range increases significantly. This means that a possible attacker can read the bluetooth traffic from a larger range and attack without being suspicious.
      </Text>
      <br />
      <Text fontSize="xl">
      Best practises
      </Text>
      <Text fontSize="l">
      
      </Text>
      <Text fontSize="xl">
      conclusion
      </Text>
      <Text fontSize="l">
      because this research is still ongoing it is not possible to make a conclusion now.
      </Text>
    </Container>
  </Box>
);

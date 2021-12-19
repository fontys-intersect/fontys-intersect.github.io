import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const Printer = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Smart Lock Bluetooth case</Text>
      <br />
      <Text fontSize="xl"> Introduction </Text>
      <Text fontSize={'l'}>
        The HP Laserjet 2600 printer is a professional, wide-format business Inkjet printer designed for workgroups.
      </Text>
      <br />
      <Text fontSize={'xl'}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Strengths</ListItem>
        <ListItem>Vulnerabilities</ListItem>
        <ListItem>Best Practises</ListItem>
        <ListItem>Conclusion</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={'xl'}>Strengths</Text>
      <Text fontSize={'ll'}>
        During our research we weren't able to many  of the data communications from the device to the
        printer.
      </Text>
      <br />
      <Text fontSize={'xl'}>Vulnerabilities</Text>
      <Text fontSize={'l'}>
        One of the possible vulnerabilities is that the device uses low power bluetooth. This means that the device has
        a bigger bluetooth range. Normally the range of bluetooth devices is very limited and a possible attacker would
        need to be very close to the device to pick up any bluetooth communication. with low power bluetooth this range
        increases significantly. This means that a possible attacker can read the bluetooth traffic from a larger range
        and attack without being suspicious.
      </Text>
      <Text fontSize="l" fontWeight="bold">
        Insecure Default Settings
      </Text>
      <Text fontSize="l">
        The Lock also has a standard password that is not required to be changed and limited requirements to the
        strength of this password. Meaning that if this standard password is known by attackers, they can access the
        lock easily.
      </Text>
      <Text fontSize="l" fontWeight="bold">
        Fix:
      </Text>
      <Text fontSize="l">
        force the user to create a password at device setup, set clear and secure password requirements. Including but
        not limited to the following At least 8 combinations with a possibility of more inputs like a number sequence.
      </Text>
      <Text fontSize="l" fontWeight="bold">
        Insecure Communication
      </Text>
      <Text fontSize="l">
        Research from a third party resulted in 75% of the low energy bluetooth devices being vulnerable in the way that
        they send their user credentials in plain text instead of using a form of encryption.
      </Text>
      <br />
      <Image
        src={'/fontys-intersect-2021/assets/images/BTLockCommunication.png'}
        alt="test"
        h={'30%'}
        w={'30%'}
      />
      <Text fontSize="l">Figure 1. Master Lock components and their communication (CS Kent)</Text>
      <Text fontSize="l" fontWeight="bold">
        Fix:
      </Text>
      <Text fontSize="l">Use a form of encryption.</Text>
      <br />
      <Text fontSize="xl">
        Best practices
      </Text>
      <Text fontSize="l">
        For bluetooth padlocks we found that the communication between the padlock and the application on the phone
        should be encrypted. This will prevent plain text transmissions which will contain user credentials, hereby
        making the “man in the middle” attack obsolete.
      </Text>
      <br />
      <Text fontSize="xl">
          conclusion
      </Text>
      <Text fontSize="l">
        
      </Text>
    </Container>
  </Box>
);

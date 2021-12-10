import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const VersionUpdate = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Version update</Text>
      <Text fontSize={'l'}>
        Systems are updated regularly, but these updates can pose a security risk if not done properly.
      </Text>
      <br />
      <Text fontSize={'xl'}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Intro</ListItem>
        <ListItem>Explanation</ListItem>
        <ListItem>Usage</ListItem>
        <ListItem>Vulnerability</ListItem>
        <ListItem>Bibliography</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={'xl'}>Explanation</Text>
      <Text>
        IoT devices also need software updates, whenever a vulnerability gets discovered it should be able to remediate
        it. These patches are done via updates, meaning the devices should be connected to the network, and will
        occasionally “call home”.
      </Text>
      <br />
      <Text fontSize={'xl'}>Usage</Text>
      <Text fontSize={'l'}>
        Once in a while an IoT device should “Call Home” where it will check for new firmware, whenever there is a new
        version available it should use it to update its firmware. This should be done secure, by also checking the
        update for its hash making it harder for malicious patches to succeed.
      </Text>
      <br />
      <Text fontSize={'xl'}>Vulnerabilities</Text>
      <Text fontSize={'l'}>
        If an IoT device is not able to update its firmware it will not be able to resolve future discovered
        vulnerabilities. Making the use of the devices potentially dangerous. Updating the firmware can also go wrong,
        malicious patches can be distributed in order to make backdoors. So even if the device is supported for updates
        it must be implemented correctly. Checking the validation of the patch is very important.
      </Text>
      <br />
      <Text fontSize={'xl'}>Cases</Text>
      <Text fontSize={'l'}>
        
      </Text>
      <br />
      <Divider m={2} />
      <Text fontSize="3xl"> Bibliography </Text>
      <Text fontSize={'xl'}>
        The bibliography according to this page is <br />
        <UnorderedList>
          {/* <ListItem>
            INTERSECT. (z.d.). dcypher. Geraadpleegd op 10 december 2020, van
            https://www.dcypher.nl/en/intersect
          </ListItem> */}
          <ListItem>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
  </Box>
);

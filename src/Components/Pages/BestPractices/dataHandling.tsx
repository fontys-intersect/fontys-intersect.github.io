import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const DataHandling = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Data Handling and Transparency </Text>
      <Text fontSize={'l'}>
        Some of the smart devices within the IoT sections handle and send data towards the server, mostly users have no
        insight of the data that’s being transmitted and handled. Every user that bought and set the device up needs to
        be able to see what data is being handled to allow the user to have the insight either within a dashboard or a
        separate page. The dashboard can contain data that is gathered by the device, such as the generated power for
        solar panels or the activity that is being measured within a smart office appliance of smart devices.
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
        Nowadays there are lots of smart and IoT devices that can be remotely accessed by its users. To get the data to
        be visible in the apps the device needs to communicate with a home server that is usually owned by the company
        that made the device. It's often not clear exactly what data is being sent.the data is also processed through
        algorithms. These algorithms are usually private and not visible by the users so the users have no idea what
        happens to their data and where it ends up. These algorithms can also be prone to failure for example your smart
        home hub recognizing someone speaking on the TV as a proper command.
      </Text>
      <br />
      <Text fontSize={'xl'}>Usage</Text>
      <Text fontSize={'l'}>
        To remedy this problem companies should start showing the data they collect for example through an easily
        accessible dashboard. This way users know exactly what data is being collected and how it's used. Users should
        also be made aware how the data is used in the algorithms to gain insight in how these devices operate and use
        the users data.
      </Text>
      <br />
      <Text fontSize={'xl'}>Vulnerabilities</Text>
      <Text fontSize={'l'}>
        The algorithms the IoT devices use can be prone to errors or false inputs. They sometimes confuse for example
        people speaking on the TV as a proper voice command. This can lead to unwanted results and inconvenience to the
        user
      </Text>
      <br />
      <Text fontSize={'xl'}>Cases</Text>
      <Text fontSize={'l'} fontWeight={'bold'}>
        solarEdge solar panels case
      </Text>
      <Text fontSize={'l'}>
        during the research we found out that the data that's being collected by the solar panels is presented in a
        clear manner using a dashboard. This is a good example of data transparency.
      </Text>
      <br />
      <Text fontSize={'l'} fontWeight={'bold'}>
        Goovey thermostat case
      </Text>
      <Text fontSize={'l'}>
        during this research we also found out that the data being sent is presented on a dashboard that can be viewed
        through a phone app made by the company.
      </Text>
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
            Lundbæk, L. (2021, 6 oktober). Why IoT should become the “internet of transparency”. IoT Agenda.
            Geraadpleegd op 3 december 2021, van &nbsp;
            <Link href="https://internetofthingsagenda.techtarget.com/post/Why-IoT-should-become-the-internet-of-transparency">
            internetofthingsagenda
            <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

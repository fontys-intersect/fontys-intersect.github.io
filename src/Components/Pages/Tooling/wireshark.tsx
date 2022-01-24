import {
    Box,
    Container,
    Text,
    ListItem,
    UnorderedList,
    Link,
  } from "@chakra-ui/react";
  
  export const Wireshark = () => (
    <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} h={"100vh"} p={4}>
    <Text fontSize="3xl"> Wireshark </Text>
      <Text fontSize="2xl"> What is Wireshark? </Text>
      <Text fontSize={'l'}>
      Wireshark is a tool that allows you to capture network traffic on a network interface on your pc. <br />
      When you have captured this traffic you can read it out and look what kind of traffic these interfaces receive.
      </Text>
      <br />
      <Text fontSize="2xl"> What can Wireshark do? </Text>
      <Text fontSize={'l'}>
      With wireshark you can capture network traffic on a device selected by the user. <br />
      The captured network traffic can then be sorted, filtered and looked through in detail. <br />
      With this captured network traffic users can debug and analyze network traffic between devices.
      </Text>
      <br />
      <Text fontSize="2xl"> Links: </Text>
      <UnorderedList>
        <ListItem>
          <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="https://www.wireshark.org/#download">
            Download page
          </Link>
        </ListItem>
        <ListItem>
          <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="https://www.wireshark.org/docs/">
          Documentation
          </Link>
        </ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={'2xl'}>Cases where Wireshark was used:</Text>
      <UnorderedList>
          <ListItem>
            <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="#/case/printer">
              HP laserjet printer
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="#/case/wled">
              WLED
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="#/case/boschsiemens">
              Bosch Siemens
            </Link>
          </ListItem>
        </UnorderedList>
    </Container>
  </Box>
    
  )
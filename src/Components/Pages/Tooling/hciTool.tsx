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
  
  export const HciTool = () => (
    <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} h={"100vh"} p={4}>
    <Text fontSize="3xl"> Hcitool </Text>
      <Text fontSize="2xl"> What is hcitool? </Text>
      <Text fontSize={'l'}>
      Hcitool is a linux command line tool that allows the user to configure bluetooth connections <br/>
      and send special bluetooth commands to bluetooth devices and it allows the user to also <br/>
       find useful information about surrounding bluetooth devices.
      </Text>
      <br />
      <Text fontSize="2xl"> What can hcitool do? </Text>
      <Text fontSize={'l'}>
      Hcitool has multiple usages but we used it mainly to discover specific bluetooth devices in <br/>
      the area and their corresponding bluetooth MAC address.
      </Text>
      <br />
      <Text fontSize="2xl"> Links: </Text>
      <UnorderedList>
        <ListItem>
          <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="https://linux.die.net/man/1/hcitool">
            Documentation/man page
          </Link>
        </ListItem>
        <ListItem>
          <Text fontSize={'l'} fontWeight={'bold'}>
            Install
          </Text>
          <Text fontSize={'l'}>
            you can install hcitool through the package manager on your linux distro.
          </Text>
        </ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={'2xl'}>Cases where hcitool was used:</Text>
      <UnorderedList>
          <ListItem>
            <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="#/case/gooveysmarttemp">
            Govee H505 Thermostat
            </Link>
          </ListItem>
        </UnorderedList>
    </Container>
  </Box>
  )
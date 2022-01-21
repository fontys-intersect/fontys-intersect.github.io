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
  
  export const ZeekTooling = () => (
    <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
    <Text fontSize="3xl"> Zeek </Text>
      <Text fontSize="2xl"> What is Zeek? </Text>
      <Text fontSize={'l'}>
      Zeek is a network traffic analyzer that can import captured network traffic and make clear representations of the captured network traffic. 
      </Text>
      <br />
      <Text fontSize="2xl"> What can Zeek do? </Text>
      <Text fontSize={'l'}>
      Zeek can analyze network traffic and make clear interpretations of that network traffic. <br />
      It can for example show how many packets are http requests or responses and from which countries they come from.
      </Text>
      <br />
      <Text fontSize="2xl"> Links: </Text>
      <UnorderedList>
        <ListItem>
          <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="https://zeek.org/get-zeek/">
            Download
          </Link>
        </ListItem>
        <ListItem>
          <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="https://docs.zeek.org/en/master/index.html">
          Documentation
          </Link>
        </ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={'2xl'}>Cases where Zeek whas used:</Text>
      <UnorderedList>
          <ListItem>
            <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="#/case/printer">
              HP laserjet printer
            </Link>
          </ListItem>
        </UnorderedList>
    </Container>
  </Box>
    
  )
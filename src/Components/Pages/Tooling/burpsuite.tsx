import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const Burpsuite = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} h={"100vh"} p={4}>
      <Text fontSize="3xl"> Burp Suite </Text>
      <Text fontSize="2xl"> What is Burp Suite? </Text>
      <Text fontSize={'l'}>
        Burp Suite is a proxy that allows security testers to capture and modify their http(s) traffic and test the security of their web pages. <br />
        Burp Suite is a commercial tool with multiple editions available.
      </Text>
      <br />
      <Text fontSize="2xl"> What can Burp Suite do? </Text>
      <Text fontSize={'l'}>
        With burpsuite you can run a proxy server that you can connect your web browser to intercept and alter http requests.<br />
        The HTTP requests will be intercepted through the web browser it's connected to, this allows the user to modify every possible detail of the requests before sending it towards the web server.<br />
        This can allow the user to inject requests that could otherwise not be sent out towards the server, besides this Burp Suite is able to reissue requests with Burp Repeater. <br />
        Burp Repeater lets the user study the API response to various different input without intercepting different requests for every request that has been sent out.<br />
        The pro version of Burp suite allows the user to utilize the built in scanner, this scan contains two phases:
        <UnorderedList>
          <ListItem>Crawling for content and functionality</ListItem>
          <ListItem>Auditing for vulnerabilities</ListItem>
        </UnorderedList>
      </Text>
      <br />
      <Text fontSize="2xl"> Links: </Text>
      <UnorderedList>
        <ListItem>
          <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="https://portswigger.net/burp/communitydownload">
            Download (Burp Suite community edition)
          </Link>
        </ListItem>
        <ListItem>
          <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="https://portswigger.net/burp/pro">
            Download (Burp Suite professional)
          </Link>
        </ListItem>
        <ListItem>
          <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="https://portswigger.net/burp/documentation">
            Documentation
          </Link>
        </ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={'2xl'}>Cases where Burp Suite was used:</Text>
      <UnorderedList>
        <ListItem>
          <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="#/case/wled">
            WLED
          </Link>
        </ListItem>
      </UnorderedList>
      <br />
      <Divider />
      <Text fontSize="3xl"> Bibliography </Text>
      <Text fontSize={"xl"}>
        The bibliography according to this page is <br />
        <UnorderedList>
        <ListItem>
          Getting started with Burp Suite. (2022, January 19).
          PortSwigger. Retrieved January 21, 2022, from&nbsp;
          <Link href="https://portswigger.net/burp/documentation/desktop/getting-started">
              Portswigger - Burp Suite <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
          Reissuing requests with Burp Repeater. (2022, January 19).
          PortSwigger. Retrieved January 21, 2022, from&nbsp;
          <Link href="https://portswigger.net/burp/documentation/desktop/getting-started/reissuing-http-requests">
              Portswigger - Burp repeater <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
          Running your first scan with Burp Suite Professional. (2022, January 19).
            PortSwigger. Retrieved
            Retrieved January 21, 2022, from&nbsp;
            <Link href="https://portswigger.net/burp/documentation/desktop/getting-started/running-your-first-scan">
              Portswigger - Burp Scanner <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
  </Box>
);

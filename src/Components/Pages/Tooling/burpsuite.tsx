import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const Burpsuite = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Burp Suite </Text>
      <Text fontSize="2xl"> What is Burp Suite? </Text>
      <Text fontSize={'l'}>
      Burp Suite is a proxy that allows security testers to capture and modify their http(s) traffic and test the security of their web pages. <br/>
      Burp Suite is a commercial tool with multiple editions available.
      </Text>
      <br />
      <Text fontSize="2xl"> What can Burp Suite do? </Text>
      <Text fontSize={'l'}>
      With burpsuite you can run a proxy server that you can connect your web browser to.<br/>
      When you have connected the web browser it will capture the http request before you send it towards the web server so that you can modify the request.<br/>
      When you modify the request it allows you to modify every detail of the request and thus allows you to test more features of the web application than a normal browser would allow you to do.<br/>
      Besides this Burp Suite has multiple features build in to for example discover hidden web pages, brute force fields,<br/>
      fuzz the web application and much more.
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
      <Text fontSize={'2xl'}>Cases where Burp Suite whas used:</Text>
      <UnorderedList>
          <ListItem>
            <Link fontSize={'l'} textColor={"blue"} fontWeight={'bold'} href="#/case/wled">
              WLED
            </Link>
          </ListItem>
        </UnorderedList>
    </Container>
  </Box>
);

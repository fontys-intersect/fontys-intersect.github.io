import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const BoschSiemens = () => (
  <Box w={'100%'} alignItems="center" minH={"calc(100vh - 2- 200px"}>
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Bosch Siemens Home Connect case</Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}> Introduction </Text>
      <Text fontSize={'l'}>
      The Bosch Siemens kitchen appliances  are using the Home Connect environment to give notifications and to give commands to these devices. These devices include; oven, a coffee machine and a dishwasher. These can only be controlled via the home connect App.
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>Table of Contents </Text>
            <UnorderedList>
                <ListItem>Case Explanation</ListItem>
                <ListItem>Strengths</ListItem>
                <ListItem>Vulnerabilities</ListItem>
                <ListItem>Possible Fixes</ListItem>
                <ListItem>Best practices</ListItem>
            </UnorderedList>
      <br />
      <Text fontSize={'xl'}>Architecture</Text>
      <Image
        src={'/fontys-intersect-2021/assets/images/BoschSiemensArchitecture.jpg'}
        alt="test"
        h={'40%'}
        w={'40%'}
      />
      <Text fontSize={'l'}>
      Here you can see that the smart appliances usually connect to the home connect cloud service from Bosch and Siemens which also allows connections via the app on your phone.
      Even when I am in the same network with these devices it prefers using the cloud service. In documentation and field research it was found that the “direct connection” is only used in the case of downtime on the cloud service end.
      </Text>
      <br />
      <Text fontSize={'l'} fontWeight={"bold"}>Tools used</Text>
      <UnorderedList>
        <ListItem><Link href="/">Wireshark</Link></ListItem>
        <ListItem><Link href="/">Nmap</Link></ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
      Strengths
      </Text>
      <Text fontSize="l">
      Home connect services are very strong in the manner of <Link textColor={"blue"} href="/bestpractices/securedata">secure data transfer</Link> and storage.
      For example when I connect to the home connect servers it uses tls :
      </Text>
      <Image
        src={'/fontys-intersect-2021/assets/images/BoschSiemensWireshark1.png'}
        alt="test"
        h={'70%'}
        w={'70%'}
      />
      <Text fontSize="l">
      Every time the client connects to a home connect device it uses tls to <Link textColor={"blue"} href="/bestpractices/authentication">authenticate</Link> the application.
      </Text>
      <Text fontSize="l">
      also all the data is encrypted :
      </Text>
      <Image
        src={'/fontys-intersect-2021/assets/images/BoschSiemensWireshark2.png'}
        alt="test"
        h={'70%'}
        w={'70%'}
      />
      <Text fontSize="l">
      And since they are using TLS v1.2 they also use the encryption method with Sha256 giving it an extra hard cipher to crack.
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
      Conclusion
      </Text>
      <Text fontSize="l">
      Bosch and Siemens made an interesting platform that uses a lot of good practices.
      This results in a strong environment that is because of its complexity, not interesting to hack.
      Furthermore, Bosch and Siemens keep their devices up to date by auto updating the software, thereby outrunning the possible vulnerabilities.
      </Text>
      <br />
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

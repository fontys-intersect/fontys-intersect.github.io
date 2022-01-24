import {
  Box,
  Container,
  Text,
  Divider,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

export const CaseOverview = () => (
  <Box w={"100%"} alignItems="center" mb={"20px"}>
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl">Cases</Text>
      <Text fontSize="l">
        Due to the amount of categories within the Internet of Things, the
        categories will be divided into the following areas:
      </Text>
      <UnorderedList>
        <ListItem>Smart Home</ListItem>
        <ListItem>Smart Industry</ListItem>
        <ListItem>Smart Office</ListItem>
        <ListItem>Smart Health</ListItem>
      </UnorderedList>

      <br />
      <Text fontSize="l">
        The results of the cases are based on performed penetration tests. Due
        to the different result of the cases, each case will get its own
        designated page with the found strengths and/or weaknesses. The best
        practices, which are created with the result from the collection of
        cases, will be mentioned on the page if the best practice is being
        applied or is missing.
      </Text>
      <br />
      <Text fontSize={"l"}>Sept 2021 - Jan 2022</Text>
      <Divider />

      <UnorderedList>
        <ListItem>
          <Link href="#/case/wled" textColor={"blue"}>
            WLED&nbsp;
          </Link>
          (Smart Home)
        </ListItem>
        <ListItem>
          <Link href="#/case/boschsiemens" textColor={"blue"}>
            Bosch Siemens&nbsp;
          </Link>
          (Smart Home)
        </ListItem>
        <ListItem>
          <Link href="#/case/smartlock" textColor={"blue"}>
            Smart Lock Biometric&nbsp;
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#/case/gooveysmarttemp" textColor={"blue"}>
            Goovey Smart Temp&nbsp;
          </Link>
          (Smart Home)
        </ListItem>
        <ListItem>
          <Link href="#/case/printer" textColor={"blue"}>
            HP Laserjet Printer&nbsp;
          </Link>
          (Smart Office)
        </ListItem>
        <ListItem>
          <Link href="#/case/smartlockbt" textColor={"blue"}>
            Smart Lock Bluetooth&nbsp;
          </Link>
          (Smart Home)
        </ListItem>
        <ListItem>
          <Link href="#/case/solaredge" textColor={"blue"}>
            Solar Edge&nbsp;
          </Link>
          (Smart Home)
        </ListItem>
      </UnorderedList>

      <br />
      <Text fontSize={"l"}>Sept 2020 - Jan 2021</Text>
      <Divider />

      <UnorderedList>
        <ListItem>
          <Link href="#/case/airquality" textColor={"blue"}>
            Airquality&nbsp;
          </Link>
          (Smart Industry)
        </ListItem>
        <ListItem>
          <Link href="#/case/smartscreen" textColor={"blue"}>
            Smartscreen&nbsp;
          </Link>
          (Smart Office)
        </ListItem>
        <ListItem>
          <Link href="#/case/smartwatch" textColor={"blue"}>
            Smartwatch&nbsp;
          </Link>
          (Smart Home)
        </ListItem>
      </UnorderedList>

      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Pentests
      </Text>
      <Text fontSize={"l"}>
        The main research of the project is based on pentests that have been
        performed on IoT devices. Due to privacy and security protection, the
        result found during the 2020-2021 semester can't be published. The
        vulnerabilities have been explained without precise detail.
      </Text>
      <UnorderedList>
        <ListItem>
          Smartboard - This is a smartboard running android, mainly used in
          schools and board rooms. This product is also used in practice. The
          smartboard can both run its programs and be connected to a laptop or
          pc.
        </ListItem>
        <ListItem>
          Industrial air quality control system - This project has a backend
          server, a web interface, and several connected sensors. These sensors
          measure several air properties, the backend processes this date and
          the frontend shows graphs of the measurements. this way the clients
          can keep an eye on the air quality.
        </ListItem>
        <ListItem>
          Smartwatch(es) - This device has a frontend, backend and some built-in
          sensors. Smartwatches are mostly used to monitor health, save time and
          money.
        </ListItem>
      </UnorderedList>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

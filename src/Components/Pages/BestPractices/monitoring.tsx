import { ExternalLinkIcon } from "@chakra-ui/icons";
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

export const Monitoring = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Monitoring and logging </Text>
      <Text fontSize={"l"}>
        An in-depth page about Monitoring and Logging. In this page, it will be
        explained how it works and how it could be implemented.
      </Text>
      <br />
      <Text fontSize={"xl"}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Intro</ListItem>
        <ListItem>Explanation</ListItem>
        <ListItem>Usage and good examples</ListItem>
        <ListItem>Vulnerability</ListItem>
        <ListItem>Bibliography</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={"xl"}>Explanation</Text>
      <Text>
        Every device, website, application and more can communicate with each
        other. Knowing what they send and where they send the information to can
        be very important. This data can contain personal information, or even
        user credentials. The way of sending these types of data is crucial. But
        knowing how they send your data can be even more important.
      </Text>
      <br />
      <Text fontSize={"xl"}>Usage</Text>
      <Text fontSize={"l"}>
        Most applications or devices are standard enabled to log their
        activities or are able to after some configuration. Once the data is
        logged you could use it to do some forensics or to search back for
        specific events. But overall status checks or monitoring is not doable.
        For this you will need a Visualizer. This is an environment where the
        logging gets correlated and visualised to “make sense”. This makes it
        easier to see extraordinary events and act upon them.
      </Text>
      <br />
      <Text fontSize={"xl"}>Vulnerabilities</Text>
      <Text fontSize={"l"}>
        Whenever an application or device does not log its activity, it is not
        able to tell when or why something goes wrong, or to look at the network
        traffic. By not finetuning the logging you can end up with too much data
        that you will never use, making the logging process and possible
        monitoring systems connected to it inefficient. And by not tuning your
        monitor systems will result in unwanted alerts this can prevent the user
        from noticing real threats.
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
        Airquality
      </Text>
      <Text fontSize={"l"}>
        The application had no logging implemented, making it very difficult to
        find problems in the application.
      </Text>
      <br />
      <Divider m={2} />
      <Text fontSize="3xl"> Bibliography </Text>
      <Text fontSize={"xl"}>
        The bibliography according to this page is <br />
        <UnorderedList>
          {/* <ListItem>
            INTERSECT. (z.d.). dcypher. Geraadpleegd op 10 december 2020, van
            https://www.dcypher.nl/en/intersect
          </ListItem> */}
          <ListItem>
            NIST. (2011, September). Information Security Continuous Monitoring
            (ISCM) for Federal Information Systems and Organizations from &nbsp;
            <Link href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-137.pdf">
              NIST <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            OWASP. (n.d.-a). A10:2017-Insufficient Logging & Monitoring OWASP.
            Retrieved December 15, 2020, from &nbsp;
            <Link href="https://owasp.org/www-project-top-ten/2017/A10_2017-Insufficient_Logging%2526Monitoring">
              OWASP <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            ltvater, A. (2020, August 7). Best Log Management Tools: 51 Useful
            Tools for Log Management, Monitoring, Analytics, and More. Stackify.
            from &nbsp;
            <Link href="https://stackify.com/best-log-management-tools/">
              Stackify <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Timms, S. (2020, April 27). NLog vs log4net vs Serilog: Compare .NET
            Logging Frameworks. Stackify. from &nbsp;
            <Link href="https://stackify.com/nlog-vs-log4net-vs-serilog/">
              Stackify <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Contributor, S. (2020, October 28). 8 Best Practices and Standards
            for Logging and Monitoring—DNSstuff. Software Reviews, Opinions, and
            Tips - DNSstuff. from &nbsp;
            <Link href="https://www.dnsstuff.com/logging-monitoring-best-practices">
              DNS Stuff <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
  </Box>
);

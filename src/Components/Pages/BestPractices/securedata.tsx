import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Text,
  Divider,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

export const SecData = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Secure data transfer and storage </Text>
      <Text fontSize={"l"}>
        When communicating with other systems, you don’t want anyone to listen
        in on what you’re saying, that is why all communication should be
        encrypted.
      </Text>
      <br />
      <Text fontSize={"xl"}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Explanation</ListItem>
        <ListItem>Usage</ListItem>
        <ListItem>Vulnerabilities</ListItem>
        <ListItem>Cases</ListItem>
        <ListItem>Bibliography</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={"xl"}>Explanation</Text>
      <Text>
        Internet traffic can be read or even changed by anyone on the same
        network, there is very little to solve this on a small scale network. To
        make sure that the sniffed data is not usable, encryption should be
        used. Encryption comes in many forms, but most traffic (i.e. HTTP, FTP,
        SMTP, etc.) supports SSL/TLS. SSL is a powerful widely used encryption.
        Its most common use is for web traffic, however, multiple protocols
        support it. If for any reason the protocol is unable to use SSL, there
        are many variants of encryption, such as end-to-end, peer-to-peer and
        VPN.
      </Text>
      <br />
      <Text fontSize={"xl"}>Usage</Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
        SSL/TLS
      </Text>
      <Text fontSize={"l"}>
        Online shopping is something that most of us use on a regular basis.
        Would you shop at a store that doesn't use SSL, where the connection is
        not secure? We wouldn’t. But some people don’t notice that cheap IoT
        devices often lack a SSL connection to their web interface. During our
        research process we encountered this in our WLED case
        <br />
        Data encryption, data integrity, and authentication are all provided by
        SSL/TLS. This implies that when you use SSL/TLS, you can be assured that
        your data is secure.
        <UnorderedList>
          <ListItem>Your message has not been read by anybody.</ListItem>
          <ListItem>Your message has not been altered by anybody.</ListItem>
          <ListItem>
            You're conversing with the intended recipient (server)
          </ListItem>
        </UnorderedList>
        <br />
        Your consumers will never see notifications like those on your device's
        admin interface if you use publicly trusted SSL/TLS certificates.
        SSL/TLS certificates might be used to significantly improve security in
        that Internet-connected "smart" door lock by:
        <br />
        Installation of a publicly trusted server certificate in the lock,
        removing the need for a user connecting to its web-based interface to
        click through a security warning and/or apply a security exception for a
        self-signed certificate; Encrypting all connections between the client
        and the lock, or between the lock and its provider's servers; and/or
        requiring a client certificate on the user's smartphone to access the
        lock's interface. No more passwords in plain text!
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Software Encryption
      </Text>
      <Text fontSize={"l"}>
        If encryption is not implemented correctly or is missing, it leaves the
        opportunity to the hackers to sniff and listen to the unencrypted
        traffic. These are some important tips to allow for secure data transfer
        and storage:
        <br />
        <UnorderedList>
          <ListItem>
            It is always very important to use the latest version of an up to
            date encryption standard.
          </ListItem>
          <ListItem>
            Look into the different variants of encryption and make sure that
            the correct version is use
          </ListItem>
          <ListItem>
            In almost all situations it is a best practice to use asymmetric
            encryption
          </ListItem>
        </UnorderedList>
      </Text>
      <br />
      <Text fontSize={"xl"}>Vulnerabilities</Text>
      <Text fontSize={"l"}>
        <UnorderedList>
          <ListItem>
            No HTTPS/SSL Connection to web platforms can cause your data to be
            manipulated very easily and SSL is always a must have for a secure
            platform.
          </ListItem>
        </UnorderedList>
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Link fontSize={"l"} fontWeight={"bold"} href="/fontys-intersect-2021/#/case/wled">
        WLED
      </Link>
      <Text fontSize={"l"}>
        Wled showcases the importance of SSL since the web application that
        communicates with an IoT device can be easily exploited.
      </Text>
      <br />
      <Link fontSize={"l"} fontWeight={"bold"} href="/fontys-intersect-2021/#/case/boschsiemens">        
        Bosch Siemens
      </Link>
      <Text fontSize={"l"}>
        The Bosch Siemens case showed a good example of secure data transfer
      </Text>
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
          SSL Corp. (2021, November 24). Securing the Internet of Things (IoT) with SSL/TLS. SSL.Com. Retrieved December 3, 2021, from
            &nbsp;
            <Link href="https://www.ssl.com/article/securing-the-internet-of-things-iot-with-ssl-tls/">
              SSL Article <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            O’Dwyer, M. (2021, October 18). Internet of Things 101 – IoT Device
            Authentication Explained. Ipswitch. Retrieved December 3, 2021, from
            &nbsp;
            <Link href="https://www.iotforall.com/authentication-iot-securing-front-door">
              IoT for all <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container><Container h={"200px"}></Container>
  </Box>
);

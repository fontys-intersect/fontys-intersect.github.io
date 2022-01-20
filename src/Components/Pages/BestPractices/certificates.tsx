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

export const Certificates = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Certificates </Text>
      <Text fontSize={"l"}>
        An in-depth page about Certificates. In this page, it will be explained
        how it works and how it should be used.
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
        Certificates are a way of proving that the connection is secure and that
        it has not been tampered with by hackers. However a certificate is only
        safe if it was created by trusted Certificate Authorities.
      </Text>
      <br />
      <Text fontSize={"xl"}>Usage</Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
        Secure Connection
      </Text>
      <Text fontSize={"l"}>
        Certificates are used to secure the connection from a server to a
        client, mostly used in web traffic. With this certificate, you can be
        assured that your connection is encrypted. There are also self-signed
        certificates; however, those aren’t as secure. Self-signed certificates
        are signed by you instead of by a certificate authority. This means it’s
        not to be trusted and can be taken over by an attacker.
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Trusted Cerfiticates
      </Text>
      <Text fontSize={"l"}>
        Trusted certificates are the solution against man in the middle attacks.
        Since the connection is encrypted, it is not possible to intercept the
        data. You can’t impersonate a trusted certificate, either, since these
        certificates come from a trusted authority. This means that the data
        cannot be tampered with, since that would make the certificate invalid,
        making sure that all the data send is valid.
      </Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
        Enise Guideline
      </Text>
      <Text fontSize={"l"}>
        Enisa has made an in-depth document where it explains the importance of
        web certificates and how they should be used. You can read it{" "}
        <Link href="https://www.enisa.europa.eu/publications/guideline-on-security-measures-under-the-eecc">
          here
        </Link>
        .
      </Text>
      <br />
      <Text fontSize={"xl"}>Vulnerabilities</Text>
      <Text fontSize={"l"}>
        <UnorderedList>
          <ListItem>
            <Text fontSize={"l"} fontWeight={"bold"}>
              Authority Breach
            </Text>{" "}
            In rare events, a trusted certificate company may be breached,
            making all the trusted certificates issued by said company
            vulnerable for attacks. An example is from a Dutch certificate
            authority, DigiNotar. DigiNotar was breached in 2011, and hackers
            spread trusted certificates to other hackers. They were sending
            phishing emails pretending to be legit companies like Google. If
            this happens, all certificates issued by this party needs to be
            renewed, the issuer should publish the details on the leak, so
            people can fix the issues.
          </ListItem>
          <ListItem>
            <Text fontSize={"l"} fontWeight={"bold"}>
              Self-Signed Certificates
            </Text>{" "}
            Realistically, however, it’s the self-signed certificate that you
            need to watch out for. If companies or other instances have a
            self-signed certificate, chances are that they tell people to ignore
            the warning their browsers give them. If the instance the website
            belongs to is breached, and a man-in-the-middle attack is attempted,
            it won’t look different than it usually does and people may
            carelessly keep clicking until they are where they want to be. Any
            data they have will be in the hands of the hackers.
          </ListItem>
          <ListItem>
          <Text fontSize={"l"} fontWeight={"bold"}>
              Bad certificate management
            </Text>
            Another big problem is badly managed certificates. Certificates that have expired, are self-signed or are not properly configured. This damages the integrity of the encryption and makes it very easy the exploit the connection.
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
            SSL Corp. (2021, November 24). Securing the Internet of Things (IoT)
            with SSL/TLS. SSL.Com. Retrieved December 3, 2021, from &nbsp;
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
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

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

export const Authentication = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Authentication </Text>
      <Text fontSize={"l"}>
        Authentication is the process of determining whether someone or
        something is, in fact, who or what it says it is.
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
      <Text fontSize={"ll"}>
        If you have an application, you want to know what or who is interacting
        with or using your application. That’s where authentication comes in;
        Certain users, entities, or websites will have permission and power to
        do what others can’t, such as reading or writing into the system.
        Therefore it’s important to know who you are dealing with.
      </Text>
      <br />
      <Text fontSize={"xl"}>Usage</Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
        ID
      </Text>
      <Text fontSize={"l"}>
        Something that is very important when it comes to authenticating and
        logging in is that users should have User IDs and these IDs should
        always be unique. GUIDS can also be a great user-ID, this makes it hard
        to guess.
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Passwords
      </Text>
      <Text fontSize={"l"}>
        This is the most important part. Passwords should meet several
        requirements to be secure:
        <UnorderedList>
          <ListItem>They should have a minimum length of 8 characters</ListItem>
          <ListItem>
            They should be allowed to have any characters in them, to make it
            harder to crack.
          </ListItem>
          <ListItem>
            You should also set an upper limit of characters, to make sure there
            aren’t any Long Password Denial of Service attacks. This limit
            should be very high, as far as 100 characters;{" "}
          </ListItem>
          <ListItem>
            You don’t want to limit the user when making a secure password, so
            forcing them to make a password of less than 20 characters is a bad
            idea.
          </ListItem>
        </UnorderedList>
        Store passwords securely, hashed in a database preferably with a salt
        added to the hash. Hashing is similar to encryption, but only one-way.
        This means that you can create a hash of a password to compare it to the
        stored hash, but you cannot get the password from the hash. Also, make
        sure that all communication of credentials goes over a secured line, see
        Secure data transfer for more information.
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Two Factor Authentication
      </Text>
      <Text fontSize={"l"}>
        2FA is a good way to authenticate your user. 2FA is an extra one-time
        code that is sent to another confirmed device, such as a phone. This
        makes the login considerably more secure since the login must be
        confirmed by the user, even if the credentials are leaked.
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        NIST Digital Identity
      </Text>
      <Text fontSize={"l"}>
        Another source for authentication is the NIST document. NIST stands for
        the National Institute of Standards in Technology, based in America. In
        this guideline, authentication is explained even more in-depth. (NIST
        Digital Identity, 2020).
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        IoT related Authentication
      </Text>
      <Text fontSize={"l"}>
        To secure IoT device connections, we may use a variety of approaches to
        ensure robust authentication:
        <br />
        <UnorderedList>
          <ListItem>
            One-way authentication: If two parties want to interact with one
            other, only one will authenticate itself to the other, while the
            other will remain unauthenticated. (passwords)
          </ListItem>
          <ListItem>
            Two-way authentication: is also referred to as mutual
            authentication, in which both entities authenticate each other.
            (text based authentication using a code)
          </ListItem>
          <ListItem>
            Three-way authentication:The central authority authenticates the two
            parties and assists them in authenticating each other in three-way
            authentication. ( using pins or passwords, smartphones with OTP(one
            time passwords) apps. And biometric scans)
          </ListItem>
          <ListItem>
            Distributed: amongst the participants to the communication, a
            distributed direct authentication technique is used.
          </ListItem>
          <ListItem>
            Centralized: the authentication certificates are distributed and
            managed by a centralized server or a trustworthy third party.
          </ListItem>
        </UnorderedList>
      </Text>
      <br />
      <Text fontSize={"xl"}>Vulnerabilities</Text>
      <Text fontSize={"l"}>
        <UnorderedList>
          <ListItem>
            The biggest flaw left is human error. Shoulder surfing is a pretty
            common way to find a password. If someone writes down a password, it
            doesn’t matter how secure it is - people could steal it. Make sure a
            password is easy enough to remember, but not too guessable, while
            still being complex enough. Finding that balance can be hard.
          </ListItem>
          <ListItem>
            If passwords ever do get leaked, don’t hide it. This is illegal and
            also a bad idea. Telling your users that something happened is very
            important so that they change their passwords after leaking.
          </ListItem>
        </UnorderedList>
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
            NIST Special Publication 800-63B. (z.d.). Retrieved December 3,
            2021, from &nbsp;
            <Link href="https://pages.nist.gov/800-63-3/sp800-63b.html">
              NIST <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Authentication - OWASP Cheat Sheet Series. (z.d.). NWO. Retrieved
            December 3, 2021, from &nbsp;
            <Link href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html">
              OWASP Cheatsheet <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            O’Dwyer, M. (2021, October 18). Internet of Things 101 – IoT Device
            Authentication Explained. Ipswitch. Retrieved December 3, 2021, from
            &nbsp;
            <Link href="https://www.ipswitch.com/blog/internet-of-things-101-iot-device-authentication-explained">
              IP Switch <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Authentication In IoT: Securing the Front Door. (2020, August 7).
            IoT For All. Retrieved December 3, 2021, from&nbsp;
            <Link href="https://www.iotforall.com/authentication-iot-securing-front-door">
              IoT for all <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
  </Box>
);

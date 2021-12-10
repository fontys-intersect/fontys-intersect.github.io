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

export const Authorization = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Authorization </Text>
      <Text fontSize={"l"}>
        The process of granting someone access to a resource is known as
        authorization. House ownership is a wonderful example. The owner has
        complete control over the home, yet he or she can permit others access.
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
      <Text fontSize={"l"} fontWeight={"bold"}>
        Validate Sessions
      </Text>
      <Text>
        When an entity calls a method, the application needs to know if this
        call is legit in its request. The entity has a session that it uses to
        validate its request. The backend needs to check if the session, tied to
        this specific user, has a right to exist or not. If not, terminate the
        user or deny the request.
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Validate user role and permissions
      </Text>
      <Text>
        Information on the user and its role are stored in the session. Since
        this is stored client-side, it is important to make sure that the user
        cannot change it, this can be done by using JWT, this is a token that
        uses verification to remain untampered. When the entity calls a method
        the user role is given as a parameter to the backend, in the form of
        JWT, it is then compared to the permissions certain users have to see if
        this current user has the permission to execute the request.
      </Text>
      <br />
      <Text fontSize={"xl"}>Usage</Text>
      <Text fontSize={"l"}>
        Authorization needs to be properly implemented.
      </Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
        This should go according to the minimal privilege rule:
      </Text>
      <Text fontSize={"l"}>
        If the wrong entity has access to functions/methods, it could spell a
        lot of trouble. Therefore It is very important to keep the roles and
        rights very tight. No user should be able to do more than they should,
        to make sure that their rights are not abused. The correct
        implementation of Authorization should be to validate the session given
        by the entity when a call is made, to make sure the entity has the right
        to be able to make this specific call, and the permissions of that
        entity need to be checked to make sure he has the right to call the
        specified method. If you want to know more about Authorization in IoT,
        Cloud Security Alliance, 2016 has created a more in-depth guideline to
        oversee identity and access management.
      </Text>
      <br />
      <Text fontSize={"xl"}>Vulnerabilities</Text>
      <Text fontSize={"l"}>
        <UnorderedList>
          <ListItem>
            A vulnerability that was found in the WLed and air quality projects
            was that the user roles were never checked or verified in the
            session, only whether the user exists or not. This meant that any
            user that is logged in could access every page, regardless of his
            role. It is important that all sessions and their roles are
            validated.
          </ListItem>
          <ListItem>
            To make sure that the users cannot do too much, it’s important to
            implement according to the principle of least privilege. The
            principle of least privilege requires that every module (such as a
            process, a user, or a program, depending on the subject) in a given
            layer of a computer environment must be allowed to access just the
            information and resources that are essential for its purpose and
            only that.
          </ListItem>
        </UnorderedList>
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
        Air quality
      </Text>
      <Text fontSize={"l"}>
        The session of a user was only checked on its validity, but never if the
        user should be able to access the page, this allowed any user to access
        all resources.
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        WLED
      </Text>
      <Text fontSize={"l"}>The session of a user was never checked</Text>
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
            Powell, M. (2020, 14 December). Best Practices for Authentication
            and Authorization. CPO Magazine. Retrieved December 3, 2021, from
            &nbsp;
            <Link href="https://www.cpomagazine.com/tech/best-practices-for-authentication-and-authorization/">
              CPO Magazine <ExternalLinkIcon mx="2px" />
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
  </Box>
);

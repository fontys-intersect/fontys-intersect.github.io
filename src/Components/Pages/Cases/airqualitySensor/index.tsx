import {ExternalLinkIcon} from '@chakra-ui/icons';
import {Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link} from '@chakra-ui/react';

export const AirQuality = () => (
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Airquality sensor</Text>
            <br/>
            <Text fontSize="xl"> Introduction </Text>
            <Text fontSize={'l'}>
                Farms and workshops need clean air to operate their businesses. There can be a lot of toxins or dust in
                the air, this should be monitored. The Airscrubber fulfils this purpose: it monitors the quality of the
                air. We are asked to test the security of the application. </Text>
            <br/>
            <Text fontSize={'xl'}>Table of Contents</Text>
            <UnorderedList>
                <ListItem>Case Explanation</ListItem>
                <ListItem>Strengths</ListItem>
                <ListItem>Vulnerabilities</ListItem>
                <ListItem>Best Practises</ListItem>
                <ListItem>Conclusion</ListItem>
            </UnorderedList>
            <br/>
            <Text id={"CaseExplanation"} fontSize={'xl'}>Case Explanation</Text>
            <Text fontSize="l">
                The application and sensors were tested according the <Link
                href={"https://www.varonis.com/blog/cyber-kill-chain/"}>Cyber Kill Chain</Link>. Testing was done on a
                private server that was only accessible to the testers.

                The tools that were used are mostly the same tools we use in Kali Linux for other pentests. Among these
                are:

                <UnorderedList>
                    <ListItem> <Link textColor={"blue"} href={"https://portswigger.net/burp"}>Burp
                        Suite</Link></ListItem>
                    <ListItem> <Link textColor={"blue"} href={"https://nmap.org/"}>Nmap</Link>
                    </ListItem>
                    <ListItem><Link textColor={"blue"} href={"https://www.postman.com/"}>Postman</Link>
                    </ListItem>
                    <ListItem><Link textColor={"blue"} href={"https://www.securityheaders.com/"}>Security
                        headers</Link> check</ListItem>
                </UnorderedList>
                During the pentest, the research was kept in mind according to known IoT vulnerabilities.</Text>

            <br/>
            <Text id={"Strengths"} fontSize={'xl'}>Strengths</Text>
            <br/>
            <Text fontSize={'l'}>The application unfortunately didn’t have a lot of strengths. Front - and back-end are
                both weak based on the cybersecurity aspect</Text>
            <br/>
            <Text id={"Vulnerabilities"} fontSize={'xl'}>Vulnerabilities</Text>
            <Text fontSize="l">
                The vulnerabilities, in this case, are as followed:
            </Text>
            <Text fontSize="l"><UnorderedList>
                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Broken authentication/authorization </Text> If a user
                    is logged in with a valid session, they can access all pages, because the server is not checking if
                    they an administrator or not. They can then create users, locations, and sensors.</ListItem>
                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Bad error handling </Text> If there’s an error, the
                    error messages display very little to no information. This is very inconvenient to both the user and
                    the developer because nobody can see what went wrong.</ListItem>

                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>No hashes for password </Text> Passwords are not
                    hashed and are stored as plain text in the database. This is a vulnerability that makes it easy for
                    a hacker to access and reuse the passwords if they gained access to the database.</ListItem>

                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>No Password rules </Text> There aren’t any rules for
                    the password when an account is created. This makes it possible to have a password with only one
                    character or even no characters.</ListItem>

                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Input filtering </Text> An attacker can omit certain
                    parameters when making new users, sensors or locations, making these invalid.</ListItem>
                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Outdated software </Text> There are outdated maven
                    dependencies, which can lead to possible vulnerabilities.</ListItem>
                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Weak JWT </Text>The JWT is using a weak and guessable
                    secret key. This makes it possible for the attacker to brute-force or guess it.</ListItem>
                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Insecure Headers </Text>The security headers are not
                    configured properly, which makes them vulnerable to attacks like clickjacking.</ListItem>
                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>DOS attack </Text>It is possible to make the system
                    crash and unable to restart by sending a string to the Kafka server. This string will cause the
                    server to crash and cause the backend service to stop and crash again on reboot.</ListItem>
                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Outside requests </Text>The Kafka server is not
                    protected against outside requests. This means anyone can send requests, resulting in the wrong or
                    polluted data.</ListItem>
                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Hardcoded Credentials </Text>There are hardcoded
                    credentials used in a .xml file. Once an attacker has access to the system, they can use the
                    credentials to pivot to other systems.</ListItem>

            </UnorderedList></Text>
            <br/>
            <Text id={"PossibleFixes"} fontSize={'xl'}>Possible Fixes</Text>
            <Text fontSize="l">
                All of the vulnerabilities in the application can be fixed. To fix those, for each vulnerability the
                best practice needs to be followed. After this is done, there should be a lot of tests, to see if the
                vulnerabilities are really fixed.
            </Text>
            <br/>
            <Text id={"Bestpractices"} fontSize={'xl'}>Best practices</Text>
            <Text fontSize="l">
                The best practices found in this case are <Link textColor={"blue"}
                href={"/fontys-intersect-2021/#/bestpractices/splitdev"}>split development and production</Link>,
                <Link textColor={"blue"}
                    href={"/fontys-intersect-2021/#/bestpractices/authentication"}> authentication</Link>  <Link textColor={"blue"}
                href={"/fontys-intersect-2021/#/bestpractices/authorization"}>authorization</Link>, <Link textColor={"blue"}
                href={"/fontys-intersect-2021/#/bestpractices/errorhandling"}>error handling</Link>, <Link textColor={"blue"}
                href={"/fontys-intersect-2021/#/bestpractices/inputvalidation"}>input validation</Link> and <Link textColor={"blue"}
                href={"/fontys-intersect-2021/#/bestpractices/secretmanagement"}>secret management</Link> more about these best
                practices can be read on their respective pages.
            </Text>
        </Container>
        <Container h={"200px"}></Container>
    </Box>
);

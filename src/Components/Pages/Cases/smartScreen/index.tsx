import {Box, Container, Image, Text, ListItem, UnorderedList, Link} from '@chakra-ui/react';

export const SmartScreen = () => (
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Smart Screen</Text>
            <br/>
            <Text fontSize="xl" fontWeight={'bold'}> Introduction </Text>
            <Text fontSize={'l'}>
                These days many companies and individuals use IoT devices, such as smartphones, smart doorbells or smart
                screens. The number of IoT devices grows significantly every year, most of these IoT devices are within
                businesses.

                The smartscreen is a system which is popular in different types of companies, because of the flexibility
                of those screens. Smartscreens can run custom applications but can also be connected to a laptop to give
                presentations. Besides data attacks on the smartscreens, attackers could try to get control over the
                smartscreen to get network access or to use the smartscreen for malicious plans like a botnet. A botnet
                is a network of connected pc’s used for group attacks. Most of the time these pc’s are infected by
                malware and the owner is unaware of their participation in a botnet.</Text>
            <br/>
            <Text fontSize={'xl'} fontWeight={'bold'}>Table of Contents</Text>
            <UnorderedList>
                <ListItem>Case Explanation</ListItem>
                <ListItem>Strengths</ListItem>
                <ListItem>Vulnerabilities</ListItem>
                <ListItem>Best practices</ListItem>
                <ListItem>Conclusion</ListItem>
            </UnorderedList>
            <br/>
            <Text id={"CaseExplanation"} fontSize={'xl'} fontWeight={'bold'}>Case Explanation</Text>
            <Text fontSize="l">
                For the pentest, a test network was created and the screens were connected to the router with an
                ethernet cable. The pentesters had full network access and control. Physical access to the smartscreen
                was also granted to the pentesters. One of the screens has an android version as an operating system
                while the other had a custom operating system.</Text>
            <Image
                src={"/fontys-intersect-2021/assets/images/smart-screen.png"}
                alt="test"
                h={"60%"}
                w={"60%"}
            />
            <Text>The screens and their services were tested according to the <Link href={"https://www.varonis.com/blog/cyber-kill-chain/"}>cyber kill chain.</Link> This means the pentest
                started with reconnaissance, after enough data had been gathered the intrusion was started. When a
                successful intrusion is executed, it is time for the exploitation phase. After one or several successful
                exploits it is possible to try privilege escalation. If the privilege escalation is successful full
                system access is obtained.The pentests started the same way and became slightly different based on their
                findings. The tools that were used are mostly the same tools we use in Kali Linux for other pentests.
                Among these are:</Text>
            <UnorderedList>
                <ListItem> <Link href={"https://portswigger.net/burp"}>Burp
                    Suite</Link></ListItem>
                <ListItem> <Link href={"https://nmap.org/"}>Nmap</Link>
                </ListItem>
                <ListItem><Link href={"https://github.com/yunuscadirci/CallStranger"}>CallStranger</Link>
                </ListItem>
                <ListItem><Link href={"https://www.wireshark.org/"}>Wireshark</Link> </ListItem>

            </UnorderedList>
            <Text>During the pentest, the research into common IoT vulnerabilities was kept in mind.</Text>
            <br/>
            <Text id={"Strengths"} fontSize={'xl'} fontWeight={'bold'}>Strengths</Text>
            <br/>
            <Text fontSize={'l'}>The security of the tested smart screens was of a high level, most ports refused any
                connection and several vulnerabilities were already patched. Ports that aren’t needed are closed and
                attack vectors have been minimalized.</Text><br/>
            <Text id={"Vulnerabilities"} fontSize={'xl'} fontWeight={'bold'}>Vulnerabilities</Text>
            <Text fontSize="l">
                The vulnerabilities, in this case, are as followed:
            </Text>
            <Text fontSize="l"><UnorderedList>
                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>Android Debug Bridge </Text> The initial version
                    of the smart screen we tested had the android debug bridge(ADB) port opened, this means anyone
                    on the network can get a root shell on the smart screen. The company explained that the first
                    firmware version was a development version due to internal confusion.
                    <Image
                        src={"/fontys-intersect-2021/assets/images/smart-screen-adb.png"}
                        alt="test"
                        h={"40%"}
                        w={"40%"}
                    />
                    After contacting the company about the ADB port they ask the pentesters to do a firmware update
                    with the latest production version. Eager to find out if the port was actually closed the
                    pentesters did another network scan. This scan proves the port is closed on the production
                    version.</ListItem>
                <ListItem><Text fontSize={"l"} fontWeight={"bold"}>False firmware update </Text> Because the update
                    server did not implement HTTPS it is possible to read the communication between the smart screen
                    and the server. The pentesters used a proxy to capture individual requests and responses. By
                    altering certain requests it is possible to find all responses from the server. This makes it
                    possible to create a fake update server, combine this with a man in the middle attack and it is
                    possible to make the smart screen pull an update from the fake server. This can allow an attack
                    to add malware or corrupt the smart screen.
                    <Image
                        src={"/fontys-intersect-2021/assets/images/smart-screen-fake-server.png"}
                        alt="test"
                        h={"50%"}
                        w={"50%"}
                    />
                </ListItem>

            </UnorderedList></Text>
            <br/>
            <Text id={"PossibleFixes"} fontSize={'xl'} fontWeight={'bold'}>Possible Fixes</Text>
            <Text fontSize="l">
                Both problems can be fixed quite easily. For the ADB vulnerability just make sure no production
                version has the ADB port open and make sure no one gets the developer version.The company should
                build in a check before delivering screens to any one, this includes screens normally used for
                internal testing. To secure the server an SSL certificate should be added to the server and this
                certificated should be checked if it’s trusted. The company should build in a check before
                delivering screens to any one, this includes screens normally used for internal testing. A
                self-signed certificate can be forged by an attacker which makes it useless in this case. A trusted
                SSL certificate cost money but this is way less than the potential cost of a security breach.</Text>
            <br/>
            <Text id={"Bestpractices"} fontSize={'xl'} fontWeight={'bold'}>Best practices</Text>
            <Text fontSize="l">
                The best practice connected to the ADB port is <Link href={"/fontys-intersect-2021/#/bestpractices/splitdev"}>split development and production.</Link> This best practice
                describes why it is important to have this separation and how to do it.

                The best practices connected to the firmware update are <Link href={"/fontys-intersect-2021/#/bestpractices/certificates"}>certificates</Link> and <Link href={"/fontys-intersect-2021/#/bestpractices/securedata"}>secure data transfer.</Link> Both
                these best practices describe the importance of encryption, they both focus on a different part but
                they are both connected to this case. The Certificate best practice is the most important one for
                this vulnerability.

                The last best practice that is applicable to this case is <Link href={"/fontys-intersect-2021/#/bestpractices/versionupdate"}>version update.</Link> There were a few
                outdated libraries that were used, but all vulnerabilities for this library seem to be patched.
                However it stays important to update all libraries used to profit from their security fixes.

                more about these best practices can be read on their respective pages.</Text>

        </Container>
    </Box>
);

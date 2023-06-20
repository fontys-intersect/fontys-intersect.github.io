import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const SmartLighting = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl" fontWeight={"bold"}> Context </Text>
            <Text fontSize={'l'}>
            The Philips Hue Hub was connected to a LAN ethernet port of theGL.Inet AR750S-EXT in the [IoT-lab](#Link to lab page) using the192.168.8.0/24 subnet. The other devices, a phone with the PhilipsHue App and a laptop to intercept traffic from the router, wereconnected through WiFi.            
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Authentication </Text>
            <Text fontSize="2xl" fontWeight={"bold"}> Account Lockout </Text>
            <Text fontSize={'l'}>
            Description OWASP IoT Project: The ability to continue sendingauthentication attempts after 3 - 5 failed login attempts.   
            <br />
            <br />
            While using the Philips Hue API locally, it is possible to send unlimitedAPI requests using different (nonexistent) API keys or accounts.         
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Passwords & ID's </Text>
            <Text fontSize={'l'}>
            In recent versions of the Hue Hub, a self-chosen account (ID) can notbe used anymore to connect to the hub. Instead, an API key (MD5hash) is generated based on your account name. This string complies to the password length requirements as described in the best practices. This limits the effectiveness of brute-force attempts.            
            </Text>
            <br />



            <Text fontSize="3xl" fontWeight={"bold"}> Secure Data Transfer </Text>
            <Text fontSize="2xl" fontWeight={"bold"}> Unencrypted Services </Text>
            <Text fontSize={'l'}>
            Description from OWASP IoT Project: Network services are notproperly encrypted to prevent eavesdropping or tampering byattackers.            
            </Text>
            <br />



            <Text fontSize="2xl" fontWeight={"bold"}> Local API </Text>
            <Text fontSize={'l'}>
            Local API requests without using the Hue App are unencrypted(HTTP) by default, although HTTPS using a self-signed certificate isoptionally available. The hub includes a debugger that can beaccessed at http://[IP]/debug/clip.html. Users are not redirected to theHTTPS version of this page and Strict-Transport-Security (HSTS)headers are not implemented.            
            </Text>
            <br />



            <Text fontSize="2xl" fontWeight={"bold"}> Using the Hue App </Text>
            <Text fontSize={'l'}>
            Communication using the Philips Hue app results in both encryptedand non-encrypted traffic. Some HTTP packets are not encrypted onthe network layer, but on the application layer (content type:application/cb-encrypted).            
            </Text>
            <br />


            <Text fontSize="1xl" fontWeight={"bold"}> For Example: </Text>
            <Image
                src={"/assets/images/philipsus.png"}
                alt="philipsus"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br/>


            <Text fontSize="2xl" fontWeight={"bold"}> Poorly Implemented Encryption </Text>
            <Text fontSize={'l'}>
            Description from OWASP IoT Project: Encryption is implemented however it is improperly configured or is not being properly updated,e.g. using SSL v2.  
            <br />
            <br />
            Traffic generated while using the app consists of non-TLS, SSL v1,SSL v2 and SSL v3 traffic. SSL v1 is only used briefly to communicate with time.meethue.com.
            <br />
            <br />
            TLSv1.2 is used, but is implemented using secure ciphers, e.g:- TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256- TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256          
            </Text>
            <br />


            <Text fontSize="3xl" fontWeight={"bold"}> Version Update </Text>
            <Text fontSize="2xl" fontWeight={"bold"}> Insecure third-party components </Text>
            <Text fontSize={'l'}>
            Description from OWASP IoT Project: Device uses out of date versions of busybox, openssl, ssh, web servers, etc.   
            <br />
            <br />
            Scans with Nmap using the vulners NSE script did not found any vulnerabilities. The services with open ports that run on the Philips Hue Hub do not advertise their version numbers which means that the services can still be outdated and/or contain vulnerabilities.        
            </Text>
            <br />


            <Image
                src={"/assets/images/nmap.png"}
                alt="nmap"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br/>
            <br/>


            <Text fontSize="3xl" fontWeight={"bold"}> Data Handling and Transparency </Text>
            <Text fontSize="2xl" fontWeight={"bold"}> Remote Connections </Text>
            <Text fontSize={'l'}>
            The Philips Hue Hub communicates with the following remote (IPv4)servers while using the Philips Hue app to view, configure and updatethe Hue Hub.            
            <br />
            </Text>
            <br />


            <Image
                src={"/assets/images/iplookup.png"}
                alt="iplookup"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br/>



            <Text fontSize="2xl" fontWeight={"bold"}> Connections to NTP Servers in China </Text>
            <Text fontSize={'l'}>
            The two Chinese-based servers, 120.25.115.20 & 203.107.6.88, standout. They are, together with Google's NTP servers, used for NTP(UDP port 123). Based on packet inspection, the packets look likelegitimate NTP traffic.            
            <br />
            <br />
            The Hue Hub most likely uses a ntpd or a similar utility with hardcoded (instead of using a dynamic NTP pool) NTP servers. Philips may have included Chinese based (Alibaba) servers becauseGoogle(.com) is blocked by China's Great Firewall. There is no optionto opt-out from using these servers.
            </Text>
            <br />


        </Container>
    </Box>
);
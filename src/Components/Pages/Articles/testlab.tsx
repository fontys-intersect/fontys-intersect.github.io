import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const TestLab = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> DIY Test Lab </Text>
            <Text fontSize={'l'}>
            Fontys students have previously added a possible network setup to test IoT devices to the toolingsection of the Intersct project. While helpful, the setup described may have limited “real world” usewhen it comes to testing IoT devices. It is based on a virtualized network in Netlab which makes itpractically impossible to test real IoT devices, especially considering that a lot of (consumer) IoTdevices only communicate through WiFi or other wireless signals.  We have improved upon this work by creating a proof of concept for a testlab that can be used totest real internet of things (IoT) devices.
            </Text>
            <br />
            <Text fontSize="3xl"> Requirements </Text>
            <Text fontSize={'l'}>
            For this lab, we will mostly focus on consumer IoT devices ranging from cameras, smart lightning,locks and smartwatches. To test these devices, we have listed the following requirements for thelab setup: 
            <br />
            Requirement Priority
            <br />
            <br />
            • A private (W)LAN with its own subnet. MUST
            <br />
            <br />
            • Possible to set up with real hardware that is available at the ISSD. MUST
            <br />
            <br />
            • Capabilities to capture network packages to PCAP-format. MUST
            <br />
            <br />
            • Proxy capabilities to intercept and modify (web/HTTP) requests/responses. SHOULD
            <br />
            <br />
            • Dynamic: possible to quickly set-up and break down at the end of the day. SHOULD 
            <br /> 
            <br />          
            </Text>
            <br />
            <Text fontSize="3xl"> Wireless Router: AR750S-EXT </Text>
            <Text fontSize={'l'}>
            We have used the GL.Inet AR750S-EXT router to quickly set up a private (wireless) LAN. TheGL.Inet AR750S-EXT meets the requirements and comes with the following features andlimitations: 
            <br />
            <br />
            • It is a low-cost device that is available at the ISSD
            <br />
            <br />
            • It is (really) small and can be quickly set up. 
            <br />
            <br />
            • It has multiple internet-connectivity options including WISP. 
            <br />
            <br />
            • It is based on OpenWrt/LEDE and can use its packages repository. 
            <br />
            <br />
            The major limitation of the AR750S is that it comes with only two LAN (gigabit) ethernet ports,which can of course be expanded by adding a switch.
It's also possible to use (bridge) the WAN ethernet port for the LAN-network when using otherways (WISP or 4G tethering) to connect to the internet. This can be done using the LuCI web GUIor CLI that is part of OpenWRT.Another limitation is that it is not the most powerful device when it comes to its resources such asthe CPU and available RAM. In our experience, it is powerful enough for testing a few IoT devicesin a private wireless LAN network.             </Text>
            <br />
            <Text fontSize="3xl"> Setting up the Network </Text>
            <br />
            <Image
                src={"/assets/images/testlab2.png"}
                alt="testlab2"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />
            <Text fontSize={'l'}>
            The exact steps and documentation can be found in official documentation from GL.Inet. This chapter will describe our configuration.
            <br />
            <br />
We have set up a (wireless) LAN with the following subnet 192.168.8.0/24. Devices can connect to this network through WiFi or wired when connected to a LAN ethernet port.
<br />
<br />
Because of the limited capabilities of getting a wired (Eduroam) internet connection in the Fontys buildings (TQ), we have used the WISP functionality to get internet access and turn the router into a functional internet gateway.
<br />
<br />
The traffic generated from the router will be anomalous compared to normal (student) Eduroam traffic. To avoid possible problems such as a (temporary) block with our personal credentials and to standardize the setup, we will use an Eduroam guest account. The daily code for this guest account can be obtained from the ISSD. The GL750S does support connecting to WPA2- Enterprise PEAP networks.            </Text>
            <br />
            <Text fontSize="3xl"> Capturing Packets </Text>
            <Text fontSize={'l'}>
            In this iteration the capturing of packets is implemented by installing and using tcpdump in the GL- AR750S. This makes it possible to capture traffic on all the available interfaces. Tcpdump offers a
GL750S
tcpdump
 
lot of flexibility in its use cases. It is for example possible to:
<br />
<br />
• Save a packet capture (as a PCAP) to an SD-card for later inspection.
<br />
<br />
• Connect to the AR750S with SSH and live capture and inspect traffic with tcpdump on the CLI.
<br />
<br />
• Connect to the AR750S with SSH and forward the tcpdump output to Wireshark running on a host (e.g. a laptop) in the network.
<br />
<br />
Other possible ways to capture packets include configuring a mirror port using LuCI or extending the setup with a dedicated switch (with port mirroring functionality) and another access point.     
<br />       
</Text>
            <br />
            <Text fontSize="3xl"> Inspecting Traffic in Wireshark </Text>
            <Text fontSize={'l'}>
            In this use case, a host (e.g. laptop) must be connected to the LAN and needs an SSH-client and Wireshark installed. Using the following command, it is possible to live inspect packets (from AR750S) in Wireshark. In this example, it is capturing traffic on all interfaces. Port 22 is excluded because to reduce the noise of its own connection.            
            </Text>
            <Image
                src={"/assets/images/wiresharklab.png"}
                alt="wiresharklab"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <Text fontSize={'l'}>
            It's also possible to start a capture like this from the Wireshark GUI using the SSH remote capture functionality.            
            </Text>
            <br />
            <Text fontSize="3xl"> Transparent (MITM) proxy </Text>
            <Text fontSize={'l'}>
            MITMproxy describes itself as “your swiss-army knife for debugging, testing, privacy measurements, and penetration testing. It can be used to intercept, inspect, modify and replay web traffic such as HTTP/1, HTTP/2, WebSockets, or any other SSL/TLS-protected protocols.”
            <br />
            <br />
It can be used in a similar fashion to Burpsuite, but it offers a lot of flexibility. It is for example also possible to set up a reverse proxy or use it for other (web)protocols than HTTP.
<br />
<br />
For testing IoT devices, the use of MITMProxy or other proxies may be limited because most IoT devices are limited when it comes to configuring a proxy or adding your own certificate authority. MITMProxy does however support setting up a transparent proxy, whereas traffic is directed into a proxy at the network layer. This does not require any extra proxy-related configuration in the IoT- device, except for configuring the gateway with or without DHCP.            </Text>
            <br />
            <Text fontSize="3xl"> MITMProxy on a Raspberry Pi </Text>
            <Text fontSize={'l'}>
            In our IoT testlab, we have set up a transparent proxy with MITMProxy. We have installed MITMProxy on a Raspberry Pi 4 (OS: Raspberry Pi OS, Debian based) and connected the Raspberry the the LAN ethernet port of the GL-AR750S.
            <br />
            <br />
To use the Raspberry as a transparent proxy, we have enabled IP forwarding on the correct interface and disabled ICMP redirect as described in MITMProxy’s documentation. After starting MITMProxy in transparent mode ( --mode transparent ), any host in the network with their gateway set to the IP-address of the Raspberry instead of the router, will use the MITMProxy as their gateway.
<br />
<br />
This makes it possible to intercept and modify (web)traffic such as telemetry, (Rest)API calls and (firmware) update traffic. It's also possible to test for SSL/certificate misconfigurations and spot traffic with sensitive data that is sent unencrypted.
<br />
<br />
The big limitation of MITMProxy is the fact that most IoT devices do not allow installing your own certificate authority. This renders intercepting properly configured SSL traffic useless, although it can be used to spot misconfigured SSL when a device accepts MITMProxies certificate. The use of measures like the Strict-Transport-Security (HTST) headers also prevent MITM-attacks in IoT devices with complying user agents (e.g. browsers in smart TVs).            </Text>
            <br />
            <br />
        </Container>
    </Box>
);
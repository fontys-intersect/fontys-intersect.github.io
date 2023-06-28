import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const FlipperZero = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
        <Text fontSize="3xl" fontWeight={"bold"}> Flipper Zero </Text>
            <Text fontSize={'l'}>
            Flipper Zero is a portable multi-tool for pen testers and geeks in a toy-like body. It is fully open-source and customizable, so it can be extended to match the needs of the user.             
            </Text>
            <br />
            <Text fontSize={'l'}>
            To exploit a very weak link of Bluetooth using Flipper Zero, we used a custom firmware named Flipper-Xtreme. This allowed us to write a script and deploy it on a machine using the BadKB function which acts as a wireless rubber ducky.             
            </Text>
            <br />
            <Text fontSize={'l'}>
            The use case of this exploit involved a scenario where the victim is negligible of the device that he/she is trying to use and using the BadKB function of changing the visible of the Flipper Zero to match a known device, it can make the victim connect to it, allowing the Flipper Zero to run the payload with no additional checks.            
            </Text>
            <br />
            <Text fontSize={'l'}>
            The current scripts were tested on Linux, Windows, MacOS and Android.             
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Scripts </Text>
            <Text fontSize={'l'}>
            The scripts were written in Rubber Ducky Script, and they are listed below.             
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Android: </Text>
            <Text fontSize={'l'}>
            GUI b 
            <br />
DELAY 1000 
<br />
ENTER  
<br />
DELAY 1000  
<br />
CTRL l  
<br />
DELAY 100  
<br />
STRING best foods 
<br />
DELAY 100 
<br /> 
ENTER 
<br />
            </Text>
            <br />

            <Text fontSize={'l'}>
            This simple script will open the default browser and will do a google search for “best foods”.             
            </Text>
            <br />

            <Text fontSize={'l'}>
            First the script will use “GUI b” which is a shortcut for opening the default browser and using “CTRL” and lowercase L will select the search bar. The “STRING” function will simply type the desired string and then will send an “ENTER” command to start the search.             
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Linux: </Text>
            <Text fontSize={'l'}>
            ALT F2 
            <br />
DELAY 1000 
<br />
STRING gnome-terminal 
<br />
ENTER 
<br />
DELAY 1000 
<br />
STRING echo Hello World 
<br />
ENTER 
<br />            </Text>
            <br />

            <Text fontSize={'l'}>
            The script developed is a proof of concept that demonstrates the ability to use the Flipper Zero device as a fake Bluetooth device, allowing it to change its name and MAC address. To connect, the device requires only a simple confirmation click. 
            </Text>
<br />

<Text fontSize={'l'}>
However, the script has some limitations. Specifically, it has difficulty writing long strings, including links, as the device is unable to keep up with the Flipper Zero.             
</Text>
<br />

<Text fontSize={'l'}>
Despite these limitations, the potential for the script's improvement is vast. Adding functionality such as log data, keystrokes, and other features could help to overcome these limitations. The script is written in Rubber Ducky Script and offers an example for Linux. Upon execution, the script first opens a terminal using the ALT F2 command and then executes it using the gnome-terminal command. After a delay of 1000 milliseconds, the script prints "Hello World" to the terminal using the echo command. 
</Text>
<br />

<Text fontSize={'l'}>
Overall, this script serves as a proof of concept, demonstrating the potential to use the Flipper Zero device to open terminals and execute commands across multiple platforms, including Android, Linux, MacOS, and Windows. Further development could make this script a valuable tool for developers and users alike. </Text>
<br />

<Text fontSize="3xl" fontWeight={"bold"}> Windows: </Text>
            <Text fontSize={'l'}>
            GUI r 
            <br />
DELAY 1000 
<br />
STRING cmd 
<br />
ENTER 
<br />
DELAY 3000 
<br />
STRING echo Hello World 
<br />
ENTER 
<br />
DELAY 1000 
<br />
STRING exit 
<br />
ENTER 
<br />
            </Text>
            <br />

            <Text fontSize={'l'}>
            This windows script will behave in the exact same way as the Linux one, but it will also close the terminal after one second (STRING exit). </Text>
<br />

            <Text fontSize="3xl" fontWeight={"bold"}> Kismet </Text>
            <Text fontSize={'l'}>
            Kismet is an open-source sniffer, WIDS, war driver, and packet capture tool for Wi-Fi, Bluetooth, BTLE, wireless thermometers, airplanes, power meters, Zigbee, and more. 
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Configuring </Text>
            <Text fontSize={'l'}>
            The configuration for Kismet is very time-consuming (~3h building time) and it requires a good number of resources and initial plans to install and run it on a Raspberry Pi to help us intercept Bluetooth traffic was not feasible.              </Text>
            <br />
            <Image
                src={"/assets/images/kismet.png"}
                alt="kismet"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />
            <Text fontSize={'l'}>
            Here is the GUI (Graphical User Interface) of Kismet when launched with the Bluetooth interface. The Bluetooth devices detected are listed with their MAC address if the device name is not known.             
             </Text>
            <br />
            <Text fontSize={'l'}>
            Kismet did work as expected and we were able to capture traffic, but without proper hardware such as Ubertooth, going further than that was rather tedious.              </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Conclusions </Text>
            <Text fontSize={'l'}>
            On one hand, Kismet has enormous potential with the proper hardware and will be tested in another environment with the ZigBee protocol, but for now its capabilities are limited and not enough to present a danger to other Bluetooth devices.               </Text>
            <br />
            <Text fontSize={'l'}>
            On the other hand, Flipper Zero has proved to be a very handy tool for quick hacks and presented satisfactory results from the start. With a little social engineering, this tool can be easily used to do a good amount of damage in the right hands.             </Text>
            <br />
        </Container>
    </Box>
);
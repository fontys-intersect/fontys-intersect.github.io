import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const BluetoothLock = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl" fontWeight={"bold"}> Lock Pads Information Obtained From the Internet </Text>
            <Text fontSize={'l'}>
            To conduct a thorough investigation of the vulnerabilities in Master Lock's 4400 Bluetooth lock and the 4901 biometric locks, it was essential to follow the Cyber Kill Chain framework and commence with the reconnaissance phase. In order to achieve this, we performed a series of activities, beginning with extensive research to gather as much information as possible about the target device from the internet. This involved locating official documentation for the locks, examining their specifications, understanding their operational mechanisms, and so on.
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Master Lock Bluetooth Padlock (4400) </Text>
            <Text fontSize={'l'}>
            •	Bluetooth Low Energy (BLE) keyless device that operates using Bluetooth Smart Protocol
            <br />
            •	Can be unlocked via a mobile device or by entering a directional code on the lock keypad
            <br />
            •	Sharing access is possible via the Master Lock Vault Home app with temporary and permanent sharing options
            <br />
            •	Battery life lasts approximately two years under normal usage and up to four months under continuous phone mode
            <br />
            •	The app offers tamper and low-battery alerts, access management, and audit trails for enhanced control, security, and convenience
            <br />
            •	Not weatherproof, cannot be used outdoors.
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Master Lock 4901DLH Biometric Padlock </Text>
            <Text fontSize={'l'}>
            •	Biometric access control through fingerprints for up to 10 users.
            <br />
            •	It has a backup access method via a directional code on the lock keypad.
            <br />
            •	The lock has light indicators for notifications and an easy-to-replace CR2 battery.
            <br />
            •	It does not require a smartphone app or data permissions for use.
            <br />
            •	All functions are onboard and do not require any form of wireless connection.
            </Text>
            <br />


            <Text fontSize="3xl" fontWeight={"bold"}> Used Tools </Text>
            <Text fontSize={'l'}>
            After gathering some initial information, we conducted research to determine the tools that would be most effective for snooping and conducting further investigation. We wanted to ensure that we had the right resources at our disposal in order to obtain the necessary information and make informed decisions. By carefully considering our options and selecting the best tools for the job, we were able to proceed with our investigation. Tools used for the investigation were the following:            
            </Text>
            <br />


            <Text fontSize={'l'}>
            •	Kali Linux - a Debian-based open-source operating system designed for digital forensics and penetration testing, providing a platform for ethical hacking and security assessments. It was leveraged to use the tools further down the list.
            <br />
            <br />
            •	VMWare - software for creation and management of virtual machines (VMs). This was used to run Kali Linux.
            <br />
            <br />
            •	Bluetooth dongle TP-Link - a small device that allows a machine to communicate with other Bluetooth-enabled devices. In this case providing the kali machine with Bluetooth properties.
            <br />
            <br />
            •	hciconfig - a Linux command-line tool that is used to configure Bluetooth devices. It is used to enable and disable Bluetooth adapters, set their name, Bluetooth address, power settings, and more.
            <br />
            <br />
            •	hcitool - a command-line utility in Linux used to configure and interact with Bluetooth devices. It can be used to scan for nearby Bluetooth devices, display information about connected devices, connect to or disconnect from devices, and manipulate various Bluetooth settings.
            <br />
            <br />
            •	bettercap – is a tool used for network monitoring, network attacks, and security testing. It provides a wide range of features such as ARP spoofing, DNS spoofing, SSL stripping, and session hijacking, among others. Can be used for network reconnaissance, vulnerability scanning, and penetration testing.
            <br />
            <br />
            •	gatttool - a command-line tool used to connect and interact with devices that support the Bluetooth Low Energy (BLE) protocol. It allows users to establish a connection with a BLE device and explore its services, characteristics, and descriptors, as well as read and write its values.
            <br />
            <br />
            •	Wireshark – a network protocol analyzer that allows users to capture and analyze network traffic in real-time. It can be used to troubleshoot network issues, analyze security vulnerabilities, and perform various network-related tasks. For this specific case it was used to capture Bluetooth network packets and intercept communication between the Bluetooth lock and another device.
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Bluetooth Device Recon </Text>
            <Text fontSize={'l'}>
            After conducting research on the device, I proceeded with the third step, which involved utilizing the tools and knowledge acquired to gather more detailed information about the device. I used various techniques and tools to obtain a comprehensive understanding of the device, which enabled me to gather more information about its functionalities, features, vulnerabilities, and weaknesses. By using the available tools, I was able to dig deeper into the device's structure and design, as well as its communication protocols, to identify any potential security gaps or flaws. This process of obtaining additional information through practical application and analysis allowed me to form a completer and more accurate picture of the device, which was crucial for further analysis and decision-making.
            </Text>
            <br />

            <Text fontSize={'l'}>
            1.	hciconfig
            <br />
            To begin the reconnaissance process using Kali Linux, the first step was to connect and utilize a Bluetooth dongle. This dongle was connected to the computer's USB port to enable Bluetooth communication on the virtual machine. After that, the Bluetooth adapter was activated using the hciconfig command. This command is used to configure Bluetooth devices on Linux systems. Video 1.1[1] provides a visual demonstration of these steps.
            </Text>
            <br />


            <Text fontSize={'l'}>
            2.	hcitool
            <br />
            After turning on my Bluetooth adapter, the next step was to scan for the device. Based on my research, I knew that the Bluetooth lock I was trying to find was a BLE (Bluetooth Low Energy) device. This meant that a normal scan using hcitool would not be able to detect it. Therefore, I used the lescan command, which scans specifically for BLE devices. Video 1.2[1] shows the scan in action, which provided me with the bdaddr (similar to a MAC address) and the name of the device. This information was crucial for further investigation and possible exploitation of the device.
            </Text>
            <br />


            <Text fontSize={'l'}>
            3.	gatttool
            <br />
            As the next step of my reconnaissance process, I employed gatttool in interactive mode to establish a connection with the Bluetooth lock and extract additional information from the device. After successfully connecting to the device, I executed the "primary" command to retrieve a list of services that the device provides. In video 1.3[1], it can be seen that a service's UUID defines the properties and metadata of the accessed attribute, while the handle gives the address of a specific attribute. This information is useful in identifying the functions and characteristics of the lock and determining which attributes to explore further. By accessing the lock's services and attributes, I could gather valuable data that could help me identify vulnerabilities or potential attack vectors.
            <br />
            <br />
            After successfully retrieving a list of services on the Bluetooth lock, I proceeded to extract more information by executing the "char-desc" command in gatttool interactive mode. This command provided me with a comprehensive list of handles and their corresponding UUIDs for the characteristics of the services obtained in the previous step.
            <br />
            <br />
            After successfully retrieving the list of handles and their corresponding UUIDs, I proceeded to the next step in my reconnaissance process. This involved using the "char-read-hnd [handle]" command to read the data from all the handles. The command returns the handle's data in hexadecimal format, which can then be decoded and translated to ASCII or decimal if not encrypted (the lock uses AES 256-bit encryption). Analyzing this data further and reading it can be crucial in discovering vulnerabilities and potential attack vectors in the Bluetooth lock. Video 1.5[1] provides a demonstration of this process.
            The information I managed to extract from the handles, after decoding them, is presented in Pictures 1.1 and 1.2 below. These pictures display important data that could potentially reveal details about the device's functionalities, security measures, and other crucial information. The decoded data can aid in developing an understanding of the device's inner workings and help in formulating further steps for reconnaissance or attacking.
            <br />
            </Text>
            <br />


            <Image
                src={"/assets/images/block1.png"}
                alt="block1"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />


            <Image
                src={"/assets/images/block2.png"}
                alt="block2"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />


            <Text fontSize={'l'}>
            4.	bettercap
            <br />
            As part of my reconnaissance process, I also utilized bettercap tool to gather information about the Bluetooth lock. I initiated the ble.recon command to scan and locate the Bluetooth lock, followed by the ble.enum command to obtain a list of services and characteristics available on the BLE device. Using the ble.write command, I attempted to write data into the handle which was found to be writable. However, it was discovered that only two values, 0 and 1, could be written. Video 1.6[1] showcases the aforementioned steps in detail.
            </Text>
            <br />


            <Text fontSize={'l'}>
            5.	Wireshark
            <br />
            To supplement my use of gatttool and bettercap, I also utilized Wireshark to inspect the packets being transmitted between the Bluetooth lock and its connected device. Wireshark allowed me to analyze the packets at a deeper level, which provided me with a more comprehensive understanding of the communication between the two devices. By analyzing the packet data, I was able to identify patterns and glean further information that was not readily apparent through other methods. Video 1.7[1] provides a detailed overview of the captured packets and their contents, as well as other relevant information obtained through the use of Wireshark.
            </Text>
            <br />


            <Text fontSize={'l'}>
            6.	Flipper zero
            <br />
            Upon conducting research and experimenting with the flipper zero, it was discovered that the device lacks the functionality to act as a master device in a Bluetooth Low Energy (BLE) connection. Specifically, the flipper zero can only serve as a client device and cannot act as a master device to connect to a BLE slave device such as the Bluetooth lock.
            In the case of the Bluetooth lock, the authorized phone acts as a master device while the lock acts as a slave device. However, the flipper zero can only connect to a master device manually by the user.
            <br />
            <br />
            It's important to note that the flipper zero is constantly evolving and its capabilities may change with future updates or revisions.
            </Text>
            <br />

            
            <Text fontSize="3xl" fontWeight={"bold"}> Necessary Hardware </Text>
            <Text fontSize={'l'}>
            A Bluetooth dongle: 
            <br />
            This USB device supported specific chipset manufacturers and enabled Bluetooth connectivity on the system. It allowed communication with the Master Lock 4400D and other Bluetooth-enabled devices.
            <br />
            <br />
            An nRF Connect dongle: 
            <br />
            Developed by Nordic Semiconductor, this USB dongle was specifically designed for Bluetooth Low Energy (BLE) development and testing. It provided advanced functionalities for interacting with BLE devices, analyzing Bluetooth protocols, and performing diagnostic tasks.
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Capturing and Saving Advertisements and Services </Text>
            <Text fontSize={'l'}>
            In order to capture and intercept traffic and advertisement packets using gattacker on the central machine, the following steps were taken: 
            <br />
            <br />
            First, the command shown in Picture 1.1 was executed on the central machine. This command allowed for connection to the targeted peripheral device and enabled the central machine to act as a websocket server. 
            </Text>
            <br />

            <Image
                src={"/assets/images/lock1.png"}
                alt="lock1"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />

            <Text fontSize={'l'}>
            Next, on the second machine, the scan command was run to search for broadcasted advertisements and record them as JSON files 
            </Text>
            <br />

            <Image
                src={"/assets/images/lock2.png"}
                alt="lock2"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />


            <Text fontSize={'l'}>
            When both machines were running simultaneously, Picture 1.1 displayed a list of all discovered devices, including information such as services, MAC addresses, and general advertised details. On the other hand, the second machine saved newly discovered devices and their advertisement data in a ‘mac.adv.json’ file             

            </Text>
            <br />

            <Image
                src={"/assets/images/lock3.png"}
                alt="lock3"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />

            <Text fontSize={'l'}>
            To obtain the services and their characteristics for a specific device, the scan command was executed again, this time specifying the device ID
            </Text>
            <br />

            <Image
                src={"/assets/images/lock4.png"}
                alt="lock4"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />

            <Text fontSize={'l'}>
            The resulting information was saved in a ‘srv.json’ file which looked like this:            
             </Text>
            <br />

            <Image
                src={"/assets/images/lock5.png"}
                alt="lock5"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />

            <Text fontSize={'l'}>
            It is worth noting that prior to using gattacker, similar information was obtained using tools such as gatttool, bettercap, and other Bluetooth reconnaissance tools mentioned in the reconnaissance report             
            </Text>
            <br />


            <Text fontSize="3xl" fontWeight={"bold"}> BDADDR Spoofing </Text>
            <Text fontSize={'l'}>
            After successfully obtaining and saving the advertisements and services of the target device, I attempted to perform a spoofing attack using the "bdaddr" command, which allows for manipulation of Bluetooth device addresses in Linux. This command played a central role in a specific file within the gattacker tool, a bash script that required the adv.json file as a mandatory argument, and the srv.json file as an optional argument. However, I encountered difficulties in executing the spoofing attack due to the limitations of the bdaddr command and the Bluetooth dongle used. It appeared that the dongle lacked the necessary functionality to change its address, and there were indications that it might be a cheap replica with insufficient capabilities. While there is a possibility of running a spoof attack with the replica dongle by making local development changes to the bdaddr command, further research and understanding are currently unfeasible due to time constraints. 
            </Text>
            <br />

            <Image
                src={"/assets/images/lock6.png"}
                alt="lock6"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> DOS Attack </Text>
            <Text fontSize={'l'}>
            After the unsuccessful attempt at a spoofing attack, I proceeded to perform a denial of service (DoS) attack on the lock. To accomplish this, I executed the "advertise.js" script provided by gattacker, providing the advertisement and service files as arguments.             </Text>
            <br />

            <Image
                src={"/assets/images/lock7.png"}
                alt="lock7"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />

            <Text fontSize={'l'}>
            Once the script established a connection with the device, I attempted to unlock the lock using the mobile application. The script successfully intercepted the encrypted communication between the application and the lock, causing a disruption in their communication and rendering the lock unable to be unlocked, as depicted in the two videos below. 
            <br />
            <br />
            This DoS attack not only highlighted the vulnerability of the lock's communication channel but also provided evidence for the potential of a Man-in-the-Middle (MITM) attack if the address spoofing was successful. Intercepting and disrupting the encrypted data in this scenario demonstrated the possibility of an attacker intercepting and manipulating the communication between the lock and the mobile application, compromising the security and integrity of the system. This emphasizes the importance of addressing vulnerabilities in the Bluetooth lock's security protocols to mitigate the risk of such attacks. 
            </Text>
            <br />


            <Text fontSize="3xl" fontWeight={"bold"}> Replay Attack </Text>
            <Text fontSize={'l'}>
            For the final attack, I attempted a replay attack on the communication between the lock and the Vault app. After executing the "advertise.js" script and successfully intercepting the communication between the two, a log file was automatically generated, containing all the requests exchanged between them. To perform the replay attack, I decided to utilize the nrfConnect application, requiring the use of the second dongle (nrf52840).             
            <br />
            <br />
            In order to proceed with the replay attack, the log file needed to be converted to XML format for compatibility with the nrfConnect app. 
            </Text>
            <br />

            <Image
                src={"/assets/images/lock8.png"}
                alt="lock8"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />

            <Text fontSize={'l'}>
            Subsequently, in the nrfConnect app, I scanned for the lock device, established a connection, and attempted to replay all the previously captured commands. 
            <br />
            <br />
            However, this attempt proved unsuccessful. The lock and the app were designed with proper authentication mechanisms, making it difficult to successfully replay the captured commands. Additionally, the intercepted data was encrypted, further preventing the replay attack from being effective. 
            <br />
            <br />
            The failed replay attack highlighted the robustness of the lock and app's authentication mechanisms, as well as the security provided by encryption. These security measures prevent unauthorized access and manipulation of the lock's functionality, reinforcing the importance of implementing strong authentication and encryption protocols in Bluetooth devices to safeguard against replay attacks. 
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Conclusion </Text>
            <Text fontSize={'l'}>
            This report presented a comprehensive analysis of active attacks on the Master Lock 4400D Bluetooth lock, aiming to assess its security vulnerabilities. The necessary tools, including Gattacker, nRF Connect, and bdaddr, were utilized to carry out these attacks effectively. The report highlighted the steps involved in capturing and saving advertisements and services, attempted BDADDR spoofing, performed a denial of service (DoS) attack, and explored the possibility of a replay attack.        
            <br />
            <br />
            Through the experiments, it was observed that the lock's communication channel exhibited weaknesses, leading to successful interception and disruption of encrypted data during the DoS attack. This raised concerns about the potential for a Man-in-the-Middle (MITM) attack if address spoofing were successful. However, the replay attack was unsuccessful due to the robust authentication mechanisms implemented in both the lock and the app, as well as the encryption of intercepted data. 
            <br />
            More in-depth research regarding the best good and bad practices for the BLE Lock, please refer to this <Link color={'blue'} href="/#/case/bluetoothlock2"> page</Link>.
            </Text>
            <br />


      


        </Container>
    </Box>
);
import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const BluetoothLock2 = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl" fontWeight={"bold"}> Bluetooth Low Energy (BLE) Security Vulnerabilities and Best Practices for Device Development </Text>
            <Text fontSize={'l'}>
            As part of our group project this semester, we were given the task to explore IoT best practices and vulnerabilities. Our focus was on ISSD devices, and we conducted penetration testing on different IoT connection protocols like Bluetooth, Zigbee, and more. My specific area of research was Bluetooth Low Energy (BLE) technology, where I conducted a thorough analysis to understand its security implications. In this report, I will share my findings and provide valuable information to enhance secure development practices for BLE devices.
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> BLE Security Vulnerabilities </Text>
            <br />
            <Text fontSize="1xl" fontWeight={"bold"}> Man-in-the-Middle Attacks </Text>
            <Text fontSize={'l'}>
            One of the primary concerns in BLE security is the risk of Man-in-the-Middle (MITM) attacks. This occurs when an attacker intercepts and manipulates the communication between a central device (e.g., smartphone) and a peripheral device (e.g., smart lock). MITM attacks can lead to unauthorized access, data manipulation, or impersonation.
            <br />
            <br />
            The vulnerability arises due to the inherent characteristics of BLE communication. BLE devices often use insecure pairing methods or lack proper authentication mechanisms, making them susceptible to interception by an attacker. The attacker can eavesdrop on the communication, capturing sensitive data or commands transmitted between the central and peripheral devices. They can then manipulate this data, potentially gaining control over the peripheral device or compromising the integrity and security of the system.
            </Text>
            <br />

            <Text fontSize="1xl" fontWeight={"bold"}> Weak Encryption </Text>
            <Text fontSize={'l'}>
            Insufficient or weak encryption mechanisms can expose sensitive data transmitted over BLE. Weak encryption algorithms, improper key management, or implementation flaws can make it easier for attackers to decrypt the data and compromise the security of the system.
            </Text>
            <br />

            <Text fontSize="1xl" fontWeight={"bold"}> Spoofing and Unauthorized Access </Text>
            <Text fontSize={'l'}>
            BLE devices that do not properly authenticate connected devices are vulnerable to spoofing attacks. Attackers can impersonate legitimate devices, bypass security measures, and gain unauthorized access to sensitive information or control over the target device. This can result in various malicious activities, including unauthorized data access, manipulation, or even taking over the device's functionality.            
            </Text>
            <br />

            <Text fontSize="1xl" fontWeight={"bold"}> Inadequate Firmware and Software Security </Text>
            <Text fontSize={'l'}>
            Security vulnerabilities can arise from weak firmware or software implementations. Unpatched or outdated software, lack of secure coding practices, and improper handling of user inputs can expose devices to potential attacks. Additionally, the absence of secure coding practices during firmware development can introduce vulnerabilities that can be exploited by attackers. Improper handling of user inputs, such as insufficient input validation or lack of proper data sanitization, can lead to security breaches.            
            <br />
            <br />
            These vulnerabilities can allow attackers to exploit weaknesses in the firmware or software, gaining unauthorized access, executing malicious code, or manipulating device functionality.
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Best Practices for Developing Devices Using BLE </Text>
            <br />
            <Text fontSize="1xl" fontWeight={"bold"}> Strong Authentication and Encryption </Text>
            <Text fontSize={'l'}>
            Implement robust authentication mechanisms, such as secure pairing protocols (e.g., Elliptic Curve Diffie-Hellman) and strong encryption algorithms (e.g., AES, RSA,). Employ proper key management practices to ensure secure communication between devices.
            </Text>
            <br />

            <Text fontSize="1xl" fontWeight={"bold"}> Regular Firmware and Software Updates </Text>
            <Text fontSize={'l'}>
            Systematic approach to firmware and software updates to address security vulnerabilities promptly. Continuously monitor and patch any identified weaknesses or vulnerabilities in the BLE stack and device firmware.            
            </Text>
            <br />

            <Text fontSize="1xl" fontWeight={"bold"}> Secure Network Access Control </Text>
            <Text fontSize={'l'}>
            Enforce strict access controls to prevent unauthorized devices from connecting to the BLE network. Implement device whitelisting or secure advertising to ensure only trusted devices can establish a connection.            
            </Text>
            <br />

            <Text fontSize="1xl" fontWeight={"bold"}> Secure Data Transmission and Storage </Text>
            <Text fontSize={'l'}>
            Ensure end-to-end encryption of sensitive data transmitted over BLE. Adopt secure encryption protocols and encryption keys and implement secure data storage practices to protect user data on the device.           
            </Text>
            <br />

            <Text fontSize="1xl" fontWeight={"bold"}> Secure Coding Practices </Text>
            <Text fontSize={'l'}>
            Adhere to secure coding practices, including input validation, secure data handling, and protection against common vulnerabilities (e.g., buffer overflows, code injections). Implement security testing and code reviews throughout the development process.            
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Worst Practices to Avoid </Text>
            <br />
            <Text fontSize="1xl" fontWeight={"bold"}> Default or Weak Credentials </Text>
            <Text fontSize={'l'}>
            One critical vulnerability in Bluetooth Low Energy (BLE) security is the usage of default or weak credentials. Default credentials, such as default PINs or passwords, pose a significant risk as they are widely known and easily exploited by attackers. Weak credentials, such as easily guessable or commonly used passwords, also provide little protection against brute-force attacks or credential guessing techniques.            
            </Text>
            <br />

            <Text fontSize="1xl" fontWeight={"bold"}> Lack of Device Identity Verification </Text>
            <Text fontSize={'l'}>
            Do not rely solely on MAC addresses for device identification and authentication, as these can be easily spoofed. Implement additional verification mechanisms, such as digital certificates or challenge-response protocols.            
            </Text>
            <br />

            <Text fontSize="1xl" fontWeight={"bold"}> Neglecting Security Updates and Patches </Text>
            <Text fontSize={'l'}>
            Failing to address security updates and patches in a timely manner leaves devices vulnerable to known vulnerabilities. Regularly monitor and apply updates to the BLE stack, firmware, and software components.            
            </Text>
            <br />

            <Text fontSize="1xl" fontWeight={"bold"}> Inadequate User Awareness and Education </Text>
            <Text fontSize={'l'}>
            Neglecting user awareness and education regarding device security can lead to improper usage and potential security breaches. Provide clear instructions, guidelines, and security recommendations to users to ensure secure device operation.            
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Conclusion </Text>
            <br />
            <Text fontSize={'l'}>
            BLE technology offers tremendous opportunities for device connectivity and functionality. However, to ensure the security and privacy of BLE-enabled devices, it is crucial to address the vulnerabilities inherent in the technology. By following best practices such as implementing strong authentication, encryption, regular updates, and secure coding practices, developers can minimize security risks and provide a more secure user experience. Avoiding worst practices like weak credentials, lack of identity verification, and neglecting security updates further strengthens the security posture of BLE devices. Continuous vigilance, adherence to best practices, and staying informed about emerging security threats are key to developing robust and secure BLE-enabled devices.            
            </Text>
            <br />
        
        </Container>
    </Box>
);
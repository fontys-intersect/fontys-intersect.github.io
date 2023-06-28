import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const Foscam = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl" fontWeight={"bold"}> Foscam </Text>
            <Image
                src={"/assets/images/foscam.jpg"}
                alt="foscam"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />

            <Text fontSize="3xl" fontWeight={"bold"}> Introduction </Text>
            <Text fontSize={'l'}>
            We investigated the Foscam FI9816P network camera. Foscam is a Chinese company that sells and manufactures security surveillance products worldwide. The company is found in 2007 and is focused on network cameras and baby monitors. 
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Camera Details </Text>
            <Text fontSize={'l'}>
            •	Video resolution: 720p HD (1280x720) 
            <br />
•	Pan/Tilt: 300° horizontal, 120° vertical 
<br />
•	Wireless connectivity: 802.11 b/g/n, WEP, WPA, WPA2 encryption 
<br />
•	Audio: Built-in microphone and speaker, two-way audio support 
<br />
•	Motion detection: Email alerts and FTP upload 
<br />
•	Storage: MicroSD card slot (up to 32GB) 
<br />
•	Remote viewing: Foscam app, web browser, or third-party software 
<br />
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Tools Used </Text>
            <Text fontSize={'l'}>
            •	Wireshark             
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Weaknesses & Vulnerabilities </Text>
            <Text fontSize={'l'}>
            The Foscam camera uses FTP for video transferring. FTP uses TCP port 21 and is generally not encrypted, this can make it very vulnerable for intercepting data. We decided to test this FTP feature by capturing FTP traffic by doing a Man in The Middle (MITM) attack. We used Wireshark to capture the network traffic for a certain time. After capturing the data, we started analyzing the send data, in here we found the user credentials in plain text as shown on the image. These credential in combination with the IP-address of the FTP server creates a huge security vulnerability. The credentials can be used to login to the FTP server and use it for e.g., as jump host.            
            </Text>
            <br />
            <Image
                src={"/assets/images/foscam2.png"}
                alt="foscam"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />
               <Image
                src={"/assets/images/foscam3.png"}
                alt="foscam"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />

<Text fontSize={'l'}>
In the network traffic capture we can also find the actual video that is transferred. By filtering on ftp-data we can see all the separate images listed. To retrieve the actual images, we must follow the TCP stream, after that the data must be shown as raw data. The image can then be saved as a .png file. This image will be one frame of the video, since a video exists out of separate images, we can only capture these images separately from each other.              </Text>
            <br />

            <Image
                src={"/assets/images/foscam4.png"}
                alt="foscam"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />
            <Image
                src={"/assets/images/foscam5.png"}
                alt="foscam"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />
        

            <Text fontSize={'l'}>
            The result of this vulnerability can be seen on the image below. This is one image of the video, it can be used to verify what the camera sees or can’t see.   </Text>
            <br />
            <Image
                src={"/assets/images/foscam6.jpg"}
                alt="foscam"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />
            <br />



            <Text fontSize="3xl" fontWeight={"bold"}> Vulnerability 2 </Text>
            <Text fontSize={'l'}>
            While researching the camera, we discovered a vulnerability. Throughout our investigation of the camera, we experimented with various settings and intercepted the data exchanged between the camera and the client. Upon analyzing the captured data, we successfully identified the plain username and password contained within these packets. By replicating the steps taken during my initial data capture, we determined that the vulnerability resided in the camera's reboot function. We successfully reproduced the packet multiple times and compared it, along with the credentials, to other packets in the dataset. We also observed that the packet consistently had a size of 176 bytes and subsequently created a filter in Wireshark using this criterion.            </Text>
            <br />
            <Image
                src={"/assets/images/foscam21.png"}
                alt="foscam21"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />
            <Text fontSize={'l'}>
            After rebooting the camera in the settings, the camera starts a countdown timer with an estimation on how long it takes to reboot the camera. After about 20 seconds the packets appear in wireshark with the credentials in plain text.            
            </Text>
            <br />
            <Image
                src={"/assets/images/foscam22.png"}
                alt="foscam22"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />
            <Text fontSize={'l'}>
            The username in this case is admin and the password is pass123, which is in plaintext in the tcp packet.            
            </Text>
            <br />

            <Text fontSize="3xl" fontWeight={"bold"}> Encryption Technique </Text>
            <Text fontSize={'l'}>
            Symmetric encryption is often used for firmware encryption. This is because symmetric encryption is typically faster and more efficient than asymmetric encryption, which is another type of encryption that uses public and private keys. In symmetric encryption, the same key is used for both encryption and decryption, which makes it a simpler and more efficient process. The key is kept secret and known only to the authorized parties who need access to the encrypted firmware.            
            </Text>
            <br />
            <Text fontSize={'l'}>
            During the boot process, the firmware is decrypted as part of the startup sequence. The device's bootloader is responsible for decrypting the firmware and loading it into memory. This is why efficiency and speed are important factors for device firmware encryption, as they can impact the device's overall performance and user experience. If firmware encryption is inefficient or slow, it can slow down the device's boot time, firmware updates, and overall operation.             
            </Text>
            <br />
            <Image
                src={"/assets/images/foscam23.png"}
                alt="foscam23"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />
            <Text fontSize={'l'}>
            Salted encryption can add an extra layer of randomness and complexity to the encryption and decryption process. This makes it more difficult for attackers to decrypt the firmware data, even if they are able to obtain the encrypted data and the secret key.            
            </Text>
            <br />
            <Image
                src={"/assets/images/foscam24.png"}
                alt="foscam24"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
            <br />






            <Text fontSize="3xl" fontWeight={"bold"}> Conclusion </Text>
            <Text fontSize={'l'}>
            In conclusion, the Foscam FI9816P camera exhibits a significant vulnerability in its FTP feature. This vulnerability can be attributed more to the lack of security in the FTP protocol itself rather than a mistake made by Foscam. It would have been prudent for Foscam to opt for a much safer alternative such as SFTP or FTPS. SFTP, which employs port 22 (the same as SSH) and encrypts the traffic, renders it impossible to capture credentials or files.
<br />
<br />
Furthermore, when assessing the overall security features of the Foscam FI9816P, it becomes evident that certain areas require improvement. While it does provide authentication measures such as unique user IDs and password criteria, including an upper limit on characters, it lacks two-factor authentication. In terms of authorization, session and user role/permission validation are present, but secure data transfer and storage are not adequately addressed. Additionally, the absence of certificates for secure connections and trusted certificates poses further concerns.
<br />
<br />
On a positive note, the camera does demonstrate error handling and input validation, including text field and file upload validation. It also incorporates monitoring, logging, version updates, and secret management capabilities. However, data handling and transparency remain areas where improvements are needed.
<br />
<br />
Overall, it is crucial for Foscam to address the FTP vulnerability and consider implementing stronger security measures, such as transitioning to more secure protocols and enhancing data handling and transparency to ensure the utmost protection for their users' privacy and information.            </Text>
            <br />

            <br />
        </Container>
    </Box>
);
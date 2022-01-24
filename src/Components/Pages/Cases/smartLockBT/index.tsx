import {Box, Container, Image, Text, ListItem, UnorderedList, Link} from '@chakra-ui/react';

export const SmartLockBT = () => (
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Smart Lock Bluetooth case</Text>
            <br/>
            <Text fontSize="xl" fontWeight={"bold"}> Introduction </Text>
            <Text fontSize={'l'}>
                The Master Lock Bluetooth padlock is a Bluetooth enabled padlock which comes in two form factors for
                indoor and
                outdoor usage. It has the look and feel of an ordinary padlock but instead of a keyway, it has a
                4-directional
                pad that serves as the input device for the override mechanism.
            </Text>
            <br/>
            <Text fontSize={'xl'} fontWeight={"bold"}>Table of Contents</Text>
            <UnorderedList>
                <ListItem>Strengths</ListItem>
                <ListItem>Vulnerabilities</ListItem>
                <ListItem>Best practices</ListItem>
                <ListItem>Conclusion</ListItem>
            </UnorderedList>
            <br/>
            <Text fontSize={'xl'} fontWeight={"bold"}>Strengths</Text>
            <Text fontSize={'ll'}>
                During our research we weren't able to read any of the data communications from the device to the mobile
                application, through bluetooth. For the bluetooth communication we used bluetooth scanning on a kali
                linux
                machine. Both of these methods returned no usable results.
            </Text>
            <br/>
            <Text fontSize={'xl'} fontWeight={"bold"}>Vulnerabilities</Text>
            <Text fontSize={'l'}>
                One of the possible vulnerabilities is that the device uses low power bluetooth. This means that the
                device has
                a bigger bluetooth range. Normally the range of bluetooth devices is very limited and a possible
                attacker would
                need to be very close to the device to pick up any bluetooth communication. with low power bluetooth
                this range
                increases significantly. This means that a possible attacker can read the bluetooth traffic from a
                larger range
                and attack without being suspicious.
            </Text>
            <Text fontSize="l" fontWeight="bold">
                Insecure Default Settings
            </Text>
            <Text fontSize="l">
                The Lock also has a standard password that is not required to be changed and limited requirements to the
                strength of this password. Meaning that if this standard password is known by attackers, they can access
                the
                lock easily.
            </Text>
            <Text fontSize="l" fontWeight="bold">
                Fix:
            </Text>
            <Text fontSize="l">
                force the user to create a password at device setup, set clear and secure password requirements.
                Including but
                not limited to the following At least 8 combinations with a possibility of more inputs like a number
                sequence.
            </Text>
            <Text fontSize="l" fontWeight="bold">
                Insecure Communication
            </Text>
            <Text fontSize="l">
                Research from a third party resulted in 75% of the low energy bluetooth devices being vulnerable in the
                way that
                they send their user credentials in plain text instead of using a form of encryption.
            </Text>
            <br/>
            <Image
                src={'/fontys-intersect-2021/assets/images/BTlockCommunication.png'}
                alt="test"
                h={'30%'}
                w={'30%'}
            />
            <Text fontSize="l">Figure 1. Master Lock components and their communication (CS Kent)</Text>
            <Text fontSize="l" fontWeight="bold">
                Fix:
            </Text>
            <Text fontSize="l">Use a form of encryption.</Text>
            <br/>
            <Text fontSize="xl" fontWeight={"bold"}>
                Best practices
            </Text>
            <Text fontSize="l">
                For bluetooth padlocks we found that the communication between the padlock and the application on the
                phone
                should be <Link color={"blue"}
                                href={"/fontys-intersect-2021/#/bestpractices/securedata"}>encrypted</Link>. This will
                prevent plain text transmissions which will contain user credentials, hereby
                making the “man in the middle” attack obsolete.
            </Text>
            <br/>
            <Text fontSize="xl" fontWeight={"bold"}>
                Conclusion
            </Text>
            <Text fontSize="l">
                Basic things such as making sure that the default settings/ passwords don't have a findable factory
                default. And making sure that the proper protocol is used for communication. Is key to improving the
                security standard of this device.
            </Text>
        </Container>
        <Container h={"200px"}></Container>
    </Box>
);

import { Box, Container, Text, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const SmartLock = () => (
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Smart Lock Biometric case</Text>
            <br />
            <Text fontSize="xl" fontWeight={"bold"}> Introduction </Text>
            <Text fontSize={'l'}>
                The Master Lock 4901EURDLHCC is a biometric security lock that is used for locking something that needs
                to be locked outdoors.
                It uses a biometric fingerprint reader and registered fingerprints to check if somebody is supposed to
                have access to this lock. It can also be unlocked by a preset code and it can store-up to 10
                fingerprints.
            </Text>
            <br />
            <Text fontSize={'xl'} fontWeight={"bold"}>Table of Contents</Text>
            <UnorderedList>
                <ListItem>Strengths</ListItem>
                <ListItem>Vulnerabilities</ListItem>
                <ListItem>Possible fixes</ListItem>
                <ListItem>Best practices</ListItem>
                <ListItem>Conclusion</ListItem>
            </UnorderedList>
            <br />
            <Text fontSize={'xl'} fontWeight={"bold"}>Strengths</Text>
            <Text fontSize={'l'}>
                The device makes use of a biometric scanner, while this also has some downsides, generally it serves as
                an additional form of secure authentication. The device also has a reset mechanism, that locks the device, when battery life is depleted.
            </Text>
            <br />
            <Text fontSize={'xl'} fontWeight={"bold"}>Vulnerabilities</Text>
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
                Lack of Physical Hardening
            </Text>
            <Text fontSize="l">
                The device can’t deal with physical attacks very well.
            </Text>
            <Text fontSize="l" fontWeight="bold">
                Fix:
            </Text>
            <Text fontSize="l">
                use a better design and stronger metals, also implement a cost-effective mechanism to instantly notify
                your customer about device tampering, notification delivery should be instant.
            </Text>
            <Text fontSize="l" fontWeight="bold">
                Bad error handling
            </Text>
            <Text fontSize="l">
                After inputting the correct code the device will instantly unlock, given that the standard number of
                combinations that people will have to go through to unlock your device is between 256 (4^4) and 4096
                (4^6), if the users code is 6 combinations long just inputting 6 numbers everytime can decrease the
                number of attempts to get in significantly.
                Also let users have limited login attempts within a short amount of time. This will increase the time an
                attacker will have to put in to open the lock with a bruteforce attack.
            </Text>
            <Text fontSize="l" fontWeight="bold">
                Fix:
            </Text>
            <Text fontSize="l">
                Have a confirm button that makes it so that the user has to confirm their code every time.
            </Text>
            <br />
            <Text fontSize="xl" fontWeight={"bold"}>
                Best practices
            </Text>
            <Text fontSize="l">
                The best practices found in this case are related to <Link color={"blue"}
                    href={"/#/owasp/top/10"}>physical
                    hardening</Link> , and <Link color={"blue"} href={"/#/owasp/top/9"}>default
                        settings</Link>; more about these best practices can be read on their respective pages.
            </Text>
            <br />
            <Text fontSize="xl" fontWeight={"bold"}>
                Conclusion
            </Text>
            <Text fontSize="l">
                All of the vulnerabilities in the application can be fixed. To fix those, for each vulnerability the
                best practice needs to be followed. Mainly the fixes that have been mentioned above should be applied,
                this will substantially increase the safety of the devices.

            </Text>
        </Container>
        <Container h={"200px"}></Container>
    </Box>
);

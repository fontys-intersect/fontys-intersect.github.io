import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const SecretManagement = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Secret management</Text>
      <Text fontSize={'l'}>
        Secret management is a process that makes sure sensitive data like secret encryption keys, API keys and
        passwords are stored in a centralized secure way. This is done so that malicious users that want to abuse these
        keys to gain access to other sensitive data can’t do this. The other reason for doing this is that if all of
        your secrets are centralized they can also be easily accessed by complex IT systems to get access to the
        sensitive data that’s for example behind an API.
      </Text>
      <br />
      <Text fontSize={'xl'}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Explanation</ListItem>
        <ListItem>Usage</ListItem>
        <ListItem>Vulnerabilities</ListItem>
        <ListItem>Cases</ListItem>
        <ListItem>Bibliography</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={'xl'}>Explanation</Text>
      <Text>
        The secrets that secret management is focused on are private pieces of information that can act as a key to
        unlock protected resources or private sensitive data that complex IT systems need to operate. Examples of secret
        keys are:
        <UnorderedList>
          <ListItem>Passwords</ListItem>
          <ListItem>Certificates</ListItem>
          <ListItem>SSH keys</ListItem>
          <ListItem>API keys</ListItem>
          <ListItem>Encryption keys</ListItem>
        </UnorderedList>
        These secrets are usually stored in secret management tools that are specifically made to ensure protection of
        these keys. These keys can then be accessed by specific users that are authorized for example developers.
      </Text>
      <br />
      <Text fontSize={'xl'}>Usage</Text>
      <Text fontSize={'l'}>
        Organizations may avoid a variety of cybersecurity risks, such as illegal access to vital data and systems, data
        losses, and data breaches, by implementing a well-thought-out secrets management policy. Secret management helps
        ensuring security at the following three areas:
        <UnorderedList>
          <ListItem>
            <Text fontWeight="Bold">Cloud service security:</Text>helps Limit and regulate access to key cloud-based
            services and accounts.
          </ListItem>
          <ListItem>
            <Text fontWeight="Bold">Infrastructure security:</Text> secret management helps to protect devices, user
            accounts, application accounts from intrusions by malicious users
          </ListItem>
          <ListItem>
            <Text fontWeight="Bold">Data security:</Text> helps protect against data compromise on key
            systems,storages,databases and other resources.
          </ListItem>
        </UnorderedList>
      </Text>
      <br />
      <Text fontSize={'xl'}>Vulnerabilities</Text>
      <Text fontSize={'l'}>
        Seeing as someone within the company will still need access to the secret management tool where the secrets are
        stored you will always have a risk. This risk is mainly disgruntled employees, these employees could expose or
        sell the secrets located in the key vault to any malicious users.
      </Text>
      <br />
      <Text fontSize={'xl'}>Cases</Text>
      <Text fontSize={'l'}>
        None of our cases had any examples of secret management. We didn’t find any hard coded passwords or secrets in
        any case so you can argue that all our cases use this best practise.
      </Text>
      <br />
      <Divider m={2} />
      <Text fontSize="3xl"> Bibliography </Text>
      <Text fontSize={'xl'}>
        The bibliography according to this page is <br />
        <UnorderedList>
          {/* <ListItem>
            INTERSECT. (z.d.). dcypher. Geraadpleegd op 10 december 2020, van
            https://www.dcypher.nl/en/intersect
          </ListItem> */}
          <ListItem>
            CyberArk Software. (2021, 17 september). What is Secrets Management? - Definition. CyberArk. Geraadpleegd op
            2 december 2021, van &nbsp;
            <Link href="https://www.cyberark.com/what-is/secrets-management/">
              cyberark
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

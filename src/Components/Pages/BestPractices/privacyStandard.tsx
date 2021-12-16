import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const PrivacyStandard = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Privacy as a standard (privacy by default)</Text>
      <Text fontSize={'l'}>
        We speak of Privacy by Default when the default settings of a program, app, website, service or device are such
        that maximum privacy is observed. Hence the Dutch term from the AVG data protection by default settings. Privacy
        by Default is often associated with Privacy by Design. They are related concepts; Privacy by Design indicates
        that the protection of personal data has been embraced from the start when developing information systems and
        services. It is, as it were, embedded in the DNA of the system or service. Privacy by Default and Privacy by
        Design are defined as concepts in Article 25 of the General Data Protection Regulation. They can be regarded as
        the duty of care of an organization to achieve the least possible infringement of the privacy of the persons
        involved.
      </Text>
      <br />
      <Text fontSize={'xl'}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Intro</ListItem>
        <ListItem>Explanation</ListItem>
        <ListItem>Usage</ListItem>
        <ListItem>Vulnerability</ListItem>
        <ListItem>Bibliography</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={'xl'}>Explanation</Text>
      <Text>
        For example Websites and social networks in particular want to learn as much as possible from you. This allows
        them to expand their services, earn more money by reselling your information, and serve you more relevant ads.
        It follows from this that it benefits from you providing as much personal data as possible. To curb that use,
        and to prevent abuse, visitors or users must be protected (against themselves). Therefore, the default settings
        should be such that they guarantee maximum privacy. Good default settings are so important because users often
        leave the default settings unchanged. This is often caused by lack of clarity or haste. In addition, there is a
        large group of people who are not interested in it because they do not understand the consequences of their
        choices. Users therefore benefit from the suggested options being privacy-friendly, hence the name Privacy by
        Default.
      </Text>
      <br />
      <Text fontSize={'xl'}>Usage</Text>
      <Text fontSize={'l'}>
        Users of an application must be assigned a role. Roles are possible for system administrators, users,
        supervisors, etc. For each role it is determined which data can be viewed, changed and, for example, deleted. A
        customer service representative is not allowed to view the salary information of all employees, let alone change
        it. For an application that has a personal data export function, access to that function must be limited to
        employees with a role that allows it. This prevents unnecessary access to bulk data and reduces the risk of the
        data falling into the wrong hands.
      </Text>
      <br />
      <Text fontSize={'xl'}>Vulnerabilities</Text>
      <Text fontSize={'l'}>
        dutch law requires companies to try and gather as little as possible privacy data from its users, but most of
        the time users can opt-in to give more private data than necessary. The vulnerability that exists here stems
        from this. Users can sometimes give more private data than is necessary by for example filling in a registration
        form and not paying attention to which fields are required and then filling in the whole form giving more
        private data than is required.
      </Text>
      <br />
      <Text fontSize={'xl'}>Cases</Text>
      <Text fontSize={'l'}>
        We don't have an explicit example in our cases but in theory all devices should apply this best practices, as it
        is required by dutch law. Not following this law opens the possibility for some serious consequences like a huge
        fine.
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
            Q. (z.d.). Privacy by Default : privacy is de standaard instelling. © 2011–2021 Quodata -- www.quodata.nl.
            Geraadpleegd op 3 december 2021, van &nbsp;
            <Link href="https://www.justitia.nl/privacy/privacy-by-default#">
            justitia
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
  </Box>
);

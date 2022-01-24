import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const Burpsuite = () => (
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> kopje </Text>
            <Text fontSize={'l'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
            <br />
            <Text fontSize={'xl'}>Table of Contents</Text>
            {/* UnorderedList is a list with bullet points, OrderedList will contain numbers */}
            <UnorderedList>
                {/* ListItem will be the styled tag to get the items in the list */}
                <ListItem>content</ListItem>
                <ListItem>content</ListItem>
                <ListItem>content</ListItem>
                <ListItem>content</ListItem>
                <ListItem>content</ListItem>
            </UnorderedList>
            <br />
            {/* Text tags can be altered with size, colour etc. */}
            <Text fontSize={'xl'}>kopje</Text>
            <Text fontSize={'ll'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
            <br />
            <Text fontSize={'xl'}>kopje</Text>
            <Text fontSize={'l'} fontWeight={'bold'}>
                kopje 2
            </Text>
            <Text fontSize={'l'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
            <br />
            <Text fontSize={'l'} fontWeight={'bold'}>
                kopje 2
            </Text>
            <Text fontSize={'l'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
            <br />
            <Text fontSize={'l'} fontWeight={'bold'}>
                kopje 2
            </Text>
            <Text fontSize={'l'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
            <br />
            <Text fontSize={'l'} fontWeight={'bold'}>
                kopje 2
            </Text>
            <Text fontSize={'l'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
            <br />
            <Text fontSize={'l'} fontWeight={'bold'}>
                kopje 2
            </Text>
            <Text fontSize={'l'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                <br />
                <UnorderedList>
                    <ListItem>listitem</ListItem>
                    <ListItem>listitem</ListItem>
                    <ListItem>listitem</ListItem>
                    <ListItem>listitem</ListItem>
                    <ListItem>listitem</ListItem>
                </UnorderedList>
            </Text>
            <br />
            <Text fontSize={'xl'}>kopje 1</Text>
            <Text fontSize={'l'}>
                <UnorderedList>
                    <ListItem>listitem</ListItem>
                    <ListItem>listitem</ListItem>
                </UnorderedList>
            </Text>
            <br />
            <Text fontSize={'xl'}>kopje 1</Text>
            <Text fontSize={'l'} fontWeight={'bold'}>
                kopje 2
            </Text>
            <Text fontSize={'l'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.{' '}
            </Text>
            {/* Links can be changed in terms of visuals etc, href will be the link towards the webpage */}
            <Link fontSize={'l'} fontWeight={'bold'} href="/fontys-intersect-2021/#/case/smartlock">
                link kopje 2
            </Link>
            <Text fontSize={'l'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
            <Link fontSize={'l'} fontWeight={'bold'} href="/fontys-intersect-2021/#/case/boschsiemens">
                link kopje 2
            </Link>
            <Text fontSize={'l'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
            {/* Image tag; contains the source of the image (this image can be found in the assets/image folder),
                Alt will contain the text if the image can't be loaded */}
            <Image
                src={"/fontys-intersect-2021/assets/images/intersectlogo.png"}
                alt="test"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
        </Container>
    </Box>
);
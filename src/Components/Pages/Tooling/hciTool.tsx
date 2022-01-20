import {
    Box,
    Container,
    Image,
    Text,
    Divider,
    ListItem,
    UnorderedList,
    Link,
  } from "@chakra-ui/react";
  
  export const HciTool = () => (
    <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> kopje </Text>
      <Text fontSize={'l'}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </Text>
      <br />
      <Text fontSize={'xl'}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>content</ListItem>
        <ListItem>content</ListItem>
        <ListItem>content</ListItem>
        <ListItem>content</ListItem>
        <ListItem>content</ListItem>
      </UnorderedList>
      <br />
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
      <Image
            src={"/fontys-intersect-2021/assets/images/intersectlogo.png"}
            alt="test"
            h="auto" //height
            w="auto" //width
            marginLeft={"10%"}
        />
    </Container>
  </Box>
  )
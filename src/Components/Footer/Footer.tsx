import {
    Box,
    Container,
    SimpleGrid,
    Text,
    Stack,
    Icon,
    Link,
  } from "@chakra-ui/react";
  import { FaTwitter, FaLinkedin } from "react-icons/fa";
  
  export const Footer = () => {
    return (
      <Box
        as="footer"
        pt={6}
        pb={6}
        px={[4, 10]}
        bgColor="gray.800"
        color="white.600"
        flexDir='column'
        left='auto'
        bottom='0'
        right='0'
        w="100%"
        mt={"-200px"}
        marginTop={"auto"}
      >
        <Container as={Stack} maxW="8xl">
          <SimpleGrid columns={[2, 2, 4]} row={[2, 2, 1]} spacing={4}>
            <Stack spacing={2}>
              <Text fontSize="2xl" fontWeight="bold" color="white" mb={2}>
                Intersct
              </Text>
              <Link variant="footer" color="white" href="https://intersct.nl/">
                Website
              </Link>
              <Link
                variant="footer"
                color="white"
                href="https://intersct.nl/the_project/"
              >
                About
              </Link>
              <Link
                variant="footer"
                color="white"
                href="https://intersct.nl/contact/"
              >
                Contact Intersct
              </Link>
  
              <Stack direction="row" spacing={6}>
                <Link
                  isExternal
                  color="white"
                  aria-label="Visit the Intersct linkedin page"
                  href="https://www.linkedin.com/company/INTERSCT"
                >
                  <Icon
                    as={FaLinkedin}
                    w={6}
                    h={6}
                    color="white"
                    transition="color 0.2s"
                    _hover={{ color: "whiteAlpha.800" }}
                  />
                </Link>
                <Link
                  isExternal
                  color="white"
                  aria-label="Intersct twitter"
                  href="https://twitter.com/INTERSCT"
                >
                  <Icon
                    as={FaTwitter}
                    w={6}
                    h={6}
                    transition="color 0.2s"
                    _hover={{ color: "whiteAlpha.800" }}
                  />
                </Link>
              </Stack>
            </Stack>
            <Stack align="flex-start">
              <Text fontSize="2xl" fontWeight="bold" color="white" mb={2}>
                The team
              </Text>
              <Link variant="footer" color="white" href="#">
                About us
              </Link>
              <Link variant="footer" color="white" href="#">
                #
              </Link>
              <Link variant="footer" color="white" href="#">
                #
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  };
  
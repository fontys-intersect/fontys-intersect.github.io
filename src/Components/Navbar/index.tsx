import { ReactNode } from "react";
import {
  Box,
  Image,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Ethics"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"/" + children?.toString().toLocaleLowerCase()}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image boxSize="35px" src={"/assets/images/random.png"} alt="Logo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/"}
              >
                Home
              </Link>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Menu>
              <MenuButton
                // as={Button}
                rounded={"md"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                px={2}
                py={1}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
              >
                IoT Security Research
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="/case/wled">
                  IoT test tooling
                </MenuItem>
                <MenuItem as="a" href="/"> Tools used</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                // as={Button}
                rounded={"md"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                px={2}
                py={1}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
              >
                OWASP
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="/owasp/top">
                  IoT Owasp Top 10
                </MenuItem>
                <MenuItem as="a" href="/">Common exploits</MenuItem>
                <MenuItem as="a" href="/">Mitigation techniques</MenuItem>
              </MenuList>
            </Menu>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                // as={Button}
                rounded={"md"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                px={2}
                py={1}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
              >
                Cases
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="/case/wled">
                  WLED
                </MenuItem>
                <MenuItem as="a" href="/">Bosch Siemens</MenuItem>
                <MenuItem as="a" href="/">Case 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

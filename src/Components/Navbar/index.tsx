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
    href={
      "/fontys-intersect-2021/#/" + children?.toString().toLocaleLowerCase()
    }
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
            <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/fontys-intersect-2021/#/"}
              >
                Fontys Intersect
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/fontys-intersect-2021/#/"}
              >
                Home
              </Link> */}
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
                  <MenuItem as="a" href="/fontys-intersect-2021/#/owasp/top">
                    OWASP
                  </MenuItem>
                  <MenuItem as="a" href="/fontys-intersect-2021/#/article/home">
                    {" "}
                    Articles
                  </MenuItem>
                  <MenuItem as="a" href="/fontys-intersect-2021/#/tooling">
                    {" "}
                    Tools used
                  </MenuItem>
                </MenuList>
              </Menu>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/fontys-intersect-2021/#/bestpractices"}
              >
                Best Practices
              </Link>
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
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem as="a" href="/fontys-intersect-2021/#/case">
                    Overview
                  </MenuItem>
                  <MenuItem as="a" href="/fontys-intersect-2021/#/case/wled">
                    WLED
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="/fontys-intersect-2021/#/case/boschsiemens"
                  >
                    Bosch Siemens
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="/fontys-intersect-2021/#/case/smartlock"
                  >
                    Smart Lock Biometric
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="/fontys-intersect-2021/#/case/gooveysmarttemp"
                  >
                    Goovey Smart Temp
                  </MenuItem>
                  <MenuItem as="a" href="/fontys-intersect-2021/#/case/printer">
                    HP Printer
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="/fontys-intersect-2021/#/case/smartlockbt"
                  >
                    Smart Lock Bluetooth
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="/fontys-intersect-2021/#/case/solaredge"
                  >
                    Solar Edge
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
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

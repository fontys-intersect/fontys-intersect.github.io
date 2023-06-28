import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuDivider,
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
      "/#/" + children?.toString().toLocaleLowerCase()
    }
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Links to different pages can be added to the header,
  // Adding a single link (to an overview) can be done with the <Link> Tag
  // Adding a dropdown can be done with the <Menu> tag
  // The button to open the dropdown will be <MenuButton>
  // Within this dropdown, you need to create a <MenuList> in which the
  // <MenuItem> will be placed, these have to be specified with `as="a"`, this will
  // create a link from the MenuItem without changing it's visuals etc.

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
                href={"/#/"}
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
                href={"/#/"}
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
                  <MenuItem as="a" href="/#/owasp/top">
                    OWASP
                  </MenuItem>
                  <MenuItem as="a" href="/#/article/home">
                    {" "}
                    Articles
                  </MenuItem>
                  <MenuItem as="a" href="/#/tooling">
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
                href={"/#/bestpractices"}
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
                  <MenuItem as="a" href="/#/case">
                    Overview
                  </MenuItem>
                  <MenuDivider/>
                  <MenuGroup title="2023"/>
                  <MenuItem as="a" href="/#/case/flipperzero">
                    Flipper Zero & Kismet
                  </MenuItem>
                  <MenuItem as="a" href="/#/case/smartlighting">
                    Philips Hue Bridge
                  </MenuItem>
                  <MenuItem as="a" href="/#/case/foscam">
                    Foscam
                  </MenuItem>
                  <MenuItem as="a" href="/#/case/bluetoothlock">
                    Master Bluetooth Lock
                  </MenuItem>
                  
                  <MenuDivider/>
                  <MenuGroup title="2021-2022">
                    
                    <MenuItem as="a" href="/#/case/wled">
                    WLED
                  </MenuItem>
                    <MenuItem
                      as="a"
                      href="/#/case/boschsiemens"
                    >
                      Bosch Siemens
                    </MenuItem>
                    <MenuItem
                      as="a"
                      href="/#/case/smartlock"
                    >
                      Smart Lock Biometric
                    </MenuItem>
                    <MenuItem
                      as="a"
                      href="/#/case/gooveysmarttemp"
                    >
                      Goovey Smart Temp
                    </MenuItem>
                    <MenuItem as="a" href="/#/case/printer">
                      HP Printer
                    </MenuItem>
                    <MenuItem
                      as="a"
                      href="/#/case/smartlockbt"
                    >
                      Smart Lock Bluetooth
                    </MenuItem>
                    <MenuItem
                      as="a"
                      href="/#/case/solaredge"
                    >
                      Solar Edge
                    </MenuItem>
                  </MenuGroup>
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

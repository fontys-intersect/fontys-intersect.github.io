import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from "@chakra-ui/react";

export const Wled = () => (
  <Box w={"100%"} alignItems="center">
    <Image
      src={"/fontys-intersect-2021/assets/images/wled_logo.png"}
      alt="test"
      h={"15%"}
      w={"15%"}
      marginLeft={"10%"}
    />
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> WLED </Text>
      <Text fontSize={"l"}>
        This website describes the research conducted on behalf of the INTERSCT
        project. The goal of the project behind this site was to write general
        guidelines for securing all IoT devices and applications by pentesting
        multiple IoT devices. The main focus was on smart office and smart
        industry cases, but the guidelines are written in a more general way,
        but based on the specific findings. “INTERSECT addresses this societal
        and technical challenge by adopting a completely new, foundational
        perspective that brings together security research (e.g. design,
        defence, attack generation) with legal and criminology
        approaches”(INTERSECT, z.d.). Intersect is funded by the NWO, the
        national dutch organisation for research. “NWO’s core task is performed
        in the NWO domains, research institutes and regional bodies: encouraging
        quality and innovation in the sciences”(About, z.d.). The added value of
        this site to the intersect vision will be writing guidelines based on
        findings made during the research project connected to this site.
      </Text>
      <Divider m={2} />
      <Text fontSize="3xl"> Bibliography </Text>
      <Text fontSize={"xl"}>
        The bibliography according to this page is <br />
        <UnorderedList>
          {/* <ListItem>
            INTERSECT. (z.d.). dcypher. Geraadpleegd op 10 december 2020, van
            https://www.dcypher.nl/en/intersect
          </ListItem> */}
          <ListItem>
            About. (z.d.). NWO. Geraadpleegd op 10 december 2020, van&nbsp;
            <Link href="https://www.nwo.nl/en/about-nwo">
              About nwo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
  </Box>
);

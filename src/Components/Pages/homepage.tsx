import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link} from "@chakra-ui/react";

export const Homepage = () => (
    <Box w={"100%"} alignItems="center">
        <Image
            src={"/fontys-intersect-2021/assets/images/intersectlogo.png"}
            alt="test"
            h="auto"
            w="auto"
            marginLeft={"10%"}
        />
        <Container maxW={["100%", "80%"]} h={"100vh"} p={4}>
            <Text fontSize="3xl" fontWeight={"bold"}> The project </Text>
            <Text fontSize={"l"}>
                This blahdieblah website describes the research conducted on behalf of the INTERSCT
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
            <br/>
            <Text fontSize="3xl" fontWeight={"bold"}> Objective</Text>
            <Text fontSize={"l"}>
                The objective of these guidelines is to show how to secure IoT devices better in the current best
                possible way. This will be done by doing research performing pentest and analysis.
            </Text>
            <br/>
            <Text fontSize="3xl" fontWeight={"bold"}> Scope </Text>
            <Text fontSize={"l"}>
                The scope of this project is limited to pentesting several smart devices. If there is more time to
                perform pentests, we will be looking at other environments to test. That possible environment is not
                only a device; It will be something that’s running on an OS, has communication, connections and a
                back-end system.</Text>
            <br/>
            <Text fontSize="3xl" fontWeight={"bold"}> Target Audience </Text>
            <Text fontSize={"l"}>
                The guidelines presented are there for individuals or companies to use to secure their IoT devices
                better. We have made sure to present our guidelines in a way that everyone can understand and implement
                on their own.
            </Text>
            <br/>
            <Text fontSize="3xl" fontWeight={"bold"}> Structure of the research </Text>
            <Text fontSize={"l"}>
                The research approach of this project is case-based. This means that all our information is backed by
                one or more case studies. During this project, case studies have been done. More about the case studies
                can be found “here”. Besides the case studies, a literature study has been done. In this literature
                study, the “OWASP IoT Top 10” vulnerabilities have been researched, based on these vulnerabilities and
                the vulnerabilities found in case studies, best practices have been formed and researched, for
                individuals and companies to use. Tools used during the case studies have also been researched, this
                research has been documented. Combining these research approaches enhances the overall quality of these
                guidelines. </Text><br/>
            <Text fontSize="3xl" fontWeight={"bold"}> Structure of the website </Text>
            <Text fontSize={"l"}>
                The structure of the website is as follows: research that concludes what best practices are missing or that are used within an IoT device are mentioned in the cases. Each IoT device that was researched has its own case. from within the cases we refer to the corresponding best practices, and tools that have been used. A separate page is made to further illustrate the use with the tools. </Text><br/>

            <Divider m={2}/>
            <Text fontSize="3xl"> Bibliography </Text>
            <Text fontSize={"xl"}>
                The bibliography according to this page is <br/>
                <UnorderedList>
                    {/* <ListItem>
            INTERSECT. (z.d.). dcypher. Geraadpleegd op 10 december 2020, van
            https://www.dcypher.nl/en/intersect
          </ListItem> */}
                    <ListItem>
                        About. (z.d.). NWO. Geraadpleegd op 10 december 2020, van&nbsp;
                        <Link href="https://www.nwo.nl/en/about-nwo">
                            About nwo <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Text>
        </Container>
        <Container h={"200px"}></Container>
    </Box>
);

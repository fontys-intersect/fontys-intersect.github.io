import {
  Box,
  Container,
  Image,
  Text,
} from "@chakra-ui/react";

export const WLEDArticle = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "40%"]} p={4}>
      <Text fontSize="3xl" fontWeight={"bold"}>
        Are your lights being controlled?
      </Text>
      <Text fontSize="l"> Wessel Sparla</Text>
      <br />
      <Text fontSize="l"> Student Fontys ICT & Cyber Security</Text>
      <br />
      <Image
        src={"/assets/images/WLEDArticle.png"}
        alt="test"
        h={"100%"}
        w={"100%"}
        marginLeft={"0%"}
        marginTop={"1%"}
      />
      <Text fontSize="l">
        Online shopping is something that most of us do on a regular basis.
        Would you shop at an online web shop? Where a giant popup suddenly
        appears, warning you that your connection to the website is not secure?
        Probably not.
      </Text>
      <br />
      <Text>
        But most people don’t notice that cheap Internet of Things (IoT, or
        smart connected) devices often can be accessed through an insecure
        connection protocol. As an example,“Wled” is a program that is widely
        used among cheap led strip users, this software is publicly available
        and can be accessed through an app or a web interface. Both use the
        network to communicate with the led strips in your network and as you
        might have guessed, it lacks that secure connection. This means, led
        strips that make use of this software are very vulnerable. The research
        on this software points to the flaws that allow hackers to control the
        lighting in your home and other spaces.
      </Text>
      <br />
      <Text>
        With the increasing digitalization of our society and the increase of
        the number of purchased cheap smart home products (such as led strips),
        average homes become increasingly more vulnerable to exploitation by
        wrongdoing individuals. The reason for this is that average home
        networks are very simple/basic, often only having a single Wi-Fi access
        point. When these individuals gain access to the network, they can also
        get access to every single device within this network. Another issue is
        that when it comes to setting up IoT(smart) devices, users don't always
        think about security. If you don't urge the user to alter the settings
        (at the very least the default password), this will not be done, which
        gives hackers an easier time.
      </Text>
      <br />
      <Text>
        It is alarmingly easy to obtain access to and gain control of a person's
        smart home, since there are still numerous inadequately secured devices
        dating back to bygone technological eras when security was not a top
        priority. The ease of use of internet connected smart devices and smart
        home hubs is a double-edged sword, and there is a trade-off between
        simplicity of use and security. Budget IoT(smart) devices are creeping
        their way into many homes. It is crucial to segment your network and
        protect your devices by changing default passwords and performing the
        recommended extra security steps, so that even when intruders gain
        access to your network, they won’t be able to hack your devices.
      </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

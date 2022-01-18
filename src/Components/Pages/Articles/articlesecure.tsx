import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Image,
  Text,
  Divider,
  ListItem,
  UnorderedList,
  Link,
  OrderedList,
} from "@chakra-ui/react";

export const SecureArticle = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "40%"]} p={4}>
      <Text fontSize="3xl" fontWeight={"bold"}>
        Only my phone and PC need to be secure right?
      </Text>
      <br />
      <Text fontSize="l"> Julius den Blanken</Text>
      <br />
      <Text fontSize="l"> Student Fontys ICT & Cyber Security</Text>
      <br />
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Introduction
      </Text>
      <Text fontSize="l">
        In this article I will talk a bit about IoT network devices and their
        security and why you should consider the possibilities of attackers when
        you add IoT network devices to your own personal network.
      </Text>
      <br />

      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Only my PC and Phone matter, right?
      </Text>
      <Text>
        The short answer is no. People often don’t think about the security of
        other devices in their network because they are only aware that their
        most fundamental devices should be secure like their PC and Phone. In
        reality this is far from the truth due to the fact that other devices in
        your network also can be used to gain access to your inside network,
        this can result in a lot of problems. Even developers often don’t think
        about the security implications of their network devices which results
        in that a lot of these devices aren’t as secure as you probably think.
        The attacker can use the leverage of being inside your network without
        you knowing about it, which makes attacking someone a lot easier since
        they have a starting point that they can use to gather data or look for
        more possibilities to attack you.
      </Text>
      <br />
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        What are the risks of not securing my other network devices?
      </Text>
      <Text>
        Since we have IoT devices nowadays there is a lot of data that is
        collected from us that we may not be so aware of. This data can be used
        in a lot of ways that we may not even realize. This can be a
        functionality that maybe shows which devices are currently connected to
        your wireless network and since a lot of people don’t turn their devices
        off at home someone could monitor who is or is not at home for example.
        But another scary thing is that most home networks don’t detect if a
        device is compromised. This can make it so that an attacker sees that an
        IoT device on your network is vulnerable and attacks. This can result in
        the attacker infiltrating your network and now being able to extract
        data from this device or other devices inside your network or even
        attack other devices in your network that the attacker previously didn’t
        have access to.
      </Text>
      <br />
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Should I be concerned?
      </Text>
      <Text>
        Well … I would say yes and no. The reason for this is it is not your job
        to make these devices secure and even if you wanted to do that it would
        require quite some resources and knowledge you don’t have at your
        disposal so making these devices secure isn’t something a user can do.
        But what you can do is try to make it as hard as possible for attackers
        to access your other devices on the network and implement monitoring and
        prevention tactics on your network so it becomes harder to make yourself
        a target.
      </Text>
      <br />
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        What can I do about it?
      </Text>
      <Text>
        The first thing I would suggest is segmenting your network so these IoT
        devices cannot access your personal devices like your computer and phone
        on the network. This would make it much harder if not even impossible to
        attack these devices due to the fact that they cannot communicate on
        their own with these other devices. Another thing you can do is
        implement monitoring and IPS systems. These systems monitor the traffic
        that takes place on your network and can notify you of strange network
        traffic from these devices so you can at least try to detect if
        something strange or unusual happens within your network so you can
        attempt to take action.
      </Text>

      <br />
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Conclusion
      </Text>
      <Text>
        IoT devices are not as secure as people often think or realize. It’s
        important that you are aware of the situation so you can make consensus
        decisions in using these kinds of technologies and think about whether
        you want to use them and, if so, what you can do about these possible
        threats. I also think it's important that more architects and developers
        think about these possible implications so that over time these devices
        become more secure and people can use IoT devices without having to
        worry as much about these problems.{" "}
      </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

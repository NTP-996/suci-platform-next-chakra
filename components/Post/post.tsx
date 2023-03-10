import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import CategoryLabel from "../CategoryLabel/CategoryLabel";

const Post = ({ post, compact }: any) => {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          {!compact && (
            <Image src={post.frontmatter.cover_image} alt="" layout={"fill"} />
          )}
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {" "}
            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </Heading>
          <Text color={"gray.500"}>{post.frontmatter.excerpt}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={post.frontmatter.author_image} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{post.frontmatter.author}</Text>
            <Text color={"gray.500"}>{post.frontmatter.date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Post;

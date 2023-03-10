import Layout from "@/components/Layout/Layout.component";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "@/components/Post/post";
import { Link, Grid } from "@chakra-ui/react";
import { sortByDate } from "../../utils";

const demo = ({ posts }: any) => {
  return (
    <Layout>
      <Heading>Latest Posts</Heading>
      <Grid>
        {/* <Box> */}{" "}
        <GridItem>
          {posts.map((post: any, index: any) => (
            <Post key={index} post={post} />
          ))}
        </GridItem>
        {/* </Box> */}
      </Grid>
      {/* <Flex justify="space-between" wrap="wrap" gap="2"> */}
      {/* <Box>
          {" "}
          {posts.map((post: any, index: any) => (
            <Post key={index} post={post} />
          ))}
        </Box> */}
      {/* </Flex> */}
    </Layout>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default demo;

import Layout from "@/components/Layout/Layout.component";
import { Container, Heading, Box, Text } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Layout title="About Suci">
      <Container>
        <Heading>About</Heading>

        <Box>
          <Text>Suci Blog</Text>

          <Text>This is a blog built with Next.js and Markdown</Text>

          <Text>Version 1.0.0</Text>
        </Box>
      </Container>
    </Layout>
  );
}

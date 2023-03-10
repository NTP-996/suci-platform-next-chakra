import Link from "next/link";
// import Image from "next/image";
import Layout from "@/components/Layout/Layout.component";
import { Container, Heading, Image, Text } from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <Container>
        <div className="flex flex-col items-center mt-20">
          <Image
            src="/images/logo.png"
            width={140}
            height={70}
            className="bg-gray-800 rounded-2xl"
            alt=""
          />
          <Heading noOfLines={1}>Whoops!</Heading>

          <Text>This page does not exist</Text>
        </div>
      </Container>
    </Layout>
  );
}

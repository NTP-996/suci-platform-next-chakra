import { Link } from "@chakra-ui/react";

export default function CategoryLabel({ children }: any) {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
  };

  return (
    <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
  );
}

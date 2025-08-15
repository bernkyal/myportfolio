import { Avatar, Button, Card } from "@chakra-ui/react";

export function ProjectCard({ 
  title = "Project", 
  description = "This is a decription", 
  image = "Img", 
  authorName = "Nue Camp", 
}) {
  return (
    <Card.Root 
      className="miniprojects" 
      width="90%" 
      bg="#eeeeee00" 
      backdropFilter="blur(3px)"
      height="100%"
      borderColor="#222"
    >
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src={image} />
          <Avatar.Fallback name={authorName} />
        </Avatar.Root>
        <Card.Title mt="2">{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline" color="#bbb" fontStyle="italic">Coming Soon</Button>
      </Card.Footer>
    </Card.Root>
  );
}

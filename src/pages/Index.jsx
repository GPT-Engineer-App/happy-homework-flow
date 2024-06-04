import { Container, VStack, Text, Box, IconButton, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaUserGraduate, FaChalkboardTeacher, FaTasks, FaUpload, FaVideo, FaChartLine, FaDatabase, FaLock } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Text fontSize="3xl" fontWeight="bold">
          Happy Homework App Workflow
        </Text>
        <Image src="https://images.unsplash.com/photo-1707991396652-cf7827abe722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGNoYXJ0fGVufDB8fHx8MTcxNzUzMDExMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Workflow Chart" />

        <Box w="full" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text fontSize="2xl" mb={4}>
            User Groups
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaUserGraduate} color="green.500" />
              Students: Access and submit homework, view hints and correct answers, mandatory video content for low scorers.
            </ListItem>
            <ListItem>
              <ListIcon as={FaChalkboardTeacher} color="blue.500" />
              Teachers: Assign and review homework, upload instructional materials and videos, monitor student progress.
            </ListItem>
          </List>
        </Box>

        <Box w="full" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text fontSize="2xl" mb={4}>
            Core Features
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaLock} color="purple.500" />
              User Authentication: Secure login and profile management for students and teachers.
            </ListItem>
            <ListItem>
              <ListIcon as={FaTasks} color="orange.500" />
              Homework Management: Teachers can post homework with a set deadline, visible only to relevant batches and courses.
            </ListItem>
            <ListItem>
              <ListIcon as={FaUpload} color="red.500" />
              Submission Features: Integration of a scanning tool that allows students to upload answers via scanned PDFs.
            </ListItem>
            <ListItem>
              <ListIcon as={FaVideo} color="yellow.500" />
              Interactive Learning Tools: Hints section linked to notes uploaded by teachers.
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="teal.500" />
              Performance Tracking and Analytics: Teachers can track submission rates, grades, and individual student progress.
            </ListItem>
            <ListItem>
              <ListIcon as={FaDatabase} color="cyan.500" />
              Data Management: Manage a large dataset of 1500 students across various grades and batches.
            </ListItem>
          </List>
        </Box>

        <Box w="full" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text fontSize="2xl" mb={4}>
            Technology Stack
          </Text>
          <Text>Frontend: Flutter for a cross-platform mobile application ensuring a uniform user experience on both iOS and Android.</Text>
          <Text>Backend: Node.js/Express for server-side logic, MongoDB/SQL for database management, integration of third-party APIs for additional functionalities like push notifications and cloud storage.</Text>
        </Box>

        <Button onClick={onOpen} colorScheme="blue" leftIcon={<FaLock />}>
          Full-Screen Mode
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Full-Screen Mode</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>This mode restricts students from minimizing or navigating away from the app while doing their homework to prevent cheating.</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
};

export default Index;

import React, { PropsWithChildren, ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  VStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";

export interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
  isActive: boolean;
}

export interface SidebarProps extends PropsWithChildren {
  menu: Array<LinkItemProps>;
  header?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      h="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      overflowY="auto"
      overflowX="hidden"
    >
      <SidebarContent
        onClose={() => onClose}
        boxProps={{ display: { base: "none", md: "block" } }}
        menu={props.menu}
        header={props.header}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            menu={props.menu}
            header={props.header}
          />
        </DrawerContent>
      </Drawer>

      <MobileNav
        flexProps={{ display: { base: "flex", md: "none" } }}
        onOpen={onOpen}
        header={props.header}
      />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {props.children}
      </Box>
    </Box>
  );
};

interface SidebarContentProps {
  boxProps?: BoxProps;
  onClose: () => void;
  menu: Array<LinkItemProps>;
  header?: string;
}

const SidebarContent = (props: SidebarContentProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...props.boxProps}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {props.header || "Header"}
        </Text>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={props.onClose}
        />
      </Flex>

      {props.menu.map((link) => (
        <NavItem key={link.name} {...link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps {
  icon: IconType;
  children: string;
  href: string;
  isActive: boolean;
}

const NavItem = (props: NavItemProps) => {
  return (
    <Link
      href={props.href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        mt="0.75rem"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={props.isActive ? "custom.blue.300" : "transparent"}
        color={props.isActive ? "white" : "black"}
        _hover={{
          bg: "blackAlpha.500",
          color: "white",
        }}
      >
        {props.icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={props.icon}
          />
        )}
        {props.children}
      </Flex>
    </Link>
  );
};

interface MobileProps {
  flexProps: FlexProps;
  onOpen: () => void;
  header?: string;
}
const MobileNav = (props: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...props.flexProps}
    >
      <IconButton
        variant="outline"
        onClick={props.onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        {props.header || "Header"}
      </Text>
    </Flex>
  );
};

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Time Line",
    "Trend",
    "Question",
  ];

  const DropdownContent = () => (
    <Dropdown>
      <DropdownTrigger>
        <Button
          size="md"
          variant="flat"
          className="text-gray-600 rounded-sm"
        >
          Post
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown">
        <DropdownItem key="new">Create new article</DropdownItem>
        <DropdownItem key="copy">Create new question</DropdownItem>
        <DropdownItem key="edit">Draft list</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  return (
    <Navbar className="bg-white p-1">
      <NavbarContent className="flex justify-between items-center w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand className="text-gray-600 font-bold text-3xl">
          Nep Qiita
        </NavbarBrand>
        <div className="hidden sm:flex gap-10 ml-32">
          {/* Desktop Menu Items */}
          <NavbarItem isActive>
            <Link href="#" className="text-gray-600">
              Time Line
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-gray-600">
              Trend
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-gray-600">
              Question
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      {/* Mobile Menu Items */}
      <NavbarContent className={`sm:flex gap-10 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <NavbarMenu className="sm:hidden">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item}>
              <Link
                href="#"
                className="block w-full py-2"
                color={index === menuItems.length - 1 ? "danger" : "foreground"}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>

      {/* Search and User Actions */}
      <div className="flex items-center space-x-4">
        <Input
          type="email"
          placeholder="search..."
          radius="none"
          startContent={<FaSearch className="text-sm text-default-400 pointer-events-none" />}
        />
        <DropdownContent />
        <div className="flex items-center space-x-2">
          <SignedOut>
            <Button className="bg-secondary text-white" size="md">
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </Navbar>
  );
};

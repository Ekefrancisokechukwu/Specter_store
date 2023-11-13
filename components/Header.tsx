"use client";

import Link from "next/link";
import Container from "./ui/Container";
import { Button } from "./ui/button";
import { Menu, Moon, ShoppingCart, Sun } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useAppSelector } from "@/redux/store";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
  {
    href: "/",
    label: "On Sale",
  },
];

const Header = () => {
  const { setTheme, theme } = useTheme();
  const amount = useAppSelector((state) => state.cartState.numItemsInCart);

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href={"/"} className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">SPECTER STORE</h1>
            </Link>
          </div>

          <nav className="mx-6 lg:flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button key={i} asChild variant="ghost">
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 relative"
              aria-label="Shopping Cart"
              asChild
            >
              <Link href={"/cart"}>
                <ShoppingCart className="h-6 w-6" />
                <span className="bg-primary left-1/2 -translate-x-[40%] top-0  grid place-items-center text-xs absolute text-primary-foreground w-4 h-4 rounded-full">
                  {amount || 0}
                </span>
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;

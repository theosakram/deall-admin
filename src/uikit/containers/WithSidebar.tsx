import { useRouter } from "next/router";
import { PropsWithChildren, useMemo } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GoPackage } from "react-icons/go";
import { LinkItemProps, Sidebar } from "../components/Sidebar";

export const WithSidebar = ({ children }: PropsWithChildren) => {
  const { pathname } = useRouter();

  const LinkItems = useMemo((): Array<LinkItemProps> => {
    return [
      {
        name: "Products",
        icon: GoPackage,
        href: "/products?page=1",
        isActive: pathname === "/products",
      },
      {
        name: "Cart",
        icon: FiShoppingCart,
        href: "/cart",
        isActive: pathname === "/cart",
      },
    ];
  }, []);

  return (
    <Sidebar menu={LinkItems} header="Deall Admin">
      {children}
    </Sidebar>
  );
};

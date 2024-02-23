import Image from "next/image";
import logo from "../../../public/logo.svg";
import Offertop from "./Offertop";
import { Heart, Search, ShoppingCart } from "lucide-react";
import HeaderTop from "./HeaderTop";
import Link from "next/link";

function Header() {
  const offertext = "Free Shipping Sitewide on Every Order, Don’t Miss Out!!";

  const menuItems = [
    { name: "MEN", link: "/men" },
    { name: "WOMEN", link: "/women" },
    { name: "COMBOS", link: "/combos" },
    { name: "CARGO", link: "/cargo" },
    { name: "JOGGERS", link: "/joggers" },
    { name: "MEN'S SHIRTS", link: "/mens-shirts" },
    { name: "NEW ARRIVALS", link: "/new-arrivals" },
  ];

  return (
    <nav className="w-full bg-white">
      <Offertop offer={offertext} />
      <HeaderTop />
      <div className="container flex items-center py-2 justify-between ">
        <div className="flex items-center ml-6">
          <Image src={logo} />
          <div className="flex ml-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex justify-between cursor-pointer font-semibold px-5 py-1 rounded-lg hover:bg-yellow-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-6">
          <Search className="cursor-pointer" />
          <Heart className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Header;

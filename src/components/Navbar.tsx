'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string })=> {
    const [active, setActive] = useState<string | null>(null);
return(
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
         <Menu setActive={setActive}>
         <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/web-dev">About Us</HoveredLink>
          </div>
          </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Zuptek">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">About Us</HoveredLink>
            <HoveredLink href="/interface-design">Our Team</HoveredLink>
            <HoveredLink href="/seo">Why Choose Us</HoveredLink>
          </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
         <Link href={"/contact"}></Link>
          </MenuItem>
        </Menu>
    </div>
)
}

export default Navbar;
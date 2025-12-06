import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Atom, CodeIcon, Sparkles } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        

<Link
  href="/"
  className="flex items-center gap-3 font-semibold text-2xl mr-6 font-mono hover:opacity-90 transition-opacity"
>
  <div className="rounded-lg p-1.5 bg-gradient-to-br from-emerald-500 via-teal-700 to-cyan-900 shadow-lg">
    <Atom className="w-8 h-8 text-gray-50" />
  </div>

  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-700 to-cyan-900 font-bold">
    TestX
  </span>
</Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;
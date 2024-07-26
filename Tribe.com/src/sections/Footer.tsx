import logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialPintrest from "@/assets/social-pin.svg";
export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center ">
      <div className="container">
        <div className="inline-flex relative before:content-['']  before:h-full before:blur before:top-2 before:bottom-0 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logo}
            alt="Saas"
            height={40}
            width={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Updates</Link>
          <Link href="#">About</Link>
          <Link href="#">Help</Link>
          <Link href="#">Careers</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPintrest />
          <SocialYoutube />
        </div>
        <div className="mt-6">
          <p>&copy; 2024 Company, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary py-8 text-center text-[0.6875rem] w-full">
      <span>
        This site is protected by reCAPTCHA and the Google
        <Link href={"3"} className="underline underline-offset-2">
          Privacy Policy
        </Link>{" "}
        and
        <Link href={"#"} className="underline underline-offset-2">
          Terms of Service
        </Link>{" "}
        apply.
      </span>
    </div>
  );
};

export default Footer;

import * as React from "react";
import NavigationSmall from "./navigation-small";
import NavigationLarge from "./navigation-large";
import NavigationSmallBottom from "./navigation-small-bottom";
import Footer from "./footer";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const Layout = ({ children }) => {
  const breakpoints = useBreakpoint();

  return (
    <div className="ml-4 md:ml-14 xl:ml-28 mr-4 md:mr-14 xl:mr-28 min-h-screen flex flex-col ">
      <div className="grow">
        {breakpoints.sm ? <NavigationSmall /> : null}
        {breakpoints.sm ? <NavigationSmallBottom /> : null}
        {breakpoints.md ? <NavigationLarge /> : null}
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

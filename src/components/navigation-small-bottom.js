import * as React from "react";
import { Link } from "gatsby";

export default function NavigationSmallBottom() {
  return (
    <div className="fixed z-10 bottom-0 left-0 right-0 pl-4 pr-4">
      <div className="flex flex-1 justify-between items-center h-14 bg-white">
        <Link
          to="/exhibitions"
          activeClassName="active"
          activeStyle={{ color: "black" }}
        >
          Exhibitions
        </Link>

        <Link
          to="/cv-awards"
          activeClassName="active"
          activeStyle={{ color: "black" }}
        >
          CV / Awards
        </Link>

        <Link
          to="/contact"
          activeClassName="active"
          activeStyle={{ color: "black" }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

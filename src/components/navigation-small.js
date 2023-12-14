import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export default function NavigationSmall() {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const { title } = useSiteMetadata();
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`sticky z-10 w-full h-full transition-all duration-500
      ${scrollDirection === "down" ? "-top-14" : "top-0"} `}
    >
      <Link
        to="/"
        className="flex items-center justify-center h-14 bg-white"
        activeClassName="active"
        activeStyle={{ color: "black" }}
      >
        {title}
      </Link>
    </div>
  );
}

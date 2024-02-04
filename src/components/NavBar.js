import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const showLinks = links.map((link)=> {
    return <a  key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{showLinks}</nav>;
}

export default NavBar;

import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li>
        <Link href="/">Эхлэл</Link>
      </li>

      <li>
        <Link href="/newspage">Мэдээ</Link>
      </li>

      <li>
        <Link href="/pricing">Захиалга</Link>
      </li>
      <li>
        <Link href="/contact">Холбоо барих</Link>
      </li>
    </ul>
  );
};
export default Nav;

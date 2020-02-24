import React from "react";
import Link from 'next/link'

const Header = () => (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
      </li>
      <li>
        <Link href="/partners">
          <a>Partners</a>
        </Link>
      </li>
      <li>
        <Link href="/questions">
          <a>Questions</a>
        </Link>
      </li>
    </ul>
);

export default Header

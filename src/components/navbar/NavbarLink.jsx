import Link from 'next/link'
import React from 'react'

const NavbarLink = ({ children, href }) => {
  return (
    <li>
      <Link href={href}>
        <a class="font-sans text-gray-800 mx-2 px-5 py-4 hover:bg-gray-100 dark:hover:bg-midnight hover:rounded-3xl transition-all font-semibold dark:text-white dark:hover:bg-gray-700">
          {children}
        </a>
      </Link>
    </li>
  )
}

export default NavbarLink

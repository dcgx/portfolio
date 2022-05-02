import NextLink from 'next/link'

const Link = ({ children, className, href, outlined, rounded }) => {
  let classNames =
    'bg-violet-800 border-2 border-violet-800 hover:bg-violet-900 hover:border-violet-900 text-white'
  if (outlined) {
    classNames =
      'bg-white border-2 border-violet-800 hover:border-violet-900 text-black dark:border-none'
  }

  return (
    <NextLink href={href}>
      <a
        className={`font-sans py-4 px-6 font-medium rounded-xl  inline-block ${classNames} ${className}`}
        href=""
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link

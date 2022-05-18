import NextLink from 'next/link'

const Link = ({ children, className, href, outlined, rounded }) => {
  let classNames =
    'bg-purple-700 border-2 border-purple-700 hover:bg-purple-600 hover:border-purple-600 text-white'
  if (outlined) {
    classNames =
      'bg-white border-2 border-purple-700 hover:bg-purple-600 hover:border-purple-600 text-black dark:border-none'
  }

  return (
    <NextLink href={href}>
      <a
        className={`font-sans py-3 px-6 font-medium rounded-xl inline-block ${classNames} ${className}`}
        href=""
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link

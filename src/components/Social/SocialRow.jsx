import { socialMedia } from '@config'
import { Icon } from '@icons'

const SocialRow = ({ className }) => {
  return (
    <ul className={`flex justify-center items-center mt-8 p-0 list-none ${className}`}>
      {socialMedia &&
        socialMedia.map(({ url, name }) => (
          <li className="p-3 " key={name}>
            <a rel="noreferrer" target="_blank" className="socialLink" href={url} aria-label={name}>
              <Icon name={name} />
            </a>
          </li>
        ))}
    </ul>
  )
}

export default SocialRow

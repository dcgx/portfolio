import { socialMedia } from '@config'
import { Side } from '@components'
import { Icon } from '@icons'

const SocialSide = () => {
  return (
    <Side>
      <ul className="flex flex-col items-center m-0 p-0 list-none">
        {socialMedia &&
          socialMedia.map(({ url, name }) => (
            <li className="p-3 " key={name}>
              <a
                rel="noreferrer"
                target="_blank"
                className="socialLink"
                href={url}
                aria-label={name}
              >
                <Icon name={name} />
              </a>
            </li>
          ))}
      </ul>
    </Side>
  )
}

export default SocialSide

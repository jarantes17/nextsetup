import NextLink from 'next/link'
import { Text } from '../../theme/components'

const Link = ({ children, href, ...props }: any): JSX.Element => {
  return (
    <NextLink href={href} passHref>
      <Text as="a" {...props}>
        {children}
      </Text>
    </NextLink>
  )
}

export default Link

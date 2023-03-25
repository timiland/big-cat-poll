import { AnchorHTMLAttributes } from 'react';
import ILink from '../../../models/ILink';

const Link = ({
  url,
  target,
  className,
  title,
  children,
  ...anchorProps
}: Omit<ILink, 'target'> & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...anchorProps} className={className} href={`${url}`} target={target}>
    {children || title}
  </a>
);

export default Link;

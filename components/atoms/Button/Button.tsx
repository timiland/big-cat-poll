import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
// import { HTMLB } from 'react';
import ILink from '../../../models/ILink';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly link?: ILink;
  readonly secondary?: boolean;
  readonly linkCallback?: () => void;
}

const Button = ({
  children,
  link,
  secondary,
  linkCallback,
  ...buttonProps
}: IButton) => {
  const { className, disabled } = buttonProps;
  const buttonClasses = classNames(
    {
      'bg-black py-3 px-5 text-white hover:bg-yellow-100 focus:bg-yellow-500 active:bg-yellow-500':
        !disabled && !secondary,
      //
      'text-black': !disabled && secondary,
      //
      'bg-grey text-grey-500 py-1 px-4': disabled,
    },
    'rounded-full inline-block min-h-min select-none uppercase',
    className
  );

  return link?.url && (link?.title || children) && !disabled ? (
    <a
      className={buttonClasses}
      href={link.url}
      target={link.target}
      onClick={() => linkCallback?.()}
    >
      {children || link.title}
    </a>
  ) : (
    <button {...buttonProps} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  link: {
    name: '',
    url: '',
    target: '',
    linkIcon: '',
  },
  secondary: false,
  linkCallback: () => null,
};

export default Button;

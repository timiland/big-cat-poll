import ButtonStyleEnum from '@models/enums/ButtonStyleEnum';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import ILink from '../../../models/ILink';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly style_?: ButtonStyleEnum;
  readonly link?: ILink;
  readonly secondary?: boolean;
  readonly linkCallback?: () => void;
}

const Button = ({
  style_ = ButtonStyleEnum.Default,
  children,
  link,
  secondary,
  linkCallback,
  ...buttonProps
}: IButton) => {
  const { className, disabled } = buttonProps;
  const buttonClasses = clsx(
    {
      'bg-black py-3 px-5 text-white hover:bg-yellow-100 focus:bg-yellow-500 active:bg-yellow-500 rounded-full':
        !disabled && !secondary && style_ === ButtonStyleEnum.Default,
      //
      'text-black':
        !disabled && secondary && style_ === ButtonStyleEnum.Default,
      //
      'bg-grey text-grey-500 py-1 px-4': disabled,
      //
      'bg-white text-black py-1 px-4 rounded-md':
        style_ === ButtonStyleEnum.Square,
    },
    'inline-block min-h-min select-none uppercase',
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

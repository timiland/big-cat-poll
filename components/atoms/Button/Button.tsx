import classNames from 'classnames';
import { ReactNode } from 'react';
import ILink from '../../../models/ILink';

export interface IButton {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly disabled?: boolean;
  readonly editHint?: string;
  readonly link?: ILink;
  readonly secondary?: boolean;
  readonly linkCallback?: () => void;
}

const Button = ({ children, editHint, link, secondary, linkCallback, ...buttonProps }) => {
  const { className, disabled } = buttonProps;
  const buttonClasses = classNames(
    {
      'bg-yellow py-1 px-4 text-black-100 hover:bg-yellow-100 focus:bg-yellow-500 active:bg-yellow-500':
        !disabled && !secondary,
      //
      'border border-yellow bg-transparent py-[3px] px-[15px] text-black-100 hover:border-yellow-100 hover:bg-yellow-100 hover:text-black-100 focus:border-yellow-500 focus:bg-yellow-500 active:border-yellow-500 active:bg-yellow-500 dark:text-white dark:hover:text-black-100 dark:focus:text-black-100 dark:active:text-black-100':
        !disabled && secondary,
      //
      'bg-grey text-grey-500 py-1 px-4': disabled,
    },
    'cta rounded-full inline-block min-h-min select-none',
    className
  );

  return link?.url && (link?.name || children) && !disabled ? (
    <a
      className={buttonClasses}
      href={link.url}
      target={link.target}
      data-epi-property-name={editHint}
      onClick={() => linkCallback?.()}
    >
      {children || link.name}
    </a>
  ) : (
    <button
      {...buttonProps}
      className={buttonClasses}
      disabled={disabled}
      data-epi-property-name={editHint}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: undefined,
  className: '',
  disabled: false,
  editHint: undefined,
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

);

export default Button;

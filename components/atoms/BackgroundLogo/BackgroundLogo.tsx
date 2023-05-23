import { ReactNode } from 'react';

export interface IBackgroundLogo {
  children: ReactNode;
}

const BackgroundLogo = ({ children }: IBackgroundLogo) => (
  <div className="relative w-full">
    <img
      className="absolute scale-[120%] -translate-x-[100px] opacity-[5%]"
      alt="logo background"
      src="/timothy-iland-logo-black.svg"
    />
    {children}
  </div>
);

export default BackgroundLogo;

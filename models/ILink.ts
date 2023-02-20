import { SbBlokData } from '@storyblok/react';
import TargetEnum from './enums/targetEnum';

export default interface ILink extends SbBlokData {
  readonly url: string;
  readonly title: string;
  readonly target: TargetEnum;
}

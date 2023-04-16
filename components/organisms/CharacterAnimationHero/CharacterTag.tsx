import IAsset from '@models/IAsset';
import Image from 'next/image';

export interface ICharacterTag {
  readonly name: string;
  readonly thumbnail: IAsset;
  readonly callback: () => void;
}

const CharacterTag = ({ thumbnail, name, callback }: ICharacterTag) => {
  return (
    <button
      onClick={() => callback()}
      className="flex gap-4 bg-black p-[3px] pr-6 rounded-full items-center shadow-lg"
    >
      <div className="w-12 h-12 relative rounded-full">
        <Image
          alt={thumbnail?.alt}
          src={thumbnail?.filename}
          fill
          className="rounded-full"
        />
      </div>
      <div className="text-white text-2xl">{name}</div>
    </button>
  );
};

export default CharacterTag;

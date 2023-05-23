/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, Suspense, useState } from 'react';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import IAsset from '@models/IAsset';
import { Canvas, useFrame, useThree, useGraph } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import ICharacterModel from '@models/ICharacterModel';
import * as THREE from 'three';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF, TransformControlsPlane } from 'three-stdlib';
import addCorsPrefix from 'helpers/addCorsPrefix';
import CharacterTag from './CharacterTag';
import Character from './Character';
import ActionTag from './ActionTag';

export interface ICharacterAnimationHero extends SbBlokData {
  readonly title: string;
  readonly text: string;
  readonly characterModels: ICharacterModel[];
}

type GLTFResult = GLTF & {
  nodes: {
    Character: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
};

const CharacterAnimationHero = ({
  blok,
}: {
  blok: ICharacterAnimationHero;
}) => {
  const [actionIndex, setActionIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);

  const { title, text, characterModels } = blok;

  const { name, tagline, model, thumbnail } = characterModels[characterIndex];

  const modelUrl = addCorsPrefix(model.filename);

  const { animations } = useGLTF(modelUrl) as GLTFResult;

  const actions = animations.map((action, index) => ({
    key: index,
    name: action.name,
  }));

  return (
    <section
      className="relative w-full component-padding"
      {...storyblokEditable(blok)}
    >
      <div className="container grid-container">
        <div className="col-span-10 col-start-2 text-center flex flex-col gap-8 pb-8">
          <h1 className="w-full">{title}</h1>
          <p className="w-full whitespace-pre-line">{text}</p>
        </div>
        <div className="col-span-6 h-[500px]">
          <Canvas shadows camera={{ position: [0, -2, 25], fov: 40 }}>
            <directionalLight
              position={[-5, 5, 5]}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <ambientLight />
            <Suspense fallback={null}>
              <Character model={modelUrl} actionIndex={actionIndex} />
            </Suspense>
          </Canvas>
        </div>
        <div className="col-span-6 flex flex-col gap-6">
          <h4>Characters</h4>
          <div className="flex flex-wrap gap-6">
            {characterModels?.map((character, index) => (
              <>
                <CharacterTag
                  name={character.name}
                  thumbnail={character.thumbnail}
                  callback={() => setCharacterIndex(index)}
                />
                <CharacterTag
                  name="Tim Iland"
                  thumbnail={character.thumbnail}
                  callback={() => setCharacterIndex(index)}
                />
                <CharacterTag
                  name="Bboy Dov"
                  thumbnail={character.thumbnail}
                  callback={() => setCharacterIndex(index)}
                />
              </>
            ))}
          </div>
          <h4>Actions</h4>
          <div className="flex flex-wrap gap-4">
            {actions.map((action, index) => (
              <ActionTag
                name={action.name}
                keyInput="A"
                callback={() => setActionIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterAnimationHero;

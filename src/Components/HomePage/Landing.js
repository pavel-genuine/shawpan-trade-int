import React, { useEffect, useState } from 'react';
import { SliderEffect } from '../../utils/effect';
import { TweenLite } from 'gsap';


export const Landing = ({ item, animals }) => {
  const [effects, setEffects] = useState();

  useEffect(() => {
    const parent = document.querySelector('.landing') 
    const images = document.querySelectorAll('.landing__image');

    if (parent && images) {
      const effects = SliderEffect({
        parent,
        images: Array.from(images)
      });
      setEffects(effects);
    }
  }, []);

  useEffect(() => {
    if (effects) {
      effects.material.uniforms.nextImage.value = effects.images[item];
      TweenLite.to(effects.material.uniforms.dispFactor, 1, {
        value: 1,
        ease: 'Expo.easeOut',
        onComplete: () => {
          effects.material.uniforms.currentImage.value = effects.images[item];
          effects.material.uniforms.dispFactor.value = 0.0;
        }
      });
    }
  }, [item, effects]);

  return (
    <div className="landing">
      { animals.map((animal, index) => {
        return (
          <div style={{ width: '100vw', height: '100vh' }} key={index} hidden={index !== item}>
            <img  src={animal.url} className="landing__image object-fit	" alt="Animal"></img>
            <div className="landing__details">
              <div className="landing__details__label">
                SPECIES
                <span className="landing__details__label-bar"></span>
              </div>
              <span id="title" className="landing__details__text landing__details__text-hidden">{animal.species}</span>
              <div className="landing__details__label">
                AGE
                <span className="landing__details__label-bar"></span>
              </div>
              <span id="age" className="landing__details__text landing__details__text-small">{animal.age}</span>
              <div className="landing__details__label">
                BIO
                <span className="landing__details__label-bar"></span>
              </div>
              <span id="bio" className="landing__details__text landing__details__text-small">{animal.bio}</span>
            </div>
          </div>
        );
      })}
    </div>
  )
}
import React from 'react';
import getImageUrl from '../utils/getImageUrl';

/**
 * Exibe exclusivamente fotografias conceituais geradas para este projeto.
 * O arquivo WebP contém dez composições em uma grade de duas colunas.
 * SVG recorta um quadro sem repetir downloads e preserva a proporção.
 */
export default function ConceptImage({ frame = 0, label, className = '' }) {
  const index = Math.max(0, Math.min(9, Number(frame) || 0));
  const x = (index % 2) * 420;
  const y = Math.floor(index / 2) * 265;
  return (
    <svg className={`malta-generated ${className}`}
      viewBox={`${x} ${y} 420 265`}
      preserveAspectRatio="xMidYMid slice"
      role="img" aria-label={label || 'Fotografia conceitual gerada por inteligência artificial'}>
      <image href={getImageUrl('images/colecao-conceitual.webp')}
        x="0" y="0" width="840" height="1325" />
    </svg>
  );
}

import React from 'react';

/**
 * Componente utilitário para garantir que as imagens sejam carregadas corretamente
 * mesmo em ambientes de subdiretório como GitHub Pages
 */
const getImageUrl = (imagePath) => {
  // Verifica se o caminho já começa com http ou https (URL absoluta)
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Remove a barra inicial se existir para evitar caminhos duplos
  const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  
  // Usa o PUBLIC_URL do ambiente, ou um fallback para o basename do repositório
  const baseUrl = process.env.PUBLIC_URL || '/oticas-malta';
  
  // Retorna o caminho completo
  return `${baseUrl}/${cleanPath}`;
};

export default getImageUrl;

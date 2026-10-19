const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const publicImages=path.join(root,'public','images');
const pageFiles=[
 'src/pages/Home.js','src/pages/Gallery.js','src/pages/About.js','src/pages/Contact.js',
 'src/components/Header.js','src/components/Footer.js','src/components/ProductCard.js',
 'public/index.html','public/manifest.json'
];
const pageText=pageFiles.map(read).join('\n');
test('imagem pública inclui apenas atlas fictício de IA',()=>{
 const names=fs.readdirSync(publicImages);
 assert.deepEqual(names,['colecao-conceitual.webp']);
 const bytes=fs.readFileSync(path.join(publicImages,names[0]));
 assert.equal(bytes.toString('ascii',0,4),'RIFF');
 assert.equal(bytes.toString('ascii',8,12),'WEBP');
 assert.ok(bytes.length>20000);
});
test('catalogo apresenta nove modelos inventados',()=>{
 const gallery=read('src/pages/Gallery.js');
 assert.equal((gallery.match(/\{id:\d+,frame:/g)||[]).length,9);
 for(const text of ['Ateliê Lume','Série Aurora','Linha Orbe','Solar','Grau'])
   assert.ok(gallery.includes(text),text);
});
test('não expõe marcas comerciais antigas nem canais reais',()=>{
 for(const old of ['Ray-Ban','KDEAM','Vulkan','Bulget','Wayfarer','WhatsApp','wa.me','wa.me/','mailto:','oculos-sol-1.jpg','equipe.jpg','marcas.jpg'])
   assert.ok(!pageText.includes(old),`Remover referência antiga: ${old}`);
 assert.ok(pageText.includes('contato@lume-optico.example'));
 assert.ok(pageText.includes('MARCA FICTÍCIA')||pageText.includes('marca fictícia'));
 assert.ok(!pageText.includes('Óticas Malta'));
});
test('metadados e navegação usam identidade fictícia',()=>{
 assert.ok(read('public/index.html').includes('Ateliê Lume'));
 assert.ok(read('public/manifest.json').includes('Ateliê Lume'));
 assert.ok(read('src/components/Header.js').includes('Ateliê Lume')||read('src/components/Header.js').includes('Ateliê'));
 assert.ok(read('src/components/ConceptImage.js').includes('colecao-conceitual.webp'));
 assert.ok(fs.existsSync(path.join(root,'public','favicon.svg')));
 assert.ok(!fs.existsSync(path.join(root,'public','favicon.ico')));
});

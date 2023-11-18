const natural = require('natural');
const tfidf = new natural.TfIdf();

// Documentos de ejemplo
const documents = [
  'El procesamiento de lenguaje natural es fascinante.',
  'La inteligencia artificial está transformando la manera en que interactuamos con las máquinas.',
  'Los algoritmos de aprendizaje automático son fundamentales en PLN.',
  'El análisis de sentimientos es una aplicación común de PLN.'
];

// Agrega los documentos al modelo Tf-Idf
documents.forEach((document, index) => {
  tfidf.addDocument(document);
});

// Calcula el Tf-Idf para un término específico en cada documento
const term = 'procesamiento';
documents.forEach((document, index) => {
  const tfidfValue = tfidf.tfidf(term, index);
  console.log(`Tf-Idf para el término "${term}" en el documento ${index + 1}: ${tfidfValue}`);
});

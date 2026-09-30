// Registers every shape this package defines. Side-effect imports only: a
// consumer (or the host app) can load this one module to get the full set of
// shapes registered, without pulling in components, providers or other exports.
import '../ontologies/dcmitype.register.js';
import '../ontologies/dc.register.js';
import '../ontologies/dcterms.register.js';

import './Image.js';

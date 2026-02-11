## Uso 

Clonare il repo e installare le dipendenze con:

```bash
$ npm install
```
## Scripts disponibili

Nella root del progetto si può avviare il server di sviluppo con `npm run dev` or `npm start`.<br><br>

Il server di sviluppo è disponibile su questa porta [http://localhost:3000](http://localhost:3000).<br><br>

La pagina si aggiorna automaticamente quando vengono eseguite delle modifiche alla base di codice.<br><br>

Per degli script di servizio, creare **routes** o **components** si possono usare gli script contenuti le Makefile nella root directory.<br><br>

La build del progetto può essere eseguita con `npm run build`, i file creati si trovano nel folder `dist`.<br><br>

## Deployment

I file contenuti nella cartella `dist` possono essere messi in produzione su qualsiasi provider di file statici.

### Alberatura suggerita

src/
├──  eassets/                # Immagini, icone, font statici
├── components/            # Componenti condivisi (Globali)
│   ├── ui/                # ATOMI: Mattoni base agnostici
│   │   ├── Button/
│   │   ├── Input/         # (Input, Label, FormGroup)
│   │   ├── Badge/         # (I tag colorati)
│   │   └── Modal/         # (Il "guscio" con Portal e Overlay)
│   ├── Table/             # ORGANISMO: Sistema tabella
│   │   ├── Table.jsx
│   │   ├── TableHeader.jsx
│   │   ├── TableRow.jsx
│   │   └── Table.module.scss
│   └── Sidebar/           # Altri componenti di layout
├── data/                  # Gestione stato globale
│   └── stores/
│       └── Store.js
├── lib/                   # (Ex 'js') Utility e logica pura
│   ├── animation.js
│   └── cubicBezier.js
├── layouts/               # Involucri per le pagine
│   └── MainLayout/
├── routes/                # PAGINE: Logica di dominio
│   ├── Contatti/
│   │   ├── components/    # Componenti LOCALI (solo per questa route)
│   │   │   └── ContactForm.jsx
│   │   ├── Contatti.jsx
│   │   ├── Contatti.module.js
│   │   └── Contatti.module.scss
│   ├── Pratiche/
│   │   ├── components/
│   │   │   └── DossierForm.jsx
│   │   └── ...
│   └── Telefonate/
├── styles/                # Stili globali e variabili
│   ├── global.scss
│   ├── _typography.scss
│   └── _variables.scss
├── App.jsx                # Entry point e Router
└── index.jsx              # Mounting dell'app

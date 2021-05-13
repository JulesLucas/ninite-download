# ninite-download

ninite-download is a way to download apps from Ninite directly through Node JS !

## Installation

```bash
npm i ninite-download
```

## Usage

```js
const Ninite = require('ninite-download')
```

## Exemple


```js
const Ninite = require('ninite-download')

Ninite.getApps({
    apps: ['vlc', 'teamviewer15'], // Apps to download
    path: './', // Where to put the .exe
    name: 'dtest' // EXE file name
})
```

## Parameters

#### Apps: Application value on the Ninite website
#### Path: Location file
#### Name: Name file
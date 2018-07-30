## React and React Native app + Typescript

React and React Native app provide magic platform-splitting functionality based on special file extensions. Just the component for the target platform is compiled at build time.

Follow these practice:

- Put the component in a folder
- Break out the shared interface into a separate `.d.ts` file.
- Name the web/default file `index.tsx` (not `index.web.tsx`)
- Name the native file `index.native.tsx` (both `ios` and `android`)
- For android splitting, add `index.android.tsx` which will override `.native`

The `.d.ts` file enables VS Code code hinting for JSX props, and helps manage the project cross-platform by ensuring the consumers of the component have a unified interface.

---

### Install

Use the NodeJS version `8.11.3`

```
npm install
```

### Run Mock server (Fake Api)

```
npm run mock:server
```

### Run Web

```
npm start
```

### Run iOS

```
npm run ios
```

### Run Android

```
npm run android
```

---

### Caution:

Beware auto-imports! It's easy to accidentally import a file like this:

```js
import Header from './Header/index.android';
```

instead of the correct generic way:

```js
import Header from './Header';
```

Also, when working on the native app, be mindful that VS Code's `Go To Definition` will always jump to the `index.tsx` (web) file.

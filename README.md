# table-adaptive

### Commit "start project"

```
npm init vue@latest
```

"Yes" options:
> ✔ Add ESLint for code quality?
> ✔ Add Prettier for code formatting?

```
cd <project-name>
npm install
```

#### vite.config.js
Add (at the end of `defineConfig({})`)
```
css: {
  modules: {
    root: '.',
    localsConvention: 'camelCase',
  },
},
```

#### .eslintrc.cjs
Add (at the end of `module.exports` object)
```
rules: {
  'prettier/prettier': ['error', { singleQuote: true }],
},
```

#### Styles
Add 'css' folder into 'src'
create `reset.css`, `font-family.css` there with your styles
Change App.vue
Clean (delete all there) `./src/assets`, `./src/components` folders

#### Git
Git init and make first commit

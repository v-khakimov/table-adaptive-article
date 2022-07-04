# table-adaptive 

### Commit "Many Columns"
Adaptive table for many columns on small screens

### Commit "Adaptive table"
The table adapts to the small screens of various devices

### Commit "Classic table: all cells"
The table is displayed in a classic view with joined cells in rows and columns

### Commit "Classic table: head"
Add interactive head to table

### Commit "CommonTableAdaptive: props, API"
Props object - in './store-variables/table-props.js'
Table component - in './components/CommonTableAdaptive/'

### Commit "CommonButtonsRadio"
Add './components/CommonButtonsRadio.vue'
Use it in './components/ButtonsForTable.vue'
Props and emit for it in '../store-variables/body-type', '../store-variables/price-type'
Css-classes: './css/buttons-radio-color.module.css', './css/buttons-radio-grey.module.css'

### Commit "CSS modules"
Create in 'css' folder and use in ButtonsForTable.vue CSS modules

### Commit "table-data"
Add './store-constant/table-data.js' with data for the table and user selection

### Commit "media queries"
Set layouts: Mobile (1. portrait, 2. landscape), 3. Desktop and 4. Wide
in './css/media-queries.css'
Watch layouts in './store-variables/media-queries' through body color

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

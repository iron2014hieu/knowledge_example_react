# Shopee

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Below i will write how to way me code this app 
## Create reactApp "shopee" and setting it
1.. Create app and setup Prettier, Eslint, jsconfig
->`yarn add -D prettier eslint-plugin-prettier eslint-config-prettier`

 - copy
  ```bash
    "lint": "eslint --ext js,jsx src/",
    "lint:fix": "eslint --fix --ext js,jsx src/",
    "prettier": "prettier --check \"src/**/(**.jsx|*.js|*.scss|*.css)\"",
    "prettier:fix": "prettier --write \"src/**/(**.jsx|*.js|*.scss|*.css)\""
    
 or in Typescript
 
    "lint": "eslint --ext js,jsx,ts,tsx src/",
    "lint:fix": "eslint --fix --ext js,jsx,ts,tsx src/",
    "prettier": "prettier --check \"src/**/(*.tsx|*.ts|*.jsx|*.js|*.scss|*.css)\"",
    "prettier:fix": "prettier --write \"src/**/(*.tsx|*.ts|*.jsx|*.js|*.scss|*.css)\""
 ```
 --> and paste to "scripts" in `package.json` file
 - create file `.prettierrc` in folder app and paste in this
 ```bash
 {
  "arrowParens": "avoid",
  "semi": false,
  "trailingComma": "none",
  "endOfLine": "lf",
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 80,
  "jsxSingleQuote": false
}
 ```
 -create file ".prettierignore" and paste 
  ```bash
    package-lock.json
    yarn.lock
  ```
 - `create file .eslintrc` . ex: 
 ```bash 
 {
    "extends": ["react-app", "prettier"],
    "plugins": ["react", "prettier"],
    "rules": {
      "prettier/prettier": [
        "warn",
        {
          "arrowParens": "avoid",
          "semi": false,
          "trailingComma": "none",
          "endOfLine": "lf",
          "tabWidth": 2,
          "useTabs": false,
          "singleQuote": true,
          "printWidth": 80,
          "jsxSingleQuote": false
        }
      ],
      "no-console": "warn"
    }
  }
  ```
 - create file `.eslintignore` (làm ngơ)
  ex:
  ```bash
  /src/setupTests.js
 ```
 - create file `.editorconfig`
 ex: 
  ```bash
  [*]
  indent_style = space
  indent_size = 2
  ```

  Line 8:27:   Delete `;`  prettier/prettier
  Line 9:7:    Delete `;`  prettier/prettier
  Line 11:2:   Delete `;`  prettier/prettier
  Line 13:31:  Delete `;`  prettier/prettier
-->if log as above you can fix this: cmd: `yarn prettier:fix`

- `create file "jsconfig.json"` 
```bash
{
  "compilerOptions": {
    "module": "es6",
    "target": "es6",
    "baseUrl": "./",
    "moduleResolution": "node"
  },
  "include": ["src"]
}
```
if tou have error u can reopen editor(vscode, slt,...)            

2. set up some package necessary and setup global css
 - Material to use some small Component: `@material-ui/core` , `material-ui/lab`
 - Redux: `@reuduxjs/toolkit` and `react-redux`
 - Axios to fetch Api: `axios`
 - classnames: support set className of component: `classnames`
 - date-fns: date and time management `date-fns`
 - dompurify: to render HTML securely, limiting XSS attacks `dompurify`
 - lodash: to use some nice functions `lodash`
 - node-sass: to use scss for CRA `node-sass`
 --node: if use have error as: `Node sass version 6.0.0 is incompatible with ^4.0.0 || ^5.0.0`
 --> edit version it --> ^5.0.0 or ^4.0.0 in `package.json`

 ````bash
  yarn remove node-sass
  yarn add node-sass@5.0.0
 ````
 - normalize.css: to service reset CSS: `normalize.css`
 - prop-types: to check-type prop: `prop-types`
 - query-string: to handle query params on the URL `query-string`
 - react-hook-form: to handle Form `react-hook-form`
 - react-toastify: to show the notification as toast `react-toastify`
 - styled-components: to CSS for React `styled-component`
 - `react-router-dom`: router management
```bash
yarn add @material-ui/core @material-ui/lab @reduxjs/toolkit react-redux axios classnames react-router-dom date-fns dompurify lodash node-sass normalize.css prop-types query-string react-hook-form react-toastify styled-components
```
3. Shopee register page
use react-hook-form (Controller)
4. Http class

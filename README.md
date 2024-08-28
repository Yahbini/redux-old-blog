# React - Redux - Typescript



# Install app and plugin
    npx create-react-app my-app --template typescript

    npm i -D prettier eslint-plugin-prettier eslint-config-prettier

# Config
    Trong package.json thêm
    "lint": "eslint --ext .ts,.tsx src/",
    "lint:fix": "eslint --fix --ext .ts,.tsx src/",
    "prettier": "prettier --check \"src/**(*.tsx|*.ts|*.css|*.scss)\"",
    "prettier:fix": "prettier --write \"src/**(*.tsx|*.ts|*.css|*.scss)\""

# Create .prettierrc
# Config .prettierrc
    {
        "arrowParens": "always",
        "semi": false,
        "trailingComma": "none",
        "tabWidth": 2,
        "endOfLine": "auto",
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
    }

# Create .eslintrc
# Config .eslintrc
    {
        "extends" : ["react-app", "prettier"],
        "plugins": ["react", "prettier"],
        "rules": {
            "prettier/prettier": [
                "warn", {
                    "arrowParens": "always",
                    "semi": false,
                    "trailingComma": "none",
                    "tabWidth": 2,
                    "endOfLine": "auto",
                    "useTabs": false,
                    "singleQuote": true,
                    "printWidth": 120,
                    "jsxSingleQuote": true
                }
            ]
        }
    }   

# Create .editorconfig
# Config .editorconfig
    [*]
    indent_size = 2
    indent_style = space

# Config tsconfig.json thêm vào sau "jsx": "react-jsx",
    "baseUrl": "src"

# Install plugin 
    npm install -D tailwindcss
## enter npx tailwindcss init -p
# Config tailwind.config.js
    content: ["./src/**/*.{ts,tsx}"]


# Install plugin
    npm i -D prettier-plugin-tailwindcss


## Run plugin xem có lỗi ko
    Lỗi lq đến prettier
        npm run prettier    
        nếu có lỗi chạy: npm run prettier:fix
    
    Lỗi lq đến eslint
        npm run lint    
        nếu có lỗi chạy: npm run lint:fix




# Install redux toolkit
    npm install @reduxjs/toolkit react-redux


## Goodluck
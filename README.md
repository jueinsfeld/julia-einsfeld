começa criando a pasta (direto no pc)
abre no vscode, abre o terminal 
npm init -y
npm install next react react-dom 

dentro de package.json colacar o seguinte:
"scripts":{
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
},

na pasta raiz (PROJETO-NOVO), no terminal 
npx gitignore node
git init


cria uma pasta "pages"
arquivo index.js
    cria function HomePage

roda npx next dev

com o botão direito no explorer, seleciona Generate .editorconfig
altera o indent_size para 2 e o insert_final_newline para true


cria outra page (sobre.js)

cria a pagina 404


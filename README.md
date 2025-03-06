# Node.js Project

This repository contains various lessons and examples for learning Node.js, Express, MongoDB, and related technologies.

## Project Structure

## Lessons

### Aula 1: Modulos 1
- [app.js](aula1_modulos1/app.js)
- [mod1.js](aula1_modulos1/mod1.js)

### Aula 3: Node Package Manager
- [package.json](aula3_node_package_manager/package.json)

### Aula 5: Lendo e Escrever Arquivo
- [app.js](aula5_lendo_escrever_arquivo/app.js)

### Aula 12: Express Webpack
- [webpack.config.js](aula12_express_webpack/webpack.config.js)

### Aula 13: Express Middleware
- [webpack.config.js](aula13_express_middleware/webpack.config.js)

### Aula 14: MongoDB Conexão Primeiro Model
- [webpack.config.js](aula14_mongodb_conexao_primeiro_model/webpack.config.js)

### Aula 15: Express Session Flash Messages
- [server.js](aula15_express_session_flash_messages/server.js)
- [webpack.config.js](aula15_express_session_flash_messages/webpack.config.js)

### Aula 16: Injetar Conteúdo Views
- [server.js](aula16_injetar_conteudo_views/server.js)
- [webpack.config.js](aula16_injetar_conteudo_views/webpack.config.js)

### Aula 17: Helmet CSRF
- [webpack.config.js](aula17_helmet_csrf/webpack.config.js)

## Running the Project

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```

2. Navigate to the desired lesson directory:
    ```sh
    cd aula15_express_session_flash_messages
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the root of the lesson directory with the following content:
    ```env
    CONNECTIONSTRING=<your-mongodb-connection-string>
    SECRET=<your-session-secret>
    ```

5. Run the server:
    ```sh
    node server.js
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## License

This project is licensed under the MIT License.

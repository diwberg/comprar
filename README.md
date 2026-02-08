
# Comprar

![Project Logo](./src/assets/logo.png)

## 🇧🇷 Português

### Sobre o Projeto
**Comprar** é uma aplicação móvel desenvolvida para gerenciar listas de compras de forma simples e eficiente. O objetivo é ajudar o usuário a organizar seus itens de compra, permitindo adicionar novos produtos, marcar itens como concluídos e filtrar a visualização entre itens pendentes e comprados. O aplicativo persiste os dados localmente, garantindo que a lista não seja perdida ao fechar o app.

### Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

-   **React Native**: Framework principal para desenvolvimento mobile multiplataforma.
-   **Expo**: Plataforma para facilitar o desenvolvimento, build e deploy de aplicações React Native.
-   **TypeScript**: Superset do JavaScript que adiciona tipagem estática, garantindo maior segurança e escalabilidade ao código.

-   **AsyncStorage**: Biblioteca utilizada para persistência de dados localmente no dispositivo.
-   **Lucide React Native**: Biblioteca de ícones para uma interface moderna e limpa.

### Conhecimentos Aplicados
Durante o desenvolvimento deste projeto, foram aplicados diversos conceitos fundamentais e avançados de desenvolvimento mobile:

-   **Estrutura de Projeto e Arquitetura**: Organização do código em pastas (`src/app`, `src/components`, `src/storage`) para melhor manutenção e separabilidade de responsabilidades.
-   **Gerenciamento de Estado**: Uso de hooks do React como `useState` e `useEffect` para controlar o fluxo de dados na interface.
-   **Persistência de Dados**: Implementação de uma camada de serviço (`itemsStorage`) para interagir com o `AsyncStorage`, permitindo salvar, recuperar e manipular dados locais.
-   **Listas e Performance**: Utilização de `FlatList` para renderização eficiente de listas de itens.
-   **Interatividade e UX**: Implementação de feedbacks visuais, alertas de confirmação e filtros dinâmicos (Pendente/Concluído).
-   **Estilização**: Uso de `StyleSheet` para criação de layouts e estilos nos componentes.

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### Android
-   Configure o ambiente Android seguindo a documentação do [React Native](https://reactnative.dev/docs/environment-setup).
-   Android Studio e SDKs necessários.
-   Um dispositivo físico ou emulador configurado.

#### iOS
-   macOS é necessário.
-   Xcode instalado via App Store.
-   Um dispositivo físico ou simulador configurado.

### Rodando a Aplicação
```bash
# Clone este repositório
$ git clone <https://github.com/seu-usuario/comprar.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd comprar

# Instale as dependências
$ npm install

# Execute a aplicação
$ npx expo start
```
Após executar o comando acima, utilize:
-   `a` para rodar no Android.
-   `i` para rodar no iOS.
-   Ou escaneie o QR Code com o app Expo Go.

---

## 🇺🇸 English

### About the Project
**Comprar** is a mobile application designed to manage shopping lists simply and efficiently. The goal is to help users organize their shopping items by allowing them to add new products, mark items as done, and filter the view between pending and purchased items. The app persists data locally, ensuring the list is not lost when closing the app.

### Technologies Used
The project was developed using the following technologies and libraries:

-   **React Native**: Main framework for cross-platform mobile development.
-   **Expo**: Platform to facilitate the development, build, and deploy of React Native applications.
-   **TypeScript**: JavaScript superset that adds static typing, ensuring greater code safety and scalability.

-   **AsyncStorage**: Library used for local data persistence on the device.
-   **Lucide React Native**: Icon library for a modern and clean interface.

### Applied Knowledge
During the development of this project, several fundamental and advanced mobile development concepts were applied:

-   **Project Structure and Architecture**: Organizing code into folders (`src/app`, `src/components`, `src/storage`) for better maintenance and separation of concerns.
-   **State Management**: Use of React hooks like `useState` and `useEffect` to control data flow in the interface.
-   **Data Persistence**: Implementation of a service layer (`itemsStorage`) to interact with `AsyncStorage`, allowing saving, retrieving, and manipulating local data.
-   **Lists and Performance**: Utilization of `FlatList` for efficient rendering of item lists.
-   **Interactivity and UX**: Implementation of visual feedback, confirmation alerts, and dynamic filters (Pending/Done).
-   **Styling**: Use of `StyleSheet` for creating layouts and styles in components.

### Prerequisites
Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

#### Android
-   Set up the Android environment following the [React Native documentation](https://reactnative.dev/docs/environment-setup).
-   Android Studio and necessary SDKs.
-   A physical device or emulator configured.

#### iOS
-   macOS is required.
-   Xcode installed via App Store.
-   A physical device or simulator configured.

### Running the Application
```bash
# Clone this repository
$ git clone <https://github.com/your-username/comprar.git>

# Access the project folder in terminal/cmd
$ cd comprar

# Install dependencies
$ npm install

# Run the application
$ npx expo start
```
After running the command above, use:
-   `a` to run on Android.
-   `i` to run on iOS.
-   Or scan the QR Code with the Expo Go app.

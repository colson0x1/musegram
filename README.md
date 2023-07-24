# Musegram - A Photo Album Application

![Musegram](https://i.imgur.com/tffSgMF.png)

## Project Motivation

I built Musegram with the primary goal of implementing various advanced concepts in modern web development, specifically focusing on state management with Redux and the Redux Toolkit (RTK). Through this project, I aimed to execute Redux Thunks and Redux Query Toolkit (RTK Query) for handling asynchronous API calls and caching data efficiently.

By working on Musegram, I planned to solidify structuring and scaling applications using component-based architecture, separating concerns, and maximizing code reusability. Additionally, use popular libraries like axios and faker for data management and generation.

Overall, yeah Musegram was a fantastic opportunity for me to amplify Redux, RTK, Thunks, RTK Query, and other essential tools and technologies, enabling me to build more robust and maintainable web applications in the future.

## Table of Contents

- [Musegram - A Photo Album Application](#musegram---a-photo-album-application)
  - [Project Motivation](#project-motivation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Application Structure](#application-structure)
  - [Application Architecture](#application-architecture)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Development](#development)
  - [Contributing](#contributing)
  - [License](#license)
  - [Screenshots 📸](#screenshots-)
    - [Musegram - Displaying Error when Server (json-server) is down](#musegram---displaying-error-when-server-json-server-is-down)
    - [Musegram - Lazy Loading](#musegram---lazy-loading)
    - [Musegram - Home](#musegram---home)
    - [Musegram - Loading Album](#musegram---loading-album)
    - [Musegram - Loading Photos](#musegram---loading-photos)
    - [Musegram - Displaying Delete on Mouse Hover over Photos](#musegram---displaying-delete-on-mouse-hover-over-photos)

## Introduction

**Musegram** is a photo album application built using React and Redux. The application allows users to view photo albums, add new albums, and delete existing albums. It leverages features like lazy loading (skeleton loading) to enhance the user experience. The data is stored persistently using `json-server`, and the app employs both Redux Thunks and Redux Query Toolkit (RTK) to manage state and make asynchronous API calls.

The application is designed to be efficient, responsive, and user-friendly, providing a seamless experience for users who wish to organize and manage their photo collections.

## Application Structure

The application is organized into different folders and files, adhering to a structured and scalable architecture. Here's the overview of the application structure:

```
musegram/
├── src/
│   ├── components/
│   │   ├── AlbumsList.js
│   │   ├── AlbumsListItem.js
│   │   ├── Button.js
│   │   ├── ExpandablePanel.js
│   │   ├── Panel.js
│   │   ├── PhotosList.js
│   │   ├── PhotosListItem.js
│   │   ├── Skeleton.js
│   │   ├── UsersList.js
│   │   └── UsersListItem.js
│   ├── hooks/
│   │   └── use-thunks.js
│   ├── store/
│   │   ├── apis/
│   │   │   ├── albumsApi.js
│   │   │   └── photosApi.js
│   │   ├── slices/
│   │   │   └── usersSlice.js
│   │   ├── thunks/
│   │   │   ├── addUser.js
│   │   │   ├── fetchUsers.js
│   │   │   └── removeUser.js
│   │   ├── index.js
│   │   └── store.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── db.json
├── package.json
├── README.md
└── ...

```

## Application Architecture

Musegram follows a component-based architecture, where each functional piece of the application is encapsulated within reusable components. The main components are:

- `App`: The main component rendering the application layout.
- `UsersList`: Displays a list of users and allows adding new users.
- `UsersListItem`: Represents a user in the list and allows deleting the user.
- `AlbumsList`: Displays a list of albums for a specific user and allows adding new albums.
- `AlbumsListItem`: Represents an album in the list and allows deleting the album.
- `PhotosList`: Displays a list of photos within an album and allows adding new photos.
- `PhotosListItem`: Represents a photo in the list and allows deleting the photo.
- `ExpandablePanel`: A reusable component to create expandable panels with header and content.

The application uses Redux for state management, with the `usersSlice` handling the user-related state and Redux Query Toolkit (RTK) to manage API calls and caching.

## Technologies Used

The application leverages the following technologies:

- React: A popular JavaScript library for building user interfaces.
- Redux: A predictable state container for managing the application's state.
- Redux Query Toolkit (RTK): A powerful Redux library that simplifies API calls and caching.
- json-server: A lightweight JSON-based data store for persistence.
- axios: A library for making HTTP requests.
- faker: A library for generating fake data for development and testing.
- tailwindcss: A utility-first CSS framework used for styling the application.

## Features

Musegram comes with the following key features:

- Lazy Loading (Skeleton Loading): Displays loading skeletons to improve the user experience while fetching data.
- Automatic Data Refetching: Automatically fetches new data when users interact with the application.
- User Management: View and add new users to the application.
- Album Management: View and add new albums for each user.
- Photo Management: View and add new photos to each album.
- Efficient State Management: Utilizes Redux and Redux Query Toolkit for efficient and scalable state management.

## Getting Started

To get started with Musegram, follow the installation and usage instructions below.

### Installation

1. Clone the GitHub repository:

```bash
git clone https://github.com/colson0x1/musegram.git
cd musegram
```

2. Install the required dependencies:

```bash
npm install
```

### Usage

1. Start the JSON server for data persistence:

```bash
npm run start:server
```

2. Start the React development server:

```bash
npm start
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Development

To contribute or make modifications to Musegram, follow the steps below:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and test them locally.
5. Commit your changes:

```bash
git commit -m "Add your commit message here"
```

6. Push the changes to your forked repository:

```bash
git push origin feature/your-feature-name
```

7. Create a pull request on the original repository to submit your changes.

## Contributing

Contributions to Musegram are welcome! Whether you find a bug, have a feature suggestion, or want to contribute to the documentation, feel free to open issues and pull requests.

## License

Musegram is open-source software licensed under the MIT License.

---

## Screenshots 📸
Lazy loading and spinning button is implemented on data fetch, add mutation and remove mutation.

### Musegram - Displaying Error when Server (json-server) is down
![Musegram - Displaying Error when Server (json-server) is down](https://i.imgur.com/lUzDa33.png)

### Musegram - Lazy Loading
![Musegram - Lazy Loading](https://i.imgur.com/KX4Otao.png)

### Musegram - Home
![Musegram - Home](https://i.imgur.com/t8tr2A3.png)

### Musegram - Loading Album
![Musegram - Loading Album](https://i.imgur.com/1hqHDnM.png)

### Musegram - Loading Photos
![Musegram - Loading Photos](https://i.imgur.com/6mdyWuv.png)

### Musegram - Displaying Delete on Mouse Hover over Photos
![Musegram - Displaying Delete on Mouse Hover over Photos](https://i.imgur.com/tffSgMF.png)

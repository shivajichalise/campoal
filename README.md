###### _The World's Petition Platform_

# Campoal

This repository contains the frontend design implementation for Campoal about page.
Campoal a comprehensive WordPress theme designed to empower users to create petition platforms, foundations, and non-profit websites.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
    1. [Using Docker](#docker)
    2. [Manual Installation](#manual)
3. [Code Structure Overview](#code-structure-overview)
4. [Used Libraries And Tools](#used-libraries-and-tools)
5. [Design Decisions Made](#design-decisions-made)
6. [Self-Promotion](#self-promotion)

## Prerequisites

Before you begin, make sure you have the following tools installed on your system:

If using docker:

-   Docker (version 25.0.3 or later)
-   Docker Compose (version 2.24.5 or later)

if not using docker:

-   Node (version v20.12.0 or later)

## Installation

### Docker

To get started with the docker usage, follow below steps:

1. Clone this repository to your local machine:

    ```bash
    git clone git@github.com:shivajichalise/campoal.git
    cd campoal
    ```

2. Run the app:

    ```bash
    docker compose up
    ```

The app will start, which will be available at `http://localhost:5173` in your browser.

### Manual

To get started with the manual process, follow below steps:

1. Clone this repository to your local machine:

    ```bash
    git clone git@github.com:shivajichalise/campoal.git
    cd campoal
    ```

2. Install dependencies:

    ```bash
    npm install && cd frontend && npm install && cd ..
    ```

3. Serve the app:
   If you are inside frontend dir run:

    ```bash
    npm run dev
    ```

    if you are in root dir run:

    ```bash
    npm run client
    ```

The app will start, which will be available at `http://localhost:5173` in your browser.

## Code Structure Overview

```
campoal/
├── README.md
├── package.json
├── docker-compose.yml
├── .prettierrc.json
├── .gitignore
├── .dockerignore
└── frontend/
    ├── README.md
    ├── package.json
    ├── public/
    │   ├── favicons
    │   └── ...
    ├── src/
    │   ├── components/
    │   │   ├── ui/
    │   │   │   └── <reusable_components_from_shadcn/ui>
    │   │   └── <own_components>
    │   ├── assets/
    │   │   └── ...
    │   ├── lib/
    │   │   └── <any_utility-functions>
    │   ├── schemas/
    │   │   └── <all_schemas_and_types>
    │   ├── App.css
    │   ├── App.tsx
    │   ├── index.css
    │   ├── main.tsx
    │   └── ...
    └── ...
```

-   The sole reason for this structure is its capability to allow the separation of concerns. By placing the frontend code in a distinct directory `(frontend)`, it maintains isolation between frontend-related files and configurations from the backend code (if there's any). This separation simplifies the management and maintenance of each aspect of the application independently.
-   Having `package.json` in the root directory enables us to use tools like nodemon, concurrently, etc., when working with both frontend and backend.
-   Additionally, this structure allows for the removal of duplicate files used for configurations. In my case, it's the `.prettierrc.json` configuration file.

## Used Libraries And Tools

1. [Vite](https://vitejs.dev/)

-   For next generation frontend tooling.

2. [TailwindCSS](https://tailwindcss.com/)

-   For rapid styling.

3. [Shadcn/ui](https://ui.shadcn.com/)

-   For accessing beautifully designed components that we can copy and paste into our apps.
-   Shadcn/ui is accessible, customizable and OPEN SOURCE.

Above three are the only major libraries/frameworks that I have used. Except for these below libraries are also used (only used in a place or two):

1. [React Hook Form](https://www.react-hook-form.com/)

-   For performant, flexible and extensible forms with easy-to-use validation.

2. [Zod](https://zod.dev/)

-   For typeScript-first schema validation and static type inference.

3. [Sonner](https://sonner.emilkowal.ski/)

-   For toast notifications.

4. [Countries list](https://www.npmjs.com/package/countries-list)

-   For accessing country names, code and flags.

## Design Decisions Made

-   No major design decisions were made during development, and standard rules were followed.
-   One thing I'd like to mention is that I've used the font called 'Sen' from Google Fonts because it was the one used in the Figma [design](https://www.figma.com/community/file/1328995521380289089) of the webpage. However, some letters seem to be different from the font that I have access to compared to the one used in Figma. So, I decided to leave it as is.
-   Additionally, in the Figma design, the letter spacing was reduced during designing, but I have not reduced it, as in the mobile view, the letters will look squashed.

## Self-Promotion

Star the repository on [Github](https://github.com/shivajichalise/campoal)

Follow on [Github](https://github.com/shivajichalise)


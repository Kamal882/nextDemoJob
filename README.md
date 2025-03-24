# Next-Demo-Job

## Overview

This is a Next.js project configured with TypeScript, Tailwind CSS, and ESLint.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended: v18 or later)
- [npm](https://www.npmjs.com/) (or use `yarn`/`pnpm` if preferred)

## Installation

1. Clone the repository:

   git clone <repository-url>
   cd next-demo-job

2. Install dependencies:

   npm install

   Or, if using Yarn:

   yarn install


## Running the Development Server

To start the development server, run:

```sh
npm run dev
```

Or with Yarn:

```sh
yarn dev
```

By default, the app will be available at [http://localhost:3000](http://localhost:3000).

## Building the Project

To build the project for production, run:

```sh
npm run build
```

Or with Yarn:

```sh
yarn build
```

This will generate an optimized production build.

## Starting the Production Server

After building the project, start the production server with:

```sh
npm run start
```

Or with Yarn:

```sh
yarn start
```

## Linting the Code

To check for linting issues, run:

```sh
npm run lint
```

Or with Yarn:

```sh
yarn lint
```

SEO and WCAG Implementation

SEO Enhancements
To improve search engine optimization (SEO), I have implemented the following best practices:

Semantic HTML: Proper use of <table>, <thead>, <tbody>, <th>, and <td> ensures structured and meaningful content, making it easier for search engines to index.

Descriptive Alt Text for Images: The alt attribute in the <Image> component provides meaningful descriptions for profile pictures, improving accessibility and image indexing.

Accessible and SEO-Friendly Links:

Email addresses use mailto: links to enable direct email access.

Phone numbers use tel: links for direct calling, which benefits both accessibility and search engines.

Structured Data for Addresses: Address details are wrapped inside the <address> tag, improving semantic clarity for search engines.

WCAG (Web Content Accessibility Guidelines) Compliance
To enhance usability and accessibility for all users, including those with disabilities, the following WCAG practices have been applied:

Keyboard Navigation & Focus Visibility:

The hover:bg-gray-50 and focus-within:bg-gray-100 classes ensure that users navigating with a keyboard can easily identify their current focus.

Accessible Table Structure:

Headers (<th>) include descriptive text and proper structure to provide meaningful context for screen readers.

The use of scope="row" in name columns ensures proper association of data for assistive technologies.

ARIA Attributes for Enhanced Screen Reader Support:

aria-label attributes are added to elements like gender, birth date, postal code, and account numbers to provide better context.

Readable and Responsive Fonts:

Text is styled with adequate contrast using text-gray-900 for readability.

text-blue-600 hover:underline is used for links, ensuring they stand out and are easily distinguishable.
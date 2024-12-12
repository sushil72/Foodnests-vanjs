# FoodNest(S) Website Recreation

## Project Overview
We are recreating the **FoodNest(S)** website using the **VanJs** and **Tailwind CSS**. This project is a collaboration between **Sushil Kumar** and **Manav Jain**, aimed at enhancing the website's performance, design, and overall user experience.

## Technology Stack
- **Van Framework**: A lightweight and efficient JavaScript framework for building web applications.
- **Tailwind CSS**: A utility-first CSS framework for designing modern and responsive user interfaces.

## Features
- **Modern Design**: Leveraging Tailwind CSS to create a visually appealing and responsive UI.
- **Lightweight Framework**: Utilizing the Van Framework for fast and efficient rendering.
- **Optimized Performance**: Recreating the website with a focus on improved load times and interactivity.

## Project Structure
```plaintext
/foodnest
├── /src
│   ├── /basic components      # Reusable components
│   ├── /pages                 # Individual pages
│   ├── /routes                # Routing of the Application
│   ├── /store                 # State Management of the Application
│   └── app.js                 # Entry point of the application
├── /public                    # Static files (styles, images, fonts, etc.)
├── tailwind.config.js         # Tailwind CSS configuration
└── index.html                 # Main HTML file
```

## Setup and Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd foodnest
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run style
   or, "npx tailwindcss -i ./public/\"css assets\"/main.css -o ./public/\"css assets\"/styles.css"
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Collaboration
This project is a collaborative effort between:
- **Sushil Kumar**
- **Manav Jain**

## Contribution
Feel free to contribute to this project by creating pull requests or reporting issues. We welcome all feedback and suggestions.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
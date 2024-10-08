# Spinning Shapes: Donut and Cube Animation in React

This project is a **fun, practice-oriented application** where you can experience spinning 3D shapes—**a donut** and **a cube**—in your browser, rendered using **ASCII art**. You can control the rotation speed and shape in real-time through the UI.

This project was built with **React** and showcases interactive animations purely for **fun and practice**.

## Live Demo

Check out the live version of the project [https://spinning-object.vercel.app/].

## Features

- **Spinning Donut and Cube:** Choose between the two shapes and watch them spin in real-time.
- **Interactive Controls:** Adjust the rotation speed along the X, Y, and Z axes.
- **Customizable Dimensions:** Change the width and height of the ASCII display to fit your preferences.
- **Real-time Updates:** The shapes update instantly based on user inputs.

## Installation

If you'd like to run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/ycheung5/spinning-shapes.git
    ```

2. Navigate to the project directory:
    ```bash
    cd spinning-shapes
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

The app will run on `http://localhost:3000` by default. You can view it in your browser.

## Usage

You can use the live demo linked above or run it locally to interact with the **Spinning Donut** and **Cube**. The control panel allows you to:

- Set the screen **width** and **height** for the ASCII art.
- Adjust the **rotation speeds** along the X, Y, and Z axes.
- Toggle between the **donut** and **cube** shapes.

## Project Overview

This project was built to practice and experiment with **3D transformations** and **real-time rendering** using ASCII art. It's a simple yet powerful example of how you can apply mathematical concepts in a fun and interactive way in a web application.

### How It Works

1. **Spinning Donut**:
    - The donut is rendered using trigonometric functions that simulate 3D rotation. The shape is updated frame by frame based on user-controlled rotation speeds.
  
2. **Spinning Cube**:
    - The cube is displayed by projecting 3D vertices onto a 2D plane. The cube spins smoothly, and the rotation can be adjusted in real-time.

3. **Real-time Animation**:
    - The animation is driven by the `requestAnimationFrame` method, ensuring smooth updates and efficient rendering of the shapes.

## Deployment

The project is deployed using **Vercel**.


```bash
npm run build
# Deploy the contents of the "build" folder to your host
```
### Case Study

This project was created for fun and as a way to practice coding skills. The main challenge was rendering spinning 3D shapes using only ASCII characters, which required:
<br>
* Mathematical Transformations: Rotating the objects in 3D space and projecting them onto a 2D plane.
* React Hooks: Managing the animation loop and user inputs using useState and useEffect.
* Real-time Updates: Rendering the shapes dynamically based on user input and keeping the animation smooth with requestAnimationFrame.




# AI Image Generator

A web application that leverages the Pollinations AI REST API to generate unique images from text prompts. Users can customize image generation with advanced settings like model selection, aspect ratios, and custom dimensions.

> This is **Assignment 4** of the [Learn with Sumit (LWS)](https://learnwithsumit.com/) course. As the assigment deadline was over, I made it public.

## 🙏 Credit

- 🧑‍🏫 Project Template: Learn with Sumit (LWS)
- 📚 Assignment: Assignment-4 of LWS Platform
- 🎨 AI Image API: [Pollinations AI](https://pollinations.ai)

## Features ✨

- **Text-to-Image Generation**: Create images simply by writing a descriptive prompt and hitting "Enter" or clicking the submit button.
- **Advanced Customization**:
  - **Model Selection**: Choose from a dynamic list of available image generation models, fetched directly from the Pollinations AI API.
  - **Aspect Ratio Presets**: Quickly set image dimensions with presets like 1:1 (1024x1024) and 16:9 (1920x1080).
  - **Custom Dimensions**: Manually input specific height and width for generated images.
- **Randomized Seeds**: Each image generation request uses a random seed, ensuring unique results even for the same prompt.
- **Result Grid**: Displays nine generated images for each prompt, offering a variety of options.
- **Robust Error & Loading Handling**:
  - Shows a loading state while images are being generated.
  - Includes a fetch timeout to handle long-running requests.
  - Displays an "Unable to Load" message for any image that fails to generate or load correctly.
- **Image Downloader**: A download button on each generated image allows users to save their creations directly.
- **Downloaded History**: A dedicated "Downloaded" page tracks and displays all unique images that the user has downloaded.

---

## Technologies Used 💻

- **Frontend**: React.js
- **API**: [Pollinations AI REST API](https://pollinations.ai/)
- **Styling**: Tailwind CSS (_Template provided by LWS platform_)

---

## Getting Started 🚀

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/codedbyMojnu/AI-image-generator.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd AI-image-generator
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

Once the dependencies are installed, you can run the application with the following command:

```bash
npm start
# or
yarn start
```

This will start the development server, and you can view the application by navigating to `http://localhost:5173` in your browser.

---

## Usage Guide 📖

### Creating an Image

1.  Navigate to the **"Create Image"** page.
2.  In the input field, type a descriptive prompt for the image you want to generate (e.g., "A futuristic city at night").
3.  (Optional) Click on **"Advanced Settings"** to customize the output.
    - **Model**: Select a specific AI model from the dropdown. This list is automatically populated from the Pollinations API.
    - **Ratio**: Click on a preset ratio (e.g., 1:1) to automatically set the height and width.
    - **Height/Width**: You can also manually enter your desired height and width.
4.  Press the **Enter** key or click the **Generate** button.
5.  The application will display a loading indicator. After a few moments, a grid of 9 images will appear in the **Result** section.

### Downloading an Image

- In the **Result** section, hover over any image you like.
- Click the **Download** button that appears. The image will be saved to your device.

### Viewing Downloaded History

- Click on the **"Downloaded"** link in the navigation bar.
- This page will show a gallery of all the unique images you have downloaded during your session. Even if you download the same image multiple times, it will only appear once here.

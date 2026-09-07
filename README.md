# Base Plus Earthings

A modern, responsive corporate website for Base Plus Earthings, a leading manufacturer of earthing electrodes, copper bonded rods, and lightning protection solutions in India.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** Heroicons / Custom SVGs
*   **Fonts:** Geist (via `next/font`)

## Getting Started

To run this project locally on your machine:

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <your-github-repo-url>
    cd baseplusearthings.in
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **View the site:**
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

*   `src/app/`: Contains all the pages and routing logic (Next.js App Router).
    *   `/page.js`: The Home page.
    *   `/about/page.js`: About Us page.
    *   `/catalogue/page.js`: Catalogue download page.
    *   `/contact/page.js`: Contact Us page.
    *   `/products/`: Product listing and individual product details.
*   `src/components/`: Reusable React components (`Navbar`, `Footer`, `ProductCard`, etc.).
*   `src/data/`: Static data files (e.g., `products.js`) used to populate content.
*   `public/`: Static assets like images, logos, and favicons.

## Deployment

The easiest way to deploy this Next.js application is to use **Vercel** (the creators of Next.js).

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
3.  Click **Add New...** -> **Project**.
4.  Import your GitHub repository.
5.  Vercel will automatically detect that it's a Next.js project and set the correct build settings.
6.  Click **Deploy**.

Alternatively, you can deploy to any hosting provider that supports Node.js (like AWS, DigitalOcean, Heroku) by running `npm run build` and then `npm run start`.


## 💬Author


Author: Priyanshu Chaudhary <br>
📧 Email: [priyanshukaushal14@gmail.com](mailto:priyanshukaushal14@gmail.com) <br>
🌐 LinkedIn: [https://www.linkedin.com/in/priyanshu-chaudhary-1b7593255/](https://www.linkedin.com/in/priyanshu-chaudhary-1b7593255/) <br>

Happy Business! ✨
const App = (slot: JSX.Element) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        {"<!--=== HTML Meta Tags ===-->"}
        <title>Friendless Commits</title>
        <meta name="description" content="Commits that will make you friendless" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light" />
        {"<!--=== Favicon ===-->"}
        <link rel="icon" href="/public/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
        {"<!--=== CDN links ===-->"}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
        {"<!--=== Stylesheet ===-->"}
        <link rel="stylesheet" href="/public/styles.css" />
      </head>
      <body>
        <header class="container-fluid">
          <h1 class="logo">Friendless Commits</h1>
          <p>
            <a href="https://github.com/FireIsGood/friendless-commits" class="no-underline">
              <svg
                role="img"
                aria-label="github logo"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>{" "}
              [Source]
            </a>
          </p>
        </header>
        <main class="container-fluid">{slot}</main>
        <footer class="container-fluid">
          <p>Created with 🔥 by FireIsGood</p>
        </footer>
      </body>
    </html>
  );
};

export default App;

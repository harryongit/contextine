export default function Footer() {
  return (
    <footer className="border-t bg-[radial-gradient(125%_130.93%_at_50%_-20%,_#112D5B_0%,_#050B3D_100%)]">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand to-accent"></div>
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Contextine
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Build faster with a modern React + Vite setup styled with Tailwind.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-brand dark:text-gray-300 dark:hover:text-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-brand dark:text-gray-300 dark:hover:text-accent">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-brand dark:text-gray-300 dark:hover:text-accent">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="text-gray-700 dark:text-gray-300">hello@example.com</li>
              <li className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t pt-6 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Contextine. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.78-1.35-1.78-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.32 3.53 1 .11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.86.12 3.16.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.61-5.48 5.91.43.37.81 1.1.81 2.23v3.3c0 .32.22.69.82.58A12 12 0 0012 .5z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M22.46 6c-.77.34-1.6.57-2.46.67a4.29 4.29 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.27 4.27 0 00-7.27 3.89 12.12 12.12 0 01-8.8-4.46 4.27 4.27 0 001.32 5.7c-.67-.02-1.3-.2-1.85-.5v.05a4.28 4.28 0 003.42 4.19c-.62.17-1.27.2-1.9.07a4.28 4.28 0 003.99 2.97A8.56 8.56 0 012 19.54a12.08 12.08 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.7 8.7 0 0024 6.84a8.47 8.47 0 01-2.54.7z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

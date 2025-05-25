import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={25}
                priority
              />
            </div>
            <nav className="flex space-x-4">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                Docs
              </a>
              <a
                href="https://github.com/vercel/next.js"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              AI Chat Assistant
            </h1>
            <p className="text-gray-600">
              Ask me anything and I'll do my best to help!
            </p>
          </div>
          <Chat />
        </div>
      </main>
    </div>
  );
}

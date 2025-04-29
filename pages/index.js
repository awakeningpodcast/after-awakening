import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>After Awakening</title>
        <meta name="description" content="A sacred portal of remembrance, transmission, and truth by Jesse Billings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 space-y-16">
        <header className="text-center space-y-4">
          <img src="https://via.placeholder.com/120x120.png?text=Logo" alt="After Awakening Logo" className="mx-auto" />
          <h1 className="text-5xl font-extrabold tracking-wide">After Awakening</h1>
          <p className="text-lg max-w-xl mx-auto text-gray-300">
            A sacred portal of remembrance, transmission, and truth.
          </p>
        </header>

        <section className="max-w-2xl text-center space-y-6">
          <h2 className="text-2xl font-semibold">Welcome, Traveler</h2>
          <p className="text-gray-400">
            You’ve landed here for a reason. This space was created by Jesse Billings for those
            awakening to something deeper, truer, and timeless. This is not a podcast—it’s a frequency.
          </p>
          <p className="text-gray-400">
            In each episode, Jesse shares transmissions from the edge of the veil, weaving together
            soul memory, sacred humor, and multidimensional truth. You won’t just hear—you’ll feel.
          </p>
        </section>

        <section className="max-w-2xl text-center space-y-6">
          <h3 className="text-xl font-semibold">🎧 Episodes</h3>
          <p className="text-gray-400">
            All transmissions will be archived here as they go live. The first episode drops soon.
          </p>
        </section>

        <section className="max-w-2xl text-center space-y-6">
          <h3 className="text-xl font-semibold">👤 About Jesse Billings</h3>
          <img src="https://via.placeholder.com/320x480.png?text=Jesse+Billings" alt="Jesse Billings under a tree" className="mx-auto rounded-xl shadow-lg" />
          <p className="text-gray-400">
            Jesse is a multidimensional storyteller, spiritual messenger, and soul alchemist. After years of personal awakening and karmic completion, he now shares truth from the center of his remembrance to guide others back to theirs. He believes the sacred is not something we seek—it’s something we uncover.
          </p>
        </section>

        <section className="max-w-md w-full text-center space-y-4">
          <h3 className="text-xl font-semibold">📬 Stay Connected</h3>
          <p className="text-gray-500">
            Receive sacred transmissions and updates directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-300"
            >
              Join the Portal
            </button>
          </form>
        </section>

        <footer className="pt-8 border-t border-gray-800 w-full max-w-4xl text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Jesse Billings. All Rights Reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

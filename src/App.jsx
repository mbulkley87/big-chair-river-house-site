export default function App() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
          Blue Ridge, Georgia
        </p>

        <h1 className="mt-4 text-6xl font-bold">
          Big Chair River House
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-stone-700">
          Riverfront cabin on the Toccoa River with private river access,
          outdoor living spaces, and easy access to everything Blue Ridge
          has to offer.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://www.airbnb.com/rooms/579718684971134610"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-stone-900 px-6 py-3 text-white"
          >
            Book on Airbnb
          </a>
        </div>
      </section>
    </main>
  )
}
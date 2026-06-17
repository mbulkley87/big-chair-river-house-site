import { siteData } from "./siteData"

export default function App() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-stone-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold text-white">
            {siteData.name}
          </a>

          <div className="hidden gap-6 text-sm text-white/90 md:flex">
            <a href="#highlights">Highlights</a>
            <a href="#photos">Photos</a>
            <a href="#amenities">Amenities</a>
            <a href="#area">Area</a>
          </div>

          <a
            href={siteData.airbnbUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-900"
          >
            Book on Airbnb
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen">
        <img
          src={siteData.heroImage}
          alt="Big Chair River House"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/50" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
              {siteData.location}
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              {siteData.name}
            </h1>

            <p className="mt-6 text-2xl text-white/90">
              {siteData.tagline}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              {siteData.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteData.stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {siteData.highlights.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-4 leading-7 text-stone-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="photos" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Photos
          </p>
          <h2 className="mt-3 text-4xl font-bold">River views, decks, and cozy cabin spaces</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Photo src="/images/big-river-chair/Exterior/9ae31130-46e6-4faa-8f69-40572db8b089.avif" />
            <Photo src="/images/big-river-chair/Living Room/3282579b-3548-4216-82bd-2d57c0ae6fdc.avif" />
            <Photo src="/images/big-river-chair/Backyard/22ac4429-a391-4847-ad5f-8c7aa0d81e73.avif" />
            <Photo src="/images/big-river-chair/Patio/eb929f9f-e9ea-4d54-9e61-2d05b4a1256c.avif" />
            <Photo src="/images/big-river-chair/Kitchen/2d08f9b6-987b-4602-a4d8-560fbe87cce1.avif" />
            <Photo src="/images/big-river-chair/Bedroom 1/81180c08-0246-4462-a9b6-39c027ea8f54.avif" />
          </div>
        </div>
      </section>

      <section id="amenities" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
          Amenities
        </p>
        <h2 className="mt-3 text-4xl font-bold">Comfortable, practical, and ready for the river</h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.amenities.map((amenity) => (
            <div key={amenity} className="rounded-2xl bg-white px-5 py-4 shadow-sm">
              {amenity}
            </div>
          ))}
        </div>
      </section>

      <section id="area" className="bg-stone-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Nearby
          </p>
          <h2 className="mt-3 text-4xl font-bold">In the heart of the Aska Adventure Area</h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siteData.nearby.map((place) => (
              <div key={place} className="rounded-2xl bg-white/10 px-5 py-4">
                {place}
              </div>
            ))}
          </div>

          <a
            href={siteData.airbnbUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-stone-900"
          >
            Check availability on Airbnb
          </a>
        </div>
      </section>
    </main>
  )
}

function Photo({ src }) {
  return (
    <img
      src={src}
      alt=""
      className="h-80 w-full rounded-3xl object-cover shadow-sm"
      loading="lazy"
    />
  )
}
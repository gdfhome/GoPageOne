import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>GoPageOne | Agenție SEO</title>
        <meta name="description" content="Agenția SEO care te duce pe prima pagină din Google." />
      </Head>

      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">GoPageOne</h1>
          <nav className="space-x-6 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-blue-600">Acasă</a>
            <a href="#services" className="hover:text-blue-600">Servicii</a>
            <a href="#about" className="hover:text-blue-600">Despre</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home" className="bg-blue-50 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Get Found. Get Clicked. Get Results.</h2>
        <p className="max-w-xl mx-auto mb-6 text-gray-700 text-lg">
          Agenția SEO care te duce direct pe prima pagină. Strategii clare, rezultate reale.
        </p>
        <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Contactează-ne
        </a>
      </main>

      <section id="services" className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10">Serviciile noastre</h3>
        <p className="text-gray-600">(Secțiune în construcție...)</p>
      </section>

      <section id="about" className="py-16 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-4">Despre GoPageOne</h3>
        <p className="max-w-2xl mx-auto text-gray-700">
          GoPageOne este agenția SEO dedicată antreprenorilor care vor trafic real, clienți noi și poziționare de top în Google.
        </p>
      </section>

      <section id="contact" className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4">Contactează-ne</h3>
        <p className="text-gray-700 mb-6">Scrie-ne și îți oferim gratuit o analiză SEO personalizată.</p>
        <a href="mailto:contact@gopageone.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Trimite-ne un email
        </a>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GoPageOne. Toate drepturile rezervate.
      </footer>
    </>
  );
}

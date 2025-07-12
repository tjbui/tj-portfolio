import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tru Bui | Portfolio</title>
        <meta name="description" content="Tru Bui - CS + ECE Student Portfolio" />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">👋 Hey, I’m Tru Bui</h1>
          <p className="mb-6 text-lg">
            Computer Science & ECE Minor @ Purdue · Software Engineering · Systems · Embedded · ML Research
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            View Resume
          </a>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>MyShell</strong>: Custom Unix-style shell in C with job control and piping.
              </li>
              <li>
                <strong>Simple C Compiler</strong>: Lex/Yacc-based compiler that outputs x86-64 assembly.
              </li>
              <li>
                <strong>TeamSync</strong>: Full-stack React app with event scheduling, RSVP, and workout tracking.
              </li>
              <li>
                <strong>ADAPT / PEG3 (VA Intern)</strong>: Azure FunctionApp SMS platform used by 200+ veterans.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full text-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        {/* Venstre: tekst */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-5xl font-serif leading-none">
            Vår metode – din styrke
          </h2>

          <p className="text-lg leading-relaxed text-white/90 max-w-xl">
            <span className="block font-serif text-2xl mb-2"></span>
            Gestaltorientert coaching er relasjonell, opplevelsesbasert og
            prosessorientert. Vi utforsker sammen det som skjer her og nå.
            Metoden er kreativ og eksperimenterende, med røtter i konfluent
            pedagogikk. Målet er at du ser deg selv tydeligere og finner dine
            egne valg – fordi <em>du sitter med svaret</em>.
          </p>

          <div className="text-white/80 text-base">
            «Du sitter med svaret» · «Vi gjør det sammen» · «Å se seg selv»
          </div>

          <Link
            href="/prosess"
            className="inline-block border border-white px-6 py-3 uppercase tracking-wider text-sm hover:bg-white hover:text-[#4a332c] transition"
          >
            Les om prosessen
          </Link>
        </div>

        {/* Høyre: bilde (økt høyde + svart/hvitt) */}
        <div className="lg:col-span-6 mt-12 lg:mt-0">
          {/* Ønsker du enda mer høyde, øk h-[680px] til h-[760px] */}
          <div className="relative w-full h-[640px] md:h-[680px]">
            <Image
              src="/images/cgoImage.jpg" // legg bildet i /public og endre filnavn ved behov
              alt="Keramiske former i studio"
              fill
              priority
              className="object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

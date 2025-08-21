import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="w-full text-black py-10">
      <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        {/* Venstre: tekst */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-5xl font-serif leading-none">
            Gestaltcoach
            <p>Cathrine Gåre Opstad</p>
          </h2>

          <p className="text-lg leading-relaxed text-black/90 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <div className="text-black/80 text-base">
            «Du sitter med svaret» · «Vi gjør det sammen» · «Å se seg selv»
          </div>

          <Link
            href="/bestillTime"
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

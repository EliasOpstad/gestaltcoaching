"use client";
import React from "react";

type Item = {
  title: string;
  content: React.ReactNode;
};

const items: Item[] = [
  {
    title: "TEMAER SOM KAN OMHANDLE JOBB",
    content: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 opacity-90 space-y-4 ">
          <li>
            <p>Hvordan er det å være deg på jobb?</p>
          </li>
          <li>
            <p>Hvem blir du i møte med endringer på jobb?</p>
          </li>
          <li>
            <p>Hvordan påvirker det deg?</p>
          </li>
          <li>
            <p>Kanskje kan det være vanskelig å ta valg?</p>
          </li>
          <li>
            <p>Kanskje har du et ønske om å eie det og sette grenser?</p>
          </li>
          <li>
            <p>
              Kanskje kan det være vanskelig å få tak i hva du egentlig vil.
            </p>
          </li>
          <li>
            <p>
              Hvordan ivareta seg selv, og gi seg selvstøtte i den prosessen som
              du ønsker å belyse.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "TEMAER FOR STUDENTER",
    content: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 opacity-90 space-y-4 ">
          {/* "Hvordan stå i alle krav som stilles. Både de du stiller til deg selv, og fra andre. Kanskje trenger du hjelp til å sortere, for å skjønne hvordan det henger sammen. Hvordan ivareta deg selv, og gi deg selvstøtte i den prosessen som du ønsker å belyse.",
          "Kanskje er det vanskelig å ta valg i dilemmaer som omhandler studier?",
          "Hvem blir du i møte med det nye studentmiljøet, eller profesjonen som du skal inn i?",
          "Hvilke valgmuligheter har du, og hva vil du?",
          "Vi gjør det sammen.", */}
          <li>
            <p>
              Hvordan stå i alle krav som stilles. Både de du stiller til deg
              selv, og fra andre. Kanskje trenger du hjelp til å sortere, for å
              skjønne hvordan det henger sammen. Hvordan ivareta deg selv, og gi
              deg selvstøtte i den prosessen som du ønsker å belyse.
            </p>
          </li>
          <li>
            <p>
              Kanskje er det vanskelig å ta valg i dilemmaer som omhandler
              studier?
            </p>
          </li>
          <li>
            <p>
              Hvem blir du i møte med det nye studentmiljøet, eller profesjonen
              som du skal inn i?
            </p>
          </li>
          <li>
            <p>Hvilke valgmuligheter har du, og hva vil du?</p>
          </li>
          <li>
            <p>Vi gjør det sammen.</p>
          </li>
        </ul>
      </div>
    ),
  },

  {
    title: "PRISER",
    content: (
      <div className="space-y-3">
        <p>50 min: 1250 kr (1000 + mva) </p>
        <p>75 min: 1875 kr (1500 + mva)</p>
        <p>
          Avbestilling må skje minst 24 timer på forhånd for å unngå
          fakturering.
        </p>
      </div>
    ),
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className=" text-black py-16 bg-[#aab5af]">
      <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Left heading */}
        <div className="lg:col-span-4 mb-10 lg:mb-0">
          <h2 className="text-5xl leading-none tracking-tight font-serif">
            TJENESTER
          </h2>
        </div>

        {/* Right list */}
        <div className="lg:col-span-8 w-full">
          <ul className="divide-y divide-black/40">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <li key={item.title} className="py-4">
                  <button
                    className="w-full flex items-center justify-between py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${idx}`}
                  >
                    <span className="text-3xl tracking-[0.08em] font-medium">
                      {item.title}
                    </span>

                    {/* Plus icon */}
                    <span
                      className="relative h-6 w-6 shrink-0"
                      aria-hidden="true"
                    >
                      {/* Horizontal bar */}
                      <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-black transition-opacity" />
                      {/* Vertical bar (rotates to disappear) */}
                      <span
                        className={[
                          "absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black transition-transform",
                          isOpen ? "scale-y-0" : "scale-y-100",
                        ].join(" ")}
                      />
                    </span>
                  </button>

                  {/* Divider line (full bleed look) */}
                  <div className="h-[1px] bg-black/40" />

                  {/* Collapsible content */}
                  <div
                    id={`panel-${idx}`}
                    className={[
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-5 pb-2 text-lg/7 text-black/90">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

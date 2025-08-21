import React from "react";
import GoogleMap from "./GoogleMap";
import Link from "next/link";

type PriceCardProps = {
  title: string;
  duration: string;
  exVat: number; // eks. mva
};

const PriceCard = ({ title, duration, exVat }: PriceCardProps) => {
  const vat = Math.round(exVat * 0.25);
  const incVat = exVat + vat;

  const fmt = (n: number) =>
    new Intl.NumberFormat("nb-NO", {
      style: "currency",
      currency: "NOK",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <dl className="mt-1 space-y-1 text-gray-700 leading-relaxed">
        <div className="flex items-baseline gap-2">
          <dt className="text-sm text-gray-500">Varighet:</dt>
          <dd>{duration}</dd>
        </div>
        <div className="flex items-baseline gap-2">
          <dt className="text-sm text-gray-500">Pris:</dt>
          <dd className="font-medium text-gray-900">
            {fmt(incVat)}{" "}
            <span className="text-gray-600">( {fmt(exVat)} + mva )</span>
          </dd>
        </div>
      </dl>
    </article>
  );
};

export default function PricesComponent() {
  return (
    <div className="mx-auto max-w-xl p-4 leading-relaxed">
      {/* Bestillingsseksjon */}
      <section aria-labelledby="booking-heading" className="mb-6">
        <h2 id="booking-heading" className="text-3xl font-bold">
          Ønsker du å bestille time?
        </h2>
      </section>

      {/* Priser */}
      <section aria-labelledby="prices-heading" className="mb-6">
        <h2 id="prices-heading" className="text-2xl font-bold mb-4">
          Priser
        </h2>
        <div className="space-y-4">
          <PriceCard
            title="Gestalt-coaching"
            duration="50 minutter"
            exVat={1000}
          />
          <PriceCard
            title="Gestalt-coaching"
            duration="75 minutter"
            exVat={1500}
          />
          <Link
            href="/"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-[#657cba] px-5 py-3 text-white
                     font-medium shadow-sm transition
                     hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#657cba]"
            aria-label="Gå til bestilling"
          >
            Bestill time
          </Link>

          <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            Avbestilling må skje minst <strong>24 timer</strong> på forhånd for
            å unngå fakturering.
          </p>
        </div>
      </section>

      {/* Kart i egen seksjon (valgfritt: legg lenger ned på siden) */}
      <section aria-labelledby="location-heading" className="mb-6">
        <h2 id="location-heading" className="text-2xl font-bold mb-4">
          Beliggenhet
        </h2>
        <GoogleMap />
      </section>

      {/* Anker for CTA-lenken */}
      <div id="kontakt" className="sr-only" aria-hidden="true" />
    </div>
  );
}

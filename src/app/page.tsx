import React from "react";

import "../styles/globals.css";
import TextAndImageComponent from "@/components/TextAndImageComponent";
import GoogleMap from "@/components/GoogleMap";
import ServicesAccordion from "@/components/ServicesAccordion";
import AboutSection from "@/components/About";

const Home = () => {
  return (
    <>
      <AboutSection />
      <ServicesAccordion />
      {/* <Image
        src="/images/homeBackground.jpg"
        alt="Home Background"
        height={500}
        width={500}
        className="inset-0 object-cover w-full h-full"
      /> */}

      <div className="absolute inset-0 flex items-center justify-center"></div>

      <TextAndImageComponent
        imageSrc="/images/homeBackground.jpg"
        altText="Test Image"
        title="Temaer som kan omhandle jobb:"
        text={[
          "Hvordan er det å være deg på jobb?",
          "Hvem blir du i møte med endringer på jobb?",
          "Hvordan påvirker det deg?",
          "Kanskje kan det være vanskelig å ta valg?",
          "Kanskje har du et ønske om å eie det og sette grenser?",
          "Kanskje kan det være vanskelig å få tak i hva du egentlig vil.",
          "Hvordan ivareta seg selv, og gi seg selvstøtte i den prosessen som du ønsker å belyse.",
          "Vi gjør det sammen.",
        ]}
        reverseOrder={false}
      />

      <TextAndImageComponent
        imageSrc="/images/homeBackground.jpg"
        altText="Test Image"
        title="Temaer som kan omhandle deg som student"
        text={[
          "Hvordan stå i alle krav som stilles. Både de du stiller til deg selv, og fra andre. Kanskje trenger du hjelp til å sortere, for å skjønne hvordan det henger sammen. Hvordan ivareta deg selv, og gi deg selvstøtte i den prosessen som du ønsker å belyse.",
          "Kanskje er det vanskelig å ta valg i dilemmaer som omhandler studier?",
          "Hvem blir du i møte med det nye studentmiljøet, eller profesjonen som du skal inn i?",
          "Hvilke valgmuligheter har du, og hva vil du?",
          "Vi gjør det sammen.",
        ]}
        reverseOrder={true}
      />

      <TextAndImageComponent
        imageTitle="Temaer som kan omhandle jobb:"
        imageSrc={[
          "Hvordan er det å være deg på jobb?",
          "Hvem blir du i møte med endringer på jobb?",
          "Hvordan påvirker det deg?",
          "Kanskje kan det være vanskelig å ta valg?",
          "Kanskje har du et ønske om å eie det og sette grenser?",
          "Kanskje kan det være vanskelig å få tak i hva du egentlig vil.",
          "Hvordan ivareta seg selv, og gi seg selvstøtte i den prosessen som du ønsker å belyse.",
          "Vi gjør det sammen.",
        ]}
        altText="Test Image"
        title="Priser"
        text={[
          "Gestalt-coaching, 50 minutter, kr. 1250 kr (1000 + mva)",
          "Gestalt-coaching, 75 minutter, 1875 kr (1500 + mva)",
          "Avbestilling må skje minst 24 timer på forhånd for å unngå fakturering.",
        ]}
        reverseOrder={false}
      />
      <TextAndImageComponent
        imageSrc={<GoogleMap />}
        altText="Test Image"
        title="Beliggenhet"
        text={[
          "Jeg holder til i Bygdøy allé 21.",
          "Ringeklokke: Cathrine Gåre Opstad.",
          "Jeg gleder meg til å møte deg.",
          "e-post: cathrine@gestaltcoach.no",
          "Tel: 97259840",
        ]}
        reverseOrder={false}
      />
    </>
  );
};

export default Home;

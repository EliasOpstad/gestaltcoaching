import FeedbackAboutCGO from "@/components/FeedbackAboutCGO";
import TextAndImageComponent from "@/components/TextAndImageComponent";
import React from "react";

const Om = () => {
  return (
    <>
      <TextAndImageComponent
        imageSrc="/images/cgoBilde.jpg"
        altText="Cathrine Gåre Opstad"
        title="Om Cathrine Gåre Opstad"
        text={
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeedbackAboutCGO
                text="Cathrine Gåre Opstad er en fantastisk gestaltcoach. Hun har en unik evne til å lytte og forstå, og hennes tilnærming har hjulpet meg med å finne klarhet i mine utfordringer. Jeg anbefaler henne på det sterkeste!"
                name="Elias Opstad"
              />
              <FeedbackAboutCGO
                text="Cathrine Gåre Opstad er en fantastisk gestaltcoach. Hun har en unik evne til å lytte og forstå, og hennes tilnærming har hjulpet meg med å finne klarhet i mine utfordringer. Jeg anbefaler henne på det sterkeste!"
                name="Elias Opstad"
              />
              <FeedbackAboutCGO
                text="Cathrine Gåre Opstad er en fantastisk gestaltcoach. Hun har en unik evne til å lytte og forstå, og hennes tilnærming har hjulpet meg med å finne klarhet i mine utfordringer. Jeg anbefaler henne på det sterkeste!"
                name="Elias Opstad"
              />
              <FeedbackAboutCGO
                text="Cathrine Gåre Opstad er en fantastisk gestaltcoach. Hun har en unik evne til å lytte og forstå, og hennes tilnærming har hjulpet meg med å finne klarhet i mine utfordringer. Jeg anbefaler henne på det sterkeste!"
                name="Elias Opstad"
              />
            </div>
            <div className="mt-6">
              I min erfaringsbank har jeg en rekke utdannelser, være seg;
              håndverker, leder, tegnspråktolk og gestaltcoach. I min
              yrkeskarriere har jeg vært både freelancer, fast ansatt og
              grunder. Jeg har også kjent på kroppen det å ha møtt veggen to
              ganger gjennom min yrkeskarriere. Jeg er glad i mennesker, er
              lyttende, kreativ, åpen og til stede. Jeg er medlem i
              gestaltpraktiserende i organisasjoner (gpo). (hjemmeside) Jeg
              gleder meg til å møte deg.
            </div>
          </div>
        }
        reverseOrder={false}
      />
    </>

    //     <>
    //       <TextAndImageComponent
    //         imageSrc="/images/cgoBilde.jpg"
    //         altText="Cathrine Gåre Opstad"
    //         title="Om Cathrine Gåre Opstad"
    //         text="I min erfaringsbank har jeg en rekke utdannelser, være seg; håndverker, leder, tegnspråktolk og gestaltcoach. I min yrkeskarriere har jeg vært både freelancer, fast ansatt og grunder. Jeg har også kjent på kroppen det å ha møtt veggen to ganger gjennom min yrkeskarriere. Jeg er glad i mennesker, er lyttende, kreativ, åpen og til stede.
    // Jeg er medlem i gestaltpraktiserende i organisasjoner (gpo). (hjemmeside)
    // Jeg gleder meg til å møte deg.
    // "
    //         reverseOrder={true}
    //       />
    //     </>
  );
};

export default Om;

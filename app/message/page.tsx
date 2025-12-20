import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function KingMessage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-6 inline-block px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full">
        Message from the Oniru
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="gap-2">
          <CardTitle className="text-2xl font-bold">
            HRM OBA ABDULWASIU OMOGBOLAHAN LAWAL
          </CardTitle>
          <div className="text-muted-foreground text-sm">
            CON ABISOGUN II • THE ONIRU OF IRU KINGDOM
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-[280px_1fr] gap-6 items-start">
            <div className="relative w-full aspect-3/4 md:aspect-7/10 overflow-hidden rounded-xl border">
              <Image
                src="/images/oba.jpg"
                alt="HRM OBA ABDULWASIU OMOGBOLAHAN LAWAL"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4 text-base leading-relaxed">
              <p>
                Over the past five years of my reign, my conversations with
                stakeholders across Iru Kingdom and beyond have revealed a
                shared view: cultural diplomacy is essential to improving
                livelihoods and strengthening the ease of doing business in our
                community.
              </p>
              <p>
                Business leaders, diplomats, cultural custodians, investors,
                creatives, and residents all expressed the need for a structured
                platform that connects our cultural identity with how we engage,
                attract investment, and solve common challenges. The informal
                channels that previously linked people to government and
                institutions have served us well, but the time has come to
                organize them more effectively.
              </p>
              <p>
                This is what inspired the Oniru Business and Cultural Day: a
                platform that links business and culture, supports
                collaboration, and positions the traditional institution as an
                active partner in community development. This platform brings
                the Palace, Private and Public (PPP) institutions to the table,
                reflecting the character of Iruland: resilient, open, and
                forward-looking.
              </p>
              <p>
                Through this initiative, we aim to make cultural diplomacy a
                practical tool for prosperity, investment, and shared progress
                in our cosmopolitan Kingdom.
              </p>

              <div className="pt-4 border-t">
                <div className="font-semibold">
                  HRM OBA ABDULWASIU OMOGBOLAHAN LAWAL CON
                </div>
                <div>ABISOGUN II</div>
                <div>THE ONIRU OF IRU KINGDOM</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default function Message() {
  return <KingMessage />;
}

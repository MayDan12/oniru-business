import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function CommissionerMessages() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-6 inline-block px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full">
        Message from the Commissioner
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="gap-2">
          <CardTitle className="text-2xl font-bold">
            Mrs Folashade Kaosarat Bada-Ambrose
          </CardTitle>
          <div className="text-muted-foreground text-sm">
            Honourable Commissioner for Commerce, Cooperatives, Trade and
            Investment
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-[280px_1fr] gap-6 items-start">
            <div className="relative w-full aspect-3/4 md:aspect-7/10 overflow-hidden rounded-xl border">
              <Image
                src="/images/comm.jpg"
                alt="HRM OBA ABDULWASIU OMOGBOLAHAN LAWAL"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4 text-base leading-relaxed">
              <p>
                The Iru Business Network is a platform created to strengthen
                lasting engagement between government, the private sector,
                traditional institutions, and the wider business community. This
                initiative is anchored through the Ministry of Commerce,
                Cooperatives, Trade and Investment. The Network aligns with the
                Governor’s THEMES Agenda and builds on Lagos State’s proven
                record in supporting enterprise, attracting investment, and
                advancing sustainable economic growth.
              </p>
              <p>
                The Network reflects the traditional institution’s emphasis on
                structured Public Private Partnership and recognises the scale
                and diversity of commercial activity within Iru Land, which
                remains one of Lagos State’s most significant centres of
                business and investment.
              </p>
              <p>
                By providing a clear framework for dialogue, collaboration, and
                continuity beyond single events, the Iru Business Network helps
                translate shared priorities into practical outcomes.
              </p>
              <p>
                Through this platform, businesses, investors, professional
                bodies, and development partners are invited to engage in
                shaping inclusive growth, strengthening confidence, and
                supporting long-term economic and cultural development across
                Lagos State.
              </p>
              <p>
                We are happy to have all stakeholders come together on this
                platform to achieve our shared & individual socioeconomic goals
                even as we look forward to convening at the Oniru Business and
                Cultural Day Event on 14th February 2026.
              </p>

              <div className="pt-4 border-t">
                <div className="font-semibold">
                  Mrs Folashade Kaosarat Bada-Ambrose
                </div>
                <div>Honourable Commissioner </div>
                <div>Commerce, Cooperatives, Trade and Investment</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default function CommissionerMessage() {
  return <CommissionerMessages />;
}

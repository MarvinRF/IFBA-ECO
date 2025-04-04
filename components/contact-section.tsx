"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Scale, Users, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const supportResources = [
  {
    category: "Órgãos Governamentais",
    items: [
      {
        title: "Ministério Público da Bahia",
        icon: <Scale className="h-6 w-6 text-primary" />,
        contacts: [
          { type: "phone", value: "(71) 3103-0444", label: "Ouvidoria" },
          {
            type: "web",
            value: "https://www.mpba.mp.br",
            label: "Site Oficial",
          },
        ],
        description:
          "Denuncie casos de injustiça ambiental e violações de direitos",
      },
      {
        title: "Defensoria Pública da Bahia",
        icon: <Scale className="h-6 w-6 text-primary" />,
        contacts: [
          {
            type: "phone",
            value: "(71) 3117-7000",
            label: "Central de Atendimento",
          },
          { type: "phone", value: "(71) 3117-7080", label: "Direitos Humanos" },
        ],
        description:
          "Assistência jurídica gratuita para comunidades vulneráveis",
      },
    ],
  },
  {
    category: "Organizações e Coletivos",
    items: [
      {
        title: "Comissão Pastoral da Terra (CPT)",
        icon: <Users className="h-6 w-6 text-primary" />,
        contacts: [
          { type: "phone", value: "(71) 3241-0751" },
          { type: "web", value: "https://www.cptnacional.org.br" },
        ],
        description: "Acompanhamento de conflitos por terra e água",
      },
      {
        title: "Instituto Socioambiental",
        icon: <Users className="h-6 w-6 text-primary" />,
        contacts: [
          { type: "web", value: "https://www.socioambiental.org" },
          { type: "email", value: "contato@socioambiental.org" },
        ],
        description: "Defesa de territórios tradicionais",
      },
    ],
  },
  {
    category: "Canais de Emergência",
    items: [
      {
        title: "Disque Direitos Humanos",
        icon: <AlertTriangle className="h-6 w-6 text-primary" />,
        contacts: [
          { type: "phone", value: "100" },
          { type: "web", value: "https://www.gov.br/mdh/pt-br/disque100" },
        ],
        description: "Denúncias anônimas 24h",
      },
      {
        title: "Emergência Ambiental (INEMA)",
        icon: <AlertTriangle className="h-6 w-6 text-primary" />,
        contacts: [
          { type: "phone", value: "(71) 3116-3041" },
          { type: "web", value: "https://www.inema.ba.gov.br" },
        ],
        description: "Denúncias de crimes ambientais",
      },
    ],
  },
];

const MotionCard = motion(Card);

export function SupportMapSection() {
  return (
    <section id="apoio" className="py-16 px-4 md:px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Apoio ao Combate ao Racismo Ambiental
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MotionCard
                whileHover={{ scale: 1.02 }}
                className="h-full flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{resource.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  {resource.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-4">
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <h3 className="font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="space-y-2">
                        {item.contacts.map((contact, contactIndex) => (
                          <div
                            key={contactIndex}
                            className="flex items-center gap-2"
                          >
                            {contact.type === "phone" && (
                              <Link
                                href={`tel:${contact.value}`}
                                className="flex items-center gap-2 hover:underline"
                              >
                                <Phone className="h-4 w-4" />
                                <span>{contact.value}</span>
                                {"label" in contact && contact.label && (
                                  <span className="text-sm text-muted-foreground">
                                    ({contact.label})
                                  </span>
                                )}
                              </Link>
                            )}
                            {contact.type === "web" && (
                              <Link
                                href={contact.value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:underline"
                              >
                                <MapPin className="h-4 w-4" />
                                <span>Acessar Site</span>
                              </Link>
                            )}
                            {contact.type === "email" && (
                              <Link
                                href={`mailto:${contact.value}`}
                                className="flex items-center gap-2 hover:underline"
                              >
                                <Mail className="h-4 w-4" />
                                <span>Enviar Email</span>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </MotionCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block w-[100%]">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Ajuda Imediata</h3>
              <div className="flex flex-col gap-3">
                <Link href="tel:100" className="text-red-600 hover:underline">
                  <AlertTriangle className="inline mr-2 h-4 w-4" />
                  Disque Direitos Humanos - 100
                </Link>
                <Link href="tel:190" className="text-blue-600 hover:underline">
                  <AlertTriangle className="inline mr-2 h-4 w-4" />
                  Emergência Policial - 190
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

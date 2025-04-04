"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, MapPin, Users, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const conceptCards = [
  {
    title: "O Que é Racismo Ambiental?",
    icon: <AlertCircle className="h-6 w-6 text-primary" />,
    content: (
      <>
        <p className="mb-4">
          Discriminação sistêmica que expõe comunidades marginalizadas a riscos
          ambientais desproporcionais, combinando opressão racial e desigualdade
          socioambiental.
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex gap-2">
            <span className="font-semibold">Origem:</span>
            <span>
              Termo cunhado nos EUA nos anos 1980, mas com raízes no Brasil
              colonial
            </span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Eixo central:</span>
            <span>Justiça espacial negada a grupos racializados</span>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "No Contexto Brasileiro",
    icon: <MapPin className="h-6 w-6 text-primary" />,
    content: (
      <>
        <p className="mb-3">
          Como destacado por <em className="font-semibold">Tania Pacheco</em>,
          manifesta-se através:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>
            Favelas sem saneamento básico (35% da população negra vive em áreas
            sem coleta de esgoto)
          </li>
          <li>
            Territórios tradicionais ameaçados (só na Bahia, 73 comunidades
            quilombolas em risco por mineração)
          </li>
          <li>
            Negligência em desastres: 89% dos afetados em Mariana/Brumadinho
            eram negros
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Caminhos de Combate",
    icon: <Users className="h-6 w-6 text-primary" />,
    content: (
      <>
        <div className="space-y-3">
          <p className="font-semibold text-primary">
            Justiça integrada racial + ambiental = Ecointerseccionalidade
          </p>
          <ul className="list-decimal pl-6 space-y-2 text-sm">
            <li>Reconhecimento de epistemicídio ambiental</li>
            <li>Participação comunitária nas políticas públicas</li>
            <li>Reparação histórica dos territórios</li>
            <li>Criminalização do ecocídio</li>
          </ul>
        </div>
      </>
    ),
  },
];

const MotionCard = motion(Card);

export function ConceptSection() {
  return (
    <section id="conceito" className="py-16 px-4 md:px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Entendendo o Racismo Ambiental
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conceptCards.map((card, index) => (
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
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    {card.icon}
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="space-y-3">
                    {card.content}
                  </CardDescription>
                </CardContent>
              </MotionCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            Dados: IBGE (2022), CPT Bahia (2023), Relatório da ONU sobre
            Brumadinho (2019)
          </p>
        </motion.div>
      </div>
    </section>
  );
}

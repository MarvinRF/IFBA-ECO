"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, Leaf, Droplets, Sun } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    title: "Conservação",
    description:
      "Aprenda sobre a importância da preservação dos ecossistemas naturais e como você pode contribuir para a conservação do meio ambiente.",
  },
  {
    icon: <Recycle className="h-8 w-8 text-green-600" />,
    title: "Sustentabilidade",
    description:
      "Descubra práticas sustentáveis para o dia a dia e como pequenas mudanças podem ter um grande impacto positivo no planeta.",
  },
  {
    icon: <Droplets className="h-8 w-8 text-green-600" />,
    title: "Recursos Naturais",
    description:
      "Entenda a importância do uso consciente dos recursos naturais e como podemos garantir sua disponibilidade para futuras gerações.",
  },
  {
    icon: <Sun className="h-8 w-8 text-green-600" />,
    title: "Energia Limpa",
    description:
      "Conheça as diferentes fontes de energia renovável e como elas podem contribuir para um futuro mais sustentável.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sobre Nossa Missão
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-2 border-border hover:border-primary/50 hover:scale-105 transition-transform duration-300">
                <CardHeader className="space-y-1 flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-center mt-4">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

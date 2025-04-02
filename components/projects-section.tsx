"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Reflorestamento Urbano",
    description:
      "Projeto de plantio de árvores em áreas urbanas para melhorar a qualidade do ar e criar espaços verdes.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    category: "Biodiversidade",
  },
  {
    title: "Reciclagem Consciente",
    description:
      "Iniciativa para promover a reciclagem correta e reduzir o impacto ambiental do descarte inadequado.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
    category: "Resíduos",
  },
  {
    title: "Energia Solar nas Escolas",
    description:
      "Implementação de painéis solares em escolas públicas para educação ambiental e economia de energia.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
    category: "Energia",
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const MotionButton = motion(Button);

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-16 px-4 md:px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mais Casos
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <span className="text-sm text-primary font-medium">
                      {project.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                  <MotionButton
                    className="w-full mt-4 bg-primary hover:bg-primary/90"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saiba Mais
                  </MotionButton>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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
    title: "Ilha de Maré - Contaminação por Petróleo",
    description:
      "Comunidade quilombola exposta a metais pesados e vazamentos da Petrobras.",
    image:
      "https://i0.wp.com/almapreta.com.br/images/2022/03/marisco-leonardo-rattes-site.jpg?w=800&ssl=1",
    category: "Racismo Ambiental",
    source:
      "https://brasil.mongabay.com/2023/01/ilha-de-mare-sete-decadas-de-racismo-ambiental-em-salvador/",
  },
  {
    title: "Mineração em Caetité - BAMIN",
    description: "Poeira de minério afeta saúde de comunidades tradicionais.",
    image:
      "https://assets.brasildefato.com.br/2024/09/image_processing20220927-5447-13emr5r.jpeg",
    category: "Racismo Ambiental",
    source: "http://verbetes.cetem.gov.br/verbetes/ExibeVerbete.aspx?verid=174",
  },
  {
    title: "Ferrovia FIOL - Bom Jesus da Lapa",
    description: "Obra impacta territórios quilombolas sem consulta prévia.",
    image:
      "https://www.sudoestebahia.com/bc-imagens/noticias/0623-sudoeste-bahia-4387-sudoeste-bahia-pasted-image-0-1.webp",
    category: "Racismo Ambiental",
    source:
      "https://brasil.mongabay.com/2021/08/ferrovia-e-mineracao-no-sudoeste-da-bahia-comunidades-denunciam-uma-decada-de-descaso/",
  },
  {
    title: "Agronegócio no Oeste Baiano",
    description:
      "Agronegócio desmatou ’51 mil campos de futebol’ de vegetação nativa no cerrado baiano",
    image:
      "https://racismoambiental.net.br/wp-content/uploads/2022/08/cerrado-agronegocio-desmatamento-750x410.jpg",
    category: "Racismo Ambiental",
    source:
      "https://racismoambiental.net.br/2022/08/03/agronegocio-desmatou-51-mil-campos-de-futebol-de-vegetacao-nativa-no-cerrado-baiano/",
  },
  {
    title: "Sento Sé - Mineração Tombador Iron",
    description: "Impactos da mineração na qualidade de vida local.",
    image:
      "https://cptba.org.br/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-31-at-09.38.19-1024x575.jpeg.webp",
    category: "Racismo Ambiental",
    source:
      "https://cptba.org.br/mineradora-causa-danos-as-comunidades-tradicionais-de-sento-se/",
  },
  {
    title: "Salvador - Desigualdade Urbana",
    description: "Periferias sofrem com enchentes e falta de saneamento.",
    image:
      "https://www.meiahora.com.br/_midias/jpg/2024/01/19/700x470/1_foto__bea_domingos__1_-31762322.jpg",
    category: "Racismo Ambiental",
    source:
      "https://educacaosemdistancia.unyleya.edu.br/esd/article/view/120/42",
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
          Casos de Racismo Ambiental na Bahia
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
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MotionButton
                      className="w-full mt-4 bg-primary hover:bg-primary/90"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Saiba Mais
                    </MotionButton>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

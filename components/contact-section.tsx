"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Entre em Contato
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Envie sua mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo para entrar em contato conosco.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      aria-label="Nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      aria-label="Email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Sua mensagem"
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      aria-label="Sua mensagem"
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Enviar Mensagem
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>
                  Outras formas de entrar em contato conosco.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contato@IFBA - Concientização.com.br</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(11) 9999-9999</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Valença, BA - Brasil</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

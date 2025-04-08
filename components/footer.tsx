import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">IFBA - Conscientização</span>
            </div>
            <p className="text-muted-foreground">
              Promovendo a educação ambiental e a conscientização ecológica para
              um futuro sustentável.
            </p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              Este site foi desenvolvido pela turma de Seminários Temáticos II
              do semestre 2024.2, pelos estudantes Gustavo Teles Rocha, Mavin
              Rocha, Anderson Guimarães e Marcos Santos, sob a orientação da
              professora Eliete Barros.
            </p>
            <p>
              A disciplina tem como foco a discussão de temas relacionados a
              Direitos Humanos e Diversidade, Gênero e Educação Ambiental,
              promovendo reflexões sobre questões sociais e ambientais
              contemporâneas.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2025 IFBA - Conscientização. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

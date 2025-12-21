import { AlertTriangle, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextWithKeywordLinks } from "@/components/KeywordLink";

interface Problem {
  symptom: string;
  risk: string;
}

interface Solution {
  title: string;
  description: string;
}

interface ProblemSolutionProps {
  sectionTitle?: string;
  problemTitle?: string;
  solutionTitle?: string;
  problems: Problem[];
  solutions: Solution[];
  urgencyMessage?: string;
}

export default function ProblemSolutionSection({
  sectionTitle = "Erkennen Sie Ihr Problem?",
  problemTitle = "Warnsignale, die Sie nicht ignorieren sollten",
  solutionTitle = "Unsere Lösung für Sie",
  problems,
  solutions,
  urgencyMessage = "Je früher Sie handeln, desto günstiger wird die Reparatur!"
}: ProblemSolutionProps) {
  return (
    <section className="py-4 md:py-6 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary text-center mb-8">
            {sectionTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-2 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-800">{problemTitle}</h3>
              </div>

              <ul className="space-y-4">
                {problems.map((problem, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-red-500 font-bold text-lg">!</span>
                    <div>
                      <p className="font-semibold text-red-900">{problem.symptom}</p>
                      <p className="text-sm text-red-700"><TextWithKeywordLinks>{problem.risk}</TextWithKeywordLinks></p>
                    </div>
                  </li>
                ))}
              </ul>

              {urgencyMessage && (
                <div className="mt-6 p-4 bg-red-100 rounded-lg">
                  <p className="text-red-800 font-medium text-sm">
                    <AlertTriangle className="h-4 w-4 inline mr-2" />
                    {urgencyMessage}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800">{solutionTitle}</h3>
              </div>

              <ul className="space-y-4">
                {solutions.map((solution, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900">{solution.title}</p>
                      <p className="text-sm text-green-700"><TextWithKeywordLinks>{solution.description}</TextWithKeywordLinks></p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a href="/rueckruf">
                  <Button className="w-full bg-green-600 hover:bg-green-700" data-testid="problem-solution-cta">
                    <Phone className="h-4 w-4 mr-2" /> Jetzt Lösung besprechen
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="/beratung" className="inline-flex items-center text-primary font-medium hover:underline">
              Kostenlose Erstberatung vereinbaren <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

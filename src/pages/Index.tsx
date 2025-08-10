import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const subjects = [
  { id: "physics", title: "PHYSICS", desc: "Complete physics study materials with HC Verma, Resnick Halliday", files: 10, badge: "Popular" },
  { id: "maths", title: "MATHEMATICS", desc: "Advanced mathematics resources and problem sets", files: 9, badge: "Popular" },
  { id: "chemistry", title: "CHEMISTRY", desc: "Organic, Inorganic & Physical Chemistry guides", files: 24 },
  { id: "biology", title: "BIOLOGY", desc: "NEET Biology preparation materials", files: 7 },
  { id: "ncert", title: "NCERT SOLUTIONS", desc: "Complete NCERT textbooks and detailed solutions", files: 1, badge: "New" },
  { id: "pyq", title: "PREVIOUS YEAR PAPERS", desc: "JEE & NEET question papers collection", files: 2, badge: "Popular" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SEO title="onlybooks — JEE & NEET Study Resources" description="Curated JEE & NEET notes, NCERT solutions, previous year papers and more." canonical={window.location.href} />
      <div className="fixed inset-0 grid-bg opacity-40" aria-hidden="true"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-background/80 via-transparent to-background/80" aria-hidden="true"></div>
      <div className="pointer-events-none fixed top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
      <div className="pointer-events-none fixed top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} aria-hidden="true"></div>
      <div className="pointer-events-none fixed bottom-40 left-1/4 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} aria-hidden="true"></div>

      <Header />

      <main>
        <section id="home" className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-hero-text-gradient bg-clip-text text-transparent">
              Kyu nhi ho rhi padhai??
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              for all the JEE and NEET crackheads &lt;3
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button size="lg" variant="hero">Start Learning</Button>
              <Button size="lg" variant="outline">Explore Resources</Button>
            </div>
          </div>
        </section>

        <section id="subjects" aria-labelledby="core-subjects" className="relative py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 id="core-subjects" className="text-2xl sm:text-3xl font-semibold tracking-tight">Core Subjects</h2>
            </div>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map((s) => (
                <article id={s.id} key={s.id} className="group focus-within:ring-2 focus-within:ring-ring rounded-lg">
                  <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg tracking-wide">{s.title}</CardTitle>
                        {s.badge && (
                          <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border">{s.badge}</span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{s.desc}</p>
                      <p className="text-sm text-foreground/70">{s.files} files available</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="px-0">Explore</Button>
                    </CardFooter>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;


import { PatternGenerator } from '@/components/pattern-generator'
import { SITE_NAME } from '@/lib/constant';

export default function Home() {
  return (
    <>      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 border-b border-border bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Create Beautiful
                  <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Geometric Patterns
                  </span>
                </h1>
                <p className="text-xl text-foreground/70 mb-8 max-w-xl">
                  Design stunning, unique patterns in seconds. Choose shapes, colors, and styles. Export high-quality PNG images for your projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#generator"
                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  >
                    Start Creating Now
                  </a>
                  <a
                    href="/about"
                    className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-card rounded-2xl border border-border p-8 shadow-xl">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-20 h-20 mx-auto text-primary/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                      <p className="text-foreground/60">Your patterns appear here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Generator Section */}
        <section id="generator" className="py-16 px-4 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <PatternGenerator />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-card/30 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Powerful Features</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Everything you need to create stunning patterns with professional control and flexibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon="🎨"
                title="Multiple Shapes"
                description="Choose from circles, squares, triangles, stars, and more. Each shape offers unique customization options for endless creativity."
              />
              <FeatureCard
                icon="🔄"
                title="Pattern Types"
                description="Generate grid, radial, and wave patterns. Each type creates unique visual effects and transformations."
              />
              <FeatureCard
                icon="🎛️"
                title="Full Control"
                description="Adjust colors, spacing, scale, and rotation in real-time. See changes instantly on the canvas."
              />
              <FeatureCard
                icon="🎨"
                title="Color Customization"
                description="Full color picker for primary and secondary colors. Create harmonious or contrasting color schemes."
              />
              <FeatureCard
                icon="📊"
                title="Adjustable Parameters"
                description="Fine-tune spacing, size, rotation, and density. Create subtle or bold patterns based on your vision."
              />
              <FeatureCard
                icon="💾"
                title="Export as PNG"
                description="Download your patterns as high-quality PNG images. Perfect for design projects, printing, and sharing."
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Use Cases</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                {SITE_NAME} is perfect for designers, developers, and creative professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <UseCaseCard
                title="Web Design"
                description="Create unique background patterns for websites, landing pages, and web applications. Add visual interest to your projects."
              />
              <UseCaseCard
                title="Graphic Design"
                description="Generate patterns for print materials, social media graphics, and branding materials. Professional quality every time."
              />
              <UseCaseCard
                title="UI/UX Design"
                description="Design custom patterns for user interfaces, buttons, and interactive elements. Enhance user experience with unique visuals."
              />
              <UseCaseCard
                title="Textile & Fashion"
                description="Create patterns for fabric designs, clothing prints, and fashion accessories. Endless possibilities for custom designs."
              />
              <UseCaseCard
                title="Art & Illustration"
                description="Generate geometric compositions for artwork and digital illustrations. Use as inspiration or final product."
              />
              <UseCaseCard
                title="Marketing Materials"
                description="Design eye-catching patterns for posters, flyers, and promotional materials. Stand out from the crowd."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-card/30 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Simple, intuitive, and powerful. Create patterns in just a few clicks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StepCard number="1" title="Choose Shape" description="Select your preferred shape from the available options." />
              <StepCard number="2" title="Pick Pattern" description="Choose a pattern type: grid, radial, or wave." />
              <StepCard number="3" title="Customize Colors" description="Select primary and secondary colors using the color picker." />
              <StepCard number="4" title="Export" description="Download your pattern as a high-quality PNG image." />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Start designing beautiful geometric patterns today. It&apos;s free, easy, and fun!
            </p>
            <a
              href="#generator"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-lg"
            >
              Start Designing Now
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  )
}

function UseCaseCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all">
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4"></div>
      <h3 className="text-2xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-background rounded-xl p-6 border border-border text-center">
      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-lg">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  )
}

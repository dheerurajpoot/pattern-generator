import { SITE_NAME } from '@/lib/constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `About ${SITE_NAME}`,
  description: `Learn more about ${SITE_NAME} and our mission to make pattern creation accessible to everyone.`,
}

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-foreground mb-6">About {SITE_NAME}</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {SITE_NAME} was created to democratize pattern design. We believe that everyone,
              regardless of their design experience, should be able to create beautiful, unique patterns.
              Our tool makes it simple, intuitive, and fun.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Offer</h2>
            <ul className="text-foreground/80 text-lg space-y-3 list-disc list-inside">
              <li>Multiple shape options (circles, squares, triangles, and stars)</li>
              <li>Three distinct pattern types (grid, radial, and wave)</li>
              <li>Full color customization for shapes and backgrounds</li>
              <li>Adjustable spacing and scale for perfect compositions</li>
              <li>One-click PNG export for easy sharing</li>
              <li>Real-time preview of your changes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why {SITE_NAME}?</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Creating patterns shouldn&apos;t require expensive software or advanced design skills.
              {SITE_NAME} is web-based, free, and requires zero technical knowledge. Whether
              you&apos;re a designer looking for inspiration or someone who just wants to have fun
              creating visuals, we&apos;ve got you covered.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Started Today</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Head back to the home page and start creating your first pattern. No sign-up required,
              no confusing menus—just pure pattern creation fun.
            </p>
            <a
              href="/"
              className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              Create Patterns Now
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}

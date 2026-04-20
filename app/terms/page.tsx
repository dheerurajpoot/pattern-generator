import { SITE_NAME } from '@/lib/constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Terms of Service - ${SITE_NAME}`,
  description: `Read our terms of service for ${SITE_NAME}.`,
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-foreground mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              By using {SITE_NAME}, you agree to these terms and conditions. If you do not agree,
              please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
            <p className="text-foreground/80 leading-relaxed">
              We grant you a limited, non-exclusive license to use {SITE_NAME} for personal,
              non-commercial purposes. You may not: modify or copy the materials, use them for any
              commercial purpose, or attempt to decompile or reverse engineer any software in the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
            <p className="text-foreground/80 leading-relaxed">
              The materials on {SITE_NAME} are provided on an &apos;as is&apos; basis. We make no
              warranties, expressed or implied, and hereby disclaim and negate all other warranties. Further,
              we do not warrant the accuracy, timeliness, or completeness of the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
            <p className="text-foreground/80 leading-relaxed">
              In no event shall {SITE_NAME} or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
            <p className="text-foreground/80 leading-relaxed">
              The materials appearing on {SITE_NAME} could include technical, typographical, or
              photographic errors. We do not warrant that any of the materials are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Materials and Content</h2>
            <p className="text-foreground/80 leading-relaxed">
              Unless otherwise stated, we own the intellectual property rights for all material on
              {SITE_NAME}. You may print or download portions of the material for your personal,
              non-commercial use only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Links</h2>
            <p className="text-foreground/80 leading-relaxed">
              We have not reviewed all of the sites linked to our website and are not responsible for
              the contents of any such linked site. Your use of any linked website is at the user&apos;s own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Modifications</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may revise these terms of service at any time without notice. By using this website, you are
              agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the
              jurisdiction in which we operate, and you irrevocably submit to the exclusive jurisdiction of the
              courts in that location.
            </p>
          </section>

          <section>
            <p className="text-foreground/70 italic">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

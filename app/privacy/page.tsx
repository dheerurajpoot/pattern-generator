import { SITE_NAME } from '@/lib/constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Privacy Policy - ${SITE_NAME}`,
  description: `Read our privacy policy for ${SITE_NAME}.`,
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed">
              At {SITE_NAME}, we respect your privacy. This policy explains how we collect, use,
              disclose, and safeguard your information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect
              on the site includes:
            </p>
            <ul className="text-foreground/80 space-y-2 ml-6 list-disc">
              <li><strong>Personal Data:</strong> Name, email address, and other details you submit through forms</li>
              <li><strong>Device Information:</strong> Browser type, IP address, and operating system</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on the site, and referral source</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use the information we collect in the following ways:
            </p>
            <ul className="text-foreground/80 space-y-2 ml-6 list-disc">
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To improve and optimize our website and services</li>
              <li>To understand user preferences and behavior</li>
              <li>To send promotional materials or notifications</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may use cookies and similar tracking technologies to enhance your experience. These cookies
              help us understand how you use our website and may remember your preferences for future visits.
              You can control cookie settings through your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
            <p className="text-foreground/80 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However, no method
              of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may use third-party services such as analytics providers. These services may collect information
              about you to help us understand how users interact with our site. We encourage you to review their
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, including
              the right to access, correct, or delete your data. Please contact us if you wish to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
            <p className="text-foreground/80 leading-relaxed">
              {SITE_NAME} is not intended for users under 13 years old. We do not knowingly collect personal
              information from children under 13. If we become aware of such collection, we will take steps to delete
              the information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to update this privacy policy at any time. Changes will be effective immediately
              upon posting to the website. Your continued use of our site constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have questions about this privacy policy or our privacy practices, please{' '}
              <a href="/contact" className="text-primary hover:underline">
                contact us
              </a>
              .
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

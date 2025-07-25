import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground/80">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using any of our Chrome extensions, you agree to be 
                bound by these Terms of Service. If you do not agree to these terms, please do not 
                use our extensions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p>
                True Apps provides Chrome extensions designed to enhance productivity and simplify 
                everyday digital tasks. Our extensions include PDF viewers, login management tools, 
                printing utilities, and other productivity-focused applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use License</h2>
              <p>
                We grant you a personal, non-exclusive, non-transferable license to use our Chrome 
                extensions for your personal or business use, subject to these Terms of Service and 
                any applicable Chrome Web Store policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our extensions only for lawful purposes</li>
                <li>Not attempt to reverse engineer, decompile, or disassemble our extensions</li>
                <li>Not use our extensions in any way that could harm or disrupt our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Privacy and Data</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy to understand 
                how we collect, use, and protect your information when you use our extensions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimer of Warranties</h2>
              <p>
                Our extensions are provided "as is" without warranty of any kind. We do not guarantee 
                that our extensions will be error-free, secure, or continuously available. You use 
                our extensions at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Innosoft Group shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages arising from your 
                use of our extensions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Updates and Modifications</h2>
              <p>
                We may update our extensions and these Terms of Service from time to time. Continued 
                use of our extensions after such updates constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
              <p>
                We may terminate or suspend your access to our extensions at any time, with or without 
                cause, with or without notice. You may also discontinue use of our extensions at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws 
                of the State of Texas, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg mt-4">
                <p className="font-semibold">Innosoft Group</p>
                <p>700 Smith St #61070, SMB #46200</p>
                <p>Houston, TX, 77002</p>
                <p>Email: support@trueapps.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
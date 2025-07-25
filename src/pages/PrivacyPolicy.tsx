import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground/80">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                use our Chrome extensions, or contact us for support. This may include your name, 
                email address, and usage data related to our extensions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our Chrome extensions</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information 
                in certain limited circumstances, such as to comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Chrome Extension Permissions</h2>
              <p>
                Our Chrome extensions may request certain permissions to function properly. We only 
                request the minimum permissions necessary for each extension's functionality and do not 
                access or collect data beyond what is required for the extension to work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies and Tracking</h2>
              <p>
                We may use cookies and similar tracking technologies to analyze trends, administer 
                our website, and gather demographic information. You can control cookie settings 
                through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of certain communications from us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new privacy policy on this page and updating the "Last updated" 
                date at the top of this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at:
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

export default PrivacyPolicy;
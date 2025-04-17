import React from 'react';
import { Navigation } from './navigation';
import { Footer } from './footer';

const TermsOfService = () => {
  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
        <Navigation />
        <div
          style={{
            maxWidth: '100%',
            overflowX: 'hidden',
            padding: '54px',
            boxSizing: 'border-box',
            fontFamily: 'sans-serif',
            lineHeight: '1.6',
            textAlign: 'left',
          }}>
          <h1 style={{ textAlign: 'left' }}>Terms of Service</h1>
          <div data-custom-class="body">
            <section>
              <h2 style={{ textAlign: 'left' }}>1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using the LockIn mobile
                application ("App"), you agree to be bound by these Terms of
                Service ("Terms") and our Privacy Policy. If you do not agree to
                these Terms, do not use the App.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>2. Eligibility</h2>
              <p>
                You must be at least 18 years old to use the App. By using the
                App, you represent that you are at least 18 years of age.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>3. Account and Login</h2>
              <p>
                LockIn requires users to sign in using a social media account.
                You are responsible for maintaining the confidentiality of your
                login credentials and are fully responsible for all activities
                under your account.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>4. Use of the App</h2>
              <p>You agree not to use the App to:</p>
              <ul>
                <li>Violate any applicable law or regulation.</li>
                <li>Infringe upon the rights of others.</li>
                <li>Distribute spam or other unsolicited messages.</li>
                <li>
                  Attempt to reverse-engineer or hack the App’s features or
                  functions.
                </li>
              </ul>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>
                5. In-App Purchases and Monetization
              </h2>
              <p>
                LockIn may offer optional in-app purchases or monetized
                features. By making a purchase, you agree to pay all applicable
                fees and charges incurred. All payments are final and
                non-refundable unless required by law.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>
                6. Data Collection and Privacy
              </h2>
              <p>
                We collect and use personal information in accordance with our{' '}
                <a
                  href="https://lockinhq.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer">
                  Privacy Policy
                </a>
                . This includes information such as name, email address, device
                details, and usage data.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>7. Intellectual Property</h2>
              <p>
                All content and materials in the App, including the name LockIn,
                logos, and software code, are owned by LOCK IN LLC and protected
                by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account and
                access to the App at our sole discretion, without notice, if we
                believe you have violated these Terms.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>9. Modifications</h2>
              <p>
                LOCK IN LLC may update these Terms from time to time. Updates
                will be reflected by an updated "Last Updated" date and
                published on this page. Continued use of the App after changes
                means acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>10. Disclaimers</h2>
              <p>
                The App is provided on an "as-is" and "as available" basis. We
                do not guarantee that the App will be error-free or
                uninterrupted.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>11. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, LOCK IN LLC shall not be
                liable for any indirect, incidental, consequential, or punitive
                damages arising out of your use or inability to use the App.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Florida,
                United States. Any disputes shall be resolved in the competent
                courts located in Florida.
              </p>
            </section>

            <section>
              <h2 style={{ textAlign: 'left' }}>13. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p>
                <strong>LOCK IN LLC</strong>
                <br />
                Email:{' '}
                <a href="mailto:privacy@lockinhq.com">privacy@lockinhq.com</a>
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main
        className="flex-1 px-4 sm:px-8 pt-32"
        style={{ fontFamily: 'Gothic A1' }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl text-[#5352ED] mb-6">Privacy and Terms</h1>

          <div className="flex flex-col md:flex-row">
            
            {/* Content */}
            <div className="md:w-3/4 md:pr-8">
              <section className="mb-10">
                <h2 className="text-xl mb-4 text-[#121212]">1. Privacy & Cookies</h2>
                <p className="mb-4 text-[#121212CC] max-w-full">
                  We take your privacy seriously. Any personal data you share with LibraDream like your email or reading preferences is stored securely and never sold.
                </p>
                <ul className="list-disc list-inside flex flex-col gap-3 text-[#121212CC] max-w-full">
                  <li>We only collect the information needed to personalize your experience.</li>
                  <li>You can manage cookie settings in your browser or device.</li>
                  <li>We never show ads or share your activity with third-party advertisers.</li>
                </ul>
                <div className="flex justify-center">
                  <Link to="/privacy" className="bg-[#5352ED] text-white px-4 py-2 rounded hover:bg-purple-700 mt-5">
                    Read our full Privacy Policy
                  </Link>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl mb-4 text-[#121212]">2. Data Protection</h2>
                <ul className="list-disc list-inside flex flex-col gap-3 text-[#121212CC] max-w-full">
                  <li>You have full control over your data.</li>
                  <li>You may request to view, download, or delete your account information at any time.</li>
                  <li>We follow global best practices for data security and protection.</li>
                </ul>
                <div className="flex justify-center">
                  <Link to="/privacy" className="bg-[#5352ED] text-white px-4 py-2 rounded hover:bg-purple-700 mt-5">
                    Request Data Access or Removal
                  </Link>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl mb-4 text-[#121212]">4. Remarketing & Ads</h2>
                <p className="text-[#121212CC] max-w-full">
                  LibraDream does not use third-party remarketing or personalized ad tracking (e.g., Facebook Pixels or Google Ads). You'll never see targeted ads based on your reading habits.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-xl mb-4 text-[#121212]">5. Terms of Use</h2>
                <p className="text-[#121212] mb-2">By using LibraDream:</p>
                <ul className="list-disc list-inside flex flex-col gap-3 text-[#121212CC] max-w-full">
                  <li>You agree to use the content for personal, non-commercial reading.</li>
                  <li>You agree not to copy, resell, or misuse any platform materials.</li>
                  <li>You are responsible for your own reading lists and preferences.</li>
                </ul>
                <div className="flex justify-center">
                  <Link to="/privacy" className="bg-[#5352ED] text-white px-4 py-2 rounded hover:bg-purple-700 mt-5">
                    View Full Terms & Conditions
                  </Link>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl mb-4 text-[#121212]">6. Accessibility</h2>
                <p className="text-[#121212] mb-2 max-w-full">
                  We are committed to making LibraDream easy to use for everyone, including:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-3 text-[#121212CC] max-w-full">
                  <li>Screen reader support</li>
                  <li>Mobile accessibility</li>
                  <li>Color contrast and readability</li>
                </ul>
              </section>

              <section className="mb-16">
                <h2 className="text-xl mb-4 text-[#121212]">7. Contact & Feedback</h2>
                <p className="text-[#121212CC] mb-2 max-w-full">
                  Contact us with any questions about our privacy practices or to share feedback about your experience.
                </p>
                <ul className="list-disc list-inside flex flex-col gap-3 text-[#121212CC] max-w-full">
                  <li>Email us at support@libradream.com</li>
                  <li>
                    Submit feedback through our{' '}
                    <Link to="/privacy" className="text-[#5352ED] hover:underline">
                      feedback form
                    </Link>
                  </li>
                  <li>Follow us on social media for updates</li>
                </ul>
              </section>
            </div>

            {/* Illustration */}
            <div className="md:w-1/4 flex justify-center mt-10 md:mt-0">
              <img
                src="/sitting.png"
                alt="Illustration of a person reading"
                className="w-[600px] h-[700px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;

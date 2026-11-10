import React from 'react';
import { LegalPage } from '../../components/LegalPage';

const CONTACT = (
  <>
    Grievance Officer, Karnataka Educational Trust, Karnataka College Group of Institutions,
    33/2, Hegde Nagar Main Rd, Yelahanka, Thirumenahalli, Bengaluru, Karnataka 560064.
    Email: <a href="mailto:info@kcgiedu.org">info@kcgiedu.org</a>. Phone:{' '}
    <a href="tel:+918080833000">080808 33000</a>.
  </>
);

export const PrivacyPolicy: React.FC = () => (
  <LegalPage
    title="Privacy Policy"
    lastUpdated="10 November 2026"
    intro={
      <p>
        Karnataka College Group of Institutions ("KCGI", "we", "us"), managed by the Karnataka
        Educational Trust, respects your privacy. This policy explains what personal data we collect
        through kcgiedu.org and admissions.kcgiedu.org, why we collect it, and the choices and rights
        you have under the Digital Personal Data Protection Act, 2023 and other applicable Indian law.
      </p>
    }
    sections={[
      {
        heading: 'Data we collect',
        body: (
          <>
            <p>We collect only what you give us, or what is needed to run the website:</p>
            <ul>
              <li><strong>Enquiry forms:</strong> name, phone number, email address, city or state, and the course or institution you are interested in.</li>
              <li><strong>Online application:</strong> name, email, phone, date of birth, gender, postal address, previous qualification, school or college, marks, year of passing, the course and batch you are applying for, and your payment reference.</li>
              <li><strong>Payments:</strong> application fees are processed by Razorpay. We receive a payment ID and status; we do not see or store your card, UPI or bank details.</li>
              <li><strong>Usage data:</strong> pages visited, device and browser type, approximate location and referring site, collected through Google Analytics cookies.</li>
            </ul>
          </>
        ),
      },
      {
        heading: 'How we use your data',
        body: (
          <ul>
            <li>To respond to your enquiry and counsel you about courses, eligibility, fees and admission dates.</li>
            <li>To process your application and application fee, and to contact you about its status.</li>
            <li>To meet regulatory requirements of affiliating universities and councils (such as RGUHS, BCU, KSLU, PCI, INC and CBSE) when you enrol.</li>
            <li>To understand how the website is used and improve it.</li>
          </ul>
        ),
      },
      {
        heading: 'Consent',
        body: (
          <p>
            By submitting a form or application you consent to us processing your data for the purposes
            above. You can withdraw consent at any time by writing to us (see "Contact"). Withdrawal does
            not affect processing already carried out, and we may not be able to continue an application
            without the data it requires.
          </p>
        ),
      },
      {
        heading: 'Who we share it with',
        body: (
          <>
            <p>We do not sell your personal data. We share it only with service providers who process it on our behalf, and with authorities where the law requires:</p>
            <ul>
              <li>NoPaperForms (enquiry and admissions management)</li>
              <li>Razorpay (payment processing)</li>
              <li>Supabase (secure database hosting for applications)</li>
              <li>Google Analytics (website usage statistics)</li>
              <li>Hostinger (website hosting and email)</li>
              <li>Affiliating universities, regulatory councils and government bodies, when required for admission or by law</li>
            </ul>
          </>
        ),
      },
      {
        heading: 'How long we keep it',
        body: (
          <p>
            Enquiry data is kept for as long as needed to assist you with the current and next admission
            cycle. Application and student records are kept for as long as required by our affiliating
            bodies and by law. When data is no longer needed, we delete or anonymise it.
          </p>
        ),
      },
      {
        heading: 'Cookies',
        body: (
          <p>
            We use cookies for Google Analytics and for the enquiry widget to work. You can block or delete
            cookies in your browser settings; the website will still work, though some forms may need you
            to re-enter details.
          </p>
        ),
      },
      {
        heading: 'Security',
        body: (
          <p>
            The website is served over HTTPS, payments are handled by a PCI-DSS compliant gateway, and
            access to application data is restricted to authorised admissions staff. No system is
            completely secure, but we take reasonable measures to protect your data.
          </p>
        ),
      },
      {
        heading: 'Your rights',
        body: (
          <>
            <p>You may ask us to:</p>
            <ul>
              <li>tell you what personal data we hold about you and how it is used;</li>
              <li>correct or update inaccurate data;</li>
              <li>erase data that is no longer needed, subject to legal retention requirements;</li>
              <li>nominate another person to exercise these rights on your behalf.</li>
            </ul>
            <p>
              If you are under 18, a parent or guardian should submit forms on your behalf or with you.
              We will respond to requests within a reasonable time. If you are not satisfied with our
              response, you may complain to the Data Protection Board of India.
            </p>
          </>
        ),
      },
      {
        heading: 'Contact',
        body: <p>{CONTACT}</p>,
      },
      {
        heading: 'Changes to this policy',
        body: (
          <p>
            We may update this policy from time to time. The "Last updated" date at the top shows when it
            was last changed.
          </p>
        ),
      },
    ]}
  />
);

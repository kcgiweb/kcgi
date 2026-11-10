import React from 'react';
import { Link } from 'react-router-dom';
import { LegalPage } from '../../components/LegalPage';

export const Terms: React.FC = () => (
  <LegalPage
    title="Terms & Conditions"
    lastUpdated="10 November 2026"
    intro={
      <p>
        These terms govern your use of kcgiedu.org and admissions.kcgiedu.org, operated by the Karnataka
        Educational Trust on behalf of Karnataka College Group of Institutions ("KCGI", "we", "us"). By
        using the website or submitting an enquiry or application, you agree to them.
      </p>
    }
    sections={[
      {
        heading: 'Information on this website',
        body: (
          <p>
            We try to keep course, eligibility, fee and admission information accurate and current.
            However, programmes, intake, fees and eligibility are subject to the rules of our affiliating
            universities and regulatory councils (such as RGUHS, BCU, KSLU, PCI, INC and CBSE) and of the
            Government of Karnataka, and may change. The official admission notification and prospectus
            prevail over anything on this website. Please confirm details with the admissions office
            before acting on them.
          </p>
        ),
      },
      {
        heading: 'Enquiries and applications',
        body: (
          <ul>
            <li>You must give true, complete and current information. Applications with false information or documents may be rejected or cancelled, even after admission.</li>
            <li>Submitting an enquiry or application does not guarantee admission. Admission depends on eligibility, document verification, merit or entrance-exam criteria and seat availability.</li>
            <li>Applicants under 18 should apply with the consent of a parent or guardian.</li>
          </ul>
        ),
      },
      {
        heading: 'Application fee and payments',
        body: (
          <ul>
            <li>Online payments are processed securely by Razorpay. We do not store card, UPI or bank details.</li>
            <li>The application fee covers processing of your application and is non-refundable, except where a payment was charged twice or in error; such cases are refunded to the original payment method after verification.</li>
            <li>Tuition and other fees, and their refund rules, are set out in the admission notification and follow the regulations of the relevant university and the Government of Karnataka.</li>
            <li>For payment issues, contact us with your payment ID at <a href="mailto:admissions@kcgiedu.org">admissions@kcgiedu.org</a>.</li>
          </ul>
        ),
      },
      {
        heading: 'Acceptable use',
        body: (
          <p>
            Do not misuse the website: no attempts to gain unauthorised access, disrupt the site, submit
            automated or fraudulent forms, or impersonate another person.
          </p>
        ),
      },
      {
        heading: 'Intellectual property',
        body: (
          <p>
            Text, logos, photographs and other content on this website belong to the Karnataka Educational
            Trust or are used with permission. You may view and share pages for personal, non-commercial
            purposes, but may not copy or reuse content without written permission.
          </p>
        ),
      },
      {
        heading: 'Third-party links',
        body: (
          <p>
            The website links to third-party services such as payment gateways, maps and social media. We
            are not responsible for their content or privacy practices.
          </p>
        ),
      },
      {
        heading: 'Limitation of liability',
        body: (
          <p>
            The website is provided "as is". To the extent permitted by law, we are not liable for any loss
            arising from use of the website, from reliance on its content, or from temporary unavailability.
          </p>
        ),
      },
      {
        heading: 'Privacy',
        body: (
          <p>
            How we handle your personal data is explained in our <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        ),
      },
      {
        heading: 'Governing law',
        body: (
          <p>
            These terms are governed by the laws of India. Courts in Bengaluru, Karnataka have exclusive
            jurisdiction over any dispute.
          </p>
        ),
      },
      {
        heading: 'Contact',
        body: (
          <p>
            Karnataka College Group of Institutions, 33/2, Hegde Nagar Main Rd, Yelahanka, Thirumenahalli,
            Bengaluru, Karnataka 560064. Email: <a href="mailto:info@kcgiedu.org">info@kcgiedu.org</a>.
            Phone: <a href="tel:+918080833000">080808 33000</a>.
          </p>
        ),
      },
    ]}
  />
);

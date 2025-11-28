import Section from '@/components/Section'

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Montage - governing your use of our website and services.',
}

export default function Page() {
  return (
    <>
      <Section id="terms-intro" title="Terms of Use" className="bg-neutral-50">
        <p className="text-lg text-neutral-900">
          Your use of this website is governed by these Terms of Use and the Privacy Policy.
        </p>
      </Section>

      <Section id="about-website" title="About This Website">
        <p className="text-neutral-900 mb-4">
          This website is operated by Montage, a company registered with the Dubai Multi Commodities Centre (DMCC), United Arab Emirates (&ldquo;Montage&rdquo;) under the domain name www.montagefert.com on behalf of Montage and its related bodies corporate and affiliated entities (&ldquo;Montage Group&rdquo;).
        </p>
        <p className="text-neutral-900">
          Your use of the information, graphics and material (&ldquo;Material&rdquo;) on the Montage website is governed by these Terms of Use and the Privacy Policy.
        </p>
      </Section>

      <Section id="third-party-links" title="Links to Other Websites" className="bg-neutral-50">
        <p className="text-neutral-900 mb-4">
          The Montage website may contain links to other websites operated by third parties (&ldquo;Third Party Websites&rdquo;). The Montage Group does not endorse or approve of the operators of Third Party Websites, or the information, graphics and material on those Third Party Websites (&ldquo;Third Party Material&rdquo;).
        </p>
        <p className="text-neutral-900 mb-4">
          Subject to any applicable law which cannot be excluded, Montage makes no warranties or representations:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4 mb-4">
          <li>regarding the quality, accuracy, merchantability or fitness for purpose of Third Party Material or products or services available through Third Party Websites; or</li>
          <li>that Third Party Material does not infringe the intellectual property rights of any person.</li>
        </ul>
        <p className="text-neutral-900">
          Montage does not authorise the reproduction of Third Party Material by linking Material on this website to Third Party Material.
        </p>
      </Section>

      <Section id="product-info" title="Montage Group Product Information and Supply">
        <p className="text-neutral-900 mb-4">
          Material on this website may contain general information about Montage Group products and services, including but not limited to fertilizers and related commodities. Unless expressly stated otherwise, this information:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4 mb-4">
          <li>does not constitute an offer or inducement to enter into a legally binding contract; and</li>
          <li>does not form part of the terms and conditions for Montage Group products and services.</li>
        </ul>
        <p className="text-neutral-900 mb-4">
          For further information about a particular product or service, please contact Montage at +971 4 240 6453 or Admin@montagefert.com.
        </p>
        <p className="text-neutral-900">
          All applications for credit are subject to the Montage Group&rsquo;s normal credit approval criteria.
        </p>
      </Section>

      <Section id="warranties" title="Warranties" className="bg-neutral-50">
        <p className="text-neutral-900 mb-4">
          Whilst we have made every effort to ensure that information is free from error, the Montage Group does not warrant the accuracy, adequacy or completeness of Material on this website. All information is subject to change without notice.
        </p>
        <p className="text-neutral-900">
          The Montage Group recommends that you seek independent advice before acting on any Material on this website or Third Party Material. The Montage Group does not guarantee that the Montage website or Third Party Websites will be free from viruses, or that access to the Montage website or Third Party Websites will be uninterrupted.
        </p>
      </Section>

      <Section id="liability" title="Limitation of Liability">
        <p className="text-neutral-900 mb-4">
          Subject to any responsibilities implied by law and which cannot be excluded, no member of the Montage Group is liable to you for any losses, damages, liabilities, claims and expenses (including but not limited to legal costs and defence or settlement costs) whatsoever arising out of or referable to Material on the Montage website or Third Party Material, whether in contract or tort including negligence, statute or otherwise.
        </p>
        <p className="text-neutral-900">
          To the maximum extent permitted by applicable law, the Montage Group&rsquo;s total liability to you for all claims arising out of or in connection with your use of this website shall not exceed AED 1,000 (one thousand UAE Dirhams).
        </p>
      </Section>

      <Section id="indemnification" title="Indemnification" className="bg-neutral-50">
        <p className="text-neutral-900">
          You agree to indemnify, defend and hold harmless the Montage Group, its officers, directors, employees, agents and affiliates from and against any and all claims, damages, losses, costs and expenses (including reasonable legal fees) arising out of or in connection with your use of this website, your violation of these Terms of Use, or your violation of any rights of any third party.
        </p>
      </Section>

      <Section id="termination" title="Termination">
        <p className="text-neutral-900">
          These Terms of Use (and the agreement constituted by your use of the Material on the Montage website) and your access to the Montage website may be terminated at any time by Montage without notice. All restrictions, licences granted by you and all disclaimers and limitations of liability by Montage will survive termination.
        </p>
      </Section>

      <Section id="governing-law" title="Governing Law and Jurisdiction" className="bg-neutral-50">
        <p className="text-neutral-900 mb-4">
          Unless expressly agreed otherwise, the use of this website and any disputes arising in relation to this website are governed by the laws of the Emirate of Dubai and the applicable federal laws of the United Arab Emirates.
        </p>
        <p className="text-neutral-900">
          The parties agree to submit to the exclusive jurisdiction of the courts of the Dubai International Financial Centre (DIFC) or, where the DIFC courts do not have jurisdiction, the courts of Dubai, United Arab Emirates, for the resolution of any disputes arising out of or in connection with these Terms of Use.
        </p>
      </Section>

      <Section id="copyright" title="Copyright and Intellectual Property">
        <p className="text-neutral-900 mb-4">
          Copyright and all intellectual property rights in the Material on this website are owned or licensed by the Montage Group.
        </p>
        <p className="text-neutral-900 mb-4">
          Except where necessary for viewing the Material on this website on your browser, or as permitted under applicable UAE intellectual property laws or these Terms of Use, no Material on this website may be reproduced, adapted, uploaded to a third party, linked to, framed, performed in public, distributed or transmitted in any form by any process without the specific written consent of Montage.
        </p>
        <p className="text-neutral-900">
          The Montage name, logo and all related product and service names, design marks and slogans are trademarks or service marks of the Montage Group. You are not authorised to use any such marks without the prior written permission of Montage. All other trademarks, product names and company names or logos appearing on this website are the property of their respective owners.
        </p>
      </Section>

      <Section id="prohibited-uses" title="Prohibited Uses" className="bg-neutral-50">
        <p className="text-neutral-900 mb-4">
          You agree not to use this website:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4">
          <li>for any unlawful purpose or in violation of any applicable local, national or international law;</li>
          <li>to transmit or procure the sending of any unsolicited or unauthorised advertising or promotional material;</li>
          <li>to impersonate or attempt to impersonate Montage, a Montage employee, another user or any other person or entity;</li>
          <li>to engage in any conduct that restricts or inhibits anyone&rsquo;s use or enjoyment of the website; or</li>
          <li>to introduce any viruses, trojan horses, worms, or other material which is malicious or technologically harmful.</li>
        </ul>
      </Section>

      <Section id="acceptance" title="Acceptance and Changes to Terms of Use">
        <p className="text-neutral-900 mb-4">
          You acknowledge and accept that your use of the Montage website indicates your acceptance of these Terms of Use and the Privacy Policy. These are the current Terms of Use.
        </p>
        <p className="text-neutral-900 mb-4">
          Montage may at any time vary the Terms of Use by publishing the varied Terms of Use on the Montage website. You accept that by doing this, Montage has provided you with sufficient notice of the variation. Your continued use of the website following the posting of revised Terms of Use means that you accept and agree to the changes.
        </p>
        <p className="text-neutral-900">
          Montage reserves any rights not expressly granted in these Terms of Use.
        </p>
      </Section>

      <Section id="severability" title="Severability" className="bg-neutral-50">
        <p className="text-neutral-900">
          If any provision of these Terms of Use is held to be invalid, illegal or unenforceable, the remaining provisions shall continue in full force and effect.
        </p>
      </Section>

      <Section id="contact-terms" title="Contact Information">
        <div className="text-neutral-900">
          <p className="mb-2">For any questions regarding these Terms of Use, please contact us at:</p>
          <div className="mt-4 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <p className="font-semibold mb-2">Montage</p>
            <p>Office No. 1302, Saba 1</p>
            <p>Jumeirah Lake Towers, Cluster E</p>
            <p>Dubai, United Arab Emirates</p>
            <p className="mt-2">Tel: +971 4 240 6453</p>
            <p>Email: <a href="mailto:Admin@montagefert.com" className="text-brand-600 hover:text-brand-700">Admin@montagefert.com</a></p>
          </div>
        </div>
      </Section>

      <Section id="copyright-notice" className="bg-neutral-50">
        <p className="text-sm text-neutral-600">
          © Copyright Montage. All rights reserved.
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          Version 1 – November 2025
        </p>
      </Section>
    </>
  )
}

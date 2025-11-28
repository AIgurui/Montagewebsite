import Section from '@/components/Section'

export const metadata = {
  title: 'Modern Slavery Policy',
  description: 'Montage Modern Slavery Policy - our commitment to preventing modern slavery in our operations and supply chains.',
}

export default function Page() {
  return (
    <>
      <Section id="intro" title="Modern Slavery Policy" className="bg-neutral-50">
        <h2 className="text-2xl font-bold !text-black mb-4">1. Our Position on Modern Slavery</h2>

        <h3 className="text-xl font-semibold !text-black mb-3 mt-6">1.1 Zero Tolerance</h3>
        <p className="!text-black mb-4">
          Montage (&ldquo;Montage&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) has zero tolerance for modern slavery in any form. We are committed to conducting our business ethically and with respect for human rights, and we expect the same commitment from everyone we work with.
        </p>
        <p className="!text-black mb-4">
          As an international trading company operating across multiple regions—including the Middle East, Latin America, Southeast Asia, and Africa—we recognise that our supply chains present inherent risks of exploitation. We take these risks seriously and are committed to understanding, preventing, and addressing modern slavery wherever it may occur in connection with our business.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3 mt-6">1.2 Purpose of This Policy</h3>
        <p className="!text-black mb-4">
          This Modern Slavery Policy (&ldquo;Policy&rdquo;) sets out Montage&rsquo;s approach to identifying, preventing, and responding to the risks of modern slavery. Specifically, this Policy:
        </p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4">
          <li>Defines what modern slavery means and why it matters</li>
          <li>Establishes the standards we expect from our personnel and business partners</li>
          <li>Describes how we assess and mitigate modern slavery risks in our operations and supply chains</li>
          <li>Explains how concerns can be reported and how we will respond</li>
          <li>Demonstrates our commitment to continuous improvement in this area</li>
        </ul>
      </Section>

      <Section id="understanding" title="2. Understanding Modern Slavery">
        <h3 className="text-xl font-semibold !text-black mb-3">2.1 What Is Modern Slavery?</h3>
        <p className="!text-black mb-4">
          Modern slavery is a grave violation of human rights. It refers to situations where individuals are exploited through coercion, threats, or deception and are unable to leave or refuse the situation. Modern slavery deprives victims of their freedom for the commercial or personal gain of others.
        </p>
        <p className="!text-black mb-2">Modern slavery encompasses a range of exploitative practices, including:</p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4 mb-6">
          <li><strong>Human Trafficking:</strong> The recruitment, transportation, or harbouring of people through force, fraud, or deception for the purpose of exploitation.</li>
          <li><strong>Forced Labour:</strong> Work or service extracted from a person under threat of penalty and for which the person has not offered themselves voluntarily.</li>
          <li><strong>Debt Bondage:</strong> Situations where workers are compelled to work to pay off a debt, often under terms that make the debt impossible to repay.</li>
          <li><strong>Servitude:</strong> The obligation to provide services imposed by coercion, where the victim feels they have no realistic choice but to comply.</li>
          <li><strong>Child Labour:</strong> Work that deprives children of their childhood, potential, and dignity, and is harmful to their physical or mental development, particularly the worst forms involving hazardous conditions or exploitation.</li>
        </ul>

        <h3 className="text-xl font-semibold !text-black mb-3">2.2 Recognising the Warning Signs</h3>
        <p className="!text-black mb-4">
          Modern slavery can be difficult to detect. Victims may not self-identify due to fear, shame, or lack of awareness of their rights. Indicators that may suggest modern slavery include:
        </p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4">
          <li>Workers who appear to be under the control of others and are reluctant to interact</li>
          <li>Workers who do not possess their own identity documents</li>
          <li>Signs that workers are living in degraded or overcrowded accommodation provided by their employer</li>
          <li>Indications that wages are being withheld or that workers are in debt to their employer or a recruitment agent</li>
          <li>Evidence of excessive working hours with little or no rest</li>
          <li>Workers who are unable to freely leave their workplace or who are transported to and from work under supervision</li>
          <li>Signs of physical abuse, malnourishment, or untreated injuries</li>
          <li>Workers who appear fearful, withdrawn, or reluctant to speak about their circumstances</li>
        </ul>
      </Section>

      <Section id="applicability" title="3. Who This Policy Applies To" className="bg-neutral-50">
        <h3 className="text-xl font-semibold !text-black mb-3">3.1 Our People</h3>
        <p className="!text-black mb-4">
          This Policy applies to all individuals working for or on behalf of Montage, regardless of their location. This includes directors, officers, employees, contractors, consultants, agents, and any other person acting in the name of or for the benefit of Montage (collectively, &ldquo;Personnel&rdquo;).
        </p>
        <p className="!text-black mb-6">
          All Personnel are expected to understand this Policy, act in accordance with its principles, and report any concerns about potential modern slavery.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">3.2 Our Business Partners</h3>
        <p className="!text-black">
          We also expect our suppliers, customers, agents, distributors, and other business partners to share our commitment to preventing modern slavery. Our Supplier Code of Conduct sets out specific requirements in this regard, and we encourage all parties in our supply chain to adopt similar standards.
        </p>
      </Section>

      <Section id="prevention" title="4. Our Approach to Preventing Modern Slavery">
        <h3 className="text-xl font-semibold !text-black mb-3">4.1 Risk Assessment</h3>
        <p className="!text-black mb-4">
          We assess modern slavery risks across our operations and supply chains on an ongoing basis. Our risk assessment considers factors such as geographic location, industry sector, nature of the workforce, and the structure of supply chain relationships.
        </p>
        <p className="!text-black mb-2">We recognise that certain aspects of our business may present elevated risks, including:</p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4 mb-6">
          <li>Sourcing products from regions with weaker labour protections or higher prevalence of exploitation</li>
          <li>Engaging third-party logistics providers, shipping companies, and port operators in high-risk jurisdictions</li>
          <li>Using labour-intensive services where low-skilled or migrant workers may be vulnerable</li>
          <li>Complex, multi-tier supply chains where visibility into labour practices is limited</li>
        </ul>

        <h3 className="text-xl font-semibold !text-black mb-3">4.2 Due Diligence</h3>
        <p className="!text-black mb-2">We conduct due diligence on our supply chains to identify and address modern slavery risks. Our due diligence measures include:</p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4 mb-6">
          <li>Assessing new suppliers and business partners before entering into relationships</li>
          <li>Requiring suppliers to acknowledge and commit to our Supplier Code of Conduct</li>
          <li>Seeking information from suppliers about their labour practices and their own supply chain management</li>
          <li>Monitoring for warning signs and red flags in supplier relationships</li>
          <li>Reserving the right to conduct audits or request third-party verification where appropriate</li>
        </ul>

        <h3 className="text-xl font-semibold !text-black mb-3">4.3 Contractual Protections</h3>
        <p className="!text-black mb-4">
          We include modern slavery provisions in our contracts with suppliers and other business partners. These provisions require compliance with applicable laws prohibiting modern slavery, adherence to our Supplier Code of Conduct, cooperation with any investigations or audits, and prompt notification of any known or suspected instances of modern slavery.
        </p>
        <p className="!text-black mb-6">
          Material breach of these provisions may result in termination of the business relationship.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">4.4 Training and Awareness</h3>
        <p className="!text-black">
          We provide training to relevant Personnel to ensure they understand what modern slavery is, how to recognise warning signs, and what to do if they have concerns. Training is tailored to the roles and responsibilities of different team members, with enhanced training for those in procurement, supply chain management, and compliance functions.
        </p>
      </Section>

      <Section id="responsibilities" title="5. Responsibilities" className="bg-neutral-50">
        <h3 className="text-xl font-semibold !text-black mb-3">5.1 All Personnel</h3>
        <p className="!text-black mb-2">Every person covered by this Policy has a responsibility to:</p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4 mb-6">
          <li>Understand and comply with this Policy</li>
          <li>Be vigilant to the risks and indicators of modern slavery</li>
          <li>Report any concerns or suspicions promptly</li>
          <li>Cooperate fully with any investigations</li>
        </ul>

        <h3 className="text-xl font-semibold !text-black mb-3">5.2 Management</h3>
        <p className="!text-black mb-2">Managers and supervisors have additional responsibilities to:</p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4 mb-6">
          <li>Lead by example and promote a culture of ethical behaviour</li>
          <li>Ensure their teams understand this Policy and its requirements</li>
          <li>Integrate modern slavery considerations into business decisions</li>
          <li>Take appropriate action when concerns are raised</li>
        </ul>

        <h3 className="text-xl font-semibold !text-black mb-3">5.3 Procurement and Supply Chain Teams</h3>
        <p className="!text-black mb-2">Those involved in procurement and supply chain management have specific responsibilities to:</p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4">
          <li>Conduct appropriate due diligence on suppliers and business partners</li>
          <li>Include modern slavery provisions in contracts and agreements</li>
          <li>Monitor supplier relationships for warning signs</li>
          <li>Escalate concerns appropriately</li>
        </ul>
      </Section>

      <Section id="reporting" title="6. Reporting Concerns">
        <h3 className="text-xl font-semibold !text-black mb-3">6.1 Obligation to Report</h3>
        <p className="!text-black mb-4">
          All Personnel must report immediately if they become aware of, or have reasonable grounds to suspect, any instance of modern slavery connected to our business. This includes concerns about our own operations, our suppliers, or any other party in our supply chain.
        </p>
        <p className="!text-black mb-6">
          Early reporting is critical. Even if you are not certain that modern slavery is occurring, it is better to raise a concern that can be investigated than to remain silent.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">6.2 How to Report</h3>
        <p className="!text-black mb-4">Concerns may be reported through the following channels:</p>

        <div className="space-y-4 mb-6">
          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <p className="font-semibold !text-black mb-1">Compliance Team</p>
            <p className="!text-black">Email: <a href="mailto:compliance@montagefert.com" className="text-brand-600 hover:text-brand-700 font-semibold">compliance@montagefert.com</a></p>
            <p className="text-sm !text-black mt-2">This is the primary channel for reporting modern slavery concerns.</p>
          </div>

          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <p className="font-semibold !text-black mb-1">Chief Executive Officer</p>
            <p className="!text-black text-sm">Reports may also be made directly to the CEO, particularly for matters of significant concern.</p>
          </div>

          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <p className="font-semibold !text-black mb-1">Whistleblower Channels</p>
            <p className="!text-black text-sm">For those who wish to report anonymously or who have concerns about retaliation, reports may be made through the channels described in our Whistleblower Policy.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold !text-black mb-3">6.3 Protection from Retaliation</h3>
        <p className="!text-black mb-4">
          Montage will not tolerate any form of retaliation against individuals who report concerns about modern slavery in good faith. Anyone who believes they have been subjected to retaliation should report this immediately using the channels above or through our Whistleblower Policy.
        </p>
        <p className="!text-black">
          We encourage transparency and openness. Speaking up about concerns helps protect vulnerable individuals and strengthens our business.
        </p>
      </Section>

      <Section id="response" title="7. Responding to Modern Slavery Concerns" className="bg-neutral-50">
        <h3 className="text-xl font-semibold !text-black mb-3">7.1 Investigation</h3>
        <p className="!text-black mb-6">
          All reports of potential modern slavery will be taken seriously and investigated promptly. Investigations will be conducted by appropriate personnel with the necessary skills and independence, and may involve external specialists where warranted.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">7.2 Remediation</h3>
        <p className="!text-black mb-4">
          If modern slavery is identified in our operations or supply chain, we will take appropriate action to address it. Our priority is the safety and wellbeing of affected individuals. Remediation measures may include working with suppliers to correct the situation, providing or facilitating support for victims, and engaging with relevant authorities and non-governmental organisations.
        </p>
        <p className="!text-black mb-6">
          We recognise that simply terminating a supplier relationship may not always be in the best interests of affected workers and may even worsen their situation. We will consider the most appropriate course of action in each case, with the aim of achieving genuine improvement in outcomes for vulnerable individuals.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">7.3 Consequences for Non-Compliance</h3>
        <p className="!text-black mb-4">
          Any Personnel found to have knowingly engaged in, facilitated, or concealed modern slavery will face disciplinary action, up to and including termination of employment. Montage may also report such conduct to relevant authorities.
        </p>
        <p className="!text-black">
          Business relationships with suppliers or partners who are found to have engaged in modern slavery and who fail to take appropriate remedial action will be terminated.
        </p>
      </Section>

      <Section id="governance" title="8. Governance and Review">
        <h3 className="text-xl font-semibold !text-black mb-3">8.1 Oversight</h3>
        <p className="!text-black mb-6">
          The Chief Executive Officer has overall responsibility for ensuring Montage&rsquo;s compliance with this Policy and for overseeing our approach to modern slavery. Day-to-day responsibility for implementation rests with the Compliance function, working in collaboration with relevant business units.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">8.2 Monitoring and Reporting</h3>
        <p className="!text-black mb-6">
          We will monitor the effectiveness of our modern slavery prevention measures and seek to improve them over time. Key metrics may include the number of suppliers assessed, training completion rates, concerns reported and investigated, and remedial actions taken.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">8.3 Policy Review</h3>
        <p className="!text-black mb-6">
          This Policy will be reviewed annually to ensure it remains effective and reflects developments in best practice, legal requirements, and our understanding of modern slavery risks. The current version of this Policy is available on our website and upon request.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">8.4 Related Policies</h3>
        <p className="!text-black mb-2">This Policy should be read in conjunction with:</p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4">
          <li>Supplier Code of Conduct</li>
          <li>Whistleblower Policy</li>
          <li>Code of Conduct</li>
          <li>Anti-Bribery and Corruption Policy</li>
          <li>Privacy Policy</li>
        </ul>
      </Section>

      <Section id="contact" title="9. Contact" className="bg-neutral-50">
        <p className="!text-black mb-4">For questions about this Policy or to report a concern, please contact:</p>
        <div className="p-6 bg-white rounded-lg border border-neutral-200 mb-6">
          <p className="font-semibold !text-black mb-2">Compliance Team</p>
          <p className="!text-black">Montage</p>
          <p className="!text-black">Office No. 1302, Saba 1</p>
          <p className="!text-black">Jumeirah Lake Towers, Cluster E</p>
          <p className="!text-black">Dubai, United Arab Emirates</p>
          <p className="!text-black mt-2">Email: <a href="mailto:compliance@montagefert.com" className="text-brand-600 hover:text-brand-700 font-semibold">compliance@montagefert.com</a></p>
        </div>
      </Section>

      <Section id="document-info">
        <h3 className="text-xl font-semibold !text-black mb-4">Document Information</h3>
        <div className="grid gap-2 !text-black">
          <p><strong>Version:</strong> 1.0</p>
          <p><strong>Effective Date:</strong> November 2025</p>
          <p><strong>Policy Owner:</strong> Compliance Function</p>
          <p><strong>Approved By:</strong> Chief Executive Officer</p>
          <p><strong>Review Cycle:</strong> Annual</p>
          <p><strong>Public Availability:</strong> Available on <a href="https://montagefert.com" className="text-brand-600 hover:text-brand-700">www.montagefert.com</a></p>
        </div>
      </Section>
    </>
  )
}

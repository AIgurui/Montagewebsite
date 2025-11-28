import Section from '@/components/Section'

export const metadata = {
  title: 'Whistleblower Policy',
  description: 'Montage Whistleblower Policy - providing a safe channel for reporting concerns about wrongdoing, misconduct, or unethical behaviour.',
}

export default function Page() {
  return (
    <>
      <Section id="intro" title="Whistleblower Policy" className="bg-neutral-50">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Introduction and Purpose</h2>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">1.1 Our Commitment</h3>
        <p className="text-neutral-900 mb-4">
          Montage (&ldquo;Montage&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is committed to conducting business with integrity and in accordance with the highest ethical standards. Central to this commitment is creating an environment where individuals feel safe to speak up when they witness conduct that may be wrong, unethical, or contrary to our values.
        </p>
        <p className="text-neutral-900 mb-4">
          We believe that a culture of openness and accountability is essential to good governance. When people are empowered to raise concerns without fear of retaliation, problems can be identified and addressed before they escalate, protecting our employees, business partners, and reputation.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">1.2 Purpose of This Policy</h3>
        <p className="text-neutral-900 mb-2">This Whistleblower Policy (&ldquo;Policy&rdquo;) establishes a framework for:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4 mb-4">
          <li>Encouraging the reporting of suspected wrongdoing, misconduct, or unethical behaviour</li>
          <li>Providing clear channels through which concerns can be raised</li>
          <li>Protecting those who report concerns in good faith from any form of retaliation</li>
          <li>Ensuring concerns are properly investigated and addressed</li>
          <li>Safeguarding the rights of individuals who may be the subject of reports</li>
        </ul>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">1.3 Scope and Application</h3>
        <p className="text-neutral-900 mb-2">
          This Policy applies to all individuals connected with Montage who wish to report concerns about potential wrongdoing. This includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4 mb-4">
          <li>Current and former directors, officers, and employees of Montage</li>
          <li>Contractors, consultants, and temporary personnel engaged by Montage</li>
          <li>Suppliers, agents, distributors, and their employees</li>
          <li>Business partners and joint venture participants</li>
          <li>Family members or dependants of any of the above who become aware of relevant concerns</li>
        </ul>
        <p className="text-neutral-900">
          Throughout this Policy, any person who makes a report under these provisions is referred to as a &ldquo;Reporter.&rdquo;
        </p>
      </Section>

      <Section id="reportable-conduct" title="2. What Can Be Reported">
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.1 Reportable Conduct</h3>
        <p className="text-neutral-900 mb-4">
          This Policy is designed to address serious concerns about conduct that may harm Montage, its stakeholders, or the public interest. A report may be made where the Reporter has reasonable grounds to believe that wrongdoing has occurred, is occurring, or is likely to occur.
        </p>
        <p className="text-neutral-900 mb-2">Reportable conduct includes, but is not limited to:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4 mb-6">
          <li>Fraud, theft, embezzlement, or misappropriation of assets</li>
          <li>Bribery, corruption, or improper payments to officials or third parties</li>
          <li>Money laundering or terrorist financing activities</li>
          <li>Violations of trade sanctions, export controls, or customs regulations</li>
          <li>Falsification of financial records, accounts, or business documents</li>
          <li>Conflicts of interest that have not been properly disclosed or managed</li>
          <li>Serious breaches of health, safety, or environmental obligations</li>
          <li>Modern slavery, human trafficking, or forced labour in our supply chain</li>
          <li>Conduct that poses a substantial risk to public health, safety, or the environment</li>
          <li>Deliberate concealment of any of the above</li>
          <li>Any other serious breach of law, regulation, or Montage policies</li>
        </ul>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.2 What This Policy Does Not Cover</h3>
        <p className="text-neutral-900 mb-4">
          This Policy is intended for matters of significant concern that affect Montage as an organisation or the public interest. It is not designed to address personal workplace grievances or routine employment matters.
        </p>
        <p className="text-neutral-900 mb-2">The following matters should generally be raised through other channels:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4 mb-4">
          <li>Personal disputes with colleagues or managers</li>
          <li>Disagreements about performance assessments or compensation</li>
          <li>Routine human resources matters such as leave requests or benefits</li>
          <li>Minor policy violations that do not indicate systemic issues</li>
        </ul>
        <p className="text-neutral-900 mb-6">
          However, if a personal grievance also reveals broader misconduct—such as a pattern of discriminatory behaviour by management or systemic non-compliance with policies—it may be appropriately reported under this Policy.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.3 Requirement for Good Faith</h3>
        <p className="text-neutral-900 mb-4">
          Reports made under this Policy must be made in good faith, meaning the Reporter genuinely believes that wrongdoing has occurred based on reasonable grounds. The Reporter does not need to have definitive proof—a reasonable belief based on available information is sufficient.
        </p>
        <p className="text-neutral-900">
          However, knowingly making a false, malicious, or vexatious report is a serious matter that may itself constitute misconduct and could result in disciplinary action.
        </p>
      </Section>

      <Section id="how-to-report" title="3. How to Report a Concern" className="bg-neutral-50">
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">3.1 Internal Reporting Channels</h3>
        <p className="text-neutral-900 mb-4">
          Montage encourages Reporters to raise concerns internally in the first instance, as this typically allows for the most effective and timely response. Several internal channels are available:
        </p>

        <div className="mb-6">
          <h4 className="font-semibold text-neutral-900 mb-2">Designated Compliance Officer</h4>
          <p className="text-neutral-900 mb-4">
            The primary channel for whistleblower reports is our Compliance Officer, who has been specifically designated to receive and handle such matters. Reports may be submitted by email to <a href="mailto:compliance@montagefert.com" className="text-brand-600 hover:text-brand-700 font-semibold">compliance@montagefert.com</a> or in writing marked &ldquo;Confidential – Whistleblower Report&rdquo; to the address below.
          </p>

          <h4 className="font-semibold text-neutral-900 mb-2">Senior Management</h4>
          <p className="text-neutral-900 mb-4">
            Alternatively, reports may be made directly to the Chief Executive Officer or any member of senior management. This may be appropriate where the Reporter has an existing relationship of trust with a particular manager or where the nature of the concern makes this channel more suitable.
          </p>

          <h4 className="font-semibold text-neutral-900 mb-2">External Legal Counsel</h4>
          <p className="text-neutral-900">
            Where a Reporter prefers to raise a concern through an external party, or where the concern relates to senior management, reports may be made to Montage&rsquo;s external legal counsel. Contact details are available from the Compliance Officer upon request.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">3.2 Anonymous Reporting</h3>
        <p className="text-neutral-900 mb-4">
          Montage accepts anonymous reports. While providing identity information often assists in the investigation process, we recognise that some individuals may not feel comfortable doing so. Anonymous reports will be assessed and investigated to the extent possible based on the information provided.
        </p>
        <p className="text-neutral-900 mb-6">
          Reporters who wish to remain anonymous should be aware that this may limit our ability to investigate thoroughly, seek clarification, or provide feedback on the outcome. We encourage anonymous Reporters to provide a secure means of follow-up contact if possible, such as a non-work email address.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">3.3 External Reporting</h3>
        <p className="text-neutral-900 mb-4">
          In certain circumstances, it may be appropriate to report concerns to external authorities. This includes situations where internal reporting has not resulted in appropriate action, where the matter involves senior leadership, or where there is an imminent risk of serious harm.
        </p>
        <p className="text-neutral-900 mb-2">Relevant external authorities may include:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4 mb-4">
          <li>Dubai Multi Commodities Centre (DMCC) regulatory authorities</li>
          <li>UAE Central Bank (for financial crime matters)</li>
          <li>Dubai Police or UAE Public Prosecution (for criminal matters)</li>
          <li>Other competent regulatory authorities in jurisdictions where Montage operates</li>
        </ul>
        <p className="text-neutral-900 mb-6">
          Reporters considering external disclosure are encouraged to seek independent legal advice to understand their rights and any applicable protections.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">3.4 Contact Information</h3>
        <p className="text-neutral-900 mb-4">Reports may be submitted to:</p>
        <div className="p-6 bg-white rounded-lg border border-neutral-200">
          <p className="font-semibold text-neutral-900 mb-2">Compliance Officer</p>
          <p className="text-neutral-900">Montage</p>
          <p className="text-neutral-900">Office No. 1302, Saba 1</p>
          <p className="text-neutral-900">Jumeirah Lake Towers, Cluster E</p>
          <p className="text-neutral-900">Dubai, United Arab Emirates</p>
          <p className="text-neutral-900 mt-2">Email: <a href="mailto:compliance@montagefert.com" className="text-brand-600 hover:text-brand-700 font-semibold">compliance@montagefert.com</a></p>
        </div>
      </Section>

      <Section id="protection" title="4. Protection of Reporters">
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">4.1 Prohibition of Retaliation</h3>
        <p className="text-neutral-900 mb-4">
          Montage strictly prohibits any form of retaliation against individuals who make reports under this Policy in good faith. This protection applies regardless of whether the concerns raised are ultimately substantiated.
        </p>
        <p className="text-neutral-900 mb-2">Retaliation includes, but is not limited to:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4 mb-4">
          <li>Dismissal, demotion, or adverse changes to employment terms</li>
          <li>Harassment, bullying, or intimidation</li>
          <li>Discrimination in any aspect of employment</li>
          <li>Threats or other coercive conduct</li>
          <li>Exclusion from meetings, projects, or opportunities</li>
          <li>Damage to reputation or professional standing</li>
          <li>Any other conduct that constitutes a detriment to the Reporter</li>
        </ul>
        <p className="text-neutral-900 mb-6">
          Any employee who engages in retaliatory conduct will be subject to disciplinary action, which may include termination of employment. Montage will also take appropriate action against contractors, suppliers, or other third parties who engage in retaliation.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">4.2 Confidentiality</h3>
        <p className="text-neutral-900 mb-4">
          Montage will treat all whistleblower reports with strict confidentiality. The identity of the Reporter will not be disclosed without their consent, except where disclosure is required by law or is necessary to enable effective investigation (and then only to the minimum extent necessary).
        </p>
        <p className="text-neutral-900 mb-4">
          Where it becomes necessary to disclose information that may identify the Reporter, we will inform the Reporter in advance where practicable, unless doing so would prejudice the investigation or is prohibited by law.
        </p>
        <p className="text-neutral-900 mb-6">
          All personnel involved in receiving, handling, or investigating whistleblower reports are required to maintain confidentiality and may face disciplinary action for unauthorised disclosure.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">4.3 Secure Record Keeping</h3>
        <p className="text-neutral-900 mb-6">
          All records relating to whistleblower reports will be stored securely with access restricted to authorised personnel only. Documentation will be maintained in accordance with applicable data protection requirements and our internal record retention policies.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">4.4 Support for Reporters</h3>
        <p className="text-neutral-900">
          Montage recognises that raising concerns about wrongdoing can be stressful. Reporters who are employees may access support through our employee wellbeing resources. Reporters may also seek independent legal advice at any time regarding their rights and options.
        </p>
      </Section>

      <Section id="investigation" title="5. Investigation Process" className="bg-neutral-50">
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">5.1 Initial Assessment</h3>
        <p className="text-neutral-900 mb-4">
          Upon receipt of a report, the Compliance Officer (or designated recipient) will conduct an initial assessment to determine whether the matter falls within the scope of this Policy and warrants investigation. This assessment will normally be completed within ten (10) working days of receipt.
        </p>
        <p className="text-neutral-900 mb-6">
          If the matter does not fall within the scope of this Policy, the Reporter will be informed (where contact details have been provided) and, where appropriate, directed to alternative channels for addressing their concern.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">5.2 Conducting the Investigation</h3>
        <p className="text-neutral-900 mb-4">
          Where an investigation is warranted, Montage will appoint an appropriate investigator. Depending on the nature and seriousness of the allegations, this may be an internal manager with no connection to the matter, the Compliance Officer, or an external investigator.
        </p>
        <p className="text-neutral-900 mb-2">The investigation will typically involve:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4 mb-6">
          <li>Gathering and reviewing relevant documents and records</li>
          <li>Interviewing the Reporter (if they have consented to be contacted)</li>
          <li>Interviewing witnesses and other relevant individuals</li>
          <li>Providing any person against whom allegations are made an opportunity to respond</li>
          <li>Preparing a written report with findings and recommendations</li>
        </ul>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">5.3 Timeframes</h3>
        <p className="text-neutral-900 mb-6">
          Montage aims to complete investigations within sixty (60) days of determining that an investigation is warranted. Complex matters may require additional time. Where investigations cannot be completed within this timeframe, the Compliance Officer will ensure that reasonable progress is being made and will keep the Reporter informed (if their identity is known).
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">5.4 Outcomes and Follow-Up</h3>
        <p className="text-neutral-900 mb-4">
          At the conclusion of an investigation, findings will be reported to the Chief Executive Officer or, where appropriate, to the Board of Directors. Depending on the findings, outcomes may include disciplinary action against individuals, referral to law enforcement authorities, changes to policies or procedures, or other remedial measures.
        </p>
        <p className="text-neutral-900">
          The Reporter will be informed of the outcome of their report to the extent appropriate and consistent with privacy and confidentiality obligations. This will typically confirm whether the investigation has been completed and whether action has been taken, without disclosing specific details about any disciplinary outcomes affecting other individuals.
        </p>
      </Section>

      <Section id="fair-treatment" title="6. Fair Treatment of Persons Subject to Reports">
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">6.1 Presumption of Innocence</h3>
        <p className="text-neutral-900 mb-6">
          Individuals who are the subject of a whistleblower report are entitled to fair treatment. Being the subject of a report does not imply guilt or wrongdoing. All persons are presumed innocent until an investigation has been completed and findings have been made.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">6.2 Confidentiality</h3>
        <p className="text-neutral-900 mb-6">
          The identity of individuals who are the subject of a report will be kept confidential to the extent practicable during the investigation. Information will only be shared with those who have a legitimate need to know for the purposes of the investigation.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">6.3 Right to Respond</h3>
        <p className="text-neutral-900 mb-6">
          Before any adverse findings are made, individuals who are the subject of a report will be informed of the substance of the allegations against them (to the extent this can be done without compromising the investigation or the Reporter&rsquo;s identity) and will be given a reasonable opportunity to respond.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">6.4 Support</h3>
        <p className="text-neutral-900">
          Individuals who are the subject of a report may also access support through employee wellbeing resources and may seek independent legal advice regarding their rights.
        </p>
      </Section>

      <Section id="governance" title="7. Policy Governance" className="bg-neutral-50">
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">7.1 Ownership and Review</h3>
        <p className="text-neutral-900 mb-6">
          This Policy is owned by the Compliance Officer and approved by the Chief Executive Officer. It will be reviewed at least annually to ensure it remains effective and reflects current best practices and legal requirements.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">7.2 Training and Awareness</h3>
        <p className="text-neutral-900 mb-6">
          Montage will ensure that all employees and relevant stakeholders are made aware of this Policy and understand how to raise concerns. Training will be provided to personnel responsible for receiving and handling whistleblower reports.
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">7.3 Related Policies</h3>
        <p className="text-neutral-900 mb-2">This Policy should be read in conjunction with:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-900 ml-4 mb-6">
          <li>Code of Conduct</li>
          <li>Anti-Bribery and Corruption Policy</li>
          <li>Supplier Code of Conduct</li>
          <li>Privacy Policy</li>
          <li>Disciplinary Policy</li>
        </ul>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">7.4 Amendments</h3>
        <p className="text-neutral-900">
          Montage reserves the right to amend this Policy at any time. The current version will be made available to all employees and, upon request, to other relevant stakeholders.
        </p>
      </Section>

      <Section id="document-info">
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">Document Information</h3>
        <div className="grid gap-2 text-neutral-900">
          <p><strong>Version:</strong> 1.0</p>
          <p><strong>Effective Date:</strong> November 2025</p>
          <p><strong>Policy Owner:</strong> Compliance Officer</p>
          <p><strong>Approved By:</strong> Chief Executive Officer</p>
          <p><strong>Review Cycle:</strong> Annual</p>
        </div>
      </Section>
    </>
  )
}

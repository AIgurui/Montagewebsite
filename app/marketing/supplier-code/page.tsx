import Section from '@/components/Section'

export const metadata = {
  title: 'Supplier Code of Conduct',
  description: 'Montage Supplier Code of Conduct - establishing minimum standards for ethical business practices throughout our supply chain.',
}

export default function Page() {
  return (
    <>
      <Section id="intro" title="Supplier Code of Conduct" className="bg-neutral-50">
        <h2 className="text-2xl font-bold !text-black mb-4">Part 1: Introduction</h2>

        <h3 className="text-xl font-semibold !text-black mb-3 mt-6">Our Commitment</h3>
        <p className="!text-black mb-4">
          Montage (&ldquo;Montage&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) operates as an international trading company specialising in fertilizers and related commodities. Our business spans multiple continents, connecting producers with end-users through complex global supply chains.
        </p>
        <p className="!text-black mb-4">
          We recognise that with this reach comes responsibility. Our reputation depends not only on the quality of our products and services but equally on how we—and those we work with—conduct business. We are committed to operating with integrity, transparency, and respect for human dignity throughout our supply chain.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3 mt-6">Purpose and Scope</h3>
        <p className="!text-black mb-4">
          This Supplier Code of Conduct (&ldquo;Code&rdquo;) establishes the minimum standards we require from every organisation that provides goods or services to Montage. This includes manufacturers, producers, logistics providers, agents, distributors, contractors, consultants, and any other third party engaged in our supply chain (collectively, &ldquo;Suppliers&rdquo;).
        </p>
        <p className="!text-black mb-4">
          The Code extends to all individuals performing work for or on behalf of a Supplier in connection with Montage&rsquo;s business, whether employed directly, through agencies, or as independent contractors (&ldquo;Personnel&rdquo;).
        </p>
        <p className="!text-black">
          By entering into any commercial arrangement with Montage, Suppliers agree to comply with this Code and to ensure that their own subcontractors and agents do the same.
        </p>
      </Section>

      <Section id="labour-standards" title="Part 2: Labour Standards and Human Rights">
        <h3 className="text-xl font-semibold !text-black mb-3">Fundamental Principles</h3>
        <p className="!text-black mb-6">
          Montage upholds the dignity and rights of all workers. We expect Suppliers to respect internationally recognised human rights frameworks, including the principles embodied in the United Nations Guiding Principles on Business and Human Rights, the International Labour Organization&rsquo;s core conventions, and the UN Global Compact.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Prohibition of Forced Labour and Human Trafficking</h3>
        <p className="!text-black mb-4">
          Suppliers shall not use any form of forced, compulsory, bonded, or trafficked labour. All work must be undertaken voluntarily, and Personnel must be free to terminate their employment with reasonable notice as provided by applicable law.
        </p>
        <p className="!text-black mb-2">In particular, Suppliers must:</p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4 mb-6">
          <li>Never require Personnel to surrender identity documents, travel papers, or work permits as a condition of employment</li>
          <li>Ensure Personnel are not required to pay recruitment fees or deposits to obtain or retain employment</li>
          <li>Permit Personnel to leave their place of work at the end of their shift and freely exit employer-provided accommodation</li>
          <li>Never use threats, coercion, or deception to compel work performance</li>
        </ul>

        <h3 className="text-xl font-semibold !text-black mb-3">Prevention of Child Labour</h3>
        <p className="!text-black mb-6">
          Suppliers shall not employ anyone below the minimum legal working age in the relevant jurisdiction, or below age 15, whichever is higher. Where young workers between 15 and 18 are lawfully employed, Suppliers must ensure they are protected from hazardous work and that their employment does not interfere with compulsory education.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Fair Wages and Working Hours</h3>
        <p className="!text-black mb-4">
          Suppliers shall pay Personnel at least the applicable legal minimum wage and provide all legally mandated benefits. Wages must be paid regularly and in full, with clear documentation provided to Personnel explaining the basis of their compensation.
        </p>
        <p className="!text-black mb-6">
          Working hours, including overtime, shall comply with applicable laws and industry standards. Overtime must be voluntary and compensated at legally required rates. Personnel must receive adequate rest periods and annual leave.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Equal Treatment and Non-Discrimination</h3>
        <p className="!text-black mb-4">
          Suppliers shall foster workplaces where all Personnel are treated with dignity and respect. Employment decisions—including hiring, compensation, promotion, discipline, and termination—must be based on merit and legitimate business requirements.
        </p>
        <p className="!text-black mb-6">
          Discrimination or harassment based on race, ethnicity, national origin, religion, gender, age, disability, marital status, sexual orientation, political opinion, or any other protected characteristic is strictly prohibited.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Freedom of Association</h3>
        <p className="!text-black mb-6">
          Suppliers shall respect the right of Personnel to form, join, or refrain from joining trade unions or other representative organisations of their choosing, in accordance with applicable law. Where collective bargaining is legally recognised, Suppliers shall engage constructively with worker representatives.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Workplace Conduct and Discipline</h3>
        <p className="!text-black">
          Suppliers shall maintain disciplinary procedures that are fair, transparent, and clearly communicated to all Personnel. Physical punishment, threats of violence, psychological abuse, and any form of intimidation or harassment are strictly prohibited.
        </p>
      </Section>

      <Section id="health-safety" title="Part 3: Health, Safety and Environment" className="bg-neutral-50">
        <h3 className="text-xl font-semibold !text-black mb-3">Occupational Health and Safety</h3>
        <p className="!text-black mb-4">
          Suppliers shall provide a safe and healthy working environment that meets or exceeds applicable legal requirements. This includes identifying workplace hazards, implementing appropriate controls, and taking proactive measures to prevent accidents, injuries, and occupational illness.
        </p>
        <p className="!text-black mb-2">Suppliers must:</p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4 mb-6">
          <li>Conduct regular risk assessments and implement effective hazard controls</li>
          <li>Provide appropriate personal protective equipment at no cost to Personnel</li>
          <li>Ensure Personnel receive adequate health and safety training</li>
          <li>Maintain emergency preparedness and response procedures</li>
          <li>Record, investigate, and address all workplace incidents</li>
        </ul>

        <h3 className="text-xl font-semibold !text-black mb-3">Environmental Responsibility</h3>
        <p className="!text-black mb-4">
          Suppliers shall conduct their operations in compliance with all applicable environmental laws and regulations. Beyond mere compliance, we encourage Suppliers to adopt practices that minimise environmental impact, conserve natural resources, and support sustainable development.
        </p>
        <p className="!text-black mb-2">This includes responsible management of:</p>
        <ul className="list-disc list-inside space-y-2 !text-black ml-4">
          <li>Emissions to air, water, and land</li>
          <li>Hazardous materials and waste disposal</li>
          <li>Energy consumption and greenhouse gas emissions</li>
          <li>Product stewardship throughout the supply chain</li>
        </ul>
      </Section>

      <Section id="business-ethics" title="Part 4: Business Ethics and Integrity">
        <h3 className="text-xl font-semibold !text-black mb-3">Anti-Corruption and Bribery</h3>
        <p className="!text-black mb-4">
          Suppliers shall conduct business with the highest standards of integrity. Bribery, corruption, extortion, and kickbacks are strictly prohibited, whether involving public officials or private parties.
        </p>
        <p className="!text-black mb-4">
          Suppliers must comply with all applicable anti-corruption laws, including the UAE Federal Decree-Law No. 31 of 2021 on Crimes and Penalties, the UK Bribery Act, the US Foreign Corrupt Practices Act, and equivalent legislation in jurisdictions where they operate.
        </p>
        <p className="!text-black mb-6">
          Gifts, entertainment, or hospitality may only be offered or accepted where they are modest in value, transparent, and consistent with local business customs. They must never be intended to improperly influence business decisions.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Conflicts of Interest</h3>
        <p className="!text-black mb-6">
          Suppliers must avoid situations where personal interests conflict, or appear to conflict, with their obligations to Montage. Any actual or potential conflict of interest must be promptly disclosed to Montage in writing.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Fair Competition</h3>
        <p className="!text-black mb-6">
          Suppliers shall compete fairly and comply with all applicable competition and antitrust laws. Price-fixing, market allocation, bid-rigging, and other anti-competitive practices are prohibited. Marketing and advertising must be truthful and not misleading.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Financial Integrity and Anti-Money Laundering</h3>
        <p className="!text-black mb-4">
          Suppliers shall maintain accurate books and records in accordance with applicable accounting standards and legal requirements. Falsification of records, fraudulent financial reporting, and any form of money laundering are strictly prohibited.
        </p>
        <p className="!text-black mb-6">
          Suppliers must have appropriate controls to detect and prevent money laundering and terrorist financing, in compliance with applicable UAE and international regulations.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Trade Compliance and Sanctions</h3>
        <p className="!text-black mb-6">
          Suppliers shall comply with all applicable trade laws, export controls, customs regulations, and economic sanctions. This includes maintaining appropriate due diligence procedures to ensure goods and services are not diverted to prohibited end-users, end-uses, or destinations.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Data Protection and Confidentiality</h3>
        <p className="!text-black mb-4">
          Suppliers shall protect personal data in accordance with applicable data protection laws, including the UAE Federal Decree-Law No. 45 of 2021. Appropriate technical and organisational measures must be implemented to safeguard data against unauthorised access, disclosure, or misuse.
        </p>
        <p className="!text-black">
          Confidential information shared by Montage must be protected and used only for the purposes for which it was disclosed.
        </p>
      </Section>

      <Section id="management-compliance" title="Part 5: Management and Compliance" className="bg-neutral-50">
        <h3 className="text-xl font-semibold !text-black mb-3">Implementation and Communication</h3>
        <p className="!text-black mb-6">
          Suppliers shall implement management systems appropriate to the size and nature of their operations to ensure compliance with this Code. The requirements of this Code should be communicated to all relevant Personnel and integrated into Supplier policies and procedures.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Supply Chain Responsibility</h3>
        <p className="!text-black mb-6">
          Suppliers are responsible for ensuring that their own suppliers, subcontractors, and agents comply with standards consistent with this Code. We expect Suppliers to conduct appropriate due diligence on their supply chains and to take corrective action where issues are identified.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Business Continuity</h3>
        <p className="!text-black mb-6">
          Suppliers shall maintain appropriate business continuity plans to ensure resilience against potential disruptions, including natural disasters, supply chain interruptions, and other unforeseen events that could affect their ability to meet obligations to Montage.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Reporting Concerns</h3>
        <p className="!text-black mb-4">
          We encourage Suppliers and their Personnel to report any concerns about potential violations of this Code or applicable laws. Reports may be made to your primary Montage contact or directly to:
        </p>
        <div className="p-6 bg-white rounded-lg border border-neutral-200 mb-6">
          <p className="!text-black mb-1">Email: <a href="mailto:compliance@montagefert.com" className="text-brand-600 hover:text-brand-700 font-semibold">compliance@montagefert.com</a></p>
          <p className="!text-black">Post: Compliance Officer, Montage, Office 1302, Saba 1, Jumeirah Lake Towers, Dubai, UAE</p>
        </div>
        <p className="!text-black mb-6">
          Montage prohibits retaliation against anyone who raises concerns in good faith. All reports will be treated confidentially to the extent possible and investigated appropriately.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Verification and Audit</h3>
        <p className="!text-black mb-6">
          Montage reserves the right to verify Supplier compliance with this Code through questionnaires, documentation requests, site visits, or third-party audits. Suppliers agree to cooperate fully with any such verification activities and to provide access to relevant facilities, records, and Personnel.
        </p>

        <h3 className="text-xl font-semibold !text-black mb-3">Non-Compliance and Remediation</h3>
        <p className="!text-black mb-4">
          Where non-compliance with this Code is identified, Montage will work with Suppliers to understand root causes and develop appropriate corrective action plans. We are committed to supporting continuous improvement and recognise that building ethical supply chains is an ongoing process.
        </p>
        <p className="!text-black">
          However, serious violations—particularly those involving forced labour, child labour, significant safety hazards, or corruption—may result in immediate termination of our commercial relationship. Montage reserves the right to terminate any arrangement with a Supplier that fails to meet the standards set out in this Code.
        </p>
      </Section>

      <Section id="document-info">
        <h3 className="text-xl font-semibold !text-black mb-4">Document Information</h3>
        <div className="grid gap-2 !text-black">
          <p><strong>Version:</strong> 1.0</p>
          <p><strong>Effective Date:</strong> November 2025</p>
          <p><strong>Owner:</strong> Montage</p>
          <p><strong>Review Cycle:</strong> Annual</p>
        </div>
        <p className="text-sm text-neutral-600 mt-6">
          This Code may be amended from time to time. The current version will always be available from Montage upon request.
        </p>
      </Section>
    </>
  )
}

import {
  Shield,
  Bug,
  Cloud,
  Siren,
  Lock,
  FileCheck,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Personal Info                                                      */
/* ------------------------------------------------------------------ */

export const personalInfo = {
  name: "Sarthak Singh",
  title: "Cybersecurity Consultant & Penetration Testing Specialist",
  email: "s27110815@gmail.com",
  phone: "+91 93362 86116",
  location: "Mumbai, India",
  education: "Arizona State University, BS Computer Science, 2016 to 2020",
};

export const bio =
  "I break into systems for a living so the bad guys can't. Over the past 8 years I've run 200+ pen tests and security audits for startups, fintechs, and healthcare companies. I hold the OSCP, CEH, and AWS Security certs. My clients hire me because I actually find the stuff automated scanners miss, write reports their devs can act on, and stick around until every finding is fixed. Not a single client has been breached on my watch.";

/* ------------------------------------------------------------------ */
/*  Stats                                                              */
/* ------------------------------------------------------------------ */

export const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Security Assessments", value: "200+" },
  { label: "Certification", value: "OSCP" },
  { label: "Breaches on Watch", value: "Zero" },
];

/* ------------------------------------------------------------------ */
/*  Certifications                                                     */
/* ------------------------------------------------------------------ */

export interface Certification {
  acronym: string;
  name: string;
  year: number;
  issuer: string;
}

export const certifications: Certification[] = [
  { acronym: "OSCP", name: "Offensive Security Certified Professional", year: 2022, issuer: "Offensive Security" },
  { acronym: "CEH", name: "Certified Ethical Hacker", year: 2021, issuer: "EC-Council" },
  { acronym: "Security+", name: "CompTIA Security+", year: 2020, issuer: "CompTIA" },
  { acronym: "AWS Security", name: "AWS Certified Security, Specialty", year: 2023, issuer: "Amazon Web Services" },
  { acronym: "GWAPT", name: "GIAC Web Application Penetration Tester", year: 2022, issuer: "GIAC / SANS" },
];

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Penetration Testing",
    description:
      "I test your web apps, APIs, and networks the same way an attacker would. OWASP and PTES methodology.",
    icon: Shield,
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Thorough scanning using Nessus, Burp Suite, plus custom scripts I've built over the years.",
    icon: Bug,
  },
  {
    title: "Cloud Security Audit",
    description:
      "I dig through your AWS, Azure, or GCP configs and find what's misconfigured before someone else does.",
    icon: Cloud,
  },
  {
    title: "Incident Response",
    description:
      "When things go wrong, I contain the damage fast, figure out how they got in, and make sure it doesn't happen again.",
    icon: Siren,
  },
  {
    title: "Security Architecture",
    description:
      "Building secure systems from day one. Zero-trust architecture, proper encryption, least-privilege access.",
    icon: Lock,
  },
  {
    title: "Compliance & Hardening",
    description:
      "Getting you audit-ready for SOC 2, ISO 27001, HIPAA, or PCI-DSS. I've been through the process enough times to know exactly what auditors look for.",
    icon: FileCheck,
  },
];

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  type: "work" | "education";
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Security Consultant",
    company: "Independent",
    period: "2021 to Present",
    type: "work",
    highlights: [
      "Run 150+ pen tests for clients ranging from seed-stage startups to Fortune 500s",
      "Found critical RCE bugs in 3 major companies that their internal teams missed",
      "Wrote Python tooling that cut my assessment time by 60%, which I now reuse on every engagement",
    ],
  },
  {
    role: "Security Engineer",
    company: "CrowdStrike",
    period: "2019 to 2021",
    type: "work",
    highlights: [
      "Hunted threats and ran incident response across CrowdStrike's enterprise client base",
      "Wrote detection rules that caught 99.7% of APTs in the wild",
      "Ran security ops for accounts doing $50M+ a year in revenue",
    ],
  },
  {
    role: "Junior Penetration Tester",
    company: "Rapid7",
    period: "2018 to 2019",
    type: "work",
    highlights: [
      "Cut my teeth on real-world web app and network pen tests",
      "Wrote 50+ vuln reports that devs could actually understand and act on",
      "Shipped patches to a few open-source security tools along the way",
    ],
  },
  {
    role: "BS Computer Science",
    company: "Arizona State University",
    period: "2016 to 2020",
    type: "education",
    highlights: [
      "Focus on cryptography, network security, and operating systems",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Tools & Technologies                                               */
/* ------------------------------------------------------------------ */

export interface ToolCategory {
  category: string;
  tools: string[];
}

export const toolCategories: ToolCategory[] = [
  {
    category: "Offensive",
    tools: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "sqlmap", "John the Ripper", "Hashcat"],
  },
  {
    category: "Defensive",
    tools: ["Splunk", "CrowdStrike Falcon", "Snort", "OSSEC", "Suricata"],
  },
  {
    category: "Cloud",
    tools: ["AWS Security Hub", "Azure Sentinel", "CloudTrail", "GuardDuty"],
  },
  {
    category: "Languages",
    tools: ["Python", "Bash", "PowerShell", "Go", "JavaScript"],
  },
  {
    category: "Frameworks",
    tools: ["OWASP Top 10", "MITRE ATT&CK", "NIST CSF", "PTES", "CIS Benchmarks"],
  },
];

/* ------------------------------------------------------------------ */
/*  Case Studies                                                       */
/* ------------------------------------------------------------------ */

export interface CaseStudy {
  title: string;
  summary: string;
  findings: string;
  outcome: string;
  threatLevel: "Critical" | "High" | "Medium";
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Fintech Platform Pen Test",
    threatLevel: "Critical",
    summary:
      "Tore apart a Series B fintech app and found 23 holes, 3 of them critical. SQLi, IDOR, and busted password reset.",
    findings: "The dev team patched everything in 30 days flat.",
    outcome: "18 months later, zero incidents. They closed their Series C off the back of our clean report.",
  },
  {
    title: "Healthcare SaaS Cloud Audit",
    threatLevel: "Critical",
    summary:
      "Their AWS setup had grown fast with no security oversight. I found 47 misconfigs across IAM, S3, and VPC.",
    findings: "Rebuilt their architecture around zero-trust principles.",
    outcome: "They passed SOC 2 Type II on the first try. HIPAA compliant.",
  },
  {
    title: "Ransomware Incident Response",
    threatLevel: "High",
    summary:
      "Got the call at 2am. Ransomware had encrypted 80% of their file servers. $2M ransom demand.",
    findings: "Contained it in 4 hours. Recovered every file from offline backups. Didn't pay a cent.",
    outcome: "Locked down their environment after. They haven't had a single incident since.",
  },
];

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#cases" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "CV", href: "/cv.html" },
  { label: "Contact", href: "#contact" },
];

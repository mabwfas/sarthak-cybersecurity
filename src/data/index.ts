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
  education: "Arizona State University — BS Computer Science, 2016-2020",
};

export const bio =
  "Cybersecurity professional with 8+ years of experience in offensive security, penetration testing, and security architecture. Specialized in web application security (OWASP Top 10), network penetration testing, cloud security (AWS/Azure), and incident response. Certified OSCP, CEH, and CompTIA Security+ professional. Conducted 200+ security assessments for enterprise clients across fintech, healthcare, and SaaS. Zero critical vulnerabilities missed in production — every engagement delivers actionable, prioritized remediation roadmaps.";

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
  { acronym: "AWS Security", name: "AWS Certified Security — Specialty", year: 2023, issuer: "Amazon Web Services" },
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
      "Web app, API, and network pen testing following OWASP and PTES methodologies.",
    icon: Shield,
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Automated and manual scanning with Nessus, Burp Suite, and custom scripts.",
    icon: Bug,
  },
  {
    title: "Cloud Security Audit",
    description:
      "AWS/Azure/GCP security configuration review, IAM audit, and compliance check.",
    icon: Cloud,
  },
  {
    title: "Incident Response",
    description:
      "Forensic analysis, threat containment, root cause analysis, and recovery planning.",
    icon: Siren,
  },
  {
    title: "Security Architecture",
    description:
      "Design secure systems from scratch — zero-trust, encryption, access control.",
    icon: Lock,
  },
  {
    title: "Compliance & Hardening",
    description:
      "SOC 2, ISO 27001, HIPAA, PCI-DSS compliance assessment and remediation.",
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
    period: "2021 — Present",
    type: "work",
    highlights: [
      "Led 150+ penetration tests for enterprise clients",
      "Discovered critical RCE vulnerabilities in 3 Fortune 500 companies",
      "Built custom security automation tools reducing assessment time by 60%",
    ],
  },
  {
    role: "Security Engineer",
    company: "CrowdStrike",
    period: "2019 — 2021",
    type: "work",
    highlights: [
      "Threat hunting and incident response for enterprise clients",
      "Developed detection rules that caught 99.7% of advanced persistent threats",
      "Led security operations for clients with $50M+ in annual revenue",
    ],
  },
  {
    role: "Junior Penetration Tester",
    company: "Rapid7",
    period: "2018 — 2019",
    type: "work",
    highlights: [
      "Conducted web application and network penetration tests",
      "Authored 50+ detailed vulnerability reports with remediation guidance",
      "Contributed to open-source security tooling",
    ],
  },
  {
    role: "BS Computer Science",
    company: "Arizona State University",
    period: "2016 — 2020",
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
    title: "Enterprise Web App Pen Test — Fintech Platform",
    threatLevel: "Critical",
    summary:
      "Found 23 vulnerabilities including 3 critical (SQL injection, IDOR, broken auth).",
    findings: "Client remediated all within 30 days.",
    outcome: "Zero incidents in 18 months post-assessment.",
  },
  {
    title: "Cloud Security Audit — Healthcare SaaS",
    threatLevel: "Critical",
    summary:
      "Audited AWS infrastructure for HIPAA compliance. Found 47 misconfigurations.",
    findings: "Implemented zero-trust architecture.",
    outcome: "Passed SOC 2 Type II audit on first attempt.",
  },
  {
    title: "Incident Response — Ransomware Recovery",
    threatLevel: "High",
    summary:
      "Contained active ransomware attack within 4 hours.",
    findings: "Recovered 100% of encrypted data from backups.",
    outcome: "Implemented security improvements preventing recurrence.",
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

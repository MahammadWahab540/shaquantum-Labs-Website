import Link from "next/link";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Founding Team", href: "/team" },
    { label: "Research & Innovation", href: "/about#research" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "Pathwisse", href: "/pathwisse" },
    { label: "Sectors", href: "/sectors" },
    { label: "Education", href: "/sectors#education" },
    { label: "MSMEs", href: "/sectors#msme" },
  ],
  Ecosystem: [
    { label: "Agriculture", href: "/sectors#agriculture" },
    { label: "Healthcare", href: "/sectors#healthcare" },
    { label: "Partner With Us", href: "/contact?type=partner" },
    { label: "Investor Enquiry", href: "/contact?type=investor" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo variant="light" size="md" showTagline />
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-5">
              Building commercially scalable digital ecosystems for sectors that matter — education, MSMEs, agriculture, and healthcare.
            </p>
            <address className="not-italic text-xs text-slate-500 leading-relaxed">
              # 8-2-610/A/401, 4th Floor, Silver Tower Banjara<br />
              Banjara Hills Rd No. 11, Hyderabad – 500034<br />
              Telangana, India
            </address>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-white text-sm font-semibold mb-4 tracking-tight">{group}</h3>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-teal-400 transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} ShaQuantum Labs Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs hover:text-teal-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

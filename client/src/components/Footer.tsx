import { Link } from "wouter";
import { Server, Mail, Phone, MapPin } from "lucide-react";
import { SiInstagram, SiTelegram, SiX, SiLinkedin } from "react-icons/si";

const footerLinks = {
  services: [
    { label: "هاست وب", href: "/services/hosting" },
    { label: "سرور مجازی VPS", href: "/services/vps" },
    { label: "سرور اختصاصی VDS", href: "/services/vds" },
    { label: "سرور بازی", href: "/services/game" },
  ],
  support: [
    { label: "سوالات متداول", href: "/faq" },
    { label: "وضعیت سرورها", href: "/status" },
    { label: "تماس با ما", href: "/contact" },
    { label: "وبلاگ", href: "/blog" },
  ],
  legal: [
    { label: "قوانین و مقررات", href: "/terms" },
    { label: "حریم خصوصی", href: "/privacy" },
    { label: "ضمانت بازگشت وجه", href: "/refund" },
  ],
};

const socialLinks = [
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiTelegram, href: "#", label: "Telegram" },
  { icon: SiX, href: "#", label: "Twitter" },
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-orange">آریاهاست</span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              آریاهاست، ارائه‌دهنده خدمات هاستینگ و سرور با بیش از ۱۰ سال تجربه. ما متعهد به ارائه بهترین خدمات با بالاترین کیفیت و پشتیبانی ۲۴ ساعته هستیم.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center transition-all hover:glow-orange hover:border-primary/30"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gradient-orange">خدمات</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gradient-orange">پشتیبانی</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gradient-orange">تماس با ما</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@ariahost.ir</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © ۱۴۰۳ آریاهاست. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

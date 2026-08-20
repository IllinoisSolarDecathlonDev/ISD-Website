import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-inner">
        <div>
          <span>© {new Date().getFullYear()} Illinois Solar Decathlon · UIUC</span>
        </div>
        <div className="footer-links">
          <Link href="/nonprofit" className="footer-link">
            NonProfit status
          </Link>
          <Link href="/press" className="footer-link">
            Press &amp; media kit
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}



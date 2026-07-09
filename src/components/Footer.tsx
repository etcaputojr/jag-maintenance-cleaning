import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer__inner">
        <Image src="/jag-logo.png" alt="JAG Maintenance and Cleaning LLC" width={1254} height={1254} />
        <p>Brooklyn based. Proudly serving all five boroughs of New York City.</p>
        <p>© {new Date().getFullYear()} JAG Maintenance &amp; Cleaning LLC.</p>
      </div>
    </footer>
  );
}

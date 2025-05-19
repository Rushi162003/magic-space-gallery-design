
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 bg-accent/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Magic Space Interior</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transforming spaces into magical experiences with innovative design solutions.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact Us</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>Pune, Maharashtra</p>
              <p>Email: mangeshjahdale58@gmail.com</p>
              <p>Phone: +91 92849 74111</p>
              <p>Phone: +91 97669 74736</p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Magic Space Interior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <header className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Hyperseries
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/producers"
              className="hover:text-purple-300 transition-colors"
            >
              {t("For Producers")}
            </Link>
            <Link
              to="/advertisers"
              className="hover:text-purple-300 transition-colors"
            >
              {t("For Advertisers")}
            </Link>
            <Link
              to="/investors"
              className="hover:text-purple-300 transition-colors"
            >
              {t("For Investors")}
            </Link>
            <Button onClick={toggleLanguage} variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Toggle language</span>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-8"
        >
          <a
            href="/producers"
            className="text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("For Producers")}
          </a>
          <a
            href="/advertisers"
            className="text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("For Advertisers")}
          </a>
          <a
            href="/investors"
            className="text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("For Investors")}
          </a>
          <Button onClick={toggleLanguage} variant="ghost" size="lg">
            {i18n.language === "en" ? "Español" : "English"}
          </Button>
        </motion.div>
      )}

      <main className="pt-20">
        <section className="hero min-h-screen flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t("Welcome to Hyperseries")}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {t("Revolutionizing Entertainment and E-commerce")}
            </p>
            <Button asChild size="lg" className="text-lg">
              <a href="#about">{t("Learn More")}</a>
            </Button>
          </motion.div>
        </section>

        <section id="about" className="py-20 bg-black bg-opacity-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">
              {t("About Us")}
            </h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              {t(
                "Hyperseries is not just an entertainment place, but an adventure that brings people together. Here, the advertiser is a fan among the fans. Join us as we change the way our audience, your customers, shop online and at your store."
              )}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              {t("Our Services")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title={t("Shoppertainment Experience")}
                description={t(
                  "Hyperseries goes beyond traditional e-commerce by incorporating a shopping + entertainment approach."
                )}
              />
              <ServiceCard
                title={t("Empowering Local Connections")}
                description={t(
                  "Hyperseries helps local brands connect with their community, offering increased visibility and fostering lasting relationships with local customers."
                )}
              />
              <ServiceCard
                title={t("Content Creation")}
                description={t(
                  "Whether it's branding, marketing, video posts, or any other type of content, our team is here to help and boost your brand."
                )}
              />
              <ServiceCard
                title={t("See Now, Buy Now Exposure")}
                description={t(
                  "Viewers on our platform will see your products and can click and buy directly on our website or yours."
                )}
              />
              <ServiceCard
                title={t("Web to Store Reach/Exposure")}
                description={t(
                  "Are you a local shop without an online presence? We drive your customers directly to your store."
                )}
              />
              <ServiceCard
                title={t("In-Game Advertising")}
                description={t(
                  "Hyperseries offers innovative in-game advertising solutions that immerse your brand within the gaming experience."
                )}
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-black bg-opacity-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">
              {t("Contact Us")}
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-75 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Hyperseries.{" "}
            {t("All rights reserved.")}
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    type: "",
    name: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="email" className="block mb-2">
          {t("Professional Email")}
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
          placeholder={t("Enter your professional email")}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="type" className="block mb-2">
          {t("Type")}
        </label>
        <Select
          name="type"
          onValueChange={(value) =>
            handleChange({ target: { name: "type", value } })
          }
        >
          <SelectTrigger className="bg-white bg-opacity-20 border-none text-white">
            <SelectValue placeholder={t("Select type")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="producer">{t("Producer")}</SelectItem>
            <SelectItem value="advertiser">{t("Advertiser")}</SelectItem>
            <SelectItem value="investor">{t("Investor")}</SelectItem>
            <SelectItem value="other">{t("Other")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="name" className="block mb-2">
          {t("Full Name")}
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
          placeholder={t("Enter your full name")}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="website" className="block mb-2">
          {t("Website")}
        </label>
        <Input
          type="url"
          id="website"
          name="website"
          className="bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
          placeholder={t("Enter your website URL")}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">
          {t("Message")}
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          className="bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
          placeholder={t("Enter your message")}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" size="lg" className="w-full">
        {t("Submit")}
      </Button>
    </form>
  );
}

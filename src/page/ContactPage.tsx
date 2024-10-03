import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronLeft, Mail, User, Globe, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    type: "",
    name: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <header className="bg-black bg-opacity-50 py-4">
        <div className="container mx-auto px-6 flex items-center">
          <Button asChild variant="ghost" size="icon" className="mr-4">
            <a href="/">
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">{t("Back to home")}</span>
            </a>
          </Button>
          <h1 className="text-2xl font-bold">{t("Contact Us")}</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            {t("Get in Touch")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                <Mail className="inline-block mr-2 h-4 w-4" />
                {t("Professional Email")}
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
                placeholder={t("Enter your professional email")}
              />
            </div>
            <div>
              <label htmlFor="type" className="block mb-2 text-sm font-medium">
                <User className="inline-block mr-2 h-4 w-4" />
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
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                <User className="inline-block mr-2 h-4 w-4" />
                {t("Full Name")}
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
                placeholder={t("Enter your full name")}
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium"
              >
                <Globe className="inline-block mr-2 h-4 w-4" />
                {t("Website")}
              </label>
              <Input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
                placeholder={t("Enter your website URL")}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                <MessageSquare className="inline-block mr-2 h-4 w-4" />
                {t("Message")}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
                placeholder={t("Enter your message")}
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              {t("Submit")}
            </Button>
          </form>
        </motion.div>
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

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronLeft, Target, TrendingUp, ShoppingBag } from "lucide-react";
import { Button } from "../components/ui/button";

export default function AdvertisersPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <header className="bg-black bg-opacity-50 py-4">
        <div className="container mx-auto px-6 flex items-center">
          <Button asChild variant="ghost" size="icon" className="mr-4">
            <a href="/">
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Back to home</span>
            </a>
          </Button>
          <h1 className="text-2xl font-bold">{t("For Advertisers")}</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-6">
            {t("Why Advertise with Hyperseries?")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Target className="h-10 w-10 text-indigo-400" />}
              title={t("Targeted Audience")}
              description={t(
                "Reach your ideal customers through our engaged viewer base."
              )}
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-indigo-400" />}
              title={t("Increased Brand Awareness")}
              description={t(
                "Boost your visibility with our innovative in-content advertising."
              )}
            />
            <FeatureCard
              icon={<ShoppingBag className="h-10 w-10 text-indigo-400" />}
              title={t("Direct Sales Opportunities")}
              description={t(
                'Convert viewers into customers with our "See Now, Buy Now" feature.'
              )}
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-6">
            {t("Advertising Options")}
          </h2>
          <ul className="space-y-4">
            {[
              t("In-content product placement"),
              t("Branded content collaborations"),
              t("Interactive ad experiences"),
              t("Sponsored segments"),
              t("E-commerce integrations"),
            ].map((option, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-4 text-indigo-400">•</span>
                {option}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button asChild size="lg">
            <a href="/contact">{t("Start Advertising")}</a>
          </Button>
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

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p>{description}</p>
    </motion.div>
  );
}

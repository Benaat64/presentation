import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronLeft, TrendingUp, Globe, Zap } from "lucide-react";
import { Button } from "../components/ui/button";

export default function InvestorsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <header className="bg-black bg-opacity-50 py-4">
        <div className="container mx-auto px-6 flex items-center">
          <Button asChild variant="ghost" size="icon" className="mr-4">
            <a href="/">
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Back to home</span>
            </a>
          </Button>
          <h1 className="text-2xl font-bold">{t("For Investors")}</h1>
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
            {t("Why Invest in Hyperseries?")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-purple-400" />}
              title={t("High Growth Potential")}
              description={t(
                "Tap into the booming market of interactive entertainment and e-commerce."
              )}
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-purple-400" />}
              title={t("Global Reach")}
              description={t(
                "Access a worldwide audience with our multilingual platform."
              )}
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-purple-400" />}
              title={t("Innovative Technology")}
              description={t(
                "Be part of the future of entertainment with our cutting-edge solutions."
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
          <h2 className="text-3xl font-semibold mb-6">{t("Key Metrics")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <MetricCard
              title={t("User Growth")}
              value="200%"
              description={t("Year-over-year increase in active users")}
            />
            <MetricCard
              title={t("Revenue")}
              value="$10M+"
              description={t("Projected revenue for the upcoming fiscal year")}
            />
            <MetricCard
              title={t("Content Partners")}
              value="500+"
              description={t(
                "Producers and brands collaborating on our platform"
              )}
            />
            <MetricCard
              title={t("Global Presence")}
              value="50+"
              description={t("Countries where Hyperseries is available")}
            />
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button asChild size="lg">
            <a href="/contact">{t("Explore Investment Opportunities")}</a>
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

function MetricCard({ title, value, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-purple-400 mb-2">{value}</p>
      <p>{description}</p>
    </motion.div>
  );
}

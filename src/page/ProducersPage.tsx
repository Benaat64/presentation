import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronLeft, Video, BarChart, Users } from "lucide-react";
import { Button } from "../components/ui/button";

export default function ProducersPage() {
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
          <h1 className="text-2xl font-bold">{t("For Producers")}</h1>
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
            {t("Why Choose Hyperseries?")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Video className="h-10 w-10 text-purple-400" />}
              title={t("Showcase Your Content")}
              description={t(
                "Reach a global audience with our innovative platform."
              )}
            />
            <FeatureCard
              icon={<BarChart className="h-10 w-10 text-purple-400" />}
              title={t("Advanced Analytics")}
              description={t(
                "Track viewer engagement and optimize your content."
              )}
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-400" />}
              title={t("Collaboration Opportunities")}
              description={t(
                "Connect with brands and advertisers for unique partnerships."
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
          <h2 className="text-3xl font-semibold mb-6">{t("Our Process")}</h2>
          <ol className="space-y-4">
            {[
              t("Submit your content proposal"),
              t("Our team reviews and provides feedback"),
              t("Collaborate on content development and integration"),
              t("Launch your content on the Hyperseries platform"),
              t("Monitor performance and engage with your audience"),
            ].map((step, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-4 flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button asChild size="lg">
            <a href="/contact">{t("Get Started")}</a>
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

"use client";

import { CardFooter } from "@/components/ui/card";

import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A showcase of my data science projects, demonstrating my technical
            skills and problem-solving abilities.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <AnimatedSection delay={0.1}>
            <Card className="bg-slate-700 border-slate-600 h-full flex flex-col overflow-hidden rounded-xl">
              <div className="relative h-48">
                <Image
                  src="/assets/images/projects/project1.png"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-emerald-400">
                  Exploring NYC’s Vegetarian and Vegan Options
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Interactive dashboard for exploring plant-based dining in NYC
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 flex-grow">
                <p>
                  Developed a web-based dashboard showcasing vegan and
                  vegetarian restaurants in NYC. Collected data via Yelp Fusion
                  API and processed it with Python for analysis and
                  visualization. Designed charts and filters to explore
                  restaurant locations, cuisines, and borough demographics.
                  Hosted on GitHub Pages.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 border-t border-slate-600 pt-4">
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Python
                </Badge>

                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Matplotlib
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Seaborn
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Plotly
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  D3.js
                </Badge>

                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  API Integration
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Data Processing
                </Badge>
              </CardFooter>
              <div className="flex p-4 pt-0 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-full"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 rounded-full"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Project 2 */}
          <AnimatedSection delay={0.2}>
            <Card className="bg-slate-700 border-slate-600 h-full flex flex-col overflow-hidden rounded-xl">
              <div className="relative h-48">
                <Image
                  src="/assets/images/projects/project2.png"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-emerald-400">Job Quest</CardTitle>
                <CardDescription className="text-slate-300">
                  A solution for tracking job applications
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 flex-grow">
                <p>
                  Developed a web-based app using Flask and SQLite to track and
                  manage job applications. Features include adding/updating job
                  details, visualizations, and resources for interview
                  preparation. Implemented secure user authentication and hosted
                  on Render.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 border-t border-slate-600 pt-4">
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Python
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  NLTK
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  TensorFlow
                </Badge>
              </CardFooter>
              <div className="flex p-4 pt-0 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-full"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 rounded-full"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Project 3 */}
          <AnimatedSection delay={0.3}>
            <Card className="bg-slate-700 border-slate-600 h-full flex flex-col overflow-hidden rounded-xl">
              <div className="relative h-48">
                <Image
                  src="/assets/images/projects/project3.png"
                  alt="Project 3"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-emerald-400">
                  Healthcare Data Analysis
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Analyzing patient data to improve healthcare outcomes
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 flex-grow">
                <p>
                  Analyzed large healthcare datasets to identify patterns in
                  patient outcomes. Created visualizations and reports that
                  helped healthcare providers improve care quality.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 border-t border-slate-600 pt-4">
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  R
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  SQL
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Power BI
                </Badge>
              </CardFooter>
              <div className="flex p-4 pt-0 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-full"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 rounded-full"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Project 4 */}
          <AnimatedSection delay={0.4}>
            <Card className="bg-slate-700 border-slate-600 h-full flex flex-col overflow-hidden rounded-xl">
              <div className="relative h-48">
                <Image
                  src="/assets/images/projects/project4.png"
                  alt="Project 4"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-emerald-400">
                  Financial Market Predictor
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Time series forecasting for stock market trends
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 flex-grow">
                <p>
                  Developed a time series model to predict stock market
                  movements using historical data. Implemented LSTM neural
                  networks and traditional forecasting methods for comparison.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 border-t border-slate-600 pt-4">
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Python
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  PyTorch
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Pandas
                </Badge>
              </CardFooter>
              <div className="flex p-4 pt-0 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-full"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 rounded-full"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Project 5 */}
          <AnimatedSection delay={0.5}>
            <Card className="bg-slate-700 border-slate-600 h-full flex flex-col overflow-hidden rounded-xl">
              <div className="relative h-48">
                <Image
                  src="/assets/images/projects/project5.png"
                  alt="Project 5"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-emerald-400">
                  Image Classification System
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Deep learning model for image recognition
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 flex-grow">
                <p>
                  Built a convolutional neural network for classifying images
                  across multiple categories. Achieved 95% accuracy on test data
                  using transfer learning with pre-trained models.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 border-t border-slate-600 pt-4">
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Python
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  TensorFlow
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Keras
                </Badge>
              </CardFooter>
              <div className="flex p-4 pt-0 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-full"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 rounded-full"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Project 6 */}
          <AnimatedSection delay={0.6}>
            <Card className="bg-slate-700 border-slate-600 h-full flex flex-col overflow-hidden rounded-xl">
              <div className="relative h-48">
                <Image
                  src="/assets/images/projects/project6.png"
                  alt="Project 6"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-emerald-400">
                  Recommendation Engine
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Personalized content recommendation system
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 flex-grow">
                <p>
                  Created a collaborative filtering algorithm to recommend
                  products based on user behavior. Implemented both memory-based
                  and model-based approaches to optimize recommendations.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 border-t border-slate-600 pt-4">
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Python
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Scikit-learn
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Spark
                </Badge>
              </CardFooter>
              <div className="flex p-4 pt-0 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-full"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 rounded-full"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        <div className="text-center mt-10">
          <Button
            className="bg-emerald-500 hover:bg-emerald-600"
            onClick={() =>
              window.open("https://github.com/yourusername", "_blank")
            }
          >
            View More Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

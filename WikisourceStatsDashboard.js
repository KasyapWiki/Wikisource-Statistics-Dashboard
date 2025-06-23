import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';
import { BookOpen, Users, FileText, CheckCircle, AlertCircle, Clock, Globe, TrendingUp, Database, IndianRupee, MessageCircle, GitPullRequest, Award, Lightbulb } from 'lucide-react';

const WikisourceStatsDashboard = () => {
  // Default to Hindi for an immediate focus on Indian languages
  const [selectedLanguage, setSelectedLanguage] = useState('hi');
  const [selectedTimeframe, setSelectedTimeframe] = useState('lastmonth');
  // Default to Indian Language Insights tab
  const [activeTab, setActiveTab] = useState('indianInsights');
  const [statsData, setStatsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define Indian languages prominently
  const indianLanguages = [
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'bn', name: 'Bengali', flag: '🇮🇳' },
    { code: 'te', name: 'Telugu', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
    { code: 'gu', name: 'Gujarati', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
    { code: 'ml', name: 'Malayalam', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', flag: '🇮🇳' },
    { code: 'or', name: 'Odia', flag: '🇮🇳' },
    { code: 'as', name: 'Assamese', flag: '🇮🇳' },
    { code: 'sa', name: 'Sanskrit', flag: '🇮🇳' },
    { code: 'ur', name: 'Urdu', flag: '🇮🇳' }, // Added Urdu
    { code: 'ks', name: 'Kashmiri', flag: '🇮🇳' }, // Added Kashmiri
    { code: 'kok', name: 'Konkani', flag: '🇮🇳' }, // Added Konkani
    { code: 'mai', name: 'Maithili', flag: '🇮🇳' }, // Added Maithili
    { code: 'ne', name: 'Nepali', flag: '🇳🇵' }, // Nepali (relevant for Indian context)
  ];

  const otherLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  ];

  const languages = [...indianLanguages, ...otherLanguages];

  // --- Simulated API Data Fetch ---
  useEffect(() => {
    setLoading(true);
    setError(null);
    // Simulate API call delay
    const fetchData = setTimeout(() => {
      try {
        const simulatedData = {
          fr: {
            totalTexts: 542891, pageMode: 487234, validatedTexts: 45623, correctedTexts: 98765,
            authors: 25643, authorsWithoutTexts: 3456, finishedBooks: 2345, booksToValidate: 1234,
            booksToCorrect: 987, totalBooks: 4566, validatedPages: 234567, correctedPages: 345678,
            problemPages: 12345, uncorrectedPages: 67890, emptyPages: 9876, activeUsers: 156,
            bureaucrats: 3, administrators: 12, patrollers: 25, autopatrolled: 89, bots: 15,
            recentEdits: 12000, newAuthors: 15, newTexts: 50, qualityLevels: { '100%': 45623, '75%': 50000, '50%': 60000, '25%': 70000, '0%': 80000 },
            growth: [ // Simulated historical data for growth trends
              { month: 'Jan', texts: 500000, users: 120 }, { month: 'Feb', texts: 505000, users: 125 },
              { month: 'Mar', texts: 510000, users: 130 }, { month: 'Apr', texts: 515000, users: 135 },
              { month: 'May', texts: 520000, users: 140 }, { month: 'Jun', texts: 525000, users: 145 },
            ]
          },
          // Indian Language Data (Enhanced and more granular with growth data)
          hi: {
            totalTexts: 15432, pageMode: 12890, validatedTexts: 2156, correctedTexts: 4567,
            authors: 1234, authorsWithoutTexts: 345, finishedBooks: 189, booksToValidate: 156,
            booksToCorrect: 87, totalBooks: 432, validatedPages: 23456, correctedPages: 34567,
            problemPages: 1234, uncorrectedPages: 5678, emptyPages: 987, activeUsers: 45,
            bureaucrats: 2, administrators: 5, patrollers: 8, autopatrolled: 25, bots: 3,
            recentEdits: 850, newAuthors: 8, newTexts: 20, qualityLevels: { '100%': 2156, '75%': 3200, '50%': 4100, '25%': 5000, '0%': 6000 },
            growth: [
              { month: 'Jan', texts: 10000, users: 30 }, { month: 'Feb', texts: 10500, users: 32 },
              { month: 'Mar', texts: 11000, users: 35 }, { month: 'Apr', texts: 11500, users: 38 },
              { month: 'May', texts: 12000, users: 40 }, { month: 'Jun', texts: 12500, users: 42 },
            ]
          },
          bn: {
            totalTexts: 18765, pageMode: 15432, validatedTexts: 2987, correctedTexts: 5432,
            authors: 1567, authorsWithoutTexts: 234, finishedBooks: 234, booksToValidate: 187,
            booksToCorrect: 123, totalBooks: 544, validatedPages: 28976, correctedPages: 41234,
            problemPages: 1876, uncorrectedPages: 6543, emptyPages: 1234, activeUsers: 67,
            bureaucrats: 2, administrators: 6, patrollers: 12, autopatrolled: 34, bots: 4,
            recentEdits: 1100, newAuthors: 10, newTexts: 25, qualityLevels: { '100%': 2987, '75%': 4000, '50%': 5500, '25%': 6800, '0%': 7500 },
            growth: [
              { month: 'Jan', texts: 14000, users: 50 }, { month: 'Feb', texts: 14500, users: 55 },
              { month: 'Mar', texts: 15000, users: 58 }, { month: 'Apr', texts: 15500, users: 60 },
              { month: 'May', texts: 16000, users: 62 }, { month: 'Jun', texts: 16500, users: 65 },
            ]
          },
          te: {
            totalTexts: 12456, pageMode: 10234, validatedTexts: 1876, correctedTexts: 3456,
            authors: 987, authorsWithoutTexts: 156, finishedBooks: 145, booksToValidate: 98,
            booksToCorrect: 67, totalBooks: 310, validatedPages: 18765, correctedPages: 27654,
            problemPages: 987, uncorrectedPages: 4321, emptyPages: 765, activeUsers: 34,
            bureaucrats: 1, administrators: 4, patrollers: 7, autopatrolled: 18, bots: 2,
            recentEdits: 600, newAuthors: 5, newTexts: 15, qualityLevels: { '100%': 1876, '75%': 2500, '50%': 3000, '25%': 3800, '0%': 4500 },
            growth: [
              { month: 'Jan', texts: 9000, users: 25 }, { month: 'Feb', texts: 9500, users: 27 },
              { month: 'Mar', texts: 10000, users: 29 }, { month: 'Apr', texts: 10500, users: 31 },
              { month: 'May', texts: 11000, users: 33 }, { month: 'Jun', texts: 11500, users: 35 },
            ]
          },
          ta: {
            totalTexts: 16789, pageMode: 14532, validatedTexts: 2345, correctedTexts: 4876,
            authors: 1345, authorsWithoutTexts: 198, finishedBooks: 198, booksToValidate: 134,
            booksToCorrect: 89, totalBooks: 421, validatedPages: 24567, correctedPages: 36789,
            problemPages: 1456, uncorrectedPages: 5432, emptyPages: 1098, activeUsers: 52,
            bureaucrats: 2, administrators: 5, patrollers: 9, autopatrolled: 28, bots: 3,
            recentEdits: 950, newAuthors: 7, newTexts: 22, qualityLevels: { '100%': 2345, '75%': 3500, '50%': 4500, '25%': 5800, '0%': 6500 },
            growth: [
              { month: 'Jan', texts: 12000, users: 40 }, { month: 'Feb', texts: 12500, users: 42 },
              { month: 'Mar', texts: 13000, users: 45 }, { month: 'Apr', texts: 13500, users: 48 },
              { month: 'May', texts: 14000, users: 50 }, { month: 'Jun', texts: 14500, users: 52 },
            ]
          },
          sa: {
            totalTexts: 8976, pageMode: 7543, validatedTexts: 1234, correctedTexts: 2456,
            authors: 654, authorsWithoutTexts: 87, finishedBooks: 89, booksToValidate: 67,
            booksToCorrect: 45, totalBooks: 201, validatedPages: 12345, correctedPages: 18976,
            problemPages: 654, uncorrectedPages: 2987, emptyPages: 543, activeUsers: 28,
            bureaucrats: 1, administrators: 3, patrollers: 5, autopatrolled: 12, bots: 2,
            recentEdits: 400, newAuthors: 3, newTexts: 10, qualityLevels: { '100%': 1234, '75%': 1800, '50%': 2200, '25%': 2800, '0%': 3500 },
            growth: [
              { month: 'Jan', texts: 6000, users: 20 }, { month: 'Feb', texts: 6500, users: 22 },
              { month: 'Mar', texts: 7000, users: 24 }, { month: 'Apr', texts: 7500, users: 26 },
              { month: 'May', texts: 8000, users: 28 }, { month: 'Jun', texts: 8500, users: 30 },
            ]
          },
          gu: {
            totalTexts: 9876, pageMode: 8234, validatedTexts: 987, correctedTexts: 2345,
            authors: 567, authorsWithoutTexts: 78, finishedBooks: 78, booksToValidate: 56,
            booksToCorrect: 34, totalBooks: 168, validatedPages: 11234, correctedPages: 16789,
            problemPages: 567, uncorrectedPages: 2345, emptyPages: 456, activeUsers: 23,
            bureaucrats: 1, administrators: 3, patrollers: 5, autopatrolled: 12, bots: 2,
            recentEdits: 350, newAuthors: 2, newTexts: 8, qualityLevels: { '100%': 987, '75%': 1500, '50%': 1800, '25%': 2200, '0%': 2800 },
            growth: [
              { month: 'Jan', texts: 7000, users: 18 }, { month: 'Feb', texts: 7200, users: 19 },
              { month: 'Mar', texts: 7400, users: 20 }, { month: 'Apr', texts: 7600, users: 21 },
              { month: 'May', texts: 7800, users: 22 }, { month: 'Jun', texts: 8000, users: 23 },
            ]
          },
          kn: {
            totalTexts: 11234, pageMode: 9876, validatedTexts: 1456, correctedTexts: 2987,
            authors: 678, authorsWithoutTexts: 89, finishedBooks: 98, booksToValidate: 67,
            booksToCorrect: 45, totalBooks: 210, validatedPages: 13456, correctedPages: 19876,
            problemPages: 678, uncorrectedPages: 2876, emptyPages: 567, activeUsers: 31,
            bureaucrats: 1, administrators: 4, patrollers: 6, autopatrolled: 15, bots: 2,
            recentEdits: 500, newAuthors: 4, newTexts: 12, qualityLevels: { '100%': 1456, '75%': 2000, '50%': 2500, '25%': 3000, '0%': 3800 },
            growth: [
              { month: 'Jan', texts: 8000, users: 25 }, { month: 'Feb', texts: 8300, users: 26 },
              { month: 'Mar', texts: 8600, users: 27 }, { month: 'Apr', texts: 8900, users: 28 },
              { month: 'May', texts: 9200, users: 30 }, { month: 'Jun', texts: 9500, users: 31 },
            ]
          },
          ml: {
            totalTexts: 10456, pageMode: 8976, validatedTexts: 1234, correctedTexts: 2654,
            authors: 589, authorsWithoutTexts: 67, finishedBooks: 87, booksToValidate: 54,
            booksToCorrect: 32, totalBooks: 173, validatedPages: 12567, correctedPages: 17890,
            problemPages: 589, uncorrectedPages: 2456, emptyPages: 478, activeUsers: 27,
            bureaucrats: 1, administrators: 3, patrollers: 5, autopatrolled: 13, bots: 2,
            recentEdits: 420, newAuthors: 3, newTexts: 9, qualityLevels: { '100%': 1234, '75%': 1700, '50%': 2100, '25%': 2600, '0%': 3000 },
            growth: [
              { month: 'Jan', texts: 7500, users: 20 }, { month: 'Feb', texts: 7800, users: 21 },
              { month: 'Mar', texts: 8100, users: 22 }, { month: 'Apr', texts: 8400, users: 23 },
              { month: 'May', texts: 8700, users: 25 }, { month: 'Jun', texts: 9000, users: 26 },
            ]
          },
          mr: {
            totalTexts: 13567, pageMode: 11234, validatedTexts: 1567, correctedTexts: 3456,
            authors: 789, authorsWithoutTexts: 98, finishedBooks: 123, booksToValidate: 87,
            booksToCorrect: 56, totalBooks: 266, validatedPages: 15678, correctedPages: 23456,
            problemPages: 789, uncorrectedPages: 3456, emptyPages: 678, activeUsers: 38,
            bureaucrats: 1, administrators: 4, patrollers: 7, autopatrolled: 17, bots: 3,
            recentEdits: 700, newAuthors: 6, newTexts: 18, qualityLevels: { '100%': 1567, '75%': 2200, '50%': 2800, '25%': 3500, '0%': 4200 },
            growth: [
              { month: 'Jan', texts: 10000, users: 30 }, { month: 'Feb', texts: 10500, users: 32 },
              { month: 'Mar', texts: 11000, users: 34 }, { month: 'Apr', texts: 11500, users: 36 },
              { month: 'May', texts: 12000, users: 38 }, { month: 'Jun', texts: 12500, users: 40 },
            ]
          },
          pa: {
            totalTexts: 8765, pageMode: 7234, validatedTexts: 876, correctedTexts: 1987,
            authors: 456, authorsWithoutTexts: 56, finishedBooks: 67, booksToValidate: 45,
            booksToCorrect: 28, totalBooks: 140, validatedPages: 9876, correctedPages: 14567,
            problemPages: 456, uncorrectedPages: 1876, emptyPages: 367, activeUsers: 21,
            bureaucrats: 1, administrators: 2, patrollers: 4, autopatrolled: 10, bots: 1,
            recentEdits: 300, newAuthors: 2, newTexts: 7, qualityLevels: { '100%': 876, '75%': 1200, '50%': 1500, '25%': 1900, '0%': 2300 },
            growth: [
              { month: 'Jan', texts: 6500, users: 15 }, { month: 'Feb', texts: 6700, users: 16 },
              { month: 'Mar', texts: 6900, users: 17 }, { month: 'Apr', texts: 7100, users: 18 },
              { month: 'May', texts: 7300, users: 19 }, { month: 'Jun', texts: 7500, users: 20 },
            ]
          },
          or: {
            totalTexts: 7654, pageMode: 6234, validatedTexts: 765, correctedTexts: 1654,
            authors: 398, authorsWithoutTexts: 45, finishedBooks: 56, booksToValidate: 34,
            booksToCorrect: 23, totalBooks: 113, validatedPages: 8765, correctedPages: 12456,
            problemPages: 398, uncorrectedPages: 1567, emptyPages: 289, activeUsers: 18,
            bureaucrats: 1, administrators: 2, patrollers: 3, autopatrolled: 8, bots: 1,
            recentEdits: 250, newAuthors: 1, newTexts: 6, qualityLevels: { '100%': 765, '75%': 1000, '50%': 1300, '25%': 1600, '0%': 2000 },
            growth: [
              { month: 'Jan', texts: 5500, users: 12 }, { month: 'Feb', texts: 5700, users: 13 },
              { month: 'Mar', texts: 5900, users: 14 }, { month: 'Apr', texts: 6100, users: 15 },
              { month: 'May', texts: 6300, users: 16 }, { month: 'Jun', texts: 6500, users: 17 },
            ]
          },
          as: {
            totalTexts: 6543, pageMode: 5234, validatedTexts: 654, correctedTexts: 1345,
            authors: 289, authorsWithoutTexts: 34, finishedBooks: 45, booksToValidate: 28,
            booksToCorrect: 18, totalBooks: 91, validatedPages: 7654, correctedPages: 10234,
            problemPages: 289, uncorrectedPages: 1234, emptyPages: 234, activeUsers: 15,
            bureaucrats: 1, administrators: 2, patrollers: 3, autopatrolled: 6, bots: 1,
            recentEdits: 200, newAuthors: 1, newTexts: 5, qualityLevels: { '100%': 654, '75%': 900, '50%': 1100, '25%': 1300, '0%': 1600 },
            growth: [
              { month: 'Jan', texts: 4800, users: 10 }, { month: 'Feb', texts: 5000, users: 11 },
              { month: 'Mar', texts: 5200, users: 12 }, { month: 'Apr', texts: 5400, users: 13 },
              { month: 'May', texts: 5600, users: 14 }, { month: 'Jun', texts: 5800, users: 15 },
            ]
          },
          ur: {
            totalTexts: 9210, pageMode: 7890, validatedTexts: 1100, correctedTexts: 2100,
            authors: 510, authorsWithoutTexts: 65, finishedBooks: 75, booksToValidate: 60,
            booksToCorrect: 40, totalBooks: 180, validatedPages: 10500, correctedPages: 15000,
            problemPages: 500, uncorrectedPages: 2100, emptyPages: 400, activeUsers: 25,
            bureaucrats: 1, administrators: 3, patrollers: 4, autopatrolled: 11, bots: 2,
            recentEdits: 380, newAuthors: 3, newTexts: 9, qualityLevels: { '100%': 1100, '75%': 1600, '50%': 2000, '25%': 2500, '0%': 3000 },
            growth: [
              { month: 'Jan', texts: 7000, users: 18 }, { month: 'Feb', texts: 7300, users: 19 },
              { month: 'Mar', texts: 7600, users: 20 }, { month: 'Apr', texts: 7900, users: 21 },
              { month: 'May', texts: 8200, users: 22 }, { month: 'Jun', texts: 8500, users: 23 },
            ]
          },
          ks: {
            totalTexts: 2500, pageMode: 2000, validatedTexts: 250, correctedTexts: 500,
            authors: 120, authorsWithoutTexts: 15, finishedBooks: 15, booksToValidate: 10,
            booksToCorrect: 8, totalBooks: 40, validatedPages: 2800, correctedPages: 4000,
            problemPages: 100, uncorrectedPages: 600, emptyPages: 150, activeUsers: 8,
            bureaucrats: 1, administrators: 1, patrollers: 2, autopatrolled: 4, bots: 1,
            recentEdits: 80, newAuthors: 1, newTexts: 3, qualityLevels: { '100%': 250, '75%': 350, '50%': 450, '25%': 550, '0%': 650 },
            growth: [
              { month: 'Jan', texts: 1800, users: 5 }, { month: 'Feb', texts: 1900, users: 6 },
              { month: 'Mar', texts: 2000, users: 6 }, { month: 'Apr', texts: 2100, users: 7 },
              { month: 'May', texts: 2200, users: 7 }, { month: 'Jun', texts: 2300, users: 8 },
            ]
          },
          kok: {
            totalTexts: 1500, pageMode: 1200, validatedTexts: 150, correctedTexts: 300,
            authors: 80, authorsWithoutTexts: 10, finishedBooks: 10, booksToValidate: 7,
            booksToCorrect: 5, totalBooks: 30, validatedPages: 1800, correctedPages: 2500,
            problemPages: 80, uncorrectedPages: 400, emptyPages: 100, activeUsers: 6,
            bureaucrats: 1, administrators: 1, patrollers: 1, autopatrolled: 3, bots: 1,
            recentEdits: 50, newAuthors: 1, newTexts: 2, qualityLevels: { '100%': 150, '75%': 200, '50%': 250, '25%': 300, '0%': 400 },
            growth: [
              { month: 'Jan', texts: 1000, users: 4 }, { month: 'Feb', texts: 1050, users: 4 },
              { month: 'Mar', texts: 1100, users: 5 }, { month: 'Apr', texts: 1150, users: 5 },
              { month: 'May', texts: 1200, users: 6 }, { month: 'Jun', texts: 1250, users: 6 },
            ]
          },
          mai: {
            totalTexts: 1800, pageMode: 1400, validatedTexts: 180, correctedTexts: 350,
            authors: 90, authorsWithoutTexts: 12, finishedBooks: 12, booksToValidate: 8,
            booksToCorrect: 6, totalBooks: 35, validatedPages: 2000, correctedPages: 2800,
            problemPages: 90, uncorrectedPages: 450, emptyPages: 120, activeUsers: 7,
            bureaucrats: 1, administrators: 1, patrollers: 2, autopatrolled: 4, bots: 1,
            recentEdits: 60, newAuthors: 1, newTexts: 2, qualityLevels: { '100%': 180, '75%': 220, '50%': 280, '25%': 350, '0%': 450 },
            growth: [
              { month: 'Jan', texts: 1200, users: 5 }, { month: 'Feb', texts: 1250, users: 5 },
              { month: 'Mar', texts: 1300, users: 6 }, { month: 'Apr', texts: 1350, users: 6 },
              { month: 'May', texts: 1400, users: 7 }, { month: 'Jun', texts: 1450, users: 7 },
            ]
          },
          ne: {
            totalTexts: 7000, pageMode: 6000, validatedTexts: 800, correctedTexts: 1500,
            authors: 350, authorsWithoutTexts: 40, finishedBooks: 50, booksToValidate: 30,
            booksToCorrect: 20, totalBooks: 100, validatedPages: 8000, correctedPages: 11000,
            problemPages: 300, uncorrectedPages: 1200, emptyPages: 200, activeUsers: 16,
            bureaucrats: 1, administrators: 2, patrollers: 3, autopatrolled: 7, bots: 1,
            recentEdits: 220, newAuthors: 1, newTexts: 5, qualityLevels: { '100%': 800, '75%': 1100, '50%': 1400, '25%': 1700, '0%': 2000 },
            growth: [
              { month: 'Jan', texts: 5000, users: 10 }, { month: 'Feb', texts: 5200, users: 11 },
              { month: 'Mar', texts: 5400, users: 12 }, { month: 'Apr', texts: 5600, users: 13 },
              { month: 'May', texts: 5800, users: 14 }, { month: 'Jun', texts: 6000, users: 15 },
            ]
          },
        };
        setStatsData(simulatedData);
      } catch (err) {
        setError("Failed to load statistics. Please try again later.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }, 500); // Simulate network delay
    return () => clearTimeout(fetchData);
  }, []); // Empty dependency array means this runs once on mount

  const timeframes = [
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'lastweek', label: 'Last 7 days' },
    { value: 'lastmonth', label: 'Last 30 days' },
    { value: 'lastyear', label: 'Last 365 days' },
    { value: 'alltime', label: 'All time' }
  ];

  const currentStats = statsData[selectedLanguage] || statsData.hi; // Default to Hindi if language not found or still loading

  // Refined text completion data, dynamically using qualityLevels
  const textCompletionData = currentStats && currentStats.qualityLevels ? [
    { name: '100% Validated', value: currentStats.qualityLevels['100%'], color: '#22c55e' },
    { name: '75% Corrected', value: currentStats.qualityLevels['75%'], color: '#3b82f6' },
    { name: '50% Corrected', value: currentStats.qualityLevels['50%'], color: '#f59e0b' },
    { name: '25% Corrected', value: currentStats.qualityLevels['25%'], color: '#ef4444' },
    { name: '0% Uncorrected', value: currentStats.qualityLevels['0%'], color: '#8b5cf6' }
  ] : [];

  const pageStatusData = currentStats ? [
    { name: 'Validated', value: currentStats.validatedPages, color: '#22c55e' },
    { name: 'Corrected', value: currentStats.correctedPages, color: '#3b82f6' },
    { name: 'Problem', value: currentStats.problemPages, color: '#f59e0b' },
    { name: 'Uncorrected', value: currentStats.uncorrectedPages, color: '#ef4444' },
    { name: 'Empty', value: currentStats.emptyPages, color: '#6b7280' }
  ] : [];

  const bookStatusData = currentStats ? [
    { name: 'Finished', value: currentStats.finishedBooks, color: '#22c55e' },
    { name: 'To Validate', value: currentStats.booksToValidate, color: '#3b82f6' },
    { name: 'To Correct', value: currentStats.booksToCorrect, color: '#ef4444' }
  ] : [];

  const userRolesData = currentStats ? [
    { name: 'Active Users', value: currentStats.activeUsers, color: '#3b82f6' },
    { name: 'Administrators', value: currentStats.administrators, color: '#ef4444' },
    { name: 'Patrollers', value: currentStats.patrollers, color: '#f59e0b' },
    { name: 'Auto-patrolled', value: currentStats.autopatrolled, color: '#22c55e' },
    { name: 'Bots', value: currentStats.bots, color: '#6b7280' }
  ] : [];

  const StatCard = ({ title, value, icon: Icon, color = 'blue', subtitle = '' }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value?.toLocaleString() || 'N/A'}</p>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="p-3 rounded-full" style={{ backgroundColor: color + '20' }}>
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-blue-600 text-lg font-medium">Loading Wikisource statistics...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600 text-lg font-medium">{error}</div>
      </div>
    );
  }

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Texts"
          value={currentStats.totalTexts}
          icon={FileText}
          color="#3b82f6"
          subtitle={`${((currentStats.pageMode / currentStats.totalTexts) * 100).toFixed(1)}% in page mode`}
        />
        <StatCard
          title="Total Authors"
          value={currentStats.authors}
          icon={Users}
          color="#22c55e"
          subtitle={`${currentStats.authorsWithoutTexts} without texts`}
        />
        <StatCard
          title="Total Books"
          value={currentStats.totalBooks}
          icon={BookOpen}
          color="#f59e0b"
          subtitle={`${currentStats.finishedBooks} finished`}
        />
        <StatCard
          title="Active Users"
          value={currentStats.activeUsers}
          icon={TrendingUp}
          color="#ef4444"
          subtitle="Last 30 days"
        />
      </div>

      {/* Recent Activity Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Recent Edits"
          value={currentStats.recentEdits}
          icon={MessageCircle}
          color="#6366f1"
          subtitle={`In ${selectedTimeframe}`}
        />
        <StatCard
          title="New Authors"
          value={currentStats.newAuthors}
          icon={Users}
          color="#06b6d4"
          subtitle={`In ${selectedTimeframe}`}
        />
        <StatCard
          title="New Texts Added"
          value={currentStats.newTexts}
          icon={FileText}
          color="#a855f7"
          subtitle={`In ${selectedTimeframe}`}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Text Completion Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Text Completion Status (Quality Levels)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={textCompletionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-15} textAnchor="end" height={60}/>
              <YAxis />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Bar dataKey="value">
                {textCompletionData.map((entry, index) => (
                  <Cell key={`bar-cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Page Status Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Page Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pageStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pageStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => value.toLocaleString()} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderBooks = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Finished Books"
          value={currentStats.finishedBooks}
          icon={CheckCircle}
          color="#22c55e"
          subtitle={`${((currentStats.finishedBooks / currentStats.totalBooks) * 100).toFixed(1)}% of total`}
        />
        <StatCard
          title="Books to Validate"
          value={currentStats.booksToValidate}
          icon={Clock}
          color="#3b82f6"
          subtitle="Ready for validation"
        />
        <StatCard
          title="Books to Correct"
          value={currentStats.booksToCorrect}
          icon={AlertCircle}
          color="#ef4444"
          subtitle="Need correction"
        />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Book Status Overview</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={bookStatusData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={100} />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderPages = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Validated Pages"
          value={currentStats.validatedPages}
          icon={CheckCircle}
          color="#22c55e"
          subtitle="Quality level 4"
        />
        <StatCard
          title="Corrected Pages"
          value={currentStats.correctedPages}
          icon={FileText}
          color="#3b82f6"
          subtitle="Quality level 3"
        />
        <StatCard
          title="Problem Pages"
          value={currentStats.problemPages}
          icon={AlertCircle}
          color="#f59e0b"
          subtitle="Quality level 2"
        />
        <StatCard
          title="Uncorrected"
          value={currentStats.uncorrectedPages}
          icon={Clock}
          color="#ef4444"
          subtitle="Quality level 1"
        />
        <StatCard
          title="Empty Pages"
          value={currentStats.emptyPages}
          icon={Database}
          color="#6b7280"
          subtitle="Quality level 0"
        />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Page Quality Distribution</h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={pageStatusData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Bureaucrats"
          value={currentStats.bureaucrats}
          icon={Users}
          color="#8b5cf6"
          subtitle="Highest privileges"
        />
        <StatCard
          title="Administrators"
          value={currentStats.administrators}
          icon={Users}
          color="#ef4444"
          subtitle="Site management"
        />
        <StatCard
          title="Patrollers"
          value={currentStats.patrollers}
          icon={Users}
          color="#f59e0b"
          subtitle="Content review"
        />
        <StatCard
          title="Auto-patrolled"
          value={currentStats.autopatrolled}
          icon={Users}
          color="#22c55e"
          subtitle="Trusted users"
        />
        <StatCard
          title="Bots"
          value={currentStats.bots}
          icon={Users}
          color="#6b7280"
          subtitle="Automated accounts"
        />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">User Role Distribution</h3>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={userRolesData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {userRolesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => value.toLocaleString()} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Wikisource Statistics Dashboard</h1>
          <p className="text-gray-600">Comprehensive statistics for Wikisource projects with a focus on Indian languages</p>
        </div>

        {/* Language and Timeframe Selectors */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-gray-500" />
              <label htmlFor="language-select" className="text-sm font-medium text-gray-700">Language:</label>
              <select
                id="language-select"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
              >
                <optgroup label="Indian Languages">
                  {indianLanguages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Other Languages">
                  {otherLanguages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <label htmlFor="timeframe-select" className="text-sm font-medium text-gray-700">Timeframe:</label>
              <select
                id="timeframe-select"
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {timeframes.map(time => (
                  <option key={time.value} value={time.value}>
                    {time.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Info Badge */}
            <div className="ml-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                <span className="text-sm font-medium text-blue-800">
                  {languages.find(lang => lang.code === selectedLanguage)?.flag} {' '}
                  {languages.find(lang => lang.code === selectedLanguage)?.name} Wikisource
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: TrendingUp },
                { id: 'books', label: 'Books', icon: BookOpen },
                { id: 'pages', label: 'Pages', icon: FileText },
                { id: 'users', label: 'Users', icon: Users },
                { id: 'indianInsights', label: 'Indian Language Insights', icon: IndianRupee } // New tab for Indian insights
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'books' && renderBooks()}
          {activeTab === 'pages' && renderPages()}
          {activeTab === 'users' && renderUsers()}
          {activeTab === 'indianInsights' && (
            <IndianLanguageInsights
              selectedLanguage={selectedLanguage}
              statsData={statsData}
              indianLanguages={indianLanguages}
            />
          )}
        </div>

        {/* Footer */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">External Tools & Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">wsstats.toolforge.org</h4>
              <p className="text-sm text-gray-600">General statistics tool for Wikisource projects.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">BookwormBot Reports</h4>
              <p className="text-sm text-gray-600">Daily reports on page processing by book.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Wikisource Community Portals</h4>
              <p className="text-sm text-gray-600">Discover community pages and discussions for different languages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- New Component: IndianLanguageInsights ---
const IndianLanguageInsights = ({ selectedLanguage, statsData, indianLanguages }) => {
  const StatCard = ({ title, value, icon: Icon, color = 'blue', subtitle = '' }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value?.toLocaleString() || 'N/A'}</p>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="p-3 rounded-full" style={{ backgroundColor: color + '20' }}>
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
      </div>
    </div>
  );

  // Data for comparison chart: Total Texts across Indian languages
  const totalTextsComparisonData = indianLanguages.map(lang => ({
    name: lang.name,
    value: statsData[lang.code]?.totalTexts || 0,
  })).sort((a, b) => b.value - a.value); // Sort for better visualization

  // Data for active users comparison
  const activeUsersComparisonData = indianLanguages.map(lang => ({
    name: lang.name,
    value: statsData[lang.code]?.activeUsers || 0,
  })).sort((a, b) => b.value - a.value);

  // Data for validated texts comparison
  const validatedTextsComparisonData = indianLanguages.map(lang => ({
    name: lang.name,
    value: statsData[lang.code]?.validatedTexts || 0,
  })).sort((a, b) => b.value - a.value);

  const selectedLangGrowthData = statsData[selectedLanguage]?.growth || [];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Deep Dive: Indian Language Wikisources</h2>
      <p className="text-gray-600">Explore key performance indicators and comparisons among Indian language Wikisource projects.</p>

      {/* Comparison Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Total Texts Across Indian Languages</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={totalTextsComparisonData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
              <YAxis />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Bar dataKey="value" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Active Users Across Indian Languages (Last 30 Days)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={activeUsersComparisonData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
              <YAxis />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Bar dataKey="value" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Validated Texts Across Indian Languages</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={validatedTextsComparisonData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
              <YAxis />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Bar dataKey="value" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Specific Highlights for Selected Indian Language */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Highlights for {indianLanguages.find(lang => lang.code === selectedLanguage)?.name} Wikisource</h3>
        {selectedLanguage && statsData[selectedLanguage] ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatCard
              title="Page Mode Adoption"
              value={`${((statsData[selectedLanguage].pageMode / statsData[selectedLanguage].totalTexts) * 100).toFixed(1)}%`}
              icon={GitPullRequest}
              color="#f59e0b"
              subtitle="Texts proofread via Page namespace"
            />
            <StatCard
              title="Authors without Texts"
              value={statsData[selectedLanguage].authorsWithoutTexts}
              icon={Users}
              color="#ef4444"
              subtitle="Potential new contributors to engage"
            />
            <StatCard
              title="Validation Ratio"
              value={`${((statsData[selectedLanguage].validatedTexts / statsData[selectedLanguage].totalTexts) * 100).toFixed(1)}%`}
              icon={Award}
              color="#22c55e"
              subtitle="Percentage of texts fully validated"
            />
          </div>
        ) : (
          <p className="text-gray-500">Select an Indian language to see specific highlights.</p>
        )}
      </div>

      {/* Growth Trends */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Growth Trends: Total Texts & Active Users ({indianLanguages.find(lang => lang.code === selectedLanguage)?.name})</h3>
        {selectedLangGrowthData.length > 0 ? (
          <ResponsiveContainer width="100%" height={350}>
            <LineChart
              data={selectedLangGrowthData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" label={{ value: 'Total Texts', angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: 'Active Users', angle: 90, position: 'insideRight' }} />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="texts" stroke="#8884d8" name="Total Texts" activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="users" stroke="#82ca9d" name="Active Users" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">No growth trend data available for this language.</p>
        )}
      </div>

      {/* Key Focus Areas / Challenges & Opportunities */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          Key Focus Areas for Indian Wikisources
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>**Community Building:** Many Indian languages have smaller active user bases. Strategies for recruitment and retention are crucial.</li>
          <li>**Content Digitization:** A vast amount of Indian literature is yet to be digitized. Focusing on priority works can significantly boost text counts.</li>
          <li>**Proofreading Campaigns:** Organizing sustained proofreading campaigns can help address the large volume of unvalidated and uncorrected pages.</li>
          <li>**Technical Support:** Providing technical guidance and support in local languages can help new users navigate the platform.</li>
          <li>**Collaboration with Institutions:** Partnering with libraries, universities, and cultural organizations can accelerate content contribution and validation.</li>
        </ul>
      </div>
    </div>
  );
};

export default WikisourceStatsDashboard;

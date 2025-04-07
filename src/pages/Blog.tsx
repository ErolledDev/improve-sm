import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import AdUnit from '../components/AdUnit';

const blogPosts = [
  {
    id: 'email-security-best-practices',
    title: 'Email Security Best Practices in 2025',
    excerpt: 'Learn the latest techniques and strategies to keep your email communications secure and private in 2025.',
    date: 'March 15, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    category: 'Security'
  },
  {
    id: 'disposable-email-benefits',
    title: 'Why Use Disposable Email Addresses?',
    excerpt: 'Discover how temporary email addresses can protect your privacy and keep your inbox spam-free.',
    date: 'March 14, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    category: 'Privacy'
  },
  {
    id: 'prevent-email-phishing',
    title: 'How to Identify and Prevent Email Phishing Attacks',
    excerpt: 'Stay safe online by learning how to spot and avoid sophisticated email phishing attempts.',
    date: 'March 13, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&q=80&w=1200',
    category: 'Security'
  },
  {
    id: 'email-privacy-guide',
    title: 'The Complete Guide to Email Privacy',
    excerpt: 'Everything you need to know about protecting your email privacy in the digital age.',
    date: 'March 12, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    category: 'Privacy'
  },
  {
    id: 'temporary-email-use-cases',
    title: '10 Smart Ways to Use Temporary Email Services',
    excerpt: 'Explore practical applications of disposable email addresses for better online privacy.',
    date: 'March 11, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200',
    category: 'Tips'
  }
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Email Privacy & Security Blog - SnapMails</title>
        <meta name="description" content="Learn about email privacy, security best practices, and how to protect yourself online with SnapMails' comprehensive blog articles." />
        <meta name="keywords" content="email security, privacy tips, temporary email guide, email protection, online privacy" />
        <link rel="canonical" href="https://snapmails.xyz/blog" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Email Privacy & Security Blog
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            Expert insights and guides on email security, privacy protection, and digital communication best practices.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Link to={`/blog/${blogPosts[0].id}`} className="group">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-8">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-medium mb-4">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-2">{blogPosts[0].title}</h2>
                  <p className="text-gray-200 mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit slot="1234567890" format="auto" responsive={true} />
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Ad Unit */}
        <div className="mt-12">
          <AdUnit slot="0987654321" format="auto" responsive={true} />
        </div>
      </main>
    </>
  );
}
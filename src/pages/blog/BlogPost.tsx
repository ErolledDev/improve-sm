import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import AdUnit from '../../components/AdUnit';
import { blogPosts } from './articles';

export default function BlogPost() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = blogPosts.find(post => post.id === articleId);

  if (!article) {
    navigate('/404');
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{`${article.title} - SnapMails Blog`}</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.keywords.join(', ')} />
        <link rel="canonical" href={`https://snapmails.xyz/blog/${article.id}`} />
        
        <meta property="og:title" content={`${article.title} - SnapMails Blog`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={`https://snapmails.xyz/blog/${article.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.image} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.image} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "image": article.image,
            "datePublished": article.isoDate,
            "dateModified": article.isoDate,
            "author": {
              "@type": "Organization",
              "name": "SnapMails",
              "url": "https://snapmails.xyz"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SnapMails",
              "logo": {
                "@type": "ImageObject",
                "url": "https://snapmails.xyz/icon-512x512.png"
              }
            },
            "description": article.excerpt
          })}
        </script>
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </button>

        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-[400px]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 p-8">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-medium mb-4">
                  {article.category}
                </span>
                <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
                <div className="flex items-center text-gray-300 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* First Ad Unit */}
            <div className="mb-8">
              <AdUnit slot="3456789012" format="auto" responsive={true} />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {article.content}
            </div>

            {/* Second Ad Unit */}
            <div className="mt-12">
              <AdUnit slot="5678901234" format="auto" responsive={true} />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
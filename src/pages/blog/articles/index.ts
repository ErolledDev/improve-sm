import React from 'react';
import EmailSecurityArticle from './email-security-best-practices';
import DisposableEmailArticle from './disposable-email-benefits';
import PreventPhishingArticle from './prevent-email-phishing';
import EmailPrivacyArticle from './email-privacy-guide';
import TempEmailUseCasesArticle from './temporary-email-use-cases';

export const blogPosts = [
  EmailSecurityArticle,
  DisposableEmailArticle,
  PreventPhishingArticle,
  EmailPrivacyArticle,
  TempEmailUseCasesArticle
].map(post => ({
  ...post,
  isoDate: new Date(post.date).toISOString()
}));
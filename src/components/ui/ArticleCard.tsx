import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ArticleData {
  id: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  href: string;
}

interface ArticleCardProps {
  article: ArticleData;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-subtle/50">
      <div className="relative h-64 overflow-hidden bg-surface-sand">
        <Image
          alt={article.imageAlt}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          src={article.imageSrc}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md font-epilogue text-[0.6875rem] font-bold uppercase tracking-wider text-content-primary shadow-sm">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-text font-epilogue text-[0.6875rem] font-bold uppercase tracking-wider">
            <span>{article.date}</span>
            <span className="text-border-subtle">•</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="font-jakarta text-xl text-content-primary font-bold group-hover:text-midori-green transition-colors">
            {article.title}
          </h3>
          <p className="font-jakarta text-sm text-muted-text line-clamp-2">
            {article.excerpt}
          </p>
        </div>
        <div className="pt-2">
          <Link
            href={article.href}
            className="inline-flex items-center gap-2 font-jakarta text-sm text-midori-green font-semibold group/link hover:text-midori-dark transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}

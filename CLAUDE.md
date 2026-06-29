# CLAUDE.md — andreweasyanderson.com

## Project Overview
Personal brand and authority site for Andrew "Easy" Anderson.
Stack: Static HTML/CSS/JS only. No frameworks, no build tools, no CMS.
Hosting: Cloudflare Pages — auto-deploys on push to GitHub.
Repo: github.com/GuzzaPower/andreweasyanderson.com
Reference sites for design/tone: chrismatthews.co.uk and kasimaslam.com

## Design Rules — Non-Negotiable
- Color scheme: greens and blues. Primary dark: #0B1F3A (navy). 
  Accent green: #00B96B. Text green: #005F35. Link blue: #1A5E99.
- NO italics anywhere — not in CSS, not in HTML, not in copy
- Minimum font size: 18px everywhere, no exceptions
- WCAG 2.2 AA compliant — all text must pass contrast ratios
- Fonts: Space Grotesk (headings), DM Sans (body) — load from Google Fonts
- Shared stylesheet: assets/css/style.css — used by all pages
- Responsive — mobile first
- Clean, modern, minimal — similar feel to chrismatthews.co.uk

## Site Structure
index.html — homepage
contact.html — contact page with Web3Forms form
work.html — complete portfolio of products, services, tools, and books
blog/index.html — blog listing page
blog/[slug].html — individual blog posts
privacy-policy.html
terms.html
cookie-policy.html
accessibility.html
assets/css/style.css — global stylesheet
assets/js/main.js — nav toggle, animations
assets/images/headshot.png — Andrew's headshot (use this exact file)
assets/images/headshot.webp — WebP version of headshot

## Who Andrew "Easy" Anderson Is
Andrew has been building digital systems since 1988 — nearly 40 years.
He started on CompuServe. He learned websites, SEO, AEO, AI integrations,
custom software, direct response marketing, email/SMS, video, podcasts,
and business automation himself — because he kept getting burned by vendors
who did one piece well but didn't understand how everything fits together.

What Andrew discovered: the difference between a $500K and $1M business —
or a $5M and $10M business — is whether every digital piece is designed
to work together as one system. That is what he builds.

He goes by "Easy."

## Core Positioning — Use This Everywhere
Hero line: "I build the complete digital machine."
DO NOT pigeonhole Andrew as only an AEO expert.
DO NOT lead with Nashville — he has international clients.
AEO is a credential and thought leadership angle, not his whole identity.

## Andrew's Credentials — Use These
- $2.5 billion in leads generated for clients
- Originator of the Video Sales Page (early 2000s — now a global standard)
- Patents applied for on software innovations
- Nearly 40 years in digital marketing (started 1988 on CompuServe)
- Creator of the Five Pillars of AEO framework
- Author of "ChatGPT Can't Find You" and 10 trade-specific AI guides
- Founder of iQ Marketers (15551 Old Hickory Blvd Suite A)
- Creator of iQCookie — the ONLY US-focused cookie compliance platform
- Creator of AEOWebsiteChecker.com
- Creator of iQ AI Tracker
- 4+ years active AI integration work
- Studied under: Dan Kennedy, Clayton Makepeace, David Ogilvy

## What Andrew Builds
1. Websites and web applications
2. AI integrations and business automation
3. Custom software (owns patents, built iQCookie, AEOWebsiteChecker, more)
4. Complete business automation systems — SMB through enterprise
5. Strategic marketing systems (direct response, email/SMS, video, podcasts)
6. AEO and SEO — thought leadership, framework creator, author
7. AI training — 1 person to 5,000, in-person and virtual

## Products and Properties

### iQCookie (iqcookie.com)
The ONLY US-focused cookie compliance platform on the market.
Every other competitor focuses on EU/GDPR. iQCookie is built for America.
US compliance is MORE complex than EU — 50 states, different rules, 
different penalties (CCPA/CPRA, VCDPA, CPA, CTDPA, UCPA, TDPSA).
Already deployed on 40+ sites. Under 20kb. WCAG 2.1 compliant.
Enterprise dashboard manages hundreds of domains from one place.
Auto-updates as new US state laws take effect.

### AEOWebsiteChecker.com (aeowebsitechecker.com)
Free AEO scoring tool. Enter any URL, get a Five Pillars score instantly.
The only scoring tool built on the Five Pillars of AEO framework.

### iQ AI Tracker
WordPress plugin. Shows exactly which AI bots are visiting your site
and which pages they crawl — so you can build your AI search presence
with real data.

### iQ AI Reviews (iqaireviews.com)
Review automation system. Generates dozens of authentic 5-star reviews
per month. Automates request flows, filters for happy customers.

### WebP For AEO (webpforaeo.com)
Free tool. Converts images to WebP format for faster load times,
better AEO and SEO performance.

### Google Review Link Generator
Free tool. Makes it one-click for customers to leave a Google review.

### iQ Marketers (iqmarketers.com)
The full-service agency.
Services: Website builds, AI integration and training, AEO and SEO,
Local Schema AI, Custom Software Builds, Digital Street with AI program,
ADA/WCAG compliance, Podcasts.
Phone: (615) 628-7386

## Books

### ChatGPT Can't Find You — Solved! (on Amazon)
The AEO framework book. The 5-step system to get cited by ChatGPT,
Gemini, and Perplexity. Amazon link: https://amzn.to/4clqJRG

### Main Street AI
Practical AI guide for local business owners.
Link: https://iqmarketers.com/sales/iq-main-street-ai/

### Trade-Specific AI Guides (10 total, 6 currently listed publicly)
- Apartment Managers
- Car Dealerships
- Roofing Companies
- Chambers of Commerce
- FBOs (Fixed Base Operators)
- Brick and Mortar Businesses
(4 additional titles to be added)
All available at: https://iqmarketers.com/ai-training-for-business/

## All Pages Must Include
- Skip link for keyboard accessibility
- Proper heading hierarchy (one H1 per page)
- JSON-LD schema markup (Person on homepage, BlogPosting on blog posts,
  FAQPage where FAQ content exists)
- Meta title and description tags
- Canonical URL tag
- Open Graph tags
- Alt text on all images
- Footer with nav links and legal page links
- Copyright year auto-updated via JavaScript

## Contact Form
Use Web3Forms (web3forms.com) for the contact page form.
Handle submission with fetch API in assets/js/main.js.
Show success/error message without page reload.

## Blog Posts Must Include
- JSON-LD BlogPosting schema
- JSON-LD FAQPage schema where FAQ content exists
- Author: Andrew "Easy" Anderson
- Date published and modified

## Footer Links (Every Page)
Navigation: Home, Work, Blog, Contact
Legal: Privacy Policy, Terms of Use, Cookie Policy, Accessibility
Properties: AEOWebsiteChecker.com, iQCookie.com, iQ Marketers
Copyright: © [current year] Andrew Anderson / iQ Marketers. 
All rights reserved.
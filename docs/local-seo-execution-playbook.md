# Artillery Local SEO Execution Playbook

## 1. Domain Cutover
- Buy the final custom domain and connect it to Vercel.
- Set the final domain as primary and permanently redirect the Vercel subdomain.
- Update `lib/site.ts` so the website, sitemap, canonicals, and Open Graph URLs all point to the final domain.
- Add the domain to Google Search Console as a Domain property.
- Submit `https://YOURDOMAIN/sitemap.xml` in Search Console.
- Request indexing for the homepage, contact page, services page, service area page, each service page, each area page, and each nested service-area page.

## 2. Google Business Profile
- Treat the business as a service-area business unless the Chester location is staffed and receives customers during listed hours.
- Make the profile match the website exactly:
  - Business name
  - Primary phone
  - Email
  - Website
  - Hours
  - Service area
- Add the full services list that matches the website:
  - Office cleaning
  - School cleaning
  - Industrial cleaning
  - Post-construction cleaning
- Upload real photos for:
  - Team at work
  - Equipment
  - Commercial spaces
  - Exterior/business identity if available
- Publish one GBP update per week with one real image and one service-focused message.

## 3. Bing Places and Apple Business Connect
- Claim Bing Places and import from Google Business Profile after the final domain is live.
- Complete Bing details:
  - hours
  - services
  - contact methods
  - photos
- Claim Apple Business Connect and complete:
  - business name
  - hours
  - contact
  - website
  - cover photo
  - gallery

## 4. Review System
- Generate the Google review link from the Business Profile dashboard.
- Send the review request only to real customers or valid contacts after completed work.
- Ask for short, honest reviews mentioning:
  - service type
  - city / area
  - reliability
  - communication
- Suggested short review request message:

```text
Hi, if you were satisfied with the cleaning work, could you please leave a short Google review for Artillery Cleaning Services? It helps our business a lot. Thank you.
```

## 5. Weekly Operating Rhythm
- Monday:
  - review website form submissions
  - check GBP messages and calls
  - post one GBP update if none is live
- Wednesday:
  - add fresh photos to GBP or Apple/Bing if available
  - verify all services and hours still match the site
- Friday:
  - review Search Console indexing status
  - check whether all core URLs are indexed
  - request indexing only for important updated pages

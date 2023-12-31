# Setup Instructions

`npx create-next-app waywize` initialized Next.js files.

`npm run dev` runs local development server (must be run from the `IS601-final-project\waywize` directory).

`npm i @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion` installs Chakra UI (must be run from the `IS601-final-project\waywize` directory). From there, import ChakraProvider and wrap in root app container as described [here](https://chakra-ui.com/getting-started/nextjs-guide).

`npm install @chakra-ui/icons` installs Chakra UI icons (must be run from the `IS601-final-project\waywize` directory).

`npm init playwright@latest` installs Playwright (must be run from the `IS601-final-project\waywize` directory). The following options were selected:

* Do you want to use TypeScript or JavaScript? · **JavaScript**
* Where to put your end-to-end tests? · **tests**
* Add a GitHub Actions workflow? (y/N) · **false**
* Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · **true**

`npx playwright test` tests Playwright install (must be run from the `IS601-final-project\waywize` directory). All 6 tests should pass.

`npm install client-only` installs Client Only (must be run from the `IS601-final-project\waywize` directory).

`npm install remark remark-html react-markdown` installs libraries for parsing and rendering content from Markdown files onto HTML pages (must be run from the `IS601-final-project\waywize` directory).

`npm install react-icons --save` installs React icons (must be run from the `IS601-final-project\waywize` directory).

# Vercel Deployment Instructions

Deploy `is601-final-project` to Vercel from GitHub, setting `Next.js` as the Framework and `waywize` as the root directory.

[Click here](https://is-601-final-project.vercel.app/) for production deployment in Vercel.

# Google Analytics Setup

## Attempt 1

Google tag is not detected on the [Vercel-hosted website](https://is-601-final-project.vercel.app/).

![image](/images/GA-Test-1.png)

Noted that the tag number prop was incorrectly entered on the root app - this is likely the root cause.

## Attempt 2

Google tag is successfully detected on the [Vercel-hosted website](https://is-601-final-project.vercel.app/) after correcting the tag number prop.

![image](/images/GA-Test-2.png)

# Lighthouse Testing

## Test 1 - 12/13/2023 ~ 6:00pm (Development)

![image](/images/Lighthouse-Test-1A.png)
![image](/images/Lighthouse-Test-1B.png)
![image](/images/Lighthouse-Test-1C.png)

* **Performance**
    * All pages require major improvement
* **Accessibility**
    * All pages are acceptable
* **Best Practices**
    * Home and about pages could benefit from minor improvement
    * Privacy policy page is acceptable
* **SEO**
    * Home and about pages could benefit from minor improvement
    * Privacy policy page is acceptable

## Note on Performance Metrics

Noted after some additional research on the subject that it's not uncommon, when running Next.js apps in development mode, to experience significant reductions in performance.

This is potentially further evidenced by the fact that even very simple pages (a single word rendered on an empty page) produces Lighthouse performance scores < 60.

The changes applied thus far (as of 12/13/2023 ~ 7:15pm) will be deployed to Production and performance will be tested from the Vercel-hosted app.

Another issue will be opened to capture the results of that test as well as any needed follow-ups.

## Test 2 - 12/13/2023 ~ 7:30pm (Production / Vercel)

As anticipated, performance was greatly improved when running Lighthouse tests from the Vercel-hosted Production environment.

![image](/images/Lighthouse-Test-2A.png)
![image](/images/Lighthouse-Test-2B.png)
![image](/images/Lighthouse-Test-2C.png)

## Test 3 - 12/14/2023 ~ 12:20pm (Production / Vercel - Mobile)

![image](/images/Lighthouse-Test-3A.png)
![image](/images/Lighthouse-Test-3B.png)
![image](/images/Lighthouse-Test-3C.png)

* **Performance**
    * Home and about pages require major improvement
    * Privacy policy page is acceptable

Home and about pages both showed poor performance on mobile, while privacy policy page showed high performance. Since the privacy policy page has no images, upcoming improvements will operate on an initial assumption that images are the primary source of performance decline.

## Test 4 - 12/14/2023 ~ 3:30pm (Production / Vercel - Mobile)

![image](/images/Lighthouse-Test-4A.png)
![image](/images/Lighthouse-Test-4B.png)
![image](/images/Lighthouse-Test-4C.png)

* **Performance**
    * Home and about pages still require major improvement
    * Privacy policy page is acceptable

Home and about pages both showed improved performance on mobile, though the Lighthouse score is still below the target threshold of 90. Upcoming improvements will address the recommendation to avoid large layout shifts.

## Test 5 - 12/15/2023 ~ 5:05pm (Production / Vercel - Mobile)

![image](/images/Lighthouse-Test-5A.png)
![image](/images/Lighthouse-Test-5B.png)
![image](/images/Lighthouse-Test-5C.png)

* **Performance**
    * All pages are acceptable

Reducing layout shifting by decreasing sizes of various page design elements (containers, images, text, margins/padding, etc.) significantly improved performance on mobile versions of the home and about pages.

# Note About Mailchimp Playwright Tests

To avoid spam, the "valid" test email used for the first test in mailchimp.spec.js is fictional. To properly run this test, you need to temporarily update the validEmail const to a real email address.

Note that too many signup attempts using the same email address may cause Mailchimp to block that address from future attempts, which can also cause the automated test to fail.
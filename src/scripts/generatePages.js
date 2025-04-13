import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const outputDir = join(process.cwd(), "src/content/pages");

if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

const firstPagePath = join(outputDir, "page-1.json");

if (existsSync(firstPagePath)) {
  console.log("Pages already exist");
  process.exit(0);
}

const baseData = {
    metaTitle: "Natural Recipe - Page ",
    advertisementText: "Advertisement",
    heading: "Try This Easy Evening Trick for Prostate Comfort",
    ctaText: "Click Here to Watch The Video",
    ctaUrl: "https://fun.pulseytfun.com/preclick?cmpid=67f7c3d6b760c2e063d74673&utm_campaign=&sub2=&sub3=&sub4=281655653257607&sub5=745273520608&sub6=281497399484329&sub7=c&sub8=&sub9=&sub10=&utm_source=Google&wbraid=&gbraid=&utm_medium=&utm_content=&ref_id=",
    videoImageSrc: "/presellimage.gif",
    paragraphs: [
        `If you're over 45, you might have noticed some changes in how you feel
          as you age. For many men, the prostate naturally grows over
          time—starting about the size of a walnut in your 20s and potentially
          increasing as the years go by.`,
        `This can sometimes lead to discomfort, like that frequent “need to go”
          feeling or occasional tiredness, which might affect your daily life.`,
        `Here's the good news! Experts have explored a simple, 21-second
          evening routine inspired by Japanese traditions that may help support
          prostate comfort and overall wellness.`,
        `Even better? It's something you can try at home using common, natural
          ingredients you might already have on hand.`,
        `If you or someone you know is curious about gentle ways to care for
          prostate health, click below to watch a short, free video featuring
          Dr. Collins, who shares insights on this easy approach.`,
    ],
    footerParagraphs: [
        `Copyright 2025 by getflowempower.com. All rights reserved.`,
        `This site is not a part of the YouTube website or YouTube Inc.
          Additionally, this site is NOT endorsed by YouTube in any way. YOUTUBE
          is a trademark of YOUTUBE, Inc.`,
        `FDA Compliance:`,
        `The information on this website has not been evaluated by the Food &
          Drug Administration or any other medical body. We do not aim to
          diagnose, treat, cure or prevent any illness or disease. Information
          is shared for educational purposes only. You should always consult
          your doctor before acting on any content on this website, especially
          if you are pregnant, nursing, taking medication or have a medical
          condition.`,
        `Results May Vary: The weight loss results testimonials are in no way a
          guarantee of results. Individual weight loss results, including amount
          and time, will vary. Whether genetic or environmental, it should be
          noted that food intake, rates of metabolism and levels of exercise and
          physical exertion vary from person to person. This means weight loss
          results will also vary from person to person.`,
        `Some names and personal identifying information on this site have been
          changed to protect the privacy of individuals. No individual result
          should be seen as typical.`,
        `Marketing Disclosure: This website is a marketplace. As such, you
          should know that the owner has a monetary connection to the product
          and services advertised on the site. The owner receives payment
          whenever a qualified lead is referred, but that is the extent of it.`,
        `Advertising Disclosure: This website and the products & services
          referred to on the site are advertising marketplaces. This website is
          an advertisement and not a news publication. Any photographs of
          persons used on this site are models. The owner of this site and of
          the products and services referred to on this site only provides a
          service where consumers can obtain and compare.`,
    ],
    footerLinks: [
        {
            label: "Shipping",
            href: "https://getflowempower.com/shipping?cmpid=67f7c3d6b760c2e063d74673&utm_campaign=&sub2=&sub3=&sub4=281655653257607&sub5=745273520608&sub6=281497399484329&sub7=c&sub8=&sub9=&sub10=&utm_source=Google&wbraid=&gbraid=&utm_medium=&utm_content=&ref_id=",
        },
        {
            label: "Contact",
            href: "https://getflowempower.com/contact?cmpid=67f7c3d6b760c2e063d74673&utm_campaign=&sub2=&sub3=&sub4=281655653257607&sub5=745273520608&sub6=281497399484329&sub7=c&sub8=&sub9=&sub10=&utm_source=Google&wbraid=&gbraid=&utm_medium=&utm_content=&ref_id=",
        },
        {
            label: "Privacy Policy",
            href: "https://getflowempower.com/privacy-policy?cmpid=67f7c3d6b760c2e063d74673&utm_campaign=&sub2=&sub3=&sub4=281655653257607&sub5=745273520608&sub6=281497399484329&sub7=c&sub8=&sub9=&sub10=&utm_source=Google&wbraid=&gbraid=&utm_medium=&utm_content=&ref_id=",
        },
        {
            label: "Terms Of Service",
            href: "https://getflowempower.com/terms-of-service?cmpid=67f7c3d6b760c2e063d74673&utm_campaign=&sub2=&sub3=&sub4=281655653257607&sub5=745273520608&sub6=281497399484329&sub7=c&sub8=&sub9=&sub10=&utm_source=Google&wbraid=&gbraid=&utm_medium=&utm_content=&ref_id=",
        },
    ],
};

for (let i = 1; i <= 1000; i++) {
    const slug = `page-${i}`;
    const pageData = {
        ...baseData,
        slug,
        metaTitle: `${baseData.metaTitle}${slug}`,
    };

    const filePath = join(outputDir, `${slug}.json`);
    writeFileSync(filePath, JSON.stringify(pageData, null, 2), "utf-8");
}

console.log("✅ 1000 JSON pages generated in src/content/pages/");

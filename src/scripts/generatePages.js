import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const template1Dir = join(process.cwd(), "content/pages/template1");
const template2Dir = join(process.cwd(), "content/pages/template2");

[template1Dir, template2Dir].forEach((dir) => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
});

const firstPagePath1 = join(template1Dir, "page-1.json");

if (!existsSync(firstPagePath1)) {
  const baseData = {
    metaTitle: "Natural Recipe - Page ",
    advertisementText: "Advertisement",
    heading: "Try This Easy Evening Trick for Prostate Comfort",
    ctaText: "Click Here to Watch The Video",
    ctaUrl:
      "https://fun.pulseytfun.com/preclick?cmpid=67f7c3d6b760c2e063d74673&utm_campaign=&sub2=&sub3=&sub4=281655653257607&sub5=745273520608&sub6=281497399484329&sub7=c&sub8=&sub9=&sub10=&utm_source=Google&wbraid=&gbraid=&utm_medium=&utm_content=&ref_id=",
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
    const filePath = join(template1Dir, `${slug}.json`);
    const pageData = {
      ...baseData,
      slug,
      metaTitle: `${baseData.metaTitle}${slug}`,
    };
    writeFileSync(filePath, JSON.stringify(pageData, null, 2), "utf-8");
  }
  console.log("1000 JSON pages generated in content/pages/template1");
}

const firstPagePath2 = join(template2Dir, "page-1.json");

if (!existsSync(firstPagePath2)) {
  const baseData2 = {
    metaTitle: "Glucose - Page ",
    title: `This "Diabetic Parasite" is causing deadly glucose spikes in millions of Americans! (See the #1 way to fight it now)`,
    referencesImageSrc: "/refs.webp",
    referencesLeft: [
      "Vitamin D and type 2 diabetes",
      "Vitamin D and Diabetic Kidney Disease",
      "Vitamins and type 2 diabetes mellitus",
      "Appropriate and inappropriate vitamin supplementation in children",
      "Beneficial role of vitamin K supplementation on insulin sensitivity, glucose metabolism, and the reduced risk of type 2 diabetes: A review",
      "Meta-analysis: Vitamin D Therapy Reduced Type 2 Diabetes",
      "Citicoline and Vitamin B12 Eye Drops in Type 1 Diabetes: Results of a 36-Month Pilot Study Evaluating Macular Electrophysiological Changes",
      "Vitamin C supplementation for diabetes management: A comprehensive narrative review",
      "Role of Vitamin C in Enhancing Fat Reduction and Metabolic Health: Insights from Overweight Adults.",
      "Vitamin C and the management of diabetic foot ulcers: a literature review",
      "Summary for Patients: Vitamin D and Risk for Type 2 Diabetes in People With Prediabetes.",
      "Acceptability, Safety, and Efficacy of Oral Administration of Extracts of Black or Red Maca (Lepidium Meyenii) in Adult Human Subjects: A Randomized, Double-blind, Placebo-controlled Study.",
      "Preventing Type 2 Diabetes With Vitamin D: Therapy Versus Supplementation",
    ],
    referencesRight: [
      "Vitamin D and Beta Cells in Type 1 Diabetes: A Systematic Review",
      "Vitamin D and new insights into pathophysiology of type 2 diabetes",
      "Vitamin D and risk of type 2 diabetes",
      "Vitamin D and diabetes mellitus: an update 2013",
      "The Management of Diabetes Mellitus Using Medicinal Plants and Vitamins",
      "Oxidative stress, type 2 diabetes and vitamin D: past, present and future",
      "Water Soluble Vitamins and their Role in Diabetes and its Complications",
      "Vitamin D and adrenal gland: Myth or reality? A systematic review",
      "Effects of B Vitamins on Metabolism and Weight Management in Overweight Individuals: A Meta-analysis Review.",
      "Pharmacokinetics and the Effect of Capsaicin in Capsicum Frutescens on Decreasing Plasma Glucose and Promoting Weight Loss.",
      "Effect of 2-Month Controlled Green Tea Intervention on Lipoprotein Cholesterol, Glucose, and Hormone Levels in Overweight Postmenopausal Women.",
      "Vitamin D and diabetes",
      "Vitamin D effects and endocrine diseases",
    ],
    footerLinks: [
      "Privacy",
      "Terms and Conditions",
      "Disclaimer",
      "References",
      "Returns",
      "Refunds",
      "Contact",
      "Shipping Policy",
    ],
    footerNotice1:
      "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.",
    footerNotice2:
      "The content of this site is for informational purposes only, and is not intended to replace professional medical advice, diagnosis or treatment. Always seek the advice of your doctor or other qualified health care professional about a medical condition, a suspected medical condition, and before starting a diet, exercise, or supplementation program or take or stop a medication.",
  };

  for (let i = 1; i <= 1000; i++) {
    const slug = `page-${i}`;
    const filePath = join(template2Dir, `${slug}.json`);
    const pageData = {
      ...baseData2,
      slug,
      metaTitle: `${baseData2.metaTitle}${slug}`,
    };
    writeFileSync(filePath, JSON.stringify(pageData, null, 2), "utf-8");
  }

  console.log("1000 JSON pages generated in content/pages/template2");
}

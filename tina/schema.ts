import type { Collection } from "tinacms";

const template1: Collection = {
  name: "template1",
  label: "Template Page 1",
  path: "content/pages/template1",
  format: "json",
  fields: [
    {
      type: "string",
      name: "metaTitle",
      label: "Meta Title",
    },
    {
      type: "string",
      name: "advertisementText",
      label: "Advertisement Text",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "ctaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "ctaUrl",
      label: "Call to Action URL",
    },
    {
      type: "string",
      name: "videoImageSrc",
      label: "Video Image Source (URL or Path)",
    },
    {
      type: "string",
      name: "paragraphs",
      label: "Paragraphs",
      list: true,
    },
    {
      type: "string",
      name: "footerParagraphs",
      label: "Footer Paragraphs",
      list: true,
    },
    {
      type: "object",
      name: "footerLinks",
      label: "Footer Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
        },
        {
          type: "string",
          name: "href",
          label: "URL",
        },
      ],
    },
  ],
};

const template2: Collection = {
  name: "template2",
  label: "Template Page 2",
  path: "content/pages/template2",
  format: "json",
  fields: [
    {
      type: "string",
      name: "metaTitle",
      label: "Meta Title",
    },
    {
      type: "string",
      name: "title",
      label: "Banner Title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "referencesImageSrc",
      label: "References Image Source (URL or Path)",
    },
    {
      type: "string",
      name: "referencesLeft",
      label: "Scientific References (Left Column)",
      list: true,
    },
    {
      type: "string",
      name: "referencesRight",
      label: "Scientific References (Right Column)",
      list: true,
    },
    {
      type: "string",
      name: "footerLinks",
      label: "Footer Links",
      list: true,
    },
    {
      type: "string",
      name: "footerNotice1",
      label: "Footer Notice 1",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "footerNotice2",
      label: "Footer Notice 2",
      ui: {
        component: "textarea",
      },
    },
  ],
};

export const schemaCollections: Collection[] = [template1, template2];

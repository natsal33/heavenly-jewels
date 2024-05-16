import React from "react";
import { Typography } from "@material-tailwind/react";


const faqs = [
  {
      "title": "1. What makes Feather & Fern Paper Co. unique?",
      "desc": "At Feather & Fern, I specialize in crafting exquisite hand-written day-of paper that add a touch of elegance and personalization to your special day. Each invitation is individually created to be it's own work of art for your event!"
  },
  {
      "title": "2. How do I inquire about paper for an event/wedding?",
      "desc": "Navigate to the Contact Form, fill out the form with your event/wedding information and I'll get back to you to discuss some ideas and information on my services."
  },
  {
      "title": "3. Can I customize the design and wording of my invitations?",
      "desc": "Absolutely! We understand the importance of reflecting your unique style and vision. Our team will work closely with you to select the perfect calligraphy style and tailor the wording to suit your preferences, ensuring your invitations are a true reflection of your love story."
  },
  {
      "title": "4. What is the turnaround time for my order?",
      "desc": "Turnaround time depends on the complexity of the design and the quantity of invitations. Generally, we recommend placing your order at least 8-12 weeks before your event. Rush orders are available for an additional fee."
  },
  {
      "title": "5. Can I request a sample before placing a full order?",
      "desc": "Certainly! We offer the option to order a sample invitation so you can experience the quality of our work before making a decision. Samples can be ordered directly from our website."
  },
  {
      "title": "6. Do you offer other calligraphy services for weddings?",
      "desc": "Absolutely! In addition to invitations, we offer a range of calligraphy services including envelope addressing, place cards, seating charts, and more. These services can be tailored to complement your invitation design."
  },
  {
      "title": "7. What materials do you use for your invitations?",
      "desc": "We use high-quality paper and inks to ensure that your invitations are both visually stunning and long-lasting. Our calligraphers take great care in selecting materials that enhance the overall aesthetic."
  },
  {
      "title": "8. Can I incorporate specific colors into the design?",
      "desc": "Of course! We offer a variety of ink colors to choose from, allowing you to coordinate your invitations with your wedding color scheme. If you have a specific color in mind, let us know and we'll do our best to match it."
  },
  {
      "title": "9. What if there's an error in the wording?",
      "desc": "Our meticulous proofreading process minimizes the chances of errors. However, in the rare event of a mistake, we take full responsibility and will rectify the situation promptly at no additional cost."
  },
  {
      "title": "10. How do I make payments?",
      "desc": "Once your order details are confirmed, we'll provide you with an invoice. Payments can be made securely through our online payment portal using credit/debit cards or other accepted payment methods."
  }
];


function FAQ() {
  return (
    <section className="px-8 py-20">
    <div className="container mx-auto">
      <div className="mb-14 text-center ">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 text-4xl !leading-snug lg:text-[40px]"
        >
          Frequently asked questions
        </Typography>
        <Typography
          className="mx-auto font-normal text-[18px] !text-gray-500 lg:max-w-3xl"
        >
          A lot of people don&apos;t appreciate the moment until it&apos;s
          passed. I&apos;m not trying my hardest, and I&apos;m not trying to
          do.
        </Typography>
      </div>
      <div className="max-w-3xl mx-auto grid gap-10">
        {faqs.map(({ title, desc }) => (
          <div key={title}>
            <Typography color="blue-gray" className="pb-6 text-[20px] font-bold">
              {title}
            </Typography>
            <div className="border-t border-gray-200 pt-4">
              <Typography className="font-normal !text-gray-500">
                {desc}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default FAQ;

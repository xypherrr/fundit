import React, { useState } from "react";
import { styled } from "styled-components";
import Container from "../container/container";

const Wrapper = styled.div`
  & > div:first-child {
    padding: 100px 56px;
  }
  .faqs {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    padding: 15px;
  }

  .faqs .faq {
    margin: 24px;
    padding: 16px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }

  .faqs .faq .faq-question {
    position: relative;
    padding-right: 80px;
    transition: all 0.4s ease;
    color: #4d6882;
  }

  .faqs .faq .faq-question::after {
    content: "+";
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    transition: all 0.2s ease;
  }

  .faqs .faq .faq-answer {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .faqs .faq.open .faq-question {
    margin-bottom: 15px;
  }

  .faqs .faq.open .faq-question::after {
    content: "-";
  }

  .faqs .faq.open .faq-answer {
    max-height: 1000px;
    opacity: 1;
  }

  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 12px;
    }
    .faqs {
      padding: 0;
    }
    .faqs .faq {
      margin: 0 0 24px 0;
    }
    .faqs .faq:last-child {
      margin: 0;
    }
  }
`;

const faqAccordianQuestions = [
  {
    question: "How do I fundraise?",
    answer: (
      <p>
        By submitting the application and following documentation - Personal and
        Company identification document - Business plan - Audited financials or
        Audited Feasibility study
      </p>
    ),
    open: false,
  },
  {
    question: "How do I invest?",
    answer: (
      <p>
        (a) Sophisticated investors: No restrictions on investment amount; (b)
        Angel investors: A maximum of RO 100,000 (One Hundred Thousand Omani
        Rial) within a twelve (12) month period; (c) Retail investors: A maximum
        of RO 3,000 (Three Thousand Omani Rial) per applicant for funding with a
        total amount of not more than RO 20,000 (Twenty Thousand Omani Rial)
        within a twelve (12) month period.
      </p>
    ),
    open: false,
  },
  {
    question: "How is my personal information protected?",
    answer: (
      <p>
        FundT, in its capacity as Controller/Processor of personal data,
        processes personal data in a manner that ensures appropriate level of
        security, including protection against unauthorized or illegal
        processing and against accidental loss, destruction or damage, while
        applying suitable technical and / or organizational measures in
        compliance
      </p>
    ),
    open: false,
  },
  {
    question: "What type of projects can you do?",
    answer: (
      <p>
        By submitting the application and following documentation - Personal and
        Company identification document - Business plan - Audited financials or
        Audited Feasibility study
      </p>
    ),
    open: false,
  },
  {
    question:
      "Anybody over 18 years old can invest with a minimum amount of $500 regardless of their accreditation status.",
    answer: (
      <p>
        By submitting the application and following documentation - Personal and
        Company identification document - Business plan - Audited financials or
        Audited Feasibility study
      </p>
    ),
    open: false,
  },
  {
    question: "Who can fundraise?",
    answer: (
      <p>
        Any commercial companies and enterprises, not to individuals. with
        following exceptions (a) Public joint stock companies; (b) Companies and
        enterprises with no specific business plans; (c) Non for profit
        societies or organizations.
      </p>
    ),
    open: false,
  },
  {
    question: "Who can invest?",
    answer: <p>Sophisticated Investor Angel Investor Retail Investor</p>,
    open: false,
  },
];

const FAQSection = () => {
  const [faqs, setFaqs] = useState(faqAccordianQuestions);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <Wrapper className="dF jcSB">
      <Container className="dF fdC">
        <div className="dFA fdC mb64 xmb32">
          <p className="fs80 fwB mb40 xmb32">Frequently Asked Questions</p>
          <p className="cBlue fs28 taC">
            More information about the platform, investing, fundraising,
            transactions, risks, and rewards.
          </p>
        </div>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <div
              className={"faq " + (faq.open ? "open" : "")}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question fwB fs32">{faq.question}</div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
            //   <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

export default FAQSection;

import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Conditions
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Welcome to our eLearning platform! Before you proceed, please take a moment to review and understand our Terms and Conditions.
          </li>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            By using our platform, you agree to abide by the following terms and conditions:
          </li>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem Ipsum: You understand and acknowledge that the text provided here is a placeholder and not the actual terms and conditions. The real terms and conditions can be found on our website.
          </li>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Usage Restrictions: You are not permitted to misuse or abuse our platform in any way. This includes but is not limited to attempting to gain unauthorized access, distributing malicious software, or engaging in any harmful activities.
          </li>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Privacy Policy: Your privacy is important to us. We collect and handle your personal information in accordance with our Privacy Policy, which you can find on our website.
          </li>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Content Ownership: All the content on our platform, including text, images, and videos, is either owned by us or used with the appropriate permissions. You may not reproduce, distribute, or modify any content without our explicit consent.
          </li>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            User Conduct: You agree to conduct yourself in a respectful and ethical manner while using our platform. Harassment, discrimination, and any form of inappropriate behavior will not be tolerated.
          </li>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Account Security: You are responsible for maintaining the security of your account login information. Any unauthorized access or use of your account should be reported immediately.
          </li>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Termination: We reserve the right to terminate your access to our platform at our discretion if you violate these terms and conditions.
          </li>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Changes to Terms: These terms and conditions may be updated from time to time. It is your responsibility to review them periodically for any changes.
          </li>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Please note that this is a summary of our terms and conditions, and the complete and legally binding version can be found on our website. By continuing to use our eLearning platform, you signify your agreement to these terms and conditions. If you do not agree with any part of these terms, please refrain from using our platform. Thank you for choosing us for your eLearning needs!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policy;

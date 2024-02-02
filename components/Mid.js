import React from "react";
import MediaCard from "./Card";

const Mid = () => {
  return (
    <div className="dark:bg-gray-900">


      <section className="text-gray-300 body-font ">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full  flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-blue-300">
            <a className="text-sm">find us on</a> <br/><b>Amazon Alexa</b>
            </h1>


        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center space-y-4">

          <MediaCard 
            title="Amazon Alexa Skill" 
            img="https://ds6yc8t7pnx74.cloudfront.net/en-US/alexa/branding/alexa-guidelines/communication-guidelines/brand-voice.thumb.800.480.png?ck=1697740753"
            desc="An Amazon Alexa skill is a voice-driven capability or application that extends the functionality of Amazon's virtual assistant, Alexa. Skills enable Alexa to perform a wide range of tasks and interact with various services, devices, and platforms. Users can activate and use skills by saying specific commands or phrases to their Alexa-enabled devices, such as Amazon Echo smart speakers."
            link1="https://www.amazon.com/Alexa-App/b?ie=UTF8&node=18354642011"
            link2="https://alexa-skills.amazon.com/apis/custom/skills/amzn1.ask.skill.b53f78a4-6494-414d-b2b9-b2b991ca4223/launch"
            btn1="Install"
            btn2="Launch"
            />
            <MediaCard 
            title="Amazon Alexa Skill Store" 
            img="https://i.postimg.cc/9Q40N9dy/amazon-jpg.webp"
            desc="Users can discover and enable Alexa skills through the Alexa Skills Store on the Amazon website or directly through the Alexa app on their devices. This is essentially a marketplace where users can find, browse, and enable various skills developed by third-party developers. Developers submit their skills to the Alexa Skills Store, and users can explore the available skills based on categories, popularity, or search terms."
            link1="https://www.amazon.com/Alexa-App/b?ie=UTF8&node=18354642011"
            link2="https://www.amazon.com/dp/B0CRG72ZTY/"
            btn1="Install"
            btn2="Amazon Store"
            />
          </div>
        </div>
            <div className="flex items-center">


            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mid;

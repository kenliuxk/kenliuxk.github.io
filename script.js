const translations = {
  en: {
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    eyebrow: "AWS S3 software development engineer | Seattle",
    heroTitle: "Hi, I'm Ken Liu.",
    heroSubtitle:
      "I am a software development engineer with 4+ years of experience building distributed systems and data infrastructure at AWS S3, with ongoing interests in AI applications and creative tools.",
    resumeButton: "View Resume",
    locationLabel: "Location",
    focusLabel: "Core Focus",
    focusValue: "Distributed systems, cloud infrastructure, backend APIs, AI applications",
    statusLabel: "Status",
    statusValue: "Open to software engineering opportunities",
    aboutKicker: "About",
    aboutTitle: "Reliable cloud infrastructure engineering with a creator's eye.",
    aboutBody:
      "I have built large-scale distributed systems, data lifecycle management services, and high-throughput backend APIs at AWS S3, with a focus on system reliability, performance optimization, and resource efficiency. Beyond infrastructure engineering, I explore AI applications, software products, and creative tools that turn complex ideas into clear, usable, and maintainable products.",
    experienceKicker: "Experience",
    experienceTitle: "Building large-scale storage and data infrastructure at AWS S3.",
    awsRole: "Software Development Engineer",
    awsCompany: "Amazon Web Services",
    awsDate: "Feb 2022 - Present",
    awsPoint1:
      "Designed and built a distributed data lifecycle management service for expired checksum-validation data copies, improving storage efficiency.",
    awsPoint2:
      "Built automated orphaned data detection and deletion systems, contributing more than $49M in CapEx savings.",
    awsPoint3:
      "Re-architected request message processing with cloud database integration, reducing CPU usage and processing time by around 90%.",
    awsPoint4:
      "Improved memory efficiency and Spark/EMR data processing workflows, reducing runtime and annual infrastructure cost.",
    researchRole: "Research Assistant",
    researchCompany: "University of Delaware",
    researchDate: "Feb 2019 - Feb 2022",
    researchPoint1:
      "Developed image reconstruction and inverse-problem algorithms using MATLAB and Python.",
    researchPoint2:
      "Applied machine learning methods such as SVM and perceptron models to classify experimental image patterns.",
    skillsKicker: "Skills",
    skillsTitle: "Backend systems, data infrastructure, and cloud platforms.",
    skillLang: "Languages",
    skillLangList: "Java, Kotlin, Python, C/C++, Scala, TypeScript, Ruby",
    skillBackend: "Backend & Systems",
    skillBackendList: "Distributed systems, REST APIs, microservices, CI/CD, asynchronous processing",
    skillData: "Data & Infrastructure",
    skillDataList: "Data storage systems, Apache Spark, large-scale data processing",
    skillCloud: "Cloud Platform",
    skillCloudList: "AWS: CloudFormation, DynamoDB, EBS, EC2, ECS, EMR, Lambda, S3, SQS",
    skillSpecialties: "Specialties",
    skillSpecialtiesList: "System design, performance optimization, scalability, reliability engineering",
    projectsKicker: "Selected Work",
    projectsTitle: "Next, shape projects into concrete case studies.",
    projectOneType: "Cloud infrastructure",
    comingSoon: "Coming soon",
    projectOneTitle: "AWS S3 data lifecycle service",
    projectOneBody:
      "A future engineering case study around data cleanup, cost optimization, scalable service design, and reliability without exposing internal details.",
    projectTwoType: "AI application",
    projectTwoTitle: "AI / creative tool project",
    projectTwoBody:
      "A user-facing AI application can show how you turn model capabilities into a usable product experience.",
    projectThreeType: "Research & algorithms",
    projectThreeTitle: "Image reconstruction and ML research",
    projectThreeBody:
      "A place to connect your inverse-problem, image reconstruction, and experimental data analysis background with published research.",
    contactKicker: "Contact",
    contactTitle: "Let's connect."
  },
  zh: {
    navAbout: "\u5173\u4e8e",
    navExperience: "\u7ecf\u5386",
    navSkills: "\u6280\u80fd",
    navProjects: "\u9879\u76ee",
    navContact: "\u8054\u7cfb",
    eyebrow: "AWS S3 \u8f6f\u4ef6\u5f00\u53d1\u5de5\u7a0b\u5e08 | Seattle",
    heroTitle: "\u4f60\u597d\uff0c\u6211\u662f Ken Liu\u3002",
    heroSubtitle:
      "\u6211\u662f\u4e00\u540d\u8f6f\u4ef6\u5f00\u53d1\u5de5\u7a0b\u5e08\uff0c\u62e5\u6709 4 \u5e74\u4ee5\u4e0a AWS S3 \u5206\u5e03\u5f0f\u7cfb\u7edf\u548c\u6570\u636e\u57fa\u7840\u8bbe\u65bd\u7ecf\u9a8c\uff0c\u4e5f\u5173\u6ce8 AI \u5e94\u7528\u548c\u521b\u4f5c\u5de5\u5177\u3002",
    resumeButton: "\u67e5\u770b\u7b80\u5386",
    locationLabel: "\u6240\u5728\u5730",
    focusLabel: "\u6838\u5fc3\u65b9\u5411",
    focusValue: "\u5206\u5e03\u5f0f\u7cfb\u7edf\u3001\u4e91\u57fa\u7840\u8bbe\u65bd\u3001\u540e\u7aef API\u3001AI \u5e94\u7528",
    statusLabel: "\u5f53\u524d\u72b6\u6001",
    statusValue: "\u6b63\u5728\u5bfb\u627e\u8f6f\u4ef6\u5de5\u7a0b\u76f8\u5173\u673a\u4f1a",
    aboutKicker: "\u5173\u4e8e\u6211",
    aboutTitle: "\u53ef\u9760\u7684\u4e91\u57fa\u7840\u8bbe\u65bd\u5de5\u7a0b\u80fd\u529b\uff0c\u4e5f\u4fdd\u7559\u521b\u4f5c\u8005\u7684\u89c6\u89d2\u3002",
    aboutBody:
      "\u6211\u5728 AWS S3 \u6784\u5efa\u8fc7\u5927\u89c4\u6a21\u5206\u5e03\u5f0f\u7cfb\u7edf\u3001\u6570\u636e\u751f\u547d\u5468\u671f\u7ba1\u7406\u670d\u52a1\u548c\u9ad8\u541e\u5410\u540e\u7aef API\uff0c\u5173\u6ce8\u7cfb\u7edf\u53ef\u9760\u6027\u3001\u6027\u80fd\u4f18\u5316\u548c\u8d44\u6e90\u6548\u7387\u3002\u9664\u4e86\u57fa\u7840\u8bbe\u65bd\u5de5\u7a0b\uff0c\u6211\u4e5f\u6301\u7eed\u63a2\u7d22 AI \u5e94\u7528\u3001\u8f6f\u4ef6\u4ea7\u54c1\u548c\u521b\u4f5c\u5de5\u5177\uff0c\u5e0c\u671b\u628a\u590d\u6742\u95ee\u9898\u6574\u7406\u6210\u6e05\u6670\u3001\u53ef\u7528\u3001\u80fd\u6301\u7eed\u8fed\u4ee3\u7684\u4ea7\u54c1\u3002",
    experienceKicker: "\u7ecf\u5386",
    experienceTitle: "\u5728 AWS S3 \u6784\u5efa\u5927\u89c4\u6a21\u5b58\u50a8\u4e0e\u6570\u636e\u57fa\u7840\u8bbe\u65bd\u3002",
    awsRole: "Software Development Engineer",
    awsCompany: "Amazon Web Services",
    awsDate: "2022 \u5e74 2 \u6708\u81f3\u4eca",
    awsPoint1:
      "\u8bbe\u8ba1\u5e76\u6784\u5efa\u5206\u5e03\u5f0f\u6570\u636e\u751f\u547d\u5468\u671f\u7ba1\u7406\u670d\u52a1\uff0c\u6e05\u7406\u6821\u9a8c\u6d41\u7a0b\u4e2d\u7684\u8fc7\u671f\u6570\u636e\u526f\u672c\uff0c\u63d0\u5347\u5b58\u50a8\u6548\u7387\u3002",
    awsPoint2:
      "\u6784\u5efa\u81ea\u52a8\u5316\u5b64\u7acb\u6570\u636e\u68c0\u6d4b\u4e0e\u5220\u9664\u7cfb\u7edf\uff0c\u5e26\u6765\u8d85\u8fc7 4900 \u4e07\u7f8e\u5143 CapEx \u8282\u7701\u3002",
    awsPoint3:
      "\u91cd\u6784\u8bf7\u6c42\u6d88\u606f\u5904\u7406\u7ec4\u4ef6\u5e76\u96c6\u6210\u4e91\u6570\u636e\u5e93\u65b9\u6848\uff0c\u5c06 CPU \u4f7f\u7528\u548c\u6d88\u606f\u5904\u7406\u65f6\u95f4\u964d\u4f4e\u7ea6 90%\u3002",
    awsPoint4:
      "\u4f18\u5316\u5185\u5b58\u6548\u7387\u548c Spark/EMR \u6570\u636e\u5904\u7406\u6d41\u7a0b\uff0c\u964d\u4f4e\u8fd0\u884c\u65f6\u95f4\u548c\u5e74\u5ea6\u57fa\u7840\u8bbe\u65bd\u6210\u672c\u3002",
    researchRole: "Research Assistant",
    researchCompany: "University of Delaware",
    researchDate: "2019 \u5e74 2 \u6708 - 2022 \u5e74 2 \u6708",
    researchPoint1:
      "\u4f7f\u7528 MATLAB \u548c Python \u5f00\u53d1\u56fe\u50cf\u91cd\u5efa\u4e0e\u9006\u95ee\u9898\u7b97\u6cd5\u3002",
    researchPoint2:
      "\u5c06 SVM\u3001\u611f\u77e5\u673a\u7b49\u673a\u5668\u5b66\u4e60\u65b9\u6cd5\u7528\u4e8e\u5b9e\u9a8c\u6570\u636e\u5206\u7c7b\u548c\u6210\u50cf\u6a21\u5f0f\u5206\u6790\u3002",
    skillsKicker: "\u6280\u80fd",
    skillsTitle: "\u540e\u7aef\u7cfb\u7edf\u3001\u6570\u636e\u57fa\u7840\u8bbe\u65bd\u548c\u4e91\u5e73\u53f0\u3002",
    skillLang: "\u8bed\u8a00",
    skillLangList: "Java, Kotlin, Python, C/C++, Scala, TypeScript, Ruby",
    skillBackend: "\u540e\u7aef\u4e0e\u7cfb\u7edf",
    skillBackendList: "\u5206\u5e03\u5f0f\u7cfb\u7edf\u3001REST API\u3001\u5fae\u670d\u52a1\u3001CI/CD\u3001\u5f02\u6b65\u5904\u7406",
    skillData: "\u6570\u636e\u4e0e\u57fa\u7840\u8bbe\u65bd",
    skillDataList: "\u5b58\u50a8\u7cfb\u7edf\u3001Apache Spark\u3001\u5927\u89c4\u6a21\u6570\u636e\u5904\u7406",
    skillCloud: "\u4e91\u5e73\u53f0",
    skillCloudList: "AWS: CloudFormation, DynamoDB, EBS, EC2, ECS, EMR, Lambda, S3, SQS",
    skillSpecialties: "\u4e13\u957f",
    skillSpecialtiesList: "\u7cfb\u7edf\u8bbe\u8ba1\u3001\u6027\u80fd\u4f18\u5316\u3001\u53ef\u6269\u5c55\u6027\u3001\u53ef\u9760\u6027\u5de5\u7a0b",
    projectsKicker: "\u7cbe\u9009\u9879\u76ee",
    projectsTitle: "\u4e0b\u4e00\u6b65\u628a\u9879\u76ee\u5305\u88c5\u6210\u5177\u4f53\u6848\u4f8b\u3002",
    projectOneType: "\u4e91\u57fa\u7840\u8bbe\u65bd",
    comingSoon: "\u5f85\u8865\u5145",
    projectOneTitle: "AWS S3 \u6570\u636e\u751f\u547d\u5468\u671f\u670d\u52a1",
    projectOneBody:
      "\u53ef\u5c06\u7b80\u5386\u4e2d\u7684\u7cfb\u7edf\u8bbe\u8ba1\u3001\u6570\u636e\u6e05\u7406\u3001\u6210\u672c\u4f18\u5316\u548c\u53ef\u9760\u6027\u5de5\u4f5c\u6574\u7406\u6210\u4e00\u7bc7\u4e0d\u6cc4\u9732\u5185\u90e8\u7ec6\u8282\u7684\u5de5\u7a0b\u6848\u4f8b\u3002",
    projectTwoType: "AI \u5e94\u7528",
    projectTwoTitle: "AI / \u521b\u4f5c\u5de5\u5177\u9879\u76ee",
    projectTwoBody:
      "\u8fd9\u91cc\u9002\u5408\u653e\u4e00\u4e2a\u9762\u5411\u7528\u6237\u7684 AI \u5e94\u7528\uff0c\u5c55\u793a\u4f60\u5982\u4f55\u628a\u6a21\u578b\u80fd\u529b\u8f6c\u5316\u4e3a\u53ef\u7528\u4ea7\u54c1\u4f53\u9a8c\u3002",
    projectThreeType: "\u7814\u7a76\u4e0e\u7b97\u6cd5",
    projectThreeTitle: "\u56fe\u50cf\u91cd\u5efa\u4e0e\u673a\u5668\u5b66\u4e60\u7814\u7a76",
    projectThreeBody:
      "\u53ef\u4ee5\u5c55\u793a\u4f60\u5728\u9006\u95ee\u9898\u3001\u56fe\u50cf\u91cd\u5efa\u548c\u5b9e\u9a8c\u6570\u636e\u5206\u6790\u4e0a\u7684\u7814\u7a76\u80cc\u666f\uff0c\u4ee5\u53ca\u76f8\u5173\u8bba\u6587\u6210\u679c\u3002",
    contactKicker: "\u8054\u7cfb",
    contactTitle: "\u6b22\u8fce\u4ea4\u6d41\u3002"
  }
};

const buttons = document.querySelectorAll(".lang-button");
const translatable = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  translatable.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[lang][key];
  });

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  localStorage.setItem("preferred-language", lang);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("preferred-language") || "en");

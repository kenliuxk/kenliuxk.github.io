/* Ken Liu — personal site
   Bilingual content (EN / 中文), scroll state, subtle scroll-spy, and
   reveal-on-scroll. No dependencies. */

// Only opt into the "hidden until revealed" styling once this file actually
// runs, so a blocked or failed script can never leave the page blank.
document.documentElement.classList.add("js");

const STORAGE_KEY = "preferred-language";

const translations = {
  en: {
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navPublications: "Publications",
    navEducation: "Education",
    navContact: "Contact",
    eyebrow: "General Motors · Autonomous Vehicle Data Platform",
    heroTitle: "Hi, I'm Ken Liu.",
    heroSubtitle:
      "I am a software engineer with 4+ years of experience building distributed systems and data infrastructure. I now build ML data platforms for autonomous vehicles at General Motors, after four years on AWS S3.",
    resumeButton: "View Resume",
    statYears: "4+",
    statYearsLabel: "Years of experience",
    statCost: "$49M",
    statCostLabel: "CapEx saved",
    statCpu: "90%",
    statCpuLabel: "Less CPU time",
    statRestore: "85%",
    statRestoreLabel: "Faster restores",
    locationLabel: "Location",
    focusLabel: "Core Focus",
    focusValue: "Distributed systems, ML data platforms, cloud infrastructure, backend APIs",
    aboutKicker: "About",
    aboutTitle: "Reliable cloud infrastructure engineering with a creator's eye.",
    aboutBody:
      "I work on the autonomous vehicle data platform at General Motors, building the next generation of distributed ML data infrastructure — ingestion, processing, and serving — on GCP and open-source frameworks. Before that I spent four years at AWS S3 on large-scale distributed systems, data lifecycle services, and high-throughput backend APIs, with a focus on reliability, performance, and resource efficiency. Outside of infrastructure, I explore AI applications and creative tools that turn complex ideas into clear, usable products.",
    experienceKicker: "Experience",
    experienceTitle: "Building data infrastructure at AWS scale, now for autonomous vehicles.",
    gmRole: "Software Engineer",
    gmCompany: "General Motors · Autonomous Vehicle Data Platform",
    gmDate: "Aug 2026 - Present",
    gmPoint1:
      "Design and develop the next generation distributed ML data platform (ingestion, processing, serving) using GCP and open-source frameworks.",
    gmPoint2:
      "Collaborate with ML and data engineers to translate needs and pain points into requirements, build self-serve capabilities, and drive adoption.",
    gmPoint3:
      "Deliver technical projects, owning major technical decisions and tradeoffs, and contribute to the team's strategic roadmap.",
    gmPoint4:
      "Champion engineering and operational excellence by continuously improving systems and processes.",
    awsRole: "Software Development Engineer",
    awsCompany: "Amazon Web Services",
    awsDate: "Feb 2022 - Jul 2026",
    currentBadge: "Current",
    awsPoint1:
      "Designed and built a distributed data lifecycle management service for expired checksum-validation data copies, improving storage efficiency.",
    awsPoint2:
      "Built automated orphaned data detection and deletion systems, contributing more than $49M in CapEx savings.",
    awsPoint3:
      "Re-architected request message processing with cloud database integration, reducing CPU usage and processing time by around 90%.",
    awsPoint4:
      "Improved memory efficiency and Spark/EMR data processing workflows, reducing runtime and annual infrastructure cost.",
    awsPoint5:
      "Established a cross-team rapid archival data restoration service for S3 Glacier Flexible Retrieval workflows, reducing restore time by up to 85% from hours to minutes.",
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
    skillDataList: "Data storage systems, Apache Spark, ML data platforms, ingestion and processing pipelines",
    skillCloud: "Cloud Platform",
    skillCloudList: "AWS: CloudFormation, DynamoDB, EBS, EC2, ECS, EMR, Lambda, S3, SQS · GCP",
    skillAgents: "AI-assisted Engineering",
    skillAgentsList: "ChatGPT Codex, Claude Code, AWS Kiro, GitHub Copilot",
    skillSpecialties: "Specialties",
    skillSpecialtiesList: "System design, performance optimization, scalability, reliability engineering",
    publicationsKicker: "Publications",
    publicationsTitle: "Research work in computational imaging and X-ray systems.",
    publicationOneAuthors: "Edgar Salazar, Xiaokang Liu, and Gonzalo Arce",
    publicationOneTitle: "X-ray Compton backscattering imaging via structured light",
    publicationOneVenue: "Optics Express, 30, 15211-15226, 2022",
    publicationOneSummary:
      "Proposed a compressive X-ray Compton backscattering imaging approach that uses cone-beam coded illumination instead of pixel-by-pixel pencil-beam scanning. The work combined Geant4/GATE simulations, laboratory test-bed experiments, denoising-prior reconstruction algorithms, and dose analysis to evaluate feasibility for material detection and human scanning scenarios.",
    publicationTwoAuthors: "Angela P. Cuadros, Xiaokang Liu, Paul E. Parsons, Xu Ma, and Gonzalo R. Arce",
    publicationTwoTitle: "Experimental demonstration and optimization of X-ray StaticCodeCT",
    publicationTwoVenue: "Applied Optics, 60, 9543-9552, 2021",
    publicationTwoSummary:
      "Demonstrated StaticCodeCT, a low-dose X-ray CT architecture that uses a single static coded aperture to estimate missing detector measurements from correlated projection data. The study tested real cone-beam CT reconstructions, compared multiple coded-aperture fabrication methods, and optimized aperture patterns for practical deployment.",
    publicationLink: "View paper",
    educationKicker: "Education",
    educationTitle: "Academic foundation in electrical and computer engineering.",
    mastersDegree: "Master of Science, Electrical & Computer Engineering",
    mastersSchool: "University of Delaware",
    mastersDate: "Feb 2019 - Feb 2022",
    mastersHonorOne: "Graduate Program Scholarship, Feb 2019",
    mastersHonorTwo: "Graduate Program Scholarship, Aug 2019",
    mastersTaOne: "Teaching Assistant, Signals and Systems, Spring 2021",
    mastersTaTwo: "Teaching Assistant, Senior Design, Fall 2021",
    bachelorsDegree: "Bachelor of Science, Electrical Engineering",
    bachelorsSchool: "University of Delaware",
    bachelorsDate: "Aug 2015 - Dec 2018",
    bachelorsHonorOne: "Dean's List, May 2018",
    bachelorsHonorTwo: "Dean's List, Dec 2018",
    contactKicker: "Contact",
    contactTitle: "Let's connect.",
    footerNote: "Hand-built with HTML, CSS, and a little JavaScript.",
    backToTop: "Back to top",
    themeLabel: "Appearance",
    themeSystem: "Use system setting",
    themeLight: "Light",
    themeDark: "Dark"
  },
  zh: {
    navAbout: "\u5173\u4e8e",
    navExperience: "\u7ecf\u5386",
    navSkills: "\u6280\u80fd",
    navPublications: "\u8bba\u6587",
    navEducation: "\u6559\u80b2",
    navContact: "\u8054\u7cfb",
    eyebrow: "General Motors \u00b7 \u81ea\u52a8\u9a7e\u9a76\u6570\u636e\u5e73\u53f0",
    heroTitle: "\u4f60\u597d\uff0c\u6211\u662f Ken Liu\u3002",
    heroSubtitle:
      "\u6211\u662f\u4e00\u540d\u8f6f\u4ef6\u5de5\u7a0b\u5e08\uff0c\u62e5\u6709 4 \u5e74\u4ee5\u4e0a\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e0e\u6570\u636e\u57fa\u7840\u8bbe\u65bd\u7ecf\u9a8c\u3002\u76ee\u524d\u5728 General Motors \u4e3a\u81ea\u52a8\u9a7e\u9a76\u6784\u5efa\u673a\u5668\u5b66\u4e60\u6570\u636e\u5e73\u53f0\uff0c\u6b64\u524d\u5728 AWS S3 \u5de5\u4f5c\u4e86\u56db\u5e74\u3002",
    resumeButton: "\u67e5\u770b\u7b80\u5386",
    statYears: "4+",
    statYearsLabel: "\u4ece\u4e1a\u5e74\u9650",
    statCost: "$49M",
    statCostLabel: "CapEx \u8282\u7701",
    statCpu: "90%",
    statCpuLabel: "CPU \u65f6\u95f4\u964d\u4f4e",
    statRestore: "85%",
    statRestoreLabel: "\u6062\u590d\u63d0\u901f",
    locationLabel: "\u6240\u5728\u5730",
    focusLabel: "\u6838\u5fc3\u65b9\u5411",
    focusValue: "\u5206\u5e03\u5f0f\u7cfb\u7edf\u3001ML \u6570\u636e\u5e73\u53f0\u3001\u4e91\u57fa\u7840\u8bbe\u65bd\u3001\u540e\u7aef API",
    aboutKicker: "\u5173\u4e8e\u6211",
    aboutTitle: "\u53ef\u9760\u7684\u4e91\u57fa\u7840\u8bbe\u65bd\u5de5\u7a0b\u80fd\u529b\uff0c\u4e5f\u4fdd\u7559\u521b\u4f5c\u8005\u7684\u89c6\u89d2\u3002",
    aboutBody:
      "\u6211\u5728 General Motors \u7684\u81ea\u52a8\u9a7e\u9a76\u6570\u636e\u5e73\u53f0\u56e2\u961f\uff0c\u57fa\u4e8e GCP \u548c\u5f00\u6e90\u6846\u67b6\u6784\u5efa\u4e0b\u4e00\u4ee3\u5206\u5e03\u5f0f\u673a\u5668\u5b66\u4e60\u6570\u636e\u57fa\u7840\u8bbe\u65bd\uff08\u6570\u636e\u5165\u6e56\u3001\u5904\u7406\u3001\u670d\u52a1\uff09\u3002\u5728\u6b64\u4e4b\u524d\uff0c\u6211\u5728 AWS S3 \u5ea6\u8fc7\u4e86\u56db\u5e74\uff0c\u8d1f\u8d23\u5927\u89c4\u6a21\u5206\u5e03\u5f0f\u7cfb\u7edf\u3001\u6570\u636e\u751f\u547d\u5468\u671f\u670d\u52a1\u548c\u9ad8\u541e\u5410\u540e\u7aef API\uff0c\u5173\u6ce8\u53ef\u9760\u6027\u3001\u6027\u80fd\u4e0e\u8d44\u6e90\u6548\u7387\u3002\u5de5\u4f5c\u4e4b\u5916\uff0c\u6211\u4e5f\u6301\u7eed\u63a2\u7d22 AI \u5e94\u7528\u4e0e\u521b\u4f5c\u5de5\u5177\uff0c\u5e0c\u671b\u628a\u590d\u6742\u60f3\u6cd5\u53d8\u6210\u6e05\u6670\u3001\u597d\u7528\u3001\u80fd\u6301\u7eed\u8fed\u4ee3\u7684\u4ea7\u54c1\u3002",
    experienceKicker: "\u7ecf\u5386",
    experienceTitle: "\u4ece AWS \u89c4\u6a21\u7684\u6570\u636e\u57fa\u7840\u8bbe\u65bd\uff0c\u5230\u81ea\u52a8\u9a7e\u9a76\u6570\u636e\u5e73\u53f0\u3002",
    gmRole: "Software Engineer",
    gmCompany: "General Motors \u00b7 \u81ea\u52a8\u9a7e\u9a76\u6570\u636e\u5e73\u53f0",
    gmDate: "2026 \u5e74 8 \u6708\u81f3\u4eca",
    gmPoint1:
      "\u57fa\u4e8e GCP \u4e0e\u5f00\u6e90\u6846\u67b6\uff0c\u8bbe\u8ba1\u5e76\u5f00\u53d1\u4e0b\u4e00\u4ee3\u5206\u5e03\u5f0f ML \u6570\u636e\u5e73\u53f0\uff08\u6570\u636e\u5165\u6e56\u3001\u5904\u7406\u3001\u670d\u52a1\uff09\u3002",
    gmPoint2:
      "\u4e0e ML \u5de5\u7a0b\u5e08\u548c\u6570\u636e\u5de5\u7a0b\u5e08\u5408\u4f5c\uff0c\u628a\u9700\u6c42\u4e0e\u75db\u70b9\u8f6c\u5316\u4e3a\u9700\u6c42\u6587\u6863\uff0c\u6784\u5efa\u81ea\u52a9\u5f0f\u80fd\u529b\u5e76\u63a8\u52a8\u843d\u5730\u4f7f\u7528\u3002",
    gmPoint3:
      "\u72ec\u7acb\u4ea4\u4ed8\u6280\u672f\u9879\u76ee\uff0c\u8d1f\u8d23\u5173\u952e\u6280\u672f\u51b3\u7b56\u4e0e\u53d6\u820d\uff0c\u5e76\u53c2\u4e0e\u56e2\u961f\u6218\u7565\u89c4\u5212\u3002",
    gmPoint4:
      "\u6301\u7eed\u6539\u5584\u7cfb\u7edf\u4e0e\u6d41\u7a0b\uff0c\u63a8\u52a8\u5de5\u7a0b\u4e0e\u8fd0\u7ef4\u8d28\u91cf\u7684\u63d0\u5347\u3002",
    awsRole: "Software Development Engineer",
    awsCompany: "Amazon Web Services",
    awsDate: "2022 \u5e74 2 \u6708 - 2026 \u5e74 7 \u6708",
    currentBadge: "\u5728\u804c",
    awsPoint1:
      "\u8bbe\u8ba1\u5e76\u6784\u5efa\u5206\u5e03\u5f0f\u6570\u636e\u751f\u547d\u5468\u671f\u7ba1\u7406\u670d\u52a1\uff0c\u6e05\u7406\u6821\u9a8c\u6d41\u7a0b\u4e2d\u7684\u8fc7\u671f\u6570\u636e\u526f\u672c\uff0c\u63d0\u5347\u5b58\u50a8\u6548\u7387\u3002",
    awsPoint2:
      "\u6784\u5efa\u81ea\u52a8\u5316\u5b64\u7acb\u6570\u636e\u68c0\u6d4b\u4e0e\u5220\u9664\u7cfb\u7edf\uff0c\u5e26\u6765\u8d85\u8fc7 4900 \u4e07\u7f8e\u5143 CapEx \u8282\u7701\u3002",
    awsPoint3:
      "\u91cd\u6784\u8bf7\u6c42\u6d88\u606f\u5904\u7406\u7ec4\u4ef6\u5e76\u96c6\u6210\u4e91\u6570\u636e\u5e93\u65b9\u6848\uff0c\u5c06 CPU \u4f7f\u7528\u548c\u6d88\u606f\u5904\u7406\u65f6\u95f4\u964d\u4f4e\u7ea6 90%\u3002",
    awsPoint4:
      "\u4f18\u5316\u5185\u5b58\u6548\u7387\u548c Spark/EMR \u6570\u636e\u5904\u7406\u6d41\u7a0b\uff0c\u964d\u4f4e\u8fd0\u884c\u65f6\u95f4\u548c\u5e74\u5ea6\u57fa\u7840\u8bbe\u65bd\u6210\u672c\u3002",
    awsPoint5:
      "\u5efa\u7acb\u8de8\u56e2\u961f\u7684 S3 Glacier Flexible Retrieval \u5feb\u901f\u5f52\u6863\u6570\u636e\u6062\u590d\u670d\u52a1\uff0c\u5c06 restore \u65f6\u95f4\u6700\u9ad8\u7f29\u77ed 85%\uff0c\u4ece\u5c0f\u65f6\u7ea7\u964d\u81f3\u5206\u949f\u7ea7\u3002",
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
    skillDataList: "\u5b58\u50a8\u7cfb\u7edf\u3001Apache Spark\u3001ML \u6570\u636e\u5e73\u53f0\u3001\u6570\u636e\u5165\u6e56\u4e0e\u5904\u7406\u7ba1\u9053",
    skillCloud: "\u4e91\u5e73\u53f0",
    skillCloudList: "AWS: CloudFormation, DynamoDB, EBS, EC2, ECS, EMR, Lambda, S3, SQS \u00b7 GCP",
    skillAgents: "AI \u8f85\u52a9\u5de5\u7a0b",
    skillAgentsList: "ChatGPT Codex, Claude Code, AWS Kiro, GitHub Copilot",
    skillSpecialties: "\u4e13\u957f",
    skillSpecialtiesList: "\u7cfb\u7edf\u8bbe\u8ba1\u3001\u6027\u80fd\u4f18\u5316\u3001\u53ef\u6269\u5c55\u6027\u3001\u53ef\u9760\u6027\u5de5\u7a0b",
    publicationsKicker: "\u8bba\u6587",
    publicationsTitle: "\u8ba1\u7b97\u6210\u50cf\u548c X-ray \u7cfb\u7edf\u65b9\u5411\u7684\u7814\u7a76\u5de5\u4f5c\u3002",
    publicationOneAuthors: "Edgar Salazar, Xiaokang Liu, and Gonzalo Arce",
    publicationOneTitle: "X-ray Compton backscattering imaging via structured light",
    publicationOneVenue: "Optics Express, 30, 15211-15226, 2022",
    publicationOneSummary:
      "\u63d0\u51fa\u4e00\u79cd\u538b\u7f29\u5f0f X-ray Compton backscattering \u6210\u50cf\u65b9\u6cd5\uff0c\u7528\u9525\u675f\u7f16\u7801\u7167\u660e\u53d6\u4ee3\u9010\u50cf\u7d20 pencil-beam \u626b\u63cf\u3002\u8be5\u5de5\u4f5c\u7ed3\u5408 Geant4/GATE \u4eff\u771f\u3001\u5b9e\u9a8c\u5ba4 test-bed \u9a8c\u8bc1\u3001\u57fa\u4e8e\u53bb\u566a\u5148\u9a8c\u7684\u91cd\u5efa\u7b97\u6cd5\u548c\u5242\u91cf\u5206\u6790\uff0c\u8bc4\u4f30\u5176\u5728\u6750\u6599\u68c0\u6d4b\u548c\u4eba\u4f53\u626b\u63cf\u573a\u666f\u4e2d\u7684\u53ef\u884c\u6027\u3002",
    publicationTwoAuthors: "Angela P. Cuadros, Xiaokang Liu, Paul E. Parsons, Xu Ma, and Gonzalo R. Arce",
    publicationTwoTitle: "Experimental demonstration and optimization of X-ray StaticCodeCT",
    publicationTwoVenue: "Applied Optics, 60, 9543-9552, 2021",
    publicationTwoSummary:
      "\u9a8c\u8bc1\u4e86 StaticCodeCT \u8fd9\u79cd\u4f4e\u5242\u91cf X-ray CT \u67b6\u6784\uff1a\u5b83\u4f7f\u7528\u5355\u4e2a\u9759\u6001 coded aperture\uff0c\u5229\u7528\u6295\u5f71\u6570\u636e\u95f4\u7684\u9ad8\u76f8\u5173\u6027\u6765\u4f30\u8ba1\u63a2\u6d4b\u5668\u4e0a\u672a\u89c2\u6d4b\u7684\u6d4b\u91cf\u3002\u8be5\u7814\u7a76\u5728\u771f\u5b9e cone-beam CT \u7cfb\u7edf\u4e0a\u8fdb\u884c\u91cd\u5efa\u5b9e\u9a8c\uff0c\u6bd4\u8f83\u591a\u79cd coded aperture \u5236\u9020\u65b9\u6cd5\uff0c\u5e76\u4f18\u5316 aperture pattern \u4ee5\u652f\u6491\u5b9e\u9645\u90e8\u7f72\u3002",
    publicationLink: "\u67e5\u770b\u8bba\u6587",
    educationKicker: "\u6559\u80b2\u7ecf\u5386",
    educationTitle: "\u7535\u6c14\u4e0e\u8ba1\u7b97\u673a\u5de5\u7a0b\u80cc\u666f\u6253\u4e0b\u7684\u6280\u672f\u57fa\u7840\u3002",
    mastersDegree: "Master of Science, Electrical & Computer Engineering",
    mastersSchool: "University of Delaware",
    mastersDate: "2019 \u5e74 2 \u6708 - 2022 \u5e74 2 \u6708",
    mastersHonorOne: "Graduate Program Scholarship, 2019 \u5e74 2 \u6708",
    mastersHonorTwo: "Graduate Program Scholarship, 2019 \u5e74 8 \u6708",
    mastersTaOne: "\u52a9\u6559\uff0cSignals and Systems\uff0c2021 \u5e74\u6625\u5b63\u5b66\u671f",
    mastersTaTwo: "\u52a9\u6559\uff0cSenior Design\uff0c2021 \u5e74\u79cb\u5b63\u5b66\u671f",
    bachelorsDegree: "Bachelor of Science, Electrical Engineering",
    bachelorsSchool: "University of Delaware",
    bachelorsDate: "2015 \u5e74 8 \u6708 - 2018 \u5e74 12 \u6708",
    bachelorsHonorOne: "Dean's List, 2018 \u5e74 5 \u6708",
    bachelorsHonorTwo: "Dean's List, 2018 \u5e74 12 \u6708",
    contactKicker: "\u8054\u7cfb",
    contactTitle: "\u6b22\u8fce\u4ea4\u6d41\u3002",
    footerNote: "\u7528 HTML\u3001CSS \u548c\u4e00\u70b9 JavaScript \u624b\u5de5\u642d\u5efa\u3002",
    backToTop: "\u56de\u5230\u9876\u90e8",
    themeLabel: "\u5916\u89c2",
    themeSystem: "\u8ddf\u968f\u7cfb\u7edf",
    themeLight: "\u6d45\u8272",
    themeDark: "\u6df1\u8272"
  }
};

/* --------------------------------------------------------------------------
   Language switching
   -------------------------------------------------------------------------- */

const langButtons = document.querySelectorAll(".lang-button");
const translatable = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  translatable.forEach((element) => {
    const value = dict[element.dataset.i18n];
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  // Attributes (aria-labels, tooltips) that also need translating.
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dict[element.dataset.i18nAria];
    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const value = dict[element.dataset.i18nTitle];
    if (typeof value === "string") {
      element.setAttribute("title", value);
    }
  });

  langButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    /* storage can be unavailable in private mode — safe to ignore */
  }
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

let initialLanguage = "en";

// ?lang=zh gives a shareable, directly-linkable Chinese page.
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");

if (requestedLanguage && translations[requestedLanguage]) {
  initialLanguage = requestedLanguage;
} else {
  try {
    initialLanguage = localStorage.getItem(STORAGE_KEY) || "en";
  } catch (error) {
    initialLanguage = "en";
  }
}

setLanguage(translations[initialLanguage] ? initialLanguage : "en");

/* --------------------------------------------------------------------------
   Appearance: system by default, with a remembered manual override
   -------------------------------------------------------------------------- */

const THEME_KEY = "preferred-theme";
const themeButtons = document.querySelectorAll(".theme-button");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function resolvedTheme() {
  const explicit = document.documentElement.getAttribute("data-theme");
  if (explicit === "light" || explicit === "dark") return explicit;
  return darkQuery.matches ? "dark" : "light";
}

function syncThemeColor() {
  if (themeMeta) {
    themeMeta.setAttribute("content", resolvedTheme() === "dark" ? "#000000" : "#ffffff");
  }
}

function setTheme(value) {
  const choice = value === "light" || value === "dark" ? value : "system";

  if (choice === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", choice);
  }

  themeButtons.forEach((button) => {
    const active = button.dataset.themeValue === choice;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem(THEME_KEY, choice);
  } catch (error) {
    /* storage can be unavailable in private mode — safe to ignore */
  }

  syncThemeColor();
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeValue));
});

let initialTheme = "system";
try {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === "light" || storedTheme === "dark") initialTheme = storedTheme;
} catch (error) {
  initialTheme = "system";
}

setTheme(initialTheme);

// Keep the browser chrome colour in step while following the system.
if (typeof darkQuery.addEventListener === "function") {
  darkQuery.addEventListener("change", syncThemeColor);
}

/* --------------------------------------------------------------------------
   Footer year
   -------------------------------------------------------------------------- */

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

/* --------------------------------------------------------------------------
   Header state on scroll
   -------------------------------------------------------------------------- */

const header = document.querySelector(".site-header");
let scrollQueued = false;

function updateHeader() {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  scrollQueued = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollQueued) {
      scrollQueued = true;
      requestAnimationFrame(updateHeader);
    }
  },
  { passive: true }
);

updateHeader();

/* --------------------------------------------------------------------------
   Scroll spy for nav highlighting
   -------------------------------------------------------------------------- */

const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

if ("IntersectionObserver" in window && navLinks.length) {
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", active);
          if (active) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => spy.observe(section));
}

/* --------------------------------------------------------------------------
   Reveal on scroll
   -------------------------------------------------------------------------- */

const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let observerAlive = false;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      observerAlive = true;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  // Failsafe: if the observer never reports (some embedded browsers throttle it),
  // show everything rather than leave the page looking empty.
  window.setTimeout(() => {
    if (!observerAlive) {
      revealElements.forEach((element) => element.classList.add("is-in"));
    }
  }, 2000);
} else {
  revealElements.forEach((element) => element.classList.add("is-in"));
}

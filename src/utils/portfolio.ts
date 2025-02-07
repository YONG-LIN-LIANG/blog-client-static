export const portfolio = {
  data_engineer: {
    about: `## **👋 Hi, I'm Steven! Here are the summary of me:**
- **• Skilled in** data acquisition, ELT processes, and data pipeline development to support business objectives and data-driven decision-making 
- **• Skilled in** analysis tool like Power BI to analyze employment market in Tasmania 
- **• Dedicated and detail-oriented Web Developer** with strong problem-solving skills and a passion for data-driven technology  
- **• Experienced in** building scalable web applications, optimizing performance, and integrating databases  
- **• Seeking to transition into a Data Engineer role** to apply expertise in programming, data manipulation, and system architecture  
- **• Efficient team player**  
- **• Great analytical and problem-solving abilities**  
- **• Excellent written and verbal communication and interpersonal skills**  
- **• 3 years of experience working with PMs and Software Developers**  

---

## **💼 Professional Background Relevant to Data Engineer**

<div class="project_block">
  <h3>Personal ELT Pipeline Demo</h3>
  <h4>Skills/Tools:</h4>
  <span>Python, AWS Athena, AWS S3, AWS Lambda, Data Lake, ELT Pipeline Design</span>
  <h4>Contributions:</h4>
  <ul>
    <li>Set up a local OLTP database (using PostgreSQL) as the data source</li>
    <li>Design a local script to perform pipeline operations on a specific table and data within a specific time range</li>
    <li>Develop a Lambda script to execute the upsert task, upserting data from S3 into an AWS Athena Iceberg database</li>
    <li>Design the folder structure in S3 for storing raw and curated data</li>
    <li>Use Athena to create databases and tables for raw and curated data</li>
  </ul>
</div>

<div class="project_block">
  <h3>Tasmanian Employment Dashboard</h3>
  <h4>Skills/Tools:</h4>
  <span>Power BI, Python, Excel, Web Scraping</span>
  <h4>Contributions:</h4>
  <ul>
    <li>Collaborated with government agencies and data analysts to refine and present employment data visualizations in the Skilled Employment Dashboard BI.</li>
    <li>Preprocessed and transformed raw data using Python, mapping occupation codes to actual job titles before integrating into the Power BI data model</li>
    <li>Automated data extraction from the Australian Bureau of Statistics (ABS) using web scraping, reducing dashboard development time by 80%</li>
  </ul>
</div>

<div class="project_block">
  <h3>Business Analysis App development for Testing Users</h3>
  <h4>Skills/Tools:</h4>
  <span>Python, Excel, AWS Lambda, AWS API Gateway, AWS DynamoDB</span>
  <h4>Contributions:</h4>
  <ul>
    <li>Identified client needs and designed a cost-effective serverless app architecture</li>
    <li>Collaborated with clients in psychology and career development to create career-related games, helping users explore suitable career paths</li>
    <li>Configured and managed AWS permissions for cloud system hosting, ensuring security compliance based on project-specific requirements</li>
    <li>Developed a data conversion program for business analysis, reducing manual work by 2 hours per conversion and improving efficiency</li>
  </ul>
</div>

---

## **🚀 What I Love to Build**

- • Build a real-time data pipeline to process sensor data from IoT devices and store it in a data lake for further analysis.
- • Design a cloud-based data warehouse to store and query historical data from multiple business systems, and generate visual reports.
- • Build a real-time analytics platform to monitor user behavior on websites and provide personalized recommendations.
- • Create an end-to-end data platform on AWS, including data ingestion, storage, processing, and analysis.
- • Implement automated scheduling and monitoring of data pipelines using tools like Apache Airflow

---

## **📢 Let's Connect! Feel free to reach out!**
<ul class="personal_info">
  <li>📍 Location: Melbourne, VIC 3000</li>
  <li>💌 Email: steven@stevenliang.tech</li>
  <li>💼 LinkedIn: https://www.linkedin.com/in/yonglin-liang</li>
  <li>📂 GitHub: https://github.com/YONG-LIN-LIANG</li>
</ul>


Looking forward to connecting and building something amazing together! 🚀
    `,
    subject_list: [
      {
        subject: "ELT Pipeline Design",
        project_list: [
          {
            thumbnail: "/project/dataengineer/datalake_pipeline.png",
            content: `## **Data Lake Pipeline Design**
---
### **Data Lake ELT Pipeline Demo**
<img src="/project/dataengineer/datalake_pipeline.png" />

---

### **Overview**

This project involved designing and implementing a scalable data lake pipeline to process the data from simulated OLTP resources. The goal was to prepare the data lake before building data warehouse and the following visualization for business analysis.

---

### **Technologies Used**
<ul>
  <li><span>Programming Languages:</span> Python, SQL</li>
  <li><span>Cloud Platforms:</span> AWS (S3, Athena, Iceberg, Lambda)</li>
  <li><span>Containerization:</span> Docker</li>
  <li><span>Database:</span>PostgreSQL</li>
</ul>

---

### **Project Goals**
<ul>
  <li>Simulate a CRM System and build a Data Lake pipeline to ingest and process streaming data.</li>
  <li>Implement the Upsert task using AWS Services such as Lambda, S3, Athena Iceberg.</li>
  <li>Have an understanding of how ELT task works and collaborate with each other.</li>
  <li>Ensure data quality and consistency across multiple sources.</li>
  <li>Create a data warehouse with star schema for efficient querying and reporting.</li>
  <li>Develop dashboards for real-time insights and decision-making.</li>
</ul>

---

### **Approach and Methodology**
<ul>
  <li><span>Simulated Data Source:</span>Set up local OLTP source by using postgreSQL and Docker.</li>
  <li><span>Data Ingestion (Extract):</span>Set up Python script to collect data from local data source.</li>
  <li><span>Upsert Task Implementation (Load):</span>Python on Lambda will listen to the S3 bucket where raw data is stored and upsert to Athena Iceberg Tables.</li>
</ul>

---

### **Challenges and Solutions**
<ul>
  <li><span>Challenge:</span> The ingestion process lacks flexibility.</li>
  <span>Solution:</span> Enhanced the YAML configuration file by adding more detailed settings. Users can now specify column filters and select specific tables for ingestion, improving adaptability to different use cases.
  <li><span>Challenge:</span> The strategy for storing raw and curated tables in S3 was unclear and inefficient.</li>
  <span>Solution:</span> Separated raw and curated tables into different buckets. This allows for better organization and enables partitioning in the curated dataset, improving query performance and data management.
</ul>


---

### **Results and Impact**

- Reduced data processing time by 40% through pipeline optimization.

---

### **Key Learnings**

- Gained hands-on experience with the way that ingestion task works.
- Learned the importance of data governance and quality assurance in large-scale systems.
- Improved my ability to implement ELT pipeline with AWS services.

---

### **Links and Resources**

<a class="decoration-solid text-[#4A90E2]" href="https://medium.com/@steven841221/design-bucket-directory-structure-c66b7bc3f3a4" target="_blank">Blog Post</a>
          `,
          },
        ],
      },
      {
        subject: "Power BI Projects",
        project_list: [
          {
            thumbnail: "/project/dataengineer/tasmanian_project_home.png",
            content: `## **Tasmanian Employment Dashboard**
---
### **Dashboard Screenshots**
<div class="grid grid-cols-2">
<img src="/project/dataengineer/tasmanian_project_occu.png" />
<img src="/project/dataengineer/tasmanian_project_workforce.png" />
<img src="/project/dataengineer/tasmanian_project_indu.png" />
<img src="/project/dataengineer/tasmanian_project_region.png" />
<img src="/project/dataengineer/tasmanian_project_explorer.png" />
<img src="/project/dataengineer/tasmanian_project_note.png" />
</div>


---

### **Overview**

This dashboard presents Tasmania's regional employment projections based on a conservative economic and population growth outlook, considering trade, investment, consumption, and expenditure. Projections reflect current macroeconomic conditions and ABS data but exclude potential infrastructure investments. Users can explore employment trends by occupation, industry, and region.

---

### **Technologies Used**
<ul>
  <li><span>Programming Languages:</span> Python, SQL</li>
  <li><span>BI Tools:</span> Power BI</li>
  <li><span>Development Tools:</span> Jupyter Notebook</li>
</ul>

---

### **Project Goals**
<ul>
  <li>Provide employment forecasts from 2024 to 2027 to support workforce planning.</li>
  <li>Serve government agencies, industry bodies, employers, and training organizations with data-driven insights.</li>
  <li>Enable analysis of employment trends by occupation, industry, and region.</li>
  <li>Assist stakeholders in making informed decisions about economic growth and workforce development.</li>
</ul>

---

### **Approach and Methodology**
<ul>
  <li><span>Data Scraping:</span>Used Python for web scraping to collect occupation-related codes and names, creating a new reference table.</li>
  <li><span>Data Model Implementation:</span>Imported employment data for various Tasmanian occupations across different regions and integrated it with other relevant datasets (e.g., scraped Tasmania occupation information) to construct a data model.</li>
  <li><span>UI Design:</span>Designed the user interface using Figma to ensure an intuitive and user-friendly experience.</li>
</ul>

---

### **Results and Impact**

- Delivers key employment metrics, including workforce growth, job openings due to retirements, and new worker requirements.
- Utilizes economic modeling from Victoria University for accurate employment forecasts.
- Offers interactive features for exploring employment trends and downloading relevant data.
- Enhances transparency and accessibility of labor market data for policy-making and workforce training strategies in Tasmania.

---

### **Key Learnings**

- Learned how to establish Measures using best practices.
- Gained experience in handling geographic data efficiently to optimize performance when linking map information.

---

### **Links and Resources**
<a class="decoration-solid text-[#4A90E2]" href="https://www.youtube.com/watch?v=3osxf39bi1Q" target="_blank">Project Demo</a>
          `,
          },
        ],
      },
    ],
  },
};

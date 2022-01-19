const popup = document.getElementById("popup-section");
const popupimg = document.getElementById("popup-img");
const popuptitle = document.getElementById("popup-title");
const popupdesc = document.getElementById("popup-desc");

const Services = [
    {   
        key: 1,
        imgLink: "https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090_960_720.jpg",
        serviceName: "Cloud Migration",
        serviceDesc: "We're here to help you in every step of bringing your business's technological infrastructure on cloud."
    },
    {   
        key: 2,
        imgLink: "https://www.deanna.dev/images/cicd.png",
        serviceName: "CI / CD",
        serviceDesc: "CI/CD implementation using all types of Automation tools-(Jenkins,Bitbucket,Gitlab,ArgoCD,Teamcity)."
    },
    {   
        key: 3,
        imgLink: "https://i.pcmag.com/imagery/articles/01zU35AJIGBtH8jr1uw11Qd-12..v1616112217.jpg",
        serviceName: "Security",
        serviceDesc: "Experts in cyber security including Web Application Firewall(WAF) and Splunk."
    },
    {   
        key: 4,
        imgLink: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80",
        serviceName: "Implementation / Monitoring",
        serviceDesc: "Monitoring web servers using different tools like Prometheus, Grafana, Splunk, Newrelic, Pagerduty, Kibana, Cloudwatch."
    },
    {   
        key: 5,
        imgLink: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        serviceName: "Code Testing & Bug Fixing",
        serviceDesc: "Code testing and bug fixing services using Sonarqube."
    },
    {   
        key: 6,
        imgLink: "https://leadingteknz.com/wp-content/uploads/2021/07/leadingteknz-aws-azure-gcp.png",
        serviceName: "All AWS/Azure/GCP Services",
        serviceDesc: "We offer all kinds of AWS/Azure/Gcp services scale & automate your business and maximize your profit."
    },
    // {   
    //     key: 7,
    //     imgLink: "http://ncube-digest.com/wp-content/uploads/2020/07/What-is-Solution-Architecture.jpg",
    //     serviceName: "Experts in Solution Architect",
    //     serviceDesc: "Industry standard advisories for small to large enterprises to expand and manage their technological infrastructure."
    // },
    // {   
    //     key: 8,
    //     imgLink: "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //     serviceName: "Security / Vulnerability Testing",
    //     serviceDesc: "Security/vulnerability testing and implemention using various tools like Blackduck, Fortify etc."
    // },
    // {   
    //     key: 9,
    //     imgLink: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Beginners_Guide_to_Linux_Programming.jpg",
    //     serviceName: "Linux Administration",
    //     serviceDesc: "Full fledged Linux Administration and services tailored for your business needs."
    // },
    // {   
    //     key: 10,
    //     imgLink: "https://www.cdotrends.com/sites/default/files/Cloud_4.jpg",
    //     serviceName: "Experts in Configuration Management Tools",
    //     serviceDesc: "We have expertise in configuration management tools including Chef, Ansible, Puppet and Saltstack"
    // },
    // {   
    //     key: 11,
    //     imgLink: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    //     serviceName: "Support for all operational work",
    //     serviceDesc: "We have dedicated support team to handle all of your operational workload."
    // },
    // {   
    //     key: 12,
    //     imgLink: "",
    //     serviceName: "Expertise in orchestration tools",
    //     serviceDesc: "Expertise in orchestration tools Kubernetes, Docker and Swarm."
    // },
    // {   
    //     key: 13,
    //     imgLink: "https://image.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg",
    //     serviceName: "APIs Testing",
    //     serviceDesc: "We'll test your APIs before launching the final product in the market through tools like Postman, Swagger, etc."
    // },
    // {   
    //     key: 14,
    //     imgLink: "https://stackify.com/wp-content/uploads/2017/08/Cloud-Monitoring-Header-min.jpg",
    //     serviceName: "Job Scheduling & Monitoring",
    //     serviceDesc: "Automated job scheduling and monitoring services through Airflow and Flower."
    // },
    // {   
    //     key: 15,
    //     imgLink: "https://image.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg",
    //     serviceName: "Database Management",
    //     serviceDesc: "Make sure your database is robust and performs well when operational. Consider our database management services using tools like Snowflake"
    // },
    // {   
    //     key: 16,
    //     imgLink: "https://image.freepik.com/free-vector/abstract-low-poly-connection-lines-digital-technology-background_1017-25550.jpg",
    //     serviceName: "Building Data Pipeline",
    //     serviceDesc: "Data pipeline building using Kafka."
    // },
    // {   
    //     key: 17,
    //     imgLink: "https://image.freepik.com/free-vector/cloud-computing-data-streaming-concept_1017-31867.jpg",
    //     serviceName: "Cloud Management",
    //     serviceDesc: "Cloud management by Terraform."
    // },
    // {   
    //     key: 18,
    //     imgLink: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    //     serviceName: "L1, L2 & L3 level of engineers",
    //     serviceDesc: "We have L1, L2 & L3 level of engineers to provide regular backups of databases and 24/7 monitoring."
    // },
];

function showPopup(key){
    key = key-1;
    popupimg.src = Services[key].imgLink;
    popuptitle.innerHTML = Services[key].serviceName;
    popupdesc.innerHTML = Services[key].serviceDesc;
    popup.style.display = "grid";
}

function hidePopup(){
    popup.style.display = "none";
}


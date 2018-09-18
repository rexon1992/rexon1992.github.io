var store = [{
        "title": "Environmental-Economic Analysis of Solar PV",
        "excerpt":"Coming Soon! ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/econ_pv/",
        "teaser":null},{
        "title": "Building a R package pathways to facilitate data processing for Climate Watch Pathways",
        "excerpt":"Overview This package contains functions to process data for pathways. It contains functions to generate transition file and to transition from model indicator names to default indicator names. It also contains other functions to process data initially like delete rows, fill cells, find text etc. Installation You can install pathways...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/pathways_package/",
        "teaser":null},{
        "title": "Optimizing the Power Output of a Proton Exchange Membrane Fuel Cell System",
        "excerpt":"Project Summary The output of the fuel cell depends on the current density (i), active surface area (A), and the voltage (V). Voltage is a function of pressure of the cell (Pcell), current density (i) and active area (A). More the pressure, more is the voltage and hence, more is...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/pem/",
        "teaser":null},{
        "title": "3D World Map of Total Emissions and Per Capita Emissions by Country",
        "excerpt":"","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/project_3d/",
        "teaser":null},{
        "title": "Financial Modeling of a Natural Gas Combustion Turbine Power Plant",
        "excerpt":"Abstract Investment in electricity generation infrastructure if often thought to be as long lived and risky. Which is true in some cases. However our hypothesis is that unlike other generation infrastructure, investment in natural gas combustion turbine power plants is less risker and can be recovered sooner. To test our...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/project_ngct/",
        "teaser":"http://localhost:4000/assets/images/ngct.jpg"},{
        "title": "Statistical Modeling of US Energy Demand Using Regional Energy Consumption Survey Data",
        "excerpt":"Introduction The rapidly growing world energy use has already raised concerns over supply difficulties, exhaustion of energy resources and heavy environmental impacts (ozone layer depletion, global warming, climate change, etc.). The global contribution from buildings towards energy consumption, both residential and commercial, has steadily increased reaching figures between 20% and...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/project_recs/",
        "teaser":null},{
        "title": "Automating Web Scraping Using Selenium in Python",
        "excerpt":"Python Script from selenium import webdriverfrom selenium.webdriver.support.wait import WebDriverWaitfrom selenium.webdriver.support import expected_conditions as ECfrom selenium.webdriver.common.by import Byimport pandas as pdimport itertools as itdriver = webdriver.Chrome()driver.get(\"https://www.climatechangecommunication.org/climate-change-opinion-map/\")# switch to iframeWebDriverWait(driver, 10).until(EC.frame_to_be_available_and_switch_to_it((By.XPATH, \"//iframe[@src = 'https://environment.yale.edu/ycom/factsheets/MapPage/2017Rev/?est=happening&amp;type=value&amp;geo=county']\")))def alt_apend(old_list): list_1=old_list[2:len(old_list):5] list_2=old_list[4:len(old_list):5] new_list=[None]*(len(list_1)+len(list_2)) new_list[::2]=list_1 new_list[1::2]=list_2 return(new_list)# select options and download datacongressional_dist=WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, \"//*[@id='cd']\")))congressional_dist.click()names=WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.XPATH, \"//*[@id='document']/div[*]//*[@class='name']\")))labels=WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.XPATH, \"//*[@id='document']/div[*]//*[@class='label']\")))columns=[]for...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/se_py/",
        "teaser":null},{
        "title": "Modeling Adoption of Residential Solar PV",
        "excerpt":"Coming Soon! ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/solar_project/",
        "teaser":null},{
        "title": "Topic Modeling of Countries' Nationally Determined Contributions (NDCs) Using STM package in R",
        "excerpt":"Coming Soon! ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/stm/",
        "teaser":null},{
        "title": "Balancing deployment and innovation of low-carbon technologies",
        "excerpt":"Low carbon technologies are expensive and without subsidies from the government, most of these technologies are not economically feasible. As these technologies are expensive, they do not have a very high demand for them at that high price. Because there is not much demand, it is difficult to deploy these...","categories": ["Energy Policy"],
        "tags": ["Energy Policy"],
        "url": "http://localhost:4000/energy%20policy/balancing-inovation-deployment/",
        "teaser":null},{
        "title": "Was restructuring the US Power Markets necessary?",
        "excerpt":"The electricity industry spawned in 1882 in the financial district of New York City when Thomas Edison’s utility business first provided electricity to neighboring customers. The customers had to be located within a mile of the power plant because, as the transmission was in DC, the resistance in the wires...","categories": ["Electricity Markets"],
        "tags": [],
        "url": "http://localhost:4000/electricity%20markets/deregulation-necessary/",
        "teaser":null},{
        "title": "What really happened to Solyndra?",
        "excerpt":"Solyndra was a company which made innovative solar photovoltaic systems. Instead of conventional flat cell solar panels they made cylindrical cell panels coated with copper indium gallium selenide (CIGS) (1). A cylindrical cell could capture the direct, diffused and reflected radiation from the sun 360 degrees around it. This resulted...","categories": ["Renewable Energy"],
        "tags": ["Solar energy"],
        "url": "http://localhost:4000/renewable%20energy/solyndra/",
        "teaser":null},{
        "title": "What is the Clean Power Plan and why it might not survive?",
        "excerpt":"On August 3, 2015, the Environmental Protection Agency (EPA) announced the Clean Power Plan (CPP). As per the CPP, the EPA sets a certain target for emissions reduction for each state and the states have a choice of which path to follow to achieve the target. Depending on current emissions...","categories": ["Energy Policy"],
        "tags": ["Energy Policy"],
        "url": "http://localhost:4000/energy%20policy/clean-power-plan/",
        "teaser":null}]

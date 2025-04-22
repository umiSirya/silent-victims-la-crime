**Silent Victims: Analyzing Child-Targeted Crimes in LA** 

### **Project Summary**

This project analyzes publicly available crime data from the Los Angeles Police Department (LAPD), sourced from data.gov, with a focus on crimes against children in Los Angeles from 2020 to 2025\. The dataset, which covers general crime data, was cleaned using Python to address issues like missing values and inconsistencies. Visualizations in Tableau were created to explore key questions specific to child victimization, including the most common crime types, areas with the highest case concentration, and patterns in victim demographics. The insights aim to support better strategies for protecting children and addressing child-targeted crimes in the city.

**Problem Statement**

Crimes against children in Los Angeles are a serious concern, yet patterns often go unnoticed due to messy or incomplete data. This project aims to clean LAPD crime data from 2020–2025 and use visual analysis to uncover trends in offense types, locations, demographics, and weapons used—helping stakeholders better understand and address child-targeted crimes.

This project aims to:

1. Clean and standardize the dataset for consistency and accuracy  
2. Focus on crimes committed against children  
3. Create Tableau visualizations that highlight:  
   * High-risk locations (hotspots)

   * Common weapons used against child victims

   * Victim demographics (age, gender, descent)

   * Temporal crime trends from 2020–2025

### **Target Audience**

This analysis is designed for:

1. **Law enforcement agencies & crime analysts**, to inform strategic policing and hotspot monitoring  
2. **Child protection organizations & NGOs**, to support intervention planning and outreach  
3. **Policy makers**, for data-informed decisions on safety regulations and resource allocation  
4. **Community leaders & social workers**, to identify vulnerable populations and guide support programs

### **Technical Details**

#### **Python Version**

Python 3.x

#### **Core Concepts Applied**

**Data Types**: Strings, lists, dictionaries  
**Control Structures**: Filtering logic for data validation  
**Functions**: Reusable preprocessing steps  
**File Handling**: Reading and exporting CSV files

#### **Key Libraries**

`pandas`: Data cleaning and manipulation  
`numpy`: Handling missing data  
`datetime`: Standardizing date/time formats

### **Program Structure**

#### **Data Cleaning Workflow**

* Remove rows with critical missing values

* Format and standardize date/time fields

* Handle duplicate and inconsistent entries

* Clean and unify crime category, victim demographics, and location fields

* Export a cleaned dataset (`cleaned_crime_data.csv`) for Tableau visualization

**Visualization in Tableau**

The Tableau dashboard focuses on visual storytelling, highlighting key patterns in crimes against children. The visualizations include:

1. **Which crimes are most commonly committed against children?**  
    → *A treemap shows the frequency of various crime types involving child victims, highlighting the most prevalent offenses.*

2. **What areas in LA have the highest concentration of reported child victim cases?**  
    → *A map displays reported cases by location using color-coded categories or a heatmap layer to indicate density and identify hotspots.*

3. **What is the gender distribution among victims?**  
    → *A pie chart presents the breakdown of male and female child victims to reveal gender-based patterns in victimization.*

4. **Which descent group has the highest or lowest average victim age?**  
    **→** *A bar plot compares average victim ages across different descent groups, showing demographic disparities.*

5. **How has the number of reported victim cases changed from 2020 to 2025?**  
    **→** *A bar chart or line graph tracks the number of reported child victim cases over time to reveal trends.*

6. **What are the most frequent tools of harm in child-related offenses?**  
    → *A horizontal bar chart shows the most commonly used weapons against children based on victim count.*

#### **Recommendations Based on Visual Insights**

1. Increase patrol and intervention in crime hotspots  
2. Target prevention campaigns in neighborhoods with recurring child-targeted crimes  
3. Strengthen policies addressing weapon use in child-related offenses  
4. Improve child-focused safety initiatives for identified vulnerable age groups

### **Project Timeline**

| Phase | Description | Duration |
| ----- | ----- | ----- |
| Day 1 | Data collection and full data cleaning in Python | 1 day |
| Day 2 | Import cleaned data into Tableau, build dashboard | 1 day |

**Program Design**

**Platform**: Google Colab or Python script  
**Output File**: `cleaned_crime_data.csv` for Tableau input  
**Dashboard**: Interactive Tableau dashboard with filters and multiple visuals

### **Challenges**

1. Missing or inaccurate geolocation data (e.g., 0°, 0° coordinates)  
2. Typos and inconsistent entries due to manual transcription  
3. Large dataset requiring efficient preprocessing methods

**Future Improvements**

1. Integrate demographic/socioeconomic datasets to explore deeper context  
2. Add Tableau features like year sliders or animated transitions  
3. Include filters by weapon type, arrest outcome, and more victim details


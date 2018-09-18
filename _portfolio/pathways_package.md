---
title: "Building a R package pathways to facilitate data processing for Climate Watch Pathways"
header:
sidebar:
  - title: "Additional Information"
    text: <a href="https://github.com/rexon1992/pathways">Explore Package On Github</a>
---
<!-- README.md is generated from README.Rmd. Please edit that file -->

Overview
--------

This package contains functions to process data for pathways. It contains functions to generate transition file and to transition from model indicator names to default indicator names. It also contains other functions to process data initially like delete rows, fill cells, find text etc.

Installation
------------

You can install pathways from github using devtools.

If you are using devtools for the first time you will need to install it using:

``` r
install.packages("devtools")
```

You can install pathways using:

``` r
library(devtools)
install_github("rexon1992/pathways")
library(pathways)
```

General Workflow
----------------

This is an example of a typical workflow. Note that all the arguments passed into the functions are for illustrative purpose. File names and other arguments may depending on the nomenclature user chooses. Please read the function help pages for more information.

### Converting Source Data to Raw Data

Below is the sample original source data file.

``` r
#> A tibble: 720 x 5
#>   Indicator           Scenario          Sector      Year MEGATONNE
#>   <chr>               <chr>             <chr>      <dbl>     <dbl>
#> 1 Emissions by Sector AEO2015 REFERENCE COMMERCIAL  2015      967.
#> 2 Emissions by Sector AEO2015 REFERENCE COMMERCIAL  2016      990.
#> 3 Emissions by Sector AEO2015 REFERENCE COMMERCIAL  2017     1006.
#> 4 Emissions by Sector AEO2015 REFERENCE COMMERCIAL  2018     1031.
#> 5 Emissions by Sector AEO2015 REFERENCE COMMERCIAL  2019     1054.
#> 6 Emissions by Sector AEO2015 REFERENCE COMMERCIAL  2020     1087.
#> 7 Emissions by Sector AEO2015 REFERENCE COMMERCIAL  2021     1101.
#> 8 Emissions by Sector AEO2015 REFERENCE COMMERCIAL  2022     1111.
```

To use the function of this package which convert the data and make it ready for upload, it has to be converted to the following format. All the headers other than the years must exactly match the ones in the following template. The package contains some general functions to delete, find and fill data in a dataframe which can be used to process the source data.

The data values do not have to be in a particular format. For example, the Model Incicator Name can be any think like Emissions by Sector-Productive, Emissions by Sector Productive etc.

``` r
#>     Model        Region          Scenario                Model Indicator Name     Unit of Entry   2016       2017       2018      2019       2020       2021
#>1    RR    United States      HIGH NUCLEAR       Emissions by Sector|PRODUCTIVE      MEGATONNE     1309.0257  1281.5625  1276.361  1277.6667  1278.4909  1159.8612
#>2    RR    United States AEO2015 REFERENCE      Emissions by Sector|RESIDENTIAL      MEGATONNE     971.6919   967.3204   971.834   977.2520   990.4161   992.1451
#>3    RR    United States          HIGH CCS      Emissions by Sector|RESIDENTIAL      MEGATONNE     1048.2860  1038.1109  1037.936  1046.8821  1056.1125  953.2898
#>4    RR    United States   HIGH RENEWABLES      Emissions by Sector|RESIDENTIAL      MEGATONNE     1058.8847  1034.0865  1037.559  1039.1316  1024.0665  907.8701
#>5    RR    United States   MIXED RESOURCES      Emissions by Sector|RESIDENTIAL      MEGATONNE     1047.3803  1025.2312  1018.146  1011.5801  1008.3327  891.0735
#>6    RR    United States      HIGH NUCLEAR      Emissions by Sector|RESIDENTIAL      MEGATONNE     1061.0213  1024.0253  1008.834  999.8088   987.9709   853.9611
#>7    RR    United States AEO2015 REFERENCE   Emissions by Sector|TRANSPORTATION      MEGATONNE     1929.4430  1920.1862  1921.254  1917.1024  1911.1245  1901.2237
#>8    RR    United States      HIGH NUCLEAR   Emissions by Sector|TRANSPORTATION      MEGATONNE     1930.8548  1920.5908  1919.715  1914.0895  1905.8524  1861.8619
```

### Transforming the Raw Data and generating other supporting files

After the Source Data is converted to Raw Data format, the names of the indicators have to be changed to Default Indicator Names.

Use the following command to generate a transition file

``` r
gen_tr_file("example/rawdata.csv")
```

This will generate a csv file called "rawdata\_TR.csv" in the same directory as the raw data file. The transition file contains a list of all the indicators in the raw data and the original units of entry.

It contains an empty column called "Default Indicator Names". Enter the The Default Indicator Names corresponding to Model Indicator Names in this column. If any model indicator does not have a matching indicator leaving the default indicator name field blank will delete the indicator and all the data associated with it from the final file.

It is also possible to add two indicators and assign it to one default indicator. In order to do so add a row below the Model Indicator Name column in the transition file with the indicators to be added separated with a "\+" sign (e.g. Emissions by Sector\|COMMERCIAL\+Emissions by Sector\|RESIDENTIAL), add the unit of entry and enter the Default Indicator Name to which the sum has to be assigned

It also contains an empty column called "Note". Enter any notes (for e.g. any subtle difference between scope of model indicator and default indicator) if any. These notes will be carried forward while uploading the notes upload template.

Following is an example of a transition file generated

``` r
#>                                            Model Indicator Name   Unit of Entry   Default Indicator Name   Note
#>1                                 Emissions by Sector|COMMERCIAL     MEGATONNE                            
#>2                                 Emissions by Sector|PRODUCTIVE     MEGATONNE                            
#>3                                Emissions by Sector|RESIDENTIAL     MEGATONNE                            
#>4                             Emissions by Sector|TRANSPORTATION     MEGATONNE                            
#>5 Emissions by Sector|COMMERCIAL+Emissions by Sector|RESIDENTIAL     MEGATONNE                            
```

Note: running the gen\_tr\_file function will replace the existing transition file. Hence this command must be run only once unless there is a change in model indicator names or additions or subtractions of model indicators.

After the transition file is updated, all the indicators which need to be assigned to default indicators are assigned and the file is saved, run the following command to convert the raw data in to upload data.

``` r
transition_with_add("example/rawdata.csv","example/rawdata_TR_updated.csv",notes = 1, "example/ind_list_production.xlsx")
```

This will replace all the model indicator names with corresponding defatul indictor names, add the indicators which are specified to be added in the transition file and write a file called rawdata\_UL.csv in the same directory as the transition file. This can be uploaded on the portal.

Following is an example of an upload file

``` r
#>      Model        Region          Scenario                                  Default Indicator Name Unit of Entry       2016       2017      2018       2019
#>1        RR United States      HIGH NUCLEAR            Emissions|CO2 Emissions by Sector|Productive     MEGATONNE  1309.0257  1281.5625  1276.361  1277.6667
#>2        RR United States AEO2015 REFERENCE Buildings|Residential building GHG Emissions by Gas|CO2     MEGATONNE   971.6919   967.3204   971.834   977.2520
#>3        RR United States          HIGH CCS Buildings|Residential building GHG Emissions by Gas|CO2     MEGATONNE  1048.2860  1038.1109  1037.936  1046.8821
#>4        RR United States   HIGH RENEWABLES Buildings|Residential building GHG Emissions by Gas|CO2     MEGATONNE  1058.8847  1034.0865  1037.559  1039.1316
#>5        RR United States   MIXED RESOURCES Buildings|Residential building GHG Emissions by Gas|CO2     MEGATONNE  1047.3803  1025.2312  1018.146  1011.5801
#>6        RR United States      HIGH NUCLEAR Buildings|Residential building GHG Emissions by Gas|CO2     MEGATONNE  1061.0213  1024.0253  1008.834   999.8088
#>7        RR United States AEO2015 REFERENCE        Emissions|CO2 Emissions by Sector|Transportation     MEGATONNE  1929.4430  1920.1862  1921.254  1917.1024
#>8        RR United States      HIGH NUCLEAR        Emissions|CO2 Emissions by Sector|Transportation     MEGATONNE  1930.8548  1920.5908  1919.715  1914.0895
#>9        RR United States   HIGH RENEWABLES        Emissions|CO2 Emissions by Sector|Transportation     MEGATONNE  1931.5498  1920.2347  1919.035  1912.5660
#>10       RR United States   MIXED RESOURCES        Emissions|CO2 Emissions by Sector|Transportation     MEGATONNE  1931.4653  1920.5047  1919.395  1913.1916
#>11       RR United States          HIGH CCS             Emissions|CO2 Emissions by Sector|Buildings     MEGATONNE  2068.5684  2051.7622  2055.253  2078.1373
```

If the value of notes is set to 1 (like it is in this case) it will also generate and write a file called "rawdata\_notes.csv" to enter notes and conversion factors for indicators. Also, if the value of notes is set to one the path to file containing the most updated list of indicators on the portal has to be specified for it to work. As the file is maintained in an ".xlsx" format, this input accepts an xlsx file.

The notes file contains list of all the indicators in the upload file, unit of entry (Model Unit), Default Unit (standardize pathways unit), an empty column for model name, an empty column to specify conversion factors and an empty column to specify notes if any. The notes entered in the transition file will be automatically assigned to corresponding indicators.

Following is an example of a notes file

``` r
#>                                    Default Indicator Name Model Name          Unit of Entry       Default Unit  Conversion Factor                                    Note
#>1                Financial|Cumulative Net Investment|Coal         RR Running Sum of 2014 $T billion US$2016/yr                                                               
#>2         Financial|Cumulative Net Investment|Natural Gas         RR Running Sum of 2014 $T billion US$2016/yr                                                               
#>3  Financial|Cumulative Net Investment|Petroleum Products         RR Running Sum of 2014 $T billion US$2016/yr                                                               
#>4  Financial|Cumulative Net Investment|Total Fossil Fuels         RR Running Sum of 2014 $T billion US$2016/yr                                                               
#>5  Buildings|Commercial building GHG Emissions by Gas|CO2         RR              MEGATONNE         Mt CO2e/yr                                                               
#>6            Emissions|CO2 Emissions by Sector|Productive         RR              MEGATONNE              Mt/yr                                                               
#>7 Buildings|Residential building GHG Emissions by Gas|CO2         RR              MEGATONNE              Mt/yr                                                               
#>8        Emissions|CO2 Emissions by Sector|Transportation         RR              MEGATONNE              Mt/yr                                                               
#>9             Emissions|CO2 Emissions by Sector|Buildings         RR              MEGATONNE              Mt/yr                          Sum of  residential and commercial emissions
```

The column "Default Unit" is made avaliable just for reference and to make assigning conversion factors easier. This column has to be deleted for the file to be uploaded on the portal.

The following command will generate a scenario meta information file

``` r
gen_sen_meta("example/rawdata_UL.csv","example/sen_meta_template.csv")
```

This will generate and write a file called "rr\_rawdata\_SEN\_META\_UL.csv" which contains minimum information like the scenario name and the model name in the default template which can be directly uploaded on the portal the create scenarios. To add more information about scenarios this file can be edited and re-uploaded

Uploading the Data on Pathways Portal
-------------------------------------

Once all the files are created and updated upload them in the following order

1.  rawdata\_NOTES.csv
2.  rawdata\_SEN\_META\_UL.csv
3.  rawdata\_UL.csv

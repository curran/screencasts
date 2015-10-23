# Splitting Charts

[![](videoThumbnail.png)](https://www.youtube.com/watch?v=6Xynj_pBybc&feature=youtu.be)

 * [Video on YouTube: Splitting Charts (Part 1): Stacked & Grouped Bar Charts ](https://www.youtube.com/watch?v=6Xynj_pBybc&feature=youtu.be) (covers examples 1 - 19) Recorded at the event [SF Big Analytics: D3 Visualization Workshop (Alpine Academy Series)](http://www.meetup.com/SF-Big-Analytics/events/225450873/) on Oct. 21, 2015.
 * [Code Examples](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/)

This tutorial deals with the theme of "splitting charts", exploring how simple visualizations can be modified to support an additional dimension of data. Rectangles will be split into stacked bars, circles will be split into pies and donuts, and lines will be split apart.

Topics covered include:

 * stacked bar chart
 * grouped bar chart
 * pie chart
 * donut chart
 * line chart with multiple lines

Additional "goodies" that are covered include:

 * customizing a D3 number format to use "B" for billions
 * rotating tick mark labels to avoid overlap on the X axis
 * using [d3.layout.stack](https://github.com/mbostock/d3/wiki/Stack-Layout)

This tutorial assumes you already know the topics covered in [Introduction to D3](https://github.com/curran/screencasts/tree/gh-pages/introToD3).

## Data

The [data used in this tutorial](./datasets) begins with a single number, the current population of the World. This single number is conceptually split by country, religion, and time, deriving more complex data tables that require more complex visual presentations.

### Population

This is the kind of data you see if you [Google population of China](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=population%20of%20china).

The following tables are derived from the [United Nations Population Division](http://esa.un.org/unpd/wpp/DVD/). The data has been preprocessed to extract population of the largest 5 countries for each year from 1950 to 2015, then transformed using this [preprocessing script](https://github.com/curran/data/blob/gh-pages/un/population/2015Extract/process.js)

 * [worldPopulation2015.csv](https://github.com/curran/screencasts/blob/gh-pages/splittingCharts/datasets/worldPopulation2015.csv)
 * [worldPopulationByYear.csv](https://github.com/curran/screencasts/blob/gh-pages/splittingCharts/datasets/worldPopulationByYear.csv)
 * [populationByCountry2015.csv](https://github.com/curran/screencasts/blob/gh-pages/splittingCharts/datasets/populationByCountry2015.csv)
 * [populationByCountryByYear.csv](https://github.com/curran/screencasts/blob/gh-pages/splittingCharts/datasets/populationByCountryByYear.csv)

### Religion

This data is shown in this [report on The Global Religious Landscape from Pew Research](http://www.pewforum.org/2012/12/18/global-religious-landscape-exec/). It is also shown in this [interactive visualization](http://www.globalreligiousfutures.org/explorer#/?subtopic=15&chartType=bar&year=2010&data_type=number&religious_affiliation=all&destination=to&countries=Worldwide&age_group=all&pdfMode=false).

The following tables are derived from the [Pew Research Center Global Religious Landscape data set](https://github.com/curran/data/tree/gh-pages/pew/religion), using this [processing script](https://github.com/curran/data/blob/gh-pages/pew/religion/processed/process.js):

 * [populationByCountry2010.csv](https://github.com/curran/screencasts/blob/gh-pages/splittingCharts/datasets/populationByCountry2010.csv)
 * [religionByCountryTop5.csv](https://github.com/curran/screencasts/blob/gh-pages/splittingCharts/datasets/religionByCountryTop5.csv)
 * [religionWorldTotals.csv](https://github.com/curran/screencasts/blob/gh-pages/splittingCharts/datasets/religionWorldTotals.csv)

Sketchy preprocessing disclaimer - the original data contained values "< 10000", which were converted to "0" in the preprocessing step so the data can be visualized.

## Examples

Check out the [Example Viewer](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/1). Use left and right arrow keys to navigate.

<%= examples %>

Feel free to use and modify this presentation framework for your own presentations! MIT License.

By [Curran Kelleher](https://github.com/curran/portfolio) October 2015

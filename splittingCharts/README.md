# Splitting Charts

 * [Video on YouTube: Splitting Charts](not posted yet)
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

## Examples

Check out the [Example Viewer](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/1). Use left and right arrow keys to navigate.

 * [Example 1](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/1) - ([run it!](http://curran.github.io/screencasts/splittingCharts/examples/code/snapshot01) | [index.html](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/1/index.html)) - Bar Chart
 * [Example 2](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/2) - ([run it!](http://curran.github.io/screencasts/splittingCharts/examples/code/snapshot02) | [index.html](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/2/index.html)) - Line Chart
 * [Example 3](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/3) - ([run it!](http://curran.github.io/screencasts/splittingCharts/examples/code/snapshot03) | [index.html](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/3/index.html)) - Scatter Plot
 * [Example 4](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/4) - ([run it!](http://curran.github.io/screencasts/splittingCharts/examples/code/snapshot04) | [index.html](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/4/index.html)) - World Population Single Bar
 * [Example 5](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/5) - ([run it!](http://curran.github.io/screencasts/splittingCharts/examples/code/snapshot05) | [index.html](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/5/index.html)) - Custom number format
 * [Example 6](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/6) - ([run it!](http://curran.github.io/screencasts/splittingCharts/examples/code/snapshot06) | [index.html](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/6/index.html)) - Top 5 countries
 * [Example 7](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/7) - ([run it!](http://curran.github.io/screencasts/splittingCharts/examples/code/snapshot07) | [index.html](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/7/index.html)) - Religions world totals
 * [Example 8](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/8) - ([run it!](http://curran.github.io/screencasts/splittingCharts/examples/code/snapshot08) | [index.html](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/8/index.html)) - Small tick labels
 * [Example 9](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/9) - ([run it!](http://curran.github.io/screencasts/splittingCharts/examples/code/snapshot09) | [index.html](http://curran.github.io/screencasts/splittingCharts/examples/viewer/#/9/index.html)) - Tilting tick labels

Feel free to use and modify this presentation framework for your own presentations! MIT License.

By [Curran Kelleher](https://github.com/curran/portfolio) October 2015

# FeederApplication
 This application is used to record data for ducks fed in a park by people visiting the park. The recorded data can also be viewed and extracted on a separate page.
 

 Technologies used -
    1. Frontend - React JS
    2. Backend - Spring Boot
    3. Database - Spring H2

Approach taken -
The application landing page consists of the form to capture data from users. On click of submit, there is a 
rest api call to Rest API endpoint to save the captured data which again gets saved to the in memory database H2.
After save, the page is redirected to display a message that the data has been recorded. There are also two separate links provided
on the redirected page to Go back to fill the data again and another one to view the data.
Since the scientist is interested in using the data for reporting purposes, the already saved data can be viewed in a tabular
form which is rendered using ag-grid. The reason ag-grid has been used is so that the scientist can pull out an excel report
from the grid which also has other features such as filter, sorting, etc., for easy handling of the data.
React Router has been used for better navigation between the pages.

There are 2 restful APIs exposed, one for save and one for fetch. Integration test cases have been written for both the controller methods. 
A scheduler method has been added to run at 6pm everday to capture the feeding data by an old lady with the same data values, so that
she doesn't have to use the application everyday.


H2 database is used, since the data extraction and reporting can be achieved with the ag-grid on the view functionality.

The component diagram jpg file is pushed to the root directory.

The packaged JAR file is built and deployed to heroku under the app name feeder-application (https://feeder-application.herokuapp.com/)


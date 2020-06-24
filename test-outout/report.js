$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Get.feature");
formatter.feature({
  "line": 1,
  "name": "ProfrieghtQuote GetQuotes",
  "description": "",
  "id": "profrieghtquote-getquotes",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Submit Quotes details",
  "description": "",
  "id": "profrieghtquote-getquotes;submit-quotes-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I want to open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on getQuotes button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am able to enter the details",
  "rows": [
    {
      "cells": [
        "Tom"
      ],
      "line": 7
    },
    {
      "cells": [
        "Henry"
      ],
      "line": 8
    },
    {
      "cells": [
        "tom123@gmail.com"
      ],
      "line": 9
    },
    {
      "cells": [
        "infolabs"
      ],
      "line": 10
    },
    {
      "cells": [
        "Sydney"
      ],
      "line": 11
    },
    {
      "cells": [
        "12-06-2020"
      ],
      "line": 12
    },
    {
      "cells": [
        "Melbourne"
      ],
      "line": 13
    },
    {
      "cells": [
        "26"
      ],
      "line": 14
    },
    {
      "cells": [
        "16"
      ],
      "line": 15
    },
    {
      "cells": [
        "22"
      ],
      "line": 16
    },
    {
      "cells": [
        "55"
      ],
      "line": 17
    },
    {
      "cells": [
        "kg"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetQuotesTest.i_want_to_open_the_browser()"
});
formatter.result({
  "duration": 11987530000,
  "status": "passed"
});
formatter.match({
  "location": "GetQuotesTest.i_click_on_getQuotes_button()"
});
formatter.result({
  "duration": 2593715900,
  "status": "passed"
});
formatter.match({
  "location": "GetQuotesTest.i_am_able_to_enter_the_details(DataTable)"
});
formatter.result({
  "duration": 6306696000,
  "status": "passed"
});
formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Profreightquote Homepage",
  "description": "",
  "id": "profreightquote-homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "HomePage validation",
  "description": "",
  "id": "profreightquote-homepage;homepage-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I want to launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I want to verify pagetitle",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I want to verify the homepage details",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.i_want_to_launch_the_browser()"
});
formatter.result({
  "duration": 11955394200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.i_want_to_verify_pagetitle()"
});
formatter.result({
  "duration": 110084900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.i_want_to_verify_the_homepage_details()"
});
formatter.result({
  "duration": 762495100,
  "status": "passed"
});
});
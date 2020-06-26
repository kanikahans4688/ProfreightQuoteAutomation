$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetQuotes.feature");
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
  "duration": 566638700,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\kanika\\eclipse-workspace\\ProfreightquoteAutomation\\.\\lib\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat BaseClass.TestBase.intialization(TestBase.java:53)\r\n\tat stepDefinition.GetQuotesTest.i_want_to_open_the_browser(GetQuotesTest.java:18)\r\n\tat ✽.Given I want to open the browser(GetQuotes.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GetQuotesTest.i_click_on_getQuotes_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetQuotesTest.i_am_able_to_enter_the_details(DataTable)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 5071400,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\kanika\\eclipse-workspace\\ProfreightquoteAutomation\\.\\lib\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat BaseClass.TestBase.intialization(TestBase.java:53)\r\n\tat stepDefinition.HomePageTest.i_want_to_launch_the_browser(HomePageTest.java:17)\r\n\tat ✽.Given I want to launch the browser(HomePage.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageTest.i_want_to_verify_pagetitle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.i_want_to_verify_the_homepage_details()"
});
formatter.result({
  "status": "skipped"
});
});
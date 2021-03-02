$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyAccountLogin.feature");
formatter.feature({
  "line": 3,
  "name": "Testing My acount-loging feature",
  "description": "descreption: I need to test my account log in functionality",
  "id": "testing-my-acount-loging-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#Scenario: Testing log-in feature with valid username and password"
    },
    {
      "line": 8,
      "value": "#Given open the browser"
    },
    {
      "line": 9,
      "value": "#When User enter url \" http://practice.automationtesting.in/\""
    },
    {
      "line": 10,
      "value": "#And User clicks on account manu"
    },
    {
      "line": 11,
      "value": "#And User enters username"
    },
    {
      "line": 12,
      "value": "#And User enters password"
    },
    {
      "line": 13,
      "value": "#And User clicks on the login button"
    },
    {
      "line": 14,
      "value": "#Then User should be loged in successfully"
    },
    {
      "line": 18,
      "value": "#Scenario: Testing log-in feature with valid username and password"
    },
    {
      "line": 19,
      "value": "#Scenario: Testing log-in feature with valid username and password"
    },
    {
      "line": 20,
      "value": "#Given open the browser"
    },
    {
      "line": 21,
      "value": "#When User enter url \" http://practice.automationtesting.in/\""
    },
    {
      "line": 22,
      "value": "#And User clicks on account manu"
    },
    {
      "line": 23,
      "value": "#And User enters username \"Arad2015@gmail.com\""
    },
    {
      "line": 24,
      "value": "#And User enters password \"Arad2015@gmail.com\""
    },
    {
      "line": 25,
      "value": "#And User clicks on the login button"
    },
    {
      "line": 26,
      "value": "#Then User should be loged in successfully"
    },
    {
      "line": 31,
      "value": "#Scenario Outline: Testing log-in feature with inValid username and password"
    },
    {
      "line": 32,
      "value": "#Given open the browser"
    },
    {
      "line": 33,
      "value": "#When User enter url \" http://practice.automationtesting.in/\""
    },
    {
      "line": 34,
      "value": "#And User clicks on account manu"
    },
    {
      "line": 35,
      "value": "#And User enters username \"\u003cusername\u003e\""
    },
    {
      "line": 36,
      "value": "#And User enters password \"\u003cpassword\u003e\""
    },
    {
      "line": 37,
      "value": "#And User clicks on the login button"
    },
    {
      "line": 38,
      "value": "#Then Page must be verified"
    },
    {
      "line": 40,
      "value": "#Examples:"
    },
    {
      "line": 41,
      "value": "#| username        | password         |"
    },
    {
      "line": 42,
      "value": "#| Arad@gmail.com  | Arad2015@        |"
    },
    {
      "line": 43,
      "value": "#| Arad            | AA@selenium123   |"
    },
    {
      "line": 44,
      "value": "#| Arad2015        | Mahak@selenium   |"
    },
    {
      "line": 47,
      "value": "#sample: Log in with Data Tbale with the  single input"
    },
    {
      "line": 48,
      "value": "#Scenario: Testing log-in feature with Valid username and password"
    },
    {
      "line": 49,
      "value": "#Given open the browser"
    },
    {
      "line": 50,
      "value": "#When User enter url \" http://practice.automationtesting.in/\""
    },
    {
      "line": 51,
      "value": "#And User clicks on account manu"
    },
    {
      "line": 52,
      "value": "#And User enters username"
    },
    {
      "line": 53,
      "value": "#|Arad2015@gmail.com|"
    },
    {
      "line": 54,
      "value": "#|Arad2015@gmail.com|"
    },
    {
      "line": 55,
      "value": "#And User enters password"
    },
    {
      "line": 56,
      "value": "#|Arad2015@gmail.com|"
    },
    {
      "line": 57,
      "value": "#|Arad2015@gmail.com|"
    },
    {
      "line": 58,
      "value": "#And User clicks on the login button"
    },
    {
      "line": 59,
      "value": "#Then User should be loged in successfully"
    },
    {
      "line": 63,
      "value": "#sample: Log in with Data Tbale with the  single input"
    }
  ],
  "line": 64,
  "name": "Testing log-in feature with Valid username and password",
  "description": "",
  "id": "testing-my-acount-loging-feature;testing-log-in-feature-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "User enter url \" http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "User clicks on account manu",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User enters username",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 69
    },
    {
      "cells": [
        "Arad2015@gmail.com"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User enters password",
  "rows": [
    {
      "cells": [
        "password"
      ],
      "line": 72
    },
    {
      "cells": [
        "Arad2015@gmail.com"
      ],
      "line": 73
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User should be loged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountLoginStepDefinetion.open_the_browser()"
});
formatter.result({
  "duration": 2357549200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " http://practice.automationtesting.in/",
      "offset": 16
    }
  ],
  "location": "MyAccountLoginStepDefinetion.user_enter_url(String)"
});
formatter.result({
  "duration": 4194450700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinetion.user_clicks_on_account_manu()"
});
formatter.result({
  "duration": 4803591900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinetion.user_enters_username(DataTable)"
});
formatter.result({
  "duration": 124646200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinetion.user_enters_password(DataTable)"
});
formatter.result({
  "duration": 287373700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinetion.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 2720437800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinetion.user_should_be_loged_in_successfully()"
});
formatter.result({
  "duration": 466851400,
  "status": "passed"
});
});
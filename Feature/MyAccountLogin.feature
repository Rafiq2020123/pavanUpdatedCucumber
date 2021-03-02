

Feature: Testing My acount-loging feature
  descreption: I need to test my account log in functionality

 
  #Scenario: Testing log-in feature with valid username and password
    #Given open the browser
    #When User enter url " http://practice.automationtesting.in/"
    #And User clicks on account manu
    #And User enters username 
    #And User enters password 
    #And User clicks on the login button
    #Then User should be loged in successfully
    
    

 #Scenario: Testing log-in feature with valid username and password
    #Scenario: Testing log-in feature with valid username and password
    #Given open the browser
    #When User enter url " http://practice.automationtesting.in/"
    #And User clicks on account manu
    #And User enters username "Arad2015@gmail.com"
    #And User enters password "Arad2015@gmail.com"
    #And User clicks on the login button
    #Then User should be loged in successfully
   
    
    
    
#Scenario Outline: Testing log-in feature with inValid username and password
    #Given open the browser
    #When User enter url " http://practice.automationtesting.in/"
    #And User clicks on account manu
    #And User enters username "<username>"
    #And User enters password "<password>"
    #And User clicks on the login button
    #Then Page must be verified
  
 #Examples:
   #| username        | password         |
   #| Arad@gmail.com  | Arad2015@        |
   #| Arad            | AA@selenium123   |
   #| Arad2015        | Mahak@selenium   |


  #sample: Log in with Data Tbale with the  single input
  #Scenario: Testing log-in feature with Valid username and password
    #Given open the browser
    #When User enter url " http://practice.automationtesting.in/"
    #And User clicks on account manu
    #And User enters username 
    #|Arad2015@gmail.com|
    #|Arad2015@gmail.com|
    #And User enters password 
    #|Arad2015@gmail.com|
    #|Arad2015@gmail.com|
    #And User clicks on the login button
    #Then User should be loged in successfully



  #sample: Log in with Data Tbale with the  single input
  Scenario: Testing log-in feature with Valid username and password
    Given open the browser
    When User enter url " http://practice.automationtesting.in/"
    And User clicks on account manu
    And User enters username 
    |username|
    |Arad2015@gmail.com|
    And User enters password 
    |password|
    |Arad2015@gmail.com|
    And User clicks on the login button
    Then User should be loged in successfully

  


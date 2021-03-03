package testRuner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		
		features="Feature",
		glue = "stepDefinetions",
		
	    format ={"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml_output/cucumber.xml"},
		dryRun = false,
		 monochrome =true
	
		)





public class TestRuner {

	
}

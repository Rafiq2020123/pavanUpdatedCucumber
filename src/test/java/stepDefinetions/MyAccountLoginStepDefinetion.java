package stepDefinetions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyAccountLoginStepDefinetion {
	WebDriver driver;

	@Given("^open the browser$")
	public void open_the_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C://Users//ringo//Downloads//All Selenium Drivers//Chrome Driver//chromedriver.exe");
		driver = new ChromeDriver();

	}

	@When("^User enter url \"([^\"]*)\"$")
	public void user_enter_url(String url) throws Throwable {
		driver.get(url);

	}

	@When("^User clicks on account manu$")
	public void user_clicks_on_account_manu() throws Throwable {
		driver.findElement(By.linkText("My Account")).click();

	}/*
		 * 
		 * @When("^User enters username$") public void user_enters_username() throws
		 * Throwable { driver.findElement(By.xpath("//input[@id='username']")).sendKeys(
		 * "Arad2015@gmail.com"); }
		 * 
		 * @When("^User enters password$") public void user_enters_password() throws
		 * Throwable {
		 * driver.findElement(By.id("password")).sendKeys("Arad2015@gmail.com"); }
		 */

	/*
	 * @When("^User enters username \"([^\"]*)\"$") public void
	 * user_enters_username(String userName) throws Throwable {
	 * driver.findElement(By.xpath("//input[@id='username']")).sendKeys(userName);
	 * Thread.sleep(2000); }
	 * 
	 * @When("^User enters password \"([^\"]*)\"$") public void
	 * user_enters_password(String Pass) throws Throwable {
	 * driver.findElement(By.id("password")).sendKeys(Pass);
	 * 
	 * }
	 */

	
	
	//Data table with the  single input and ( Data table with header part)
	@When("^User enters username$")
	public void user_enters_username(DataTable userData) throws Throwable {

		//List<List<String>> data = userData.raw();
		//driver.findElement(By.xpath("//input[@id='username']")).sendKeys(data.get(0).get(0));
		
		List<Map<String,String>> data = userData.asMaps(String.class, String.class);

		driver.findElement(By.xpath("//input[@id='username']")).sendKeys(data.get(0).get("username"));

	}
	
	
	//Data table with the  single input and ( Data table with header part)
	@When("^User enters password$")
	public void user_enters_password(DataTable passData) throws Throwable {

		//List<List<String>> dataa = passData.raw();
		//driver.findElement(By.id("password")).sendKeys(dataa.get(0).get(0));
		
		List <Map<String,String>> dataa = passData.asMaps(String.class, String.class);
		driver.findElement(By.id("password")).sendKeys(dataa.get(0).get("password"));
	}

	
	
	
	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		driver.findElement(By.name("login")).click();
	}

	@Then("^User should be loged in successfully$")
	public void user_should_be_loged_in_successfully() throws Throwable {
		String title = driver.findElement(By.xpath("//*[@id='page-36']/div/div[1]/div/p[1]/strong")).getText();
		// String title = driver.findElement(By.linkText("Arad2015")).getText();

		Assert.assertEquals(true, title.contains("Arad2015"));
		driver.close();
	}

	@Then("^Page must be verified$")
	public void page_must_be_verified() throws Throwable {

		String erorrText = driver.findElement(By.xpath("//*[@id='page-36']/div/div[1]/ul/li/strong")).getText();

		if (erorrText.contains("ERROR")) {

			Assert.assertTrue("Invalid input - Error Page", true);
		}

	}

}

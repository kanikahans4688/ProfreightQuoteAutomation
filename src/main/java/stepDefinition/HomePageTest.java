package stepDefinition;

import com.pq.pages.HomePage;

import BaseClass.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class HomePageTest extends TestBase {
	
	HomePage homepage;
	
	@Given("^I want to launch the browser$")
	public void i_want_to_launch_the_browser() throws Throwable {
		
	    TestBase.intialization();
	}
	
	@Then("^I want to verify pagetitle$")
	public void i_want_to_verify_pagetitle() throws Throwable {
		
		HomePage homepage =new HomePage();
		String actual_title=  homepage.homepagetitle();
	    Assert.assertEquals(prop.getProperty("pagetitle"), actual_title);
	}

	@Then("^I want to verify the homepage details$")
	public void i_want_to_verify_the_homepage_details() throws Throwable {
	
		HomePage homepage =new HomePage();
		homepage.homePageDetails();
	    
	}

}

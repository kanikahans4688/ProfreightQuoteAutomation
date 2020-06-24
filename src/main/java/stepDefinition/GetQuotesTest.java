package stepDefinition;

import com.pq.pages.GetQuotesPage;

import BaseClass.TestBase;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GetQuotesTest extends TestBase{
	
	GetQuotesPage getQuotesPage;
	
	@Given("^I want to open the browser$")
	public void i_want_to_open_the_browser() throws Throwable {
		
		TestBase.intialization();
	    
	}
	
	@When("^I click on getQuotes button$")
	public void i_click_on_getQuotes_button() throws Throwable {
	   
		getQuotesPage=new GetQuotesPage();
		getQuotesPage.clickOnGetQuotesbutton();
	}

	@Then("^I am able to enter the details$")
	public void i_am_able_to_enter_the_details(DataTable quoteDetails) throws Throwable {
		getQuotesPage=new GetQuotesPage();
		getQuotesPage.fillQuotesDetails(quoteDetails);
	}	

}

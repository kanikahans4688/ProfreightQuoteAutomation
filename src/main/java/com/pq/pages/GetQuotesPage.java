package com.pq.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import BaseClass.TestBase;
import cucumber.api.DataTable;

public class GetQuotesPage extends TestBase {
	
	@FindBy(how=How.XPATH,using="//a[contains(text(),'Air Freight')]")
	WebElement airFrieght;
	
	@FindBy(how=How.XPATH,using="//button[@id='login-button-submit']")
	WebElement getQuotes;
	
	@FindBy(how=How.ID,using="quotes-first_name")
	WebElement firstName;
	
	@FindBy(how=How.NAME,using="Quotes[last_name]")
	WebElement lastName;
	
	@FindBy(how=How.XPATH,using="//input[@id='quotes-email']")
	WebElement mailId;
	
	@FindBy(how=How.ID,using="quotes-company")
	WebElement companyName;
	
	@FindBy(how=How.XPATH,using="//input[@id='quotes-pick_up_city']")
	WebElement pickupcity ;
	
	@FindBy(how=How.NAME,using="Quotes[pick_up_date_fake]")
	WebElement date;
	
	@FindBy(how=How.XPATH,using="//input[@id='quotes-delivery_city']")
	WebElement deliverycity;
	
	@FindBy(how=How.XPATH,using="//textarea[@id='quotes-description']")
	WebElement description;
	
	@FindBy(how=How.ID,using="quoteitems-0-item_length")
	WebElement length;
	
	@FindBy(how=How.NAME,using="QuoteItems[0][item_width]")
	WebElement width;
	
	@FindBy(how=How.ID,using="quoteitems-0-item_height")
	WebElement height;
	
	@FindBy(how=How.ID,using="quoteitems-0-item_weight")
	WebElement actualWeight;

	@FindBy(how=How.NAME,using="QuoteItems[0][item_counts]")
	WebElement unit;
	
	@FindBy(how=How.NAME,using="QuoteItems[0][item_stackable]")
	WebElement stackable;
	
	@FindBy(how=How.XPATH,using="//textarea[@id='quotes-comments']")
	WebElement comment;
	
	@FindBy(how=How.XPATH,using="//button[@id='login-button-submit']")
	WebElement submit;
	
	public GetQuotesPage() {
		
		 PageFactory.initElements(driver, this);
	}
	
	public void clickOnGetQuotesbutton() {
		
		getQuotes.click();
		
	}
	
	
	public void fillQuotesDetails(DataTable data) {
		
		List<List<String>> details=	data.raw();
		
		firstName.sendKeys(details.get(0).get(0));
		
		lastName.sendKeys(details.get(1).get(0));
		
		mailId.sendKeys(details.get(2).get(0));
		
		companyName.sendKeys(details.get(3).get(0));
		
		pickupcity.sendKeys(details.get(4).get(0));
		
		date.sendKeys(details.get(5).get(0));
		
		deliverycity.sendKeys(details.get(6).get(0));
		
		description.sendKeys(prop.getProperty("description"));
		
		length.sendKeys(details.get(7).get(0));
		
		height.sendKeys(details.get(8).get(0));
		
		width.sendKeys(details.get(9).get(0));
		
		actualWeight.sendKeys(details.get(10).get(0));
		
		unit.sendKeys(details.get(11).get(0));
		
		stackable.click();
		
		comment.sendKeys(prop.getProperty("comments"));
		
		submit.click();	
		
	}
}

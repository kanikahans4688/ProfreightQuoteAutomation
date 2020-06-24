package com.pq.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import BaseClass.TestBase;
import junit.framework.Assert;

public class HomePage extends TestBase {
	
	
   @FindBy(how=How.XPATH,using="//h1[@class='no-margin banner1-title']")
   WebElement headerText;
   
	@FindBy(how=How.XPATH,using="//a[contains(text(),'Air and Sea')]") 
	WebElement airandsea ;
	
	
	@FindBy(how=How.XPATH,using="//a[contains(text(),'Air Freight')]")
	WebElement airFrieght;
	
	@FindBy(how=How.XPATH,using="//a[contains(text(),'Personal Effects')]")
	WebElement personalEffects;
	
	@FindBy(how=How.LINK_TEXT,using="Sea Freight")
	WebElement seaFreight;
	
	@FindBy(how=How.XPATH,using="//button[@id='login-button-submit']")
	WebElement getQuotes;
	
	
	 public HomePage() {
		
		 PageFactory.initElements(driver, this);
	}
	
	public String homepagetitle() {
		
		return driver.getTitle();
	}
	
	public void   homePageDetails() {
		
		 Assert.assertEquals(true, headerText.isDisplayed());
		 Assert.assertEquals(true, airandsea.isDisplayed());
		 Assert.assertEquals(true, airFrieght.isDisplayed());
		 Assert.assertEquals(true, personalEffects.isDisplayed());
		 Assert.assertEquals(true, seaFreight.isDisplayed());
		 Assert.assertEquals(true, getQuotes.isDisplayed());
		 
		 
		 
		
		}

	
	
}

require 'rubygems'
require 'selenium-webdriver'

# Input capabilities
caps = Selenium::WebDriver::Remote::Capabilities.new
caps[:platform] = :MAC
caps["browserstack.debug"] = "true"
caps["build"] = "test awesomeness"
caps["browserstack.local"] = true

caps["browserstack.user"] = "my_user"
caps["browserstack.key"] = "my_key"

driver = Selenium::WebDriver.for(:remote,
  :url => "http://hub.browserstack.com/wd/hub",
  :desired_capabilities => caps)
driver.get "http://localhost:3000/"
1000.times { puts driver.execute_script "return err;";  sleep 1}
driver.quit

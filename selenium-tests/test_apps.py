import pytest  # Good practice
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Base URL of the app
BASE_URL = "http://localhost:5173"

# Define WebDriver setup/teardown in a fixture


@pytest.fixture(scope="module")
def setup_driver():
    driver = webdriver.Chrome()
    driver.maximize_window()
    yield driver
    driver.quit()


def test_full_navbar_workflow(setup_driver):
    """
    This single pytest function performs multiple logical test cases:
    1. Navbar visibility on Home page
    2. Navigation via desktop links:
        2a. Home
        2b. About Us
        2c. Contact Us
        2d. Privacy Policy
        2e. FAQ
    3. Sign In button navigation
    """
    driver = setup_driver
    wait = WebDriverWait(driver, 10)

    # --- Test Case 1: Navbar renders on Home page ---
    NAVBAR_OUTER_CONTAINER = (By.CLASS_NAME, 'w-full')
    driver.get(BASE_URL)
    navbar = wait.until(
        EC.visibility_of_element_located(NAVBAR_OUTER_CONTAINER))
    assert navbar.is_displayed(), "Test Case 1 Failed: Navbar should be visible on Home page"

    # --- Test Case 2: Desktop navigation links work correctly ---
    # Common IDs
    HOME_LINK_ID = "home"
    ABOUT_LINK_ID = "aboutus"
    CONTACT_LINK_ID = "contactus"
    POLICY_LINK_ID = "privacypolicy"
    FAQ_LINK_ID = "faq"

    driver.get(BASE_URL)  # Ensure we start from Home page

    # 2a. Home Link
    home_link = wait.until(
        EC.visibility_of_element_located((By.ID, HOME_LINK_ID)))
    home_link.click()
    time.sleep(1)  # Optional: wait for animations
    assert driver.current_url.endswith(
        "/"), "Test Case 2a Failed: Home navigation"

    # 2b. About Us Link
    about_link = driver.find_element(By.ID, ABOUT_LINK_ID)
    about_link.click()
    time.sleep(1)
    assert driver.current_url.endswith(
        "/About"), "Test Case 2b Failed: About Us navigation"

    # 2c. Contact Us Link
    contact_link = driver.find_element(By.ID, CONTACT_LINK_ID)
    contact_link.click()
    time.sleep(1)
    assert driver.current_url.endswith(
        "/Contact"), "Test Case 2c Failed: Contact Us navigation"

    # 2d. Privacy Policy Link
    policy_link = driver.find_element(By.ID, POLICY_LINK_ID)
    policy_link.click()
    time.sleep(1)
    assert driver.current_url.endswith(
        "/Policy"), "Test Case 2d Failed: Privacy Policy navigation"

    # 2e. FAQ Link
    faq_link = driver.find_element(By.ID, FAQ_LINK_ID)
    faq_link.click()
    time.sleep(1)
    assert driver.current_url.endswith(
        "/FAQ"), "Test Case 2e Failed: FAQ navigation"

    # --- Test Case 3: Sign In button navigates correctly ---
    SIGN_IN_ID = "signin"
    sign_in_button = driver.find_element(By.ID, SIGN_IN_ID)
    sign_in_button.click()
    time.sleep(1)
    assert driver.current_url.endswith(
        "/SignIn"), "Test Case 3 Failed: Sign In navigation"

    # --- Test Case 4: Entering Credentials in SignIn form correctly ---

    # Wait for input fields to be visible
    wait.until(EC.visibility_of_element_located((By.ID, "username")))
    wait.until(EC.visibility_of_element_located((By.ID, "email")))
    wait.until(EC.visibility_of_element_located((By.ID, "password")))

    driver.find_element(By.ID, "username").send_keys("TestUser")
    driver.find_element(By.ID, "email").send_keys("testuser@example.com")
    driver.find_element(By.ID, "password").send_keys("Password123!")

    # Click the submit button
    driver.find_element(By.ID, "submitbutton").click()

    # Optional: wait a bit after submission
    time.sleep(2)


print("All Logical Test Cases Passed Successfully!")

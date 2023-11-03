const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000/Aboutme.html';

const expectedFirstProject = "Design Apps/Websites";
const expectedFirstSkillsNotEmpty = ""
const expectedFirstLinksCount = 1;
const expectedSecondProject = "Creating Real Websites"
const expectedSecondSkillsNotEmpty = "";
const expectedSecondLinksCount = 1;
const expectedThirdProject = "Understanding User Needs";
const expectedThirdSkillsNotEmpty = "";
const expectedThirdLinksCount = 1


test('Check Hero Content', async ({ page }) => {
    await page.goto(websiteURL);
    const aboutMe = await page.locator('.hero .hero-text h1');
    const aboutMeText = await page.locator('.hero .hero-text p');
    expect(await aboutMe.isVisible()).toBeTruthy();
    expect(await aboutMeText.isVisible()).toBeTruthy();
});

test('Check First Project', async ({ page }) => {
    await page.goto(websiteURL);
    expect(await page.locator('.content .rectangleMain  h1').nth(0).textContent()).toBe(expectedFirstProject);
});

test('Check First Skills', async ({ page }) => {
    await page.goto(websiteURL);
    expect(await page.locator('.content .rectangleSecond h1').nth(0).textContent()).not.toBe(expectedFirstSkillsNotEmpty);
});

test('Check Links in Skills', async ({ page }) => {
    await page.goto(websiteURL);
    const linksCount = await page.locator('.container .content .rectangleSecond .skills-container-lang .link').count();
    expect(linksCount).toBe(expectedFirstLinksCount);
});

test('Check Second Project', async ({ page }) => {
    await page.goto(websiteURL);
    expect(await page.locator('.contentTwo .rectangleTwo h1').textContent()).toBe(expectedSecondProject);
});

test('Check Second Skills', async ({ page }) => {
    await page.goto(websiteURL);
    expect(await page.locator('.contentTwo .rectangle h1').textContent()).not.toBe(expectedSecondSkillsNotEmpty);
});

test('Check Links in Second Skills Rectangle', async ({ page }) => {
    await page.goto(websiteURL);
    const linksCount = await page.locator('.containerTwo .contentTwo .rectangle .skills-containerTwo a').count();
    expect(linksCount).toBe(expectedSecondLinksCount);
});

test('Check Third Project', async ({ page }) => {
    await page.goto(websiteURL);
    expect(await page.locator('.content .rectangleMain h1').nth(1).textContent()).toBe(expectedThirdProject);
});

test('Check Third Skills', async ({ page }) => {
    await page.goto(websiteURL);
    expect(await page.locator('.content .rectangleSecond h1').nth(1).textContent()).not.toBe(expectedThirdSkillsNotEmpty);
});

test('Check Links in Third Skills Rectangle', async ({ page }) => {
    await page.goto(websiteURL);
    const linksCount = await page.locator('.container .content .rectangleSecond .skills-container a').count();
    expect(linksCount).toBe(expectedThirdLinksCount);
});

test('Check Footer Container', async ({ page }) => {
    await page.goto(websiteURL);
    const footerLinkCount = await page.locator('.footer-link').count();
    expect(footerLinkCount).toBeGreaterThan(0);
});
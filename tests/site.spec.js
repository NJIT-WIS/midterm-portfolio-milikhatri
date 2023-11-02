const { test, expect } = require('@playwright/test');

const websiteURL = 'file:///Users/milikhatri/Documents/IS218/midterm-portfolio-milikhatri/docs/index.html';

const expectedLogoText = "MK";
const expectedMenuItemCount = 3;
const expectedImageCount = 1;
const expectedHeroTitle = 'Mili Khatri';
const expectedHeroSubText = 'Aspiring UX Designer';
const expectedHeroLinksCount = 2
const expectedHeroLinkCount = 1;
const expectedCopyrightText = "© Copyright 2023 | All Rights Reserved | Website by Mili Khatri";


test('Check Logo in NavBar', async ({ page }) => {
  await page.goto(websiteURL);
  const logoText = await page.locator('.logo').textContent();
  expect(logoText).toBe(expectedLogoText);
});

test('Check Navigation Menu in NavBar', async ({ page }) => {
  await page.goto(websiteURL);
  const menuItemCount = await page.locator('.menu .menu-item').count();
  expect(menuItemCount).toBe(expectedMenuItemCount);
});

test('Check Image Content', async ({ page }) => {
  await page.goto(websiteURL);
  const imageCount = await page.locator('.image-content img').count();
  expect(imageCount).toBe(expectedImageCount);
});

test('Check Hero Title', async ({ page }) => {
  await page.goto(websiteURL);
  expect(await page.locator('.hero h1').textContent()).toBe(expectedHeroTitle);
});

test('Check Hero Text', async ({ page }) => {
  await page.goto(websiteURL);
  expect(await page.locator('.hero .sub-text').textContent()).toBe(expectedHeroSubText);
});

test('Check Links in Hero', async ({ page }) => {
  await page.goto(websiteURL);
  const linksCount = await page.locator('.hero .links a').count();
  expect(linksCount).toBe(expectedHeroLinksCount);
});

test('Check Link in Hero Section', async ({ page }) => {
  await page.goto(websiteURL);
  const linkCount = await page.locator('.container .hero .button-filled').count();
  expect(linkCount).toBe(expectedHeroLinkCount);
});

test('Test Email Input and Submit Button', async ({ page }) => {
  await page.goto(websiteURL);
  const emailInput = await page.locator('.emailIn');
  const submitButton = await page.locator('.button');
  expect(await emailInput.isVisible()).toBeTruthy();
  expect(await submitButton.isVisible()).toBeTruthy();
});

test('Check Copyright Notice in Footer', async ({ page }) => {
  await page.goto(websiteURL);
  expect(await page.locator('footer p').textContent()).toBe(expectedCopyrightText);
});


import{test, expect} from '@playwright/test'

test("playwright test ", async({page})=>{
    await page.goto('https://playwright.com')
})
let page;
describe("Github page tests", () => {
beforeEach (async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
}, 100000);

afterEach(() => {  
  page.close();
});

// describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForTimeout(10000);
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');    
  }, 45000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );    
    expect(actual).toEqual("#start-of-content");
  }, 65000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });    
    const actual = await page.$eval(btnSelector, link => link.textContent);    
    expect(actual).toContain("Get started with Team")
  }, 65000); 
}); 

describe("Github page tests new", () => {

  beforeEach (async () => {
    page = await browser.newPage();
    await page.goto("https://github.com");
  }, 100000);
  
  afterEach(() => {  
    page.close();
  });

  test("The h1 header content new'", async () => { 
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForTimeout(10000);
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');    
  }, 45000);

  test("The first link attribute new", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );    
    expect(actual).toEqual("#start-of-content");
  }, 65000);

  test("The page contains Sign in button new", async () => {
    const btnSelector = ".btn-muted-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });    
    const actual = await page.$eval(btnSelector, link => link.textContent);    
    expect(actual).toContain("Start a free enterprise trial")
  }, 65000); 
});

describe("Github page pricing tests", () => {
  beforeEach (async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/pricing");
  }, 100000);
  
  afterEach(() => {  
    page.close();
  });
  
  // describe("Github page tests", () => {
    test("The h1 header content'", async () => {
      const firstLink = await page.$("header div div a");
      await firstLink.click();
      await page.waitForTimeout(10000);
      await page.waitForSelector('h1');
      const title2 = await page.title();
      expect(title2).toEqual('GitHub: Let’s build from here · GitHub');    
    }, 45000);
  
    test("The first link attribute for pricing", async () => {
      const actual = await page.$eval("a", link => link.getAttribute('href') );    
      expect(actual).toEqual("#start-of-content");
    }, 65000);
  
    test("The page contains Sign in button for pricing", async () => {
      const btnSelector = ".btn-muted-mktg.btn-mktg";
        await page.waitForSelector(btnSelector, {
        visible: true,
      });    
      const actual = await page.$eval(btnSelector, link => link.textContent);    
      expect(actual).toContain("Join for free")
    }, 65000); 
  });
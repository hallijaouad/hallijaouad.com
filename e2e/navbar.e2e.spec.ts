import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
    test.beforeEach(async ({ page }) => {
        // Remplacez par l'URL de votre application
        await page.goto('http://localhost:4200/home');
    });

    test('should display the main title with the subtitle', async ({ page }) => {
        const pageTitle = await page.getByRole('heading', { level: 1 });
        const pageSubtitle = await page.getByTestId('page_home_title');

        await expect(pageTitle).toHaveText(/Jaouad HALLI/);
        await expect(pageSubtitle).toHaveText('Ingénieur Développeur');
    });

    test('should display the description paragraphs', async ({ page }) => {
        const paragraphs = await page.locator('.text-gray-600 > p');

        await expect(paragraphs).toHaveCount(3);
        await expect(paragraphs.nth(0)).toContainText('Passionné par le développement web');
        await expect(paragraphs.nth(1)).toContainText('solutions robustes, sécurisées et adaptées');
        await expect(paragraphs.nth(2)).toContainText('assurer la réussite des développeurs');
    });

    test('should have a working "En savoir plus" link', async ({ page }) => {
        const link = await page.getByTestId('page_home_link_plus');

        await expect(link).toHaveText('En savoir plus');
        await link.click();
        await expect(page).toHaveURL(/.*\/about/);
    });

    test('should display the profile image with correct attributes', async ({ page }) => {
        const profileImage = await page.getByTestId('page_home_img_profile');

        await expect(profileImage).toHaveAttribute('src', 'profile/profile.png');
        await expect(profileImage).toHaveAttribute('alt', 'Jaouad HALLI');
    });

    test('should render the layout with correct grid and structure', async ({ page }) => {
        const gridContainer = await page.locator('.grid');
        const mainContent = await gridContainer.locator('.col-span-2');
        const profileContainer = await gridContainer.locator('.relative');

        await expect(gridContainer).toBeVisible();
        await expect(mainContent).toBeVisible();
        await expect(profileContainer).toBeVisible();
    });
});

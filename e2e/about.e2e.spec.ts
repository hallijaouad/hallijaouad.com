import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/about');
    });

    test('should display the main title and subtitle', async ({ page }) => {
        const title = await page.getByTestId('section_title_about_me');
        await expect(title).toHaveText('À propos de moi Découvrez mon parcours et mes compétences');
    });

    test('should display "Mon Parcours" section', async ({ page }) => {
        const parcoursTitle = await page.getByTestId('section_title_parcours');
        await expect(parcoursTitle).toHaveText('Mon Parcours');

        const description1 = await page.getByTestId('section_parcours_description_1');
        const description2 = await page.getByTestId('section_parcours_description_2');
        await expect(description1).toBeVisible();
        await expect(description2).toBeVisible();
    });

    test('should list all development philosophies', async ({ page }) => {
        const philosophieList = await page.getByTestId('section_philosophie_list');
        await expect(philosophieList).toBeVisible();

        const items = philosophieList.locator('li');
        await expect(items).toHaveCount(4);

        await expect(items.nth(0)).toHaveText('• Code propre et maintenable');
        await expect(items.nth(1)).toHaveText('• Tests automatisés');
        await expect(items.nth(2)).toHaveText('• Performance et optimisation');
        await expect(items.nth(3)).toHaveText('• Expérience utilisateur au centre des décisions');
    });

    test('should display technical skills', async ({ page }) => {
        const frontendSkills = await page.getByTestId('competences_list_frontend');
        await expect(frontendSkills).toBeVisible();
        await expect(frontendSkills.locator('[data-test-id^="skill_"]')).toHaveCount(3);

        const backendSkills = await page.getByTestId('competences_list_backend');
        await expect(backendSkills).toBeVisible();
        await expect(backendSkills.locator('[data-test-id^="skill_"]')).toHaveCount(3);

    });
});

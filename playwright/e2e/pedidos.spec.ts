import { test, expect } from '@playwright/test';

/// AAA - Arrange, Act, Assert

test('Deve consultar um pedido aprovado', async ({ page }) => {
  // Arrange - Preparar o teste
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  // Act
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-RCW98N');
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();


  // Assert


 await expect(page.getByText('VLO-RCW98N')).toBeVisible();
  await expect(page.getByText('APROVADO')).toBeVisible();


});

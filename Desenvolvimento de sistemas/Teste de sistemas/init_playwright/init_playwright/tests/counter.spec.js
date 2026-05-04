// import { test, expect } from '@playwright/test'

// test("implementar o contador de click", async ({ page }) => {
//     navegar até a home
//     await page.goto('/')

//     localizar e instanciar o botão em uma variável
//     const counterButton = page.getByRole('button', { name: 'Count is 0' })

//     Verificar se o button está renderizado na tela
//     await expect(counterButton).toBeVisible()

//     Clicar no botão
//     await counterButton.click()

//     testar se o conteúdo do botão mudou de 0 para 1
//     await expect(page.getByRole('button')).toContainText('Count is 1')

//     Clicar 5 vezes mais e testar se mudou para 6 o count
//     await counterButton.click()
//     await counterButton.click()
//     await counterButton.click()
//     await counterButton.click()
//     await counterButton.click()

//     Verificar se o conteúdo do botão está 'Count is 6'
//     await expect(page.getByRole('button')).toContainText('Count is 6')

// })


import { test, expect } from '@playwright/test'

test("implementar vários clicks no contador", async ({ page }) => {
    await page.goto('/')

    const counterButton = page.getByRole('button')

    await expect(counterButton).toBeVisible()
    await expect(counterButton).toHaveText('Count is 0')

    const quantidadeDeClicks = 6

    for (let i = 0; i < quantidadeDeClicks; i++) {
        await counterButton.click()
    }

    await expect(counterButton).toHaveText(`Count is ${quantidadeDeClicks}`)
})
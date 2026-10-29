# 測試端小專案

## Fork 專案
- 到 [hahow-recruit](https://github.com/hahow/hahow-recruit) fork 專案到 [我的專案](https://github.com/jennifershih/hahow-recruit)

## 執行方式（2026 更新）

需要 Node.js 22 以上。

```bash
npm install
npm test            # 跑全部測試（headless）
npm run test:api    # 只跑 SWAPI 的 API 測試
npm run test:ui     # 只跑 GitHub 頁面的 UI 測試
npm run cy:open     # 開啟 Cypress 互動介面
```

2026 年更新內容：Cypress 7 升級到 16（`cypress.config.js`、`cypress/e2e/**/*.cy.js`）；每題都加上真正的斷言，不再只是印出結果；
車輛分頁抓取改成共用的 `cy.swapiAll()` 指令並統一使用 HTTPS；GitHub 已改版，UI 測試改用 `data-testid`、`data-component` 等較穩定的選擇器；加上 GitHub Actions CI。

## 解題思路
### API
#### 第一題：有多少不同種族的人出現在第六部？
- 先打 API：https://swapi.dev/api/films/6/（「第六部」解讀為 SWAPI 的第 6 部電影）
- 用 `Set` 算出不重複的種族數量，並用 `cy.log` 印出來

#### 第二題：請依據電影集數去排序電影名字？
- 先打 API：https://swapi.dev/api/films
- 使用 `Array.prototype.sort()` 做排序
- 使用 `Array.prototype.map()` 把結果存下來
- 將電影的名字印出

#### 第三題：請幫我挑出電影裡所有的車輛，馬力超過１０００的。
- 先打 API：https://swapi.dev/api/vehicles/
- 用自訂指令 `cy.swapiAll('vehicles')` 依 `next` 欄位抓完所有分頁
- 使用 `Array.prototype.filter()` 過濾 `max_atmosphering_speed`，`unknown` 會被排除
- 將車輛的名字印出

### UI

#### 第一題：此專案裡有幾個合作者，並且分別列出他們的名字
- 使用 `cy.get` 取得 Counter 的元素，再使用 `cy.log` 把它印出來
- 使用 `cy.get` 取得每一個合作者的陣列，將陣列轉為字串後，再使用 `cy.log` 把它印出來

#### 第二題：請進入到 frontend.md 並且查看 "Wireframe" 的圖片是否存在
- 使用 `cy.visit` 到 [frontend.md](https://github.com/hahow/hahow-recruit/blob/master/frontend.md) 後，用斷言寫圖片應該存在，如果圖片存在，腳本可以執行通過

#### 第三題：最後一個 commit 的人是誰
- 使用 `cy.get` 取得 commit-author 的元素後，再使用 `cy.log` 把它印出來


## 將專案 commit 到 git，並 push 到專案中
- [我的專案](https://github.com/jennifershih/hahow-recruit)
# 測試端小專案

## Fork專案
- 到 [hahow-recruit](https://github.com/hahow/hahow-recruit) fork專案到 [我的專案](https://github.com/jennifershih/hahow-recruit)

## Cypress安裝
- 在 [Node.js官方網站](https://nodejs.org/en/download/) 直接下載 Node.js 並安裝 
- 執行 ```npm init``` 命令來生成 package.json 文件
- 使用 ```npm install cypress --save-dev``` 命令安裝 Cypress
- 使用 ```npx cypress open``` 命令啟用 Cypress

## 配置 package.json 文件
- 在 package.json 文件裡，新增 scripts，更改如下：
 ```"scripts": {"cypress:open": "cypress open","cypress:run": "cypress run"}```
  
## 解題思路
### API
#### 第一題：有多少不同種族的人出現在第六部？
- 先打 API：https://swapi.dev/api/films/6/
- 將 species 的數量算出，並用 `cy.log` 印出來

#### 第二題：請依據電影集數去排序電影名字？
- 先打 API：https://swapi.dev/api/films
- 使用 `Array.prototype.sort()` 做排序
- 使用 `Array.prototype.map()` 把結果存下來
- 將電影的名字印出

#### 第三題：請幫我挑出電影裡所有的車輛，馬力超過１０００的。
- 先打 API：http://swapi.dev/api/vehicles/
- 使用 `Array.prototype.filter()` 過濾馬力
- 因 API 有 "next": "http://swapi.dev/api/vehicles/?page=2", 因此使用條件判斷是否繼續打API
- 將車輛的名字印出

### UI

#### 第一題：此專案裡有幾個合作者，並且分別列出他們的名字
- 使用 `cy.get` 取得 Counter 的元素，再使用 `cy.log` 把它印出來
- 使用 `cy.get` 取得每一個合作者的陣列，將陣列轉為字串後，再使用 `cy.log` 把它印出來

#### 第二題:請進入到 frontend.md 並且查看 "Wireframe" 的圖片是否存在
- 使用 `cy.visit` 到 frontend.md 後，用斷言寫圖片應該存在，如果圖片存在，腳本可以執行通過

#### 第三題:最後一個 commit 的人是誰
- 使用 `cy.get` 取得 commit-author 的元素後，再使用 `cy.log` 把它印出來

## 執行腳本
- 執行```cypress:open```命令

## 將專案 commit 到 git，並 push 到專案中
- [我的專案](https://github.com/jennifershih/hahow-recruit)
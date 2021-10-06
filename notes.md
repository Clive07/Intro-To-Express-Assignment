We're going to create a simulated API for a Toy Product store. The simulated API will be able to:

get the full list of toys
get the info on a specific toy (via its id)
search on the toys using a couple of parameters
As we don't have any Database yet, our list of Toys is going to be a simple JavaScript array that is within index.js




What we want are the following routes:

|Url |Request  | Response|
--- | --- | ---
|/|Nothing|JSON with all toys|
|/products/:id|Nothing|JSON with the toy with the provided id|
|/search/|Query parameters: age and/or name|JSON with the all the toys that are adequate to the provided age and match the name|

So:

- `/search?age=2` -> Tchoo Tchoo & Teddy bear
- `/search?name=set` -> Lego & Duplo set
- `/search` -> everything
- `/search?age=3&name=set` -> Duplo set

> Hint: [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) and [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) are your friends here
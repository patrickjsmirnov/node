const express = require('express');
const app = express();
// const port = 8080;
const port = 3003;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req: any, res: any) => {
    interface tmp {
        name:string,
        number:number
    }

    let myObj = {number: 10, name: "name"};

    const func = (obj: tmp):string => {
        return obj.name
    }

    const a = func(myObj)
    console.log(a)

    res.json(myObj)
})
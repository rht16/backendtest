
# Backend test

## 'http://localhost:3000/'
expected response: 
Hello World!



## 'http://localhost:8798/add'

    required data in payload : an array of integer

    expected response : {
        sum: sumOfArray,
        msg: "successfully added"
    }

## 'http://localhost:8798/readtxt'

    required data in payload: a txt file

    expected response :{
    "count": 551,
    "msg": "successfully counted!"
}


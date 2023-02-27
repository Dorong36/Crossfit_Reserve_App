const express = require('express');
const app = express();
const path = require('path');

app.listen(8080, function(){
    console.log("listening on 8080")
})


// ajax 위한 코드
app.use(express.json());
var cors = require('cors') // npm install cors 터미널에서 해줘야함 => 완료
app.use(cors());

 


// 특정 폴더 파일 전송 가능하게 하는 코드
app.use(express.static(path.join(__dirname, 'myapp/build')))

// 메인페이지 GET
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "myapp/build/index.html"))
})

// DB 파일 보내주기
app.get('/product', function(req, res){
    res.json({name : 'kim'})
})
// DB 데이터 불러와서 json 형식으로 응답해주기
// 1. 여기에 DB 데이터 뽑아서 보내주는 API 작성
// 2. 리액트는 여기로 GET 요청








// 리액트 라우터 사용하면, url을 통한 접근이 서버에 대한 요청이지 리액트 라우터 요청으로 가지 않아서 오류가 날 수 있음
// 이를 리액트 라우터가 처리할 수 있게 해주려면
app.get('*', function(req, res){
    res.sendFile(path.join(__dirnamem, "myapp/build/index.html"))
})
// 어떤 요청이 들어왔을 때 서버에 없다면 이 파일을 보내주세요~
// 이렇게 하면 리액트 라우터가 처리함
// 최하단 작성 권장
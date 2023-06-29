var mysql = require("mysql");

// 연결할 DB 정보입력
const connection = mysql.createConnection({
    host: 'database-1.ceto724okek1.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '11111111',
    database: 'company',
    port: '3306'
});

// RDS에 접속합니다.
connection.connect(function(err){
    if(err) {
        throw err; //접속에 실패하면 에러를 throw 합니다.
    }
    else {
        // connection.query("create database company", function(err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!
         
        //   });
        
        // connection.query("show databases", function(err,rows,fields) {
        //     console.log(rows); // 결과를 출력합니다
        // })

        // connection.query("use company", function(err,rows,fields) {
        //     console.log(rows); // 결과를 출력합니다
        // })

        // connection.query('create table staff (number int not null auto_increment primary key,department varchar(30) not null,name varchar(15) not null, position varchar(15) not null, birthday int not null, date varchar(10) not null, phoneNumber varchar(15) not null, email varchar(50) not null,address varchar(30) not null);', (error, results, fields) => {
        //     if (error) throw error;
        //     console.log(results);
        //     });

        // connection.query('insert into staff(department,name,position,birthday,date,phoneNumber,email,address) values (\'수출입통관부\',\'강태현\',\'부장\',760224,\'2002-06-07\',\'010-1111-1111\',\'aaaa@naver.com\',\'경기 성남 신흥동\'),(\'항공사업부(영업)\',\'김진수\',\'과장\',820709,\'2007-06-06\',\'010-2222-2222\',\'bbbb@naver.com\',\'경기 성남 단대동\'),(\'수출입통관부\',\'이진아\',\'과장\',830331,\'2008-06-01\',\'010-3333-3333\',\'cccc@daum.net\',\'경기 성남 금광동\'),(\'해상사업부(영업)\',\'김현수\',\'팀장\',810515,\'2010-09-01\',\'010-4444-4444\',\'dddd@naver.com\',\'경기 성남 태평동\'),(\'관리부(총무)\',\'이성희\',\'팀장\',810415,\'2011-06-12\',\'010-5555-5555\',\'eeee@gmail.com\',\'경기 수원 원천동\'),(\'관리부(운영)\',\'이소진\',\'대리\',880601,\'2016-07-03\',\'010-6666-6666\',\'ffff@gmail.com\',\'서울 송파 문정동\'),(\'항공사업부(업무)\',\'박정민\',\'대리\',910103,\'2018-03-01\',\'010-7777-7777\',\'gggg@.naver.com\',\'서울 성동 용답동\'),(\'관리부(운영)\',\'최수연\',\'주임\',921117,\'2019-09-01\',\'010-8888-8888\',\'hhhh@naver.com\',\'경기 용인 죽전동\'),(\'해상사업부(업무)\',\'박진영\',\'주임\',940910,\'2020-09-14\',\'010-9999-9999\',\'iiii@gmail.com\',\'경기 성남 상대원동\'),(\'관리부(총무)\',\'김인아\',\'사원\',950803,\'2021-06-01\',\'010-0000-0000\',\'jjjj@naver.com\',\'경기 성남 도촌동\'),(\'해상사업부(업무)\',\'최민지\',\'사원\',970730,\'2022-06-07\',\'010-1234-1234\',\'kkkk@daum.net\',\'서울 송파 장지동\');',(error,results,fields)=>{
        //     if(error) throw error;
        //     console.log('데이터 입력 성공');
        // });

        // connection.query("drop table staff", function(err,rows,fields) {
        //     console.log(rows); // 결과를 출력합니다
        // })

        connection.query("select * from staff", function(err,rows,fields) {
            console.log(rows); // 결과를 출력합니다
        })
    }
})
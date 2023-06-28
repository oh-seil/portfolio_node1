const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const bodyParser = require('body-parser');
const connection = require('./lib/db')

const app = express();

app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(express.static(`${__dirname}/public`));

// connection.query('create table staff1 (number int not null auto_increment primary key,department varchar(30) not null,name varchar(15) not null,  position varchar(15) not null, birthday int not null, date varchar(10) not null);',(error,results,fields)=>{
//     if(error) throw error;
//     console.log('table생성 완료!');
// });

// connection.query('insert into staff1(department,name,position,birthday,date) values (\'수출입통관부\',\'강태현\',\'부장\',760224,\'2002-06-07\'),(\'항공사업부(영업)\',\'김진수\',\'과장\',820709,\'2007-06-06\'),(\'수출입통관부\',\'이진아\',\'과장\',830331,\'2008-06-01\'),(\'해상사업부(영업)\',\'김현수\',\'팀장\',810515,\'2010-09-01\'),(\'관리부(총무)\',\'이성희\',\'팀장\',810415,\'2011-06-12\'),(\'관리부(운영)\',\'이소진\',\'대리\',880601,\'2016-07-03\'),(\'항공사업부(업무)\',\'박정민\',\'대리\',910103,\'2018-03-01\'),(\'관리부(운영)\',\'최수연\',\'주임\',921117,\'2019-09-01\'),(\'해상사업부(업무)\',\'박진영\',\'주임\',940910,\'2020-09-14\'),(\'관리부(총무)\',\'김인아\',\'사원\',950803,\'2021-06-01\'),(\'해상사업부(업무)\',\'최민지\',\'사원\',970730,\'2022-06-07\');',(error,results,fields)=>{
//     if(error) throw error;
//     console.log('데이터 입력 성공');
// });


app.get('/',(request,response)=>{
    fs.readFile('public/staff.html','utf-8',(error,data)=>{
        connection.query('select * from staff',(error,results,fields)=>{
            if(error) throw error;
            response.send(ejs.render(data,{
                data: results,
            }));
        });
    });
});




app.get('/create',(request,response)=>{
    fs.readFile('public/addstaff.html','utf-8',(error,data)=>{
        if(error) throw error;
        response.send(data);
    });
});

app.post('/create',(request,response)=>{
    const body = request.body;
    connection.query('insert into staff(department,name,position,birthday,date,phoneNumber,email,address) values (?,?,?,?,?,?,?,?)',[body.department,body.name,body.position,body.birthday,body.date,body.phoneNumber,body.email,body.address], ()=>{
            response.redirect('/');
    });
});

app.get('/detail/:id',(request,response)=>{
    fs.readFile('public/detail.html','utf-8',(error,data)=>{
        connection.query('select * from staff where number = ?',[request.params.id],(error,results)=>{
            if(error) throw error;
            response.send(ejs.render(data,{
                data: results[0],
            }));
        });
    });
});

app.get('/modify/:id',(request,response)=>{
    fs.readFile('public/staffupdate.html','utf-8',(error,data)=>{
        connection.query('select * from staff where number = ?',[request.params.id],(error,results)=>{
            if(error) throw error;
            response.send(ejs.render(data,{
                data: results[0],
            }));
        });
    });
});

app.post('/modify/:id',(request,response)=>{
    const body = request.body;
    connection.query('update staff set department = ?, name = ?,position = ?, birthday = ?, date = ?, phoneNumber = ?, email = ?, address = ? where number = ?',[body.department,body.name,body.position,body.birthday,body.date,body.phoneNumber,body.email,body.address,request.params.id],(error,results)=>{
        if(error) throw error;
        response.redirect('/');
    });
});

app.get('/delete/:id',(request,response)=>{
    connection.query('delete from staff where number=?',[request.params.id],()=>{
        response.redirect('/');
    });
});






app.listen(3000,()=>{
    console.log('Server is running port 3000!');
});

// connection.end();
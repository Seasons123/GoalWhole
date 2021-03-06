//走网关用端口8081，直接走后台服务用端口8000
var sever = "3";
var formUrl = {} ;
switch (sever){
    case "0":
        formUrl = {
            "KpiTplDetail": '../data/target.json',
            "QueryNextKpi": '../data/nextKpi.json',
            "TaskKpi": '../data/saveTaskKpiResponse.json',
            "BasicInfo":'../data/obj/BasicInfo.json',
            "SaveGaol":'../data/obj/SaveGaol.json',
            "GoalKpi":'../data/obj/GoalKpi.json'
        };
        break ;
    case  "1": /*年度目标测试数据*/
        formUrl = {
            "KpiTplDetail": 'http://10.15.1.34:8082/fpe-kpi/api/KpiTplDetail?',
            "QueryNextKpi": 'http://10.15.1.34:8082/fpe-kpi/api/Kpi?',
            "TaskKpi": 'http://10.10.65.43:8081/df-peeval/api/TaskKpi?',
            "BasicInfo":'http://10.10.65.43:8081/df-peeval/api/obj?',
            "SaveGaol":'http://10.10.65.43:8081/fpe-obj/api/goal/savegoal?',
            "GoalKpi":'http://10.10.65.43:8081/fpe-goal/api/goalKpi?'
        };
        break ;
    case  "2":   /*中期目标测试数据*/
        formUrl = {
            "KpiConfig": 'http://10.15.1.34:8081/df-pe/api/KpiConfig?',
            "QueryNextKpi": 'http://10.15.1.34:8081/df-pe/api/Kpi?',
            "TaskKpi": 'http://10.15.1.34:8081/df-pe/api/TaskKpi?',
            "BasicInfo":'http://10.15.1.34:8081/df-pe/api/obj?',
            "SaveGaol":'http://10.15.1.34:8081/fpe-obj/api/goal/savegoal?',
            "GoalKpi":'http://10.15.1.34:8081/fpe-goal/api/goalKpi?'
        };
        break ;
    case  "3": /*外网访问*/
        formUrl = {
            "KpiTplDetail": 'https://dev81.yonyougov.top/fpe-kpi/api/KpiTplDetail?',
            "QueryNextKpi": 'https://dev81.yonyougov.top/fpe-kpi/api/Kpi?',
            "TaskKpi": 'https://dev81.yonyougov.top/df-peeval/api/TaskKpi?',
            //"BasicInfo":'https://dev81.yonyougov.top/fpe-obj/api/obj?'
            "BasicInfo":'https://dev81.yonyougov.top/fpe-obj/api/obj', //存在跨微服务间弱引用(保存时不需要带弱引用对象的id和版本号)
            "SaveGaol":'https://dev81.yonyougov.top/fpe-goal/api/goal/savegoal?',
            "GoalKpi":'https://dev81.yonyougov.top/fpe-goal/api/goalKpi?'
        };
        break ;
    case  "4": /*外网访问*/
        formUrl = {
            "KpiTplDetail": 'http://10.10.65.43:8081/fpe-kpi/api/KpiTplDetail?',
            "QueryNextKpi": 'http://10.10.65.43:8081/fpe-kpi/api/Kpi?',
            "TaskKpi": 'http://10.10.65.43:8081/df-peeval/api/TaskKpi?',
            //"BasicInfo":'http://10.10.65.43:8081/fpe-obj/api/obj?'
            "BasicInfo":'http://10.10.65.43:8081/fpe-obj/api/obj', //存在跨微服务间弱引用(保存时不需要带弱引用对象的id和版本号)
            "SaveGaol":'http://10.10.65.43:8081/fpe-goal/api/goal/savegoal?',
            "GoalKpi":'http://10.10.65.43:8081/fpe-goal/api/goalKpi?'
        };

}
const filterAutorefresh = [
    {
        id:1,
        option:'10 sec',
        code:10,
        active:false
    },
    {
        id:2,
        option:'30 sec',
        code:30,
        active:false
    },
    {
        id:3,
        option:'1 min',
        code:60,
        active:true
    },
    {
        id:4,
        option:'10 min',
        code:600,
        active:false
    }
]
const filterOrder = [
    {
        id:1,
        option:'Top Rated',
        code:'top',
        active:false
    },
    {
        id:2,
        option:'Latest',
        code:'latest',
        active:false
    },
    {
        id:3,
        option:'Most Read',
        code:'read',
        active:true
    },
    {
        id:4,
        option:'Popular',
        code:'retweeted',
        active:false
    }
]
const filterLanguages = [
   {
        id:1,
        option:'English',
        code:'en',
        active:true
    },
    {
        id:2,
        option:'German',
        code:'de',
        active:false
    },
    {
        id:3,
        option:'Chinese',
        code:'zh',
        active:false
    },
    {
        id:4,
        code:'it',
        option:'Italian',
        active:false
    }
]
 const FILTERS = [{
        id:1,
        title:'autorefresh',
        info:filterAutorefresh,
        type:'drop-down'
    },{
        id:2,
        title:'order',
        info:filterOrder,
        type:'drop-down'
    },{
        id:3,
        title:'languages',
        info:filterLanguages,
        type:'drop-down'
    },{
        id:4,
        title:'reset',
        info:null,
        type:'reset'
    }]
export default FILTERS